import { useCallback, useEffect, useRef, useState } from "react";

export const DESKTOP_MIN = 821;

export const isDesktop = () =>
  typeof window !== "undefined" &&
  window.matchMedia(`(min-width: ${DESKTOP_MIN}px)`).matches;

/**
 * Window geometry is derived from the viewport rather than hardcoded, so the
 * windows open at rest fill the area beside the icon column on any monitor.
 *
 * Documents (about, experience, projects) get an explicit height so they fill
 * vertically; dialogs are left to hug their content, because a full-height
 * OK/Cancel box looks wrong.
 */
export function computeLayout(hostW, hostH) {
  const iconCol = 100;
  const gap = 12;
  const availW = Math.max(360, hostW - iconCol - 14);
  const availH = Math.max(360, hostH - 14);

  // Capped so prose never outruns a comfortable measure, but wide enough that
  // the two panes stay balanced on a large monitor.
  const aboutW = Math.min(880, Math.max(420, availW * 0.43));
  const expW = Math.max(400, availW - aboutW - gap);

  const round = (o) => {
    const out = {};
    Object.keys(o).forEach((k) => {
      out[k] = Math.round(o[k]);
    });
    return out;
  };

  return {
    about: round({ x: iconCol, y: 0, w: aboutW, h: availH }),
    experience: round({ x: iconCol + aboutW + gap, y: 0, w: expW, h: availH }),
    projects: round({
      x: iconCol + availW * 0.08,
      y: availH * 0.07,
      w: Math.min(660, availW * 0.55),
      h: availH * 0.7,
    }),
    skills: round({
      x: iconCol + availW * 0.24,
      y: availH * 0.12,
      w: Math.min(560, availW * 0.46),
    }),
    contact: round({
      x: iconCol + availW * 0.3,
      y: availH * 0.16,
      w: Math.min(520, availW * 0.42),
    }),
    detail: round({
      x: iconCol + availW * 0.36,
      y: availH * 0.1,
      w: Math.min(580, availW * 0.45),
    }),
  };
}

const INITIAL_OPEN = ["experience", "about"];

export default function useWindows(hostRef) {
  const [open, setOpen] = useState(INITIAL_OPEN);
  const [minimized, setMinimized] = useState({});
  const [activeId, setActiveId] = useState("about");
  const [maximized, setMaximized] = useState({});
  const [geo, setGeo] = useState({});
  const [zIndex, setZIndex] = useState({ about: 102, experience: 101 });

  // Windows the visitor has dragged keep where they were put across resizes.
  const moved = useRef({});
  const zTop = useRef(102);
  const drag = useRef(null);

  const retile = useCallback(() => {
    if (!isDesktop()) {
      setGeo({});
      return;
    }
    const host = hostRef.current;
    if (!host) return;
    const rect = host.getBoundingClientRect();
    const layout = computeLayout(rect.width, rect.height);
    setGeo((prev) => {
      const next = { ...prev };
      Object.keys(layout).forEach((id) => {
        if (!moved.current[id]) next[id] = layout[id];
      });
      return next;
    });
  }, [hostRef]);

  useEffect(() => {
    retile();
    window.addEventListener("resize", retile);
    return () => window.removeEventListener("resize", retile);
  }, [retile]);

  const focus = useCallback((id) => {
    zTop.current += 1;
    const z = zTop.current;
    setZIndex((prev) => ({ ...prev, [id]: z }));
    setActiveId(id);
  }, []);

  const openWindow = useCallback(
    (id) => {
      setOpen((prev) => (prev.includes(id) ? prev : [...prev, id]));
      setMinimized((prev) => ({ ...prev, [id]: false }));
      focus(id);
      if (!isDesktop()) {
        // Give React a frame to unhide the panel before scrolling to it.
        window.requestAnimationFrame(() => {
          const node = document.getElementById(`win-${id}`);
          if (node) node.scrollIntoView({ block: "start", behavior: "smooth" });
        });
      }
    },
    [focus]
  );

  const closeWindow = useCallback((id) => {
    setOpen((prev) => prev.filter((w) => w !== id));
    setMinimized((prev) => ({ ...prev, [id]: false }));
    setMaximized((prev) => ({ ...prev, [id]: false }));
  }, []);

  const toggleMinimize = useCallback(
    (id) => {
      setMinimized((prev) => {
        const next = !prev[id];
        if (!next) focus(id);
        return { ...prev, [id]: next };
      });
    },
    [focus]
  );

  const toggleMaximize = useCallback(
    (id) => {
      if (!isDesktop()) return;
      setMaximized((prev) => ({ ...prev, [id]: !prev[id] }));
      focus(id);
    },
    [focus]
  );

  /** Taskbar click: restore if minimized, minimize if already focused. */
  const taskbarClick = useCallback(
    (id) => {
      if (minimized[id]) toggleMinimize(id);
      else if (activeId === id) toggleMinimize(id);
      else focus(id);
    },
    [minimized, activeId, toggleMinimize, focus]
  );

  const startDrag = useCallback(
    (id, event) => {
      if (!isDesktop()) return;
      if (maximized[id]) return;
      if (event.target.closest("button")) return;
      const frame = event.currentTarget.parentElement;
      const rect = frame.getBoundingClientRect();
      const host = hostRef.current.getBoundingClientRect();
      drag.current = {
        id,
        dx: event.clientX - rect.left,
        dy: event.clientY - rect.top,
        host,
      };
      focus(id);
      event.preventDefault();
    },
    [hostRef, maximized, focus]
  );

  useEffect(() => {
    const move = (event) => {
      const d = drag.current;
      if (!d) return;
      const x = Math.max(
        0,
        Math.min(event.clientX - d.host.left - d.dx, d.host.width - 80)
      );
      const y = Math.max(
        0,
        Math.min(event.clientY - d.host.top - d.dy, d.host.height - 30)
      );
      moved.current[d.id] = true;
      setGeo((prev) => ({
        ...prev,
        [d.id]: { ...prev[d.id], x: Math.round(x), y: Math.round(y) },
      }));
    };
    const up = () => {
      drag.current = null;
    };
    window.addEventListener("mousemove", move);
    window.addEventListener("mouseup", up);
    return () => {
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mouseup", up);
    };
  }, []);

  /** Inline style for a window, or undefined on mobile where CSS takes over. */
  const styleFor = useCallback(
    (id) => {
      if (!isDesktop()) return undefined;
      if (maximized[id]) {
        return {
          left: 0,
          top: 0,
          width: "100%",
          height: "calc(100vh - var(--taskbar-h) - 28px)",
          zIndex: zIndex[id] || 100,
        };
      }
      const g = geo[id];
      if (!g) return undefined;
      return {
        left: g.x,
        top: g.y,
        width: g.w,
        height: g.h || undefined,
        zIndex: zIndex[id] || 100,
      };
    },
    [geo, maximized, zIndex]
  );

  return {
    open,
    minimized,
    activeId,
    openWindow,
    closeWindow,
    toggleMinimize,
    toggleMaximize,
    taskbarClick,
    focus,
    startDrag,
    styleFor,
  };
}

import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Icon from "./Icons";
import { bevelOut, bevelPressed, bevelThin, focusRing } from "../styles/win98";

const Bar = styled.div`
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: var(--taskbar-h);
  background: var(--face);
  border-top: 2px solid var(--white);
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 3px 4px;
  z-index: 9000;
`;

const StartButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  padding: 0 9px 0 5px;
  background: var(--face);
  ${bevelOut};
  font-size: 13px;
  font-weight: 700;
  cursor: default;
  flex: none;

  &[aria-expanded="true"] {
    ${bevelPressed};
  }

  ${focusRing};
`;

const TaskList = styled.div`
  display: flex;
  gap: 3px;
  flex: 1;
  min-width: 0;
  overflow: hidden;

  /* No room for window buttons on a narrow phone; Start still reaches them. */
  @media (max-width: 420px) {
    display: none;
  }
`;

const TaskButton = styled.button`
  display: flex;
  align-items: center;
  gap: 5px;
  height: 30px;
  min-width: 0;
  max-width: 170px;
  flex: 1 1 130px;
  padding: 0 8px;
  background: var(--face);
  ${bevelOut};
  font-size: 12.5px;
  cursor: default;
  overflow: hidden;

  &[aria-pressed="true"] {
    ${bevelPressed};
    font-weight: 700;
  }

  ${focusRing};

  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  @media (max-width: 820px) {
    max-width: none;
  }
`;

const Tray = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  height: 30px;
  padding: 0 8px;
  ${bevelThin};
  font-size: 12.5px;
  font-variant-numeric: tabular-nums;
  flex: none;
`;

function useClock() {
  const [time, setTime] = useState("");
  useEffect(() => {
    const tick = () => {
      const d = new Date();
      let h = d.getHours();
      const m = d.getMinutes();
      const ap = h >= 12 ? "PM" : "AM";
      h = h % 12 || 12;
      setTime(`${h}:${m < 10 ? `0${m}` : m} ${ap}`);
    };
    tick();
    const id = setInterval(tick, 30000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Taskbar({
  open,
  minimized,
  activeId,
  titles,
  icons,
  onTaskClick,
  startOpen,
  onStartToggle,
}) {
  const time = useClock();

  return (
    <Bar>
      <StartButton
        type="button"
        id="startBtn"
        aria-expanded={startOpen}
        aria-controls="startmenu"
        onClick={(e) => {
          e.stopPropagation();
          onStartToggle();
        }}
      >
        <svg width="18" height="18" viewBox="0 0 16 16" aria-hidden="true" focusable="false">
          <rect x="0" y="0" width="7" height="7" fill="#E03A3A" />
          <rect x="9" y="0" width="7" height="7" fill="#3FA34B" />
          <rect x="0" y="9" width="7" height="7" fill="#2B6FD4" />
          <rect x="9" y="9" width="7" height="7" fill="#E8B33C" />
        </svg>
        Start
      </StartButton>

      <TaskList>
        {open.map((id) => (
          <TaskButton
            key={id}
            type="button"
            aria-pressed={!minimized[id] && activeId === id}
            onClick={() => onTaskClick(id)}
          >
            <Icon name={icons[id]} size={16} />
            <span>{titles[id]}</span>
          </TaskButton>
        ))}
      </TaskList>

      <Tray>
        <span>{time}</span>
      </Tray>
    </Bar>
  );
}

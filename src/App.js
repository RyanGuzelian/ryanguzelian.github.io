import React, { useCallback, useRef, useState } from "react";
import styled from "styled-components";

import GlobalStyles from "./components/GlobalStyles";
import DesktopIcons from "./components/DesktopIcons";
import Taskbar from "./components/Taskbar";
import StartMenu from "./components/StartMenu";

import AboutWindow from "./windows/AboutWindow";
import ExperienceWindow from "./windows/ExperienceWindow";
import ProjectsWindow from "./windows/ProjectsWindow";
import ProjectDetailWindow from "./windows/ProjectDetailWindow";
import SkillsWindow from "./windows/SkillsWindow";
import ContactWindow from "./windows/ContactWindow";

import useWindows from "./hooks/useWindows";

const Desktop = styled.div`
  position: relative;
  min-height: calc(100vh - var(--taskbar-h));
  padding: 8px 8px 16px;

  @media (min-width: 821px) {
    padding: 14px;
  }
`;

export const TITLES = {
  about: "About Ryan",
  experience: "Experience",
  projects: "Projects",
  skills: "Skills Properties",
  contact: "Contact",
  detail: "Properties",
};

export const ICONS = {
  about: "user",
  experience: "briefcase",
  projects: "folder",
  skills: "gear",
  contact: "mail",
  detail: "doc",
};

function App() {
  const hostRef = useRef(null);
  const [startOpen, setStartOpen] = useState(false);
  const [project, setProject] = useState(null);

  const {
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
  } = useWindows(hostRef);

  /** Everything a content window needs to be a window. */
  const chrome = useCallback(
    (id, { resizable = true } = {}) => ({
      id,
      active: activeId === id,
      hidden: minimized[id],
      geometry: styleFor(id),
      onFocus: () => focus(id),
      onClose: () => closeWindow(id),
      onMinimize: () => toggleMinimize(id),
      onMaximize: resizable ? () => toggleMaximize(id) : undefined,
      onDragStart: (e) => startDrag(id, e),
    }),
    [
      activeId,
      minimized,
      styleFor,
      focus,
      closeWindow,
      toggleMinimize,
      toggleMaximize,
      startDrag,
    ]
  );

  const isOpen = (id) => open.includes(id);

  const showProject = useCallback(
    (p) => {
      setProject(p);
      openWindow("detail");
    },
    [openWindow]
  );

  const titles = { ...TITLES, detail: project ? `${project.title} Properties` : "Properties" };

  return (
    <>
      <GlobalStyles />

      <Desktop ref={hostRef}>
        <DesktopIcons onOpenWindow={openWindow} />

        {isOpen("about") && <AboutWindow {...chrome("about")} />}
        {isOpen("experience") && <ExperienceWindow {...chrome("experience")} />}
        {isOpen("projects") && (
          <ProjectsWindow {...chrome("projects")} onSelectProject={showProject} />
        )}
        {isOpen("detail") && project && (
          <ProjectDetailWindow
            {...chrome("detail", { resizable: false })}
            project={project}
          />
        )}
        {isOpen("skills") && (
          <SkillsWindow {...chrome("skills", { resizable: false })} />
        )}
        {isOpen("contact") && (
          <ContactWindow {...chrome("contact", { resizable: false })} />
        )}
      </Desktop>

      <StartMenu
        open={startOpen}
        onOpenWindow={openWindow}
        onClose={() => setStartOpen(false)}
      />

      <Taskbar
        open={open}
        minimized={minimized}
        activeId={activeId}
        titles={titles}
        icons={ICONS}
        onTaskClick={taskbarClick}
        startOpen={startOpen}
        onStartToggle={() => setStartOpen((v) => !v)}
      />
    </>
  );
}

export default App;

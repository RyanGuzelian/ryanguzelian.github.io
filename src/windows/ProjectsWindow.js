import React, { useState } from "react";
import Window from "../components/Window";
import Icon from "../components/Icons";
import { FileGrid, FileTile } from "../styles/win98";
import projects from "../data/projects";

/**
 * Projects — a folder window.
 *
 * The body is a white field holding one icon tile per project, the way an
 * Explorer folder in icon view looks. Selecting a tile does the two things a
 * folder does: it writes the item's description into the status bar, and it
 * opens the item (App answers by showing the Properties window).
 */

const DEFAULT_HINT = "Select an item to view its description.";

/** Stacks that mean the project ships on a device rather than in a browser. */
const DEVICE_STACK = ["Arduino", "Kotlin", "React Native", "Android SDK", "Flutter"];

/** Projects that are platforms in their own right rather than single apps. */
const PLATFORM_IDS = ["courtsy"];

/**
 * Tile icon, chosen from the project's own shape:
 * a monitor for anything mobile or embedded, a folder for the platform
 * products, and a document for everything else.
 */
function iconFor(project) {
  if (project.stack.some((tech) => DEVICE_STACK.includes(tech))) return "pc";
  if (PLATFORM_IDS.includes(project.id)) return "folder";
  return "doc";
}

export default function ProjectsWindow({ onSelectProject, ...chrome }) {
  const [hint, setHint] = useState(DEFAULT_HINT);

  const handleSelect = (project) => {
    setHint(project.tagline);
    if (onSelectProject) onSelectProject(project);
  };

  return (
    <Window
      {...chrome}
      title="Projects"
      icon="folder"
      menu
      field
      status={[hint, `${projects.length} object(s)`]}
    >
      <FileGrid>
        {projects.map((project) => (
          <FileTile
            key={project.id}
            type="button"
            onClick={() => handleSelect(project)}
          >
            <Icon name={iconFor(project)} size={32} />
            <span className="label">{project.title}</span>
          </FileTile>
        ))}
      </FileGrid>
    </Window>
  );
}

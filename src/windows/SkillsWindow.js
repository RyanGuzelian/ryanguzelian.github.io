import React, { useRef, useState } from "react";
import Window from "../components/Window";
import {
  TabStrip,
  Tab,
  TabPanel,
  DefList,
  Button,
  ButtonRow,
} from "../styles/win98";
import { capabilities } from "../data/resume";

/**
 * Skills — a properties dialog, not a document: no menu bar, no status bar,
 * four tabs and an OK/Cancel row that both dismiss the window.
 *
 * The tab groups are named by label and looked up in data/resume.js, so the
 * item lists live in exactly one place.
 */

const TABS = [
  { key: "general", label: "General", groups: ["Languages", "Data", "Tools", "Spoken"] },
  { key: "backend", label: "Backend", groups: ["Backend"] },
  { key: "frontend", label: "Frontend", groups: ["Frontend"] },
  { key: "testing", label: "Testing", groups: ["Testing"] },
];

function groupsFor(labels) {
  return labels
    .map((label) => capabilities.find((group) => group.label === label))
    .filter(Boolean);
}

export default function SkillsWindow(props) {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef([]);
  const uid = props.id || "skills";

  const tabId = (key) => `${uid}-tab-${key}`;
  const panelId = (key) => `${uid}-panel-${key}`;

  const move = (next) => {
    const index = (next + TABS.length) % TABS.length;
    setSelected(index);
    const node = tabRefs.current[index];
    if (node) node.focus();
  };

  const onKeyDown = (event) => {
    switch (event.key) {
      case "ArrowRight":
        event.preventDefault();
        move(selected + 1);
        break;
      case "ArrowLeft":
        event.preventDefault();
        move(selected - 1);
        break;
      case "Home":
        event.preventDefault();
        move(0);
        break;
      case "End":
        event.preventDefault();
        move(TABS.length - 1);
        break;
      default:
        break;
    }
  };

  return (
    <Window {...props} title="Skills Properties" icon="gear">
      <TabStrip role="tablist" aria-label="Skill categories" onKeyDown={onKeyDown}>
        {TABS.map((tab, i) => (
          <Tab
            key={tab.key}
            type="button"
            id={tabId(tab.key)}
            role="tab"
            aria-selected={selected === i}
            aria-controls={panelId(tab.key)}
            tabIndex={selected === i ? 0 : -1}
            ref={(node) => {
              tabRefs.current[i] = node;
            }}
            onClick={() => setSelected(i)}
          >
            {tab.label}
          </Tab>
        ))}
      </TabStrip>

      {TABS.map((tab, i) => (
        <TabPanel
          key={tab.key}
          id={panelId(tab.key)}
          role="tabpanel"
          aria-labelledby={tabId(tab.key)}
          tabIndex={0}
          hidden={selected !== i}
        >
          <DefList>
            {groupsFor(tab.groups).map((group) => (
              <React.Fragment key={group.label}>
                <dt>{group.label}</dt>
                <dd>{group.items.join(", ")}</dd>
              </React.Fragment>
            ))}
          </DefList>
        </TabPanel>
      ))}

      <ButtonRow>
        <Button type="button" $default onClick={props.onClose}>
          OK
        </Button>
        <Button type="button" onClick={props.onClose}>
          Cancel
        </Button>
      </ButtonRow>
    </Window>
  );
}

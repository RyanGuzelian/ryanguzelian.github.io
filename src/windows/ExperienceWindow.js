import React, { useState } from "react";
import styled from "styled-components";
import Window from "../components/Window";
import Icon from "../components/Icons";
import { ListView } from "../styles/win98";
import { experience } from "../data/resume";

/**
 * Career history as an Explorer "Details" view.
 *
 * Every row is one entry from `experience`, newest first. Rows behave the way
 * Explorer rows do: click or focus selects, only one at a time, and the
 * selection is echoed in the status bar. Below 820px the "Modified" column is
 * dropped and the date moves into the role cell instead of disappearing.
 */

const MOBILE = "820px";

const HistoryList = styled(ListView)`
  /* The briefcase must not be squeezed by the flex row it sits in. */
  .nm svg {
    flex: none;
  }

  /* Shown only once the Modified column is gone. */
  .sub-date {
    display: none;
  }

  @media (max-width: ${MOBILE}) {
    th.yr,
    td.yr {
      display: none;
    }

    .sub-date {
      display: block;
    }
  }
`;

export default function ExperienceWindow(props) {
  const [selectedId, setSelectedId] = useState(null);

  const selected = experience.find((entry) => entry.id === selectedId);

  const status = [
    selected
      ? `${selected.org} — ${selected.role} (${selected.range})`
      : `${experience.length} object(s)`,
    "Local disk",
  ];

  const handleKeyDown = (event, id) => {
    if (event.key === "Enter" || event.key === " " || event.key === "Spacebar") {
      event.preventDefault();
      setSelectedId(id);
    }
  };

  return (
    <Window {...props} title="Experience" icon="briefcase" menu field status={status}>
      <HistoryList>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Role</th>
            <th scope="col" className="yr">
              Modified
            </th>
          </tr>
        </thead>
        <tbody>
          {experience.map((entry) => (
            <tr
              key={entry.id}
              tabIndex={0}
              aria-selected={selectedId === entry.id ? "true" : "false"}
              onClick={() => setSelectedId(entry.id)}
              onFocus={() => setSelectedId(entry.id)}
              onKeyDown={(event) => handleKeyDown(event, entry.id)}
            >
              <td>
                <span className="nm">
                  <Icon name="briefcase" size={16} />
                  {entry.org}
                </span>
              </td>
              <td>
                {entry.role}
                <span className="sub">{entry.summary}</span>
                <span className="sub sub-date">{entry.range}</span>
              </td>
              <td className="yr">{entry.range}</td>
            </tr>
          ))}
        </tbody>
      </HistoryList>
    </Window>
  );
}

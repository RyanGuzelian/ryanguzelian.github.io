# Ryan Guzelian — Portfolio

My personal site, built as a Windows 98 desktop: icons down the left, windows tiled across the
rest, a taskbar with a Start menu and a live clock. React 18 and styled-components, deployed to
GitHub Pages at [ryanguzelian.com](https://ryanguzelian.com).

The design rationale, tokens, and the rules that keep it from turning into a gimmick live in
[DESIGN.md](./DESIGN.md). Read that before changing how anything looks.

## Getting started

```bash
npm install
npm start      # dev server on http://localhost:3000
npm run build  # production build into ./build
```

Node 18 is what CI uses.

## Project structure

```
src/
  App.js                    the desktop: window registry and wiring
  hooks/
    useWindows.js           open/minimize/z-order/geometry, dragging, tiling maths
  components/
    Window.js               window chrome — title bar, menu bar, body, status bar
    DesktopIcons.js         the left-hand icon column
    Taskbar.js              Start button, window buttons, clock
    StartMenu.js            the Start menu
    Icons.js                blocky 32px-grid SVG icon set
    GlobalStyles.js         tokens and reset
  styles/
    win98.js                the bevel system and every widget built on it
  windows/
    AboutWindow.js          prose and education
    ExperienceWindow.js     Explorer "Details" list of roles
    ProjectsWindow.js       folder of project icons
    ProjectDetailWindow.js  a project's Properties dialog
    SkillsWindow.js         tabbed properties dialog
    ContactWindow.js        contact dialog
  data/
    resume.js               experience, education, capabilities, contact, bio
    projects.js             projects
  images/                   project screenshots
public/
  Ryan Guzelian Resume.pdf  linked from the Resume.pdf desktop icon
```

## How a window works

Content components never manage position or z-order. `App.js` builds a `chrome(id)` prop bag —
active state, geometry, and the close/minimize/maximize/drag callbacks — and spreads it into the
window component, which passes it straight to `<Window>` and adds its own title, icon, and status
cells:

```jsx
export default function AboutWindow(props) {
  return (
    <Window {...props} title="About Ryan" icon="user" menu status={["Ready", "Montreal, QC"]}>
      ...content...
    </Window>
  );
}
```

To add a window: create the component in `src/windows/`, then register its title and icon in
`TITLES` / `ICONS` in `App.js`, render it behind an `isOpen(...)` guard, and add an entry to
`DesktopIcons.js` and/or `StartMenu.js`.

## Editing content

Almost everything is data, not markup.

- **Experience** — add an entry to the `experience` array in `src/data/resume.js`. Newest first.
  `figures` is optional.
- **Projects** — add an entry to `src/data/projects.js`. Import the screenshot at the top of the
  file, or set `image: null` and the Properties dialog simply omits the screenshot well.
- **Skills** — edit the `capabilities` array in `resume.js`. `SkillsWindow` looks groups up by
  label, so renaming a label means updating the tab map in that component.
- **Bio, education, contact** — the `about`, `education`, and `contact` exports in `resume.js`.
- **Resume PDF** — replace `public/Ryan Guzelian Resume.pdf`, keeping the filename.

## Styling rules

1. Compose the widgets in `src/styles/win98.js`. Never hand-roll a border — build from the
   `bevelOut` / `bevelIn` / `bevelThin` mixins.
2. Every colour comes from a CSS custom property. No raw hex in component files.
3. The chrome is the pastiche; the content is not. Plain, readable writing inside the windows.

## Mobile

Below 820px the desktop metaphor is dropped rather than faked: windows stop being positioned and
stack as full-width panels, dragging is disabled, menu bars are hidden, and title bar buttons grow
from the authentic 16px to a usable tap target. Below 420px the taskbar's window buttons drop and
Start becomes the way around.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs `npm ci`, `npm run build`,
and publishes `./build` to GitHub Pages. `CNAME` holds the custom domain.

Because the workflow uses `npm ci`, `package-lock.json` must stay in sync with `package.json` — run
`npm install` after changing dependencies and commit the lockfile.

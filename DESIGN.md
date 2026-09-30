# ryanguzelian.com — design notes

The portfolio is a Windows 98 desktop. Icons down the left, windows tiled across the rest,
a taskbar pinned to the bottom with a Start menu and a live clock.

It is a period pastiche, and it is also a reasonable fit for the subject: Ryan works on
enterprise security software at Genetec and previously Dormakaba — companies whose products
have lived in the Windows world for decades.

## The one rule that keeps it from being a gimmick

**The chrome is the joke; the content is not.** Bevels, title bars, status bars, and
OK/Cancel buttons are period-accurate. The words inside them are written plainly and meant to
be read by someone deciding whether to interview him. No fake error dialogs, no `C:\>`
affectations, no Clippy.

If a recruiter opens the page and clicks nothing, they still read who he is and where he has
worked — About and Experience are open at rest for exactly that reason.

## Tokens

Defined in `src/components/GlobalStyles.js`. A single committed theme; there is no dark mode.

| Token | Hex | Role |
|---|---|---|
| `--desktop` | `#008080` | The teal. |
| `--face` | `#C0C0C0` | Window and control face. |
| `--face-light` | `#DFDFDF` | Inner bevel highlight. |
| `--shadow` | `#808080` | Inner bevel shadow, muted text. |
| `--dark` | `#000000` | Outer bevel shadow, text. |
| `--white` | `#FFFFFF` | Outer bevel highlight. |
| `--title-a1` / `--title-a2` | `#000080` → `#1084D0` | Active title bar gradient. |
| `--title-i1` / `--title-i2` | `#808080` → `#B5B5B5` | Inactive title bar gradient. |
| `--sel` | `#000080` | Selection highlight. |
| `--field` | `#FFFFFF` | Sunken white wells — lists, folders. |
| `--link` | `#0000CC` | Hyperlink blue. |

Type is `Tahoma, "MS Sans Serif", Verdana, Geneva, sans-serif` throughout. There is no webfont:
Tahoma is the correct face and it is already on every Windows machine, so loading one would
cost a request to look worse.

## The bevel system

`src/styles/win98.js` is the whole visual language, and content components must compose from
it rather than hand-rolling borders:

- `bevelOut` — raised. White top-left, black bottom-right, with the inner highlight pair.
- `bevelIn` — sunken. The same relationship inverted. Fields, wells, list panes.
- `bevelThin` — the single-pixel version. Status cells, group boxes.
- `bevelPressed` — the pressed state of a raised control.

Widgets built on top: `Button`, `GroupBox`, `DefList`, `ListView`, `FileGrid`, `FileTile`,
`Tab`/`TabPanel`, `Field`, `Prose`, `Heading`.

**Every colour comes from a custom property.** No raw hex in component files.

## Architecture

```
src/
  App.js                    desktop, window registry, wiring
  hooks/useWindows.js       open/minimize/z-order/geometry, drag, tiling maths
  components/
    Window.js               chrome: title bar, menu bar, body, status bar
    DesktopIcons.js         left-hand icon column
    Taskbar.js              Start button, window buttons, clock
    StartMenu.js            the menu
    Icons.js                blocky 32px-grid SVG icon set
  styles/win98.js           bevels and widgets
  windows/*.js              content only — each wraps <Window>
  data/resume.js            experience, education, capabilities, contact
  data/projects.js          projects
```

Content windows never manage position or z-order. `App.js` builds a `chrome(id)` prop bag and
spreads it into the window component, which spreads it onto `<Window>` and adds its own title,
icon, and status cells. That separation is what makes the windows independently editable.

## Layout

Window geometry is **derived from the viewport**, not hardcoded — see `computeLayout` in
`useWindows.js`. About and Experience tile side by side and fill the full height down to the
taskbar, so they scale with the monitor instead of floating as two small boxes in a sea of
teal.

- Documents (about, experience, projects) get an explicit height and fill vertically.
- Dialogs (skills, contact, project properties) hug their content — a full-height OK/Cancel
  box looks wrong.
- About is capped at 880px so prose never outruns a comfortable measure.
- A window the visitor drags is marked as moved and keeps its position across resizes.

## Mobile

This is where the desktop metaphor usually dies, so it is handled deliberately rather than
left to chance. Below **820px**:

- Windows stop being absolutely positioned and stack as full-width panels in the document
  flow. `Window.js` enforces this with `!important` so desktop inline geometry can never leak
  onto a phone.
- Dragging is disabled outright.
- Menu bars are hidden — decorative on desktop, pure noise on a phone.
- Title bar buttons grow from the authentic 16px to 30×28, because 16px is an unusable tap
  target.
- Desktop icons become a grid across the top instead of a left column.
- Below 420px the taskbar's window buttons drop; Start still reaches everything.

## Accessibility

The period look is not an excuse. Windows are `<section>`s labelled by their title, title bar
controls are real buttons with `aria-label`, the Skills dialog is a proper tablist with arrow
key support, Explorer rows are focusable and selectable by keyboard, and focus is always
visible via the dotted `focusRing` — which is, conveniently, exactly what Windows drew.

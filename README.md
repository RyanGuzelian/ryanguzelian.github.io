# Ryan Guzelian Portfolio

A modern, light-themed portfolio website built with React.js to showcase my projects and skills.

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Adding New Projects](#adding-new-projects)
- [Customization](#customization)
- [Technologies Used](#technologies-used)
- [Deployment](#deployment)

## Features

- Modern light theme with clean design
- Responsive layout that works well on all devices
- Interactive project showcases with filtering capabilities
- Typewriter effect for dynamic text presentation
- Project details view with technical information
- About page with skills, education, and experience sections
- Contact form for reaching out
- Well-structured and documented code

## Project Structure

The project follows a clear component-based structure:

```
src/
  ├── components/       # Reusable UI components
  │   ├── Footer.js     # Site-wide footer
  │   ├── GlobalStyles.js # Global styling variables and resets
  │   ├── Navigation.js # Navigation bar
  │   ├── Presentation.js # Typewriter presentation component
  │   ├── ProjectCard.js # Individual project card
  │   └── ProjectDetail.js # Detailed project view
  ├── data/
  │   └── projects.js   # Project data store
  ├── images/           # Images used in the project
  ├── pages/            # Main page components
  │   ├── About.js      # About page
  │   ├── Contact.js    # Contact page
  │   ├── Home.js       # Homepage
  │   └── Projects.js   # Projects listing page
  ├── App.js            # Main application component
  ├── index.js          # Application entry point
  └── index.css         # Base styles
```

## Getting Started

To run this project locally:

1. Clone the repository
   ```
   git clone https://github.com/ryanguzelian/ryanguzelian.github.io.git
   cd ryanguzelian.github.io
   ```

2. Install dependencies
   ```
   npm install
   ```

3. Start the development server
   ```
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser

## Adding New Projects

Projects are stored in `src/data/projects.js`. To add a new project:

1. Add your project image to the `src/images/` directory
2. Import the image in `src/data/projects.js`
3. Add a new project object to the `projects` array with the following structure:

```javascript
{
  id: "unique-identifier",              // Unique ID for the project
  title: "Project Title",               // Project title
  shortDescription: "Brief overview",   // Short description for card view
  fullDescription: "Detailed info...",  // Full description for detail view
  image: ImportedImage,                 // Imported image reference
  status: "completed" | "in-progress",  // Project status
  tags: ["tag1", "tag2", "tag3"],       // Technology tags
  links: [                              // Project links (optional)
    { type: "github", url: "https://github.com/..." },
    { type: "live", url: "https://..." }
  ],
  technicalDetails: "Implementation...", // Technical details (optional)
  challenges: "Challenges faced...",     // Challenges & solutions (optional)
  featured: true | false                 // Whether to highlight in featured section
}
```

## Customization

### Theme Colors

The main theme colors and styling variables are defined in `src/components/GlobalStyles.js`. You can modify these variables to change the overall look of the site.

### Fonts

Font families are imported in `App.js` using Google Fonts. You can change them by modifying the import URL and updating the font family variables in `GlobalStyles.js`.

### Personal Information

Update your personal information in:
- `src/pages/About.js` for bio, skills, education, and experience
- `src/pages/Contact.js` for contact details and social media links
- `src/pages/Home.js` for the homepage content

## Technologies Used

- React.js
- Styled Components
- React Bootstrap
- Font Awesome (for icons)
- Typewriter Effect

## Deployment

This project is set up for deployment to GitHub Pages:

1. Ensure the `homepage` field in `package.json` is correctly set to your GitHub Pages URL
2. Run the deployment script:
   ```
   npm run deploy
   ```

For other deployment options, see the [Create React App deployment documentation](https://facebook.github.io/create-react-app/docs/deployment).

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

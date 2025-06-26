/**
 * Projects Data File
 * 
 * This file contains all the project data for the portfolio.
 * To add a new project:
 * 1. Import the project image
 * 2. Add a new object to the projects array with the following structure:
 *    {
 *      id: "unique-identifier",
 *      title: "Project Title",
 *      shortDescription: "Brief description (displayed in cards)",
 *      fullDescription: "Detailed description (displayed in project details)",
 *      image: ImportedImage,
 *      status: "completed" OR "in-progress",
 *      tags: ["tag1", "tag2", "tag3"],
 *      links: [
 *        { type: "github", url: "https://github.com/..." },
 *        { type: "live", url: "https://..." }
 *      ],
 *      technicalDetails: "Technical implementation details...",
 *      challenges: "Challenges faced and how they were solved...",
 *      featured: true OR false (whether to highlight in featured projects)
 *    }
 */

// Import project images
import Asteroids from "../images/asteroids.jpg";
import Maalem from "../images/maalem.jpg";
import Organik from "../images/organik.jpg";
import Hired from "../images/hired.jpg";
import Collatz from "../images/collatz.jpg";
import Blackout from "../images/Blackout.gif";

// Project data array
const projects = [
  {
    id: "collatz",
    title: "Collatz Conjecture Solution",
    shortDescription: "Research project attempting to solve the Collatz Conjecture using pattern recognition algorithms.",
    fullDescription: "While being more of an analysis/research type of project, I am attempting to solve the Collatz Conjecture by using algorithms to find patterns that appear in the recursion process. This has allowed me to deepen my understanding of pattern recognition methods.",
    image: Collatz,
    status: "in-progress",
    tags: ["Data Analysis", "Pattern Recognition", "Algorithms", "Research"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/collatz-conjecture" }
    ],
    technicalDetails: "Implementing various algorithms to identify patterns in the Collatz sequences, using data visualization techniques to analyze results.",
    challenges: "Working with potentially infinite sequences and optimizing computation time for large numbers.",
    featured: true
  },
  {
    id: "blackout",
    title: "Blackout Launcher",
    shortDescription: "Android launcher designed to reduce smartphone addiction by creating a minimalist UI experience.",
    fullDescription: "This android launcher aims to reduce people's addiction to smartphones by stripping away dopamine-inducing parts of the UI, while still providing a solid user experience.",
    image: Blackout,
    status: "in-progress",
    tags: ["Android", "UI/UX Design", "Digital Wellbeing"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/blackout-launcher" }
    ],
    technicalDetails: "Built using Kotlin and the Android SDK, with a focus on customizable UI elements and notification management.",
    challenges: "Balancing minimalist design with necessary functionality to ensure the launcher remains practical for daily use.",
    featured: true
  },
  {
    id: "hired",
    title: "Hired",
    shortDescription: "Full-stack job search platform connecting employers and job seekers.",
    fullDescription: "This platform allows job seekers and employers to connect with each other, creating a seamless experience for all users. It utilizes React.JS, Express.JS, Node.JS, as well as MongoDB for the database. Not only was the work completed on this project full stack, it allowed me to act as a scrum master, where I learned how to further act as a leader.",
    image: Hired,
    status: "completed",
    tags: ["React.JS", "Express.JS", "MongoDB", "Full-Stack"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/hired" },
      { type: "live", url: "https://hired-platform.herokuapp.com/" }
    ],
    technicalDetails: "RESTful API backend with Express.js, MongoDB database for user profiles and job listings, React.js frontend with responsive design.",
    challenges: "Implementing real-time notifications for job applications and managing user authentication securely.",
    featured: true
  },
  {
    id: "maalem",
    title: "Maalem",
    shortDescription: "Peer-to-peer student help web application featuring real-time messaging.",
    fullDescription: "This peer-to-peer student help web app was made using React.JS, Node.JS, while utilizing the benefits of Docker, as well as the power of websockets for a custom messaging system that was reliant on the Google sign-In API.",
    image: Maalem,
    status: "completed",
    tags: ["React.JS", "Node.JS", "Docker", "WebSockets"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/maalem" },
      { type: "live", url: "https://maalem.herokuapp.com/" }
    ],
    technicalDetails: "WebSocket implementation for real-time chat functionality, containerized with Docker for consistent deployment, Google OAuth integration for authentication.",
    challenges: "Managing real-time connections and ensuring message delivery even with unreliable network conditions.",
    featured: false
  },
  {
    id: "asteroids",
    title: "Asteroids",
    shortDescription: "Recreation of the classic Asteroids game using Java and Slick2D library.",
    fullDescription: "This recreation of the retro asteroids game was an introduction to game development that was done in Java, with the Slick2D library. While the library itself is outdated, it allowed for a deeper understanding of OOP concepts as well as the render/display cycle encountered in gaming environments, and how to control it.",
    image: Asteroids,
    status: "completed",
    tags: ["Java", "OOP", "Game Development", "Slick2D"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/asteroids-game" }
    ],
    technicalDetails: "Implemented game physics including collision detection, particle effects for explosions, and game state management.",
    challenges: "Optimizing rendering performance while maintaining smooth gameplay and handling multiple moving objects.",
    featured: false
  },
  {
    id: "organik",
    title: "Organik",
    shortDescription: "Grocery store website with modern UI design and e-commerce functionality.",
    fullDescription: "This grocery store webpage was made using basic web development technologies, such as JavaScript, PHP, HTML, and CSS. While not necessarily a 'stack', it allowed for a deeper understanding of web development methodologies, as well as a solid foundation of UI design.",
    image: Organik,
    status: "completed",
    tags: ["JavaScript", "PHP", "HTML/CSS", "UI Design"],
    links: [
      { type: "github", url: "https://github.com/ryanguzelian/organik" },
      { type: "live", url: "https://organik-store.000webhostapp.com/" }
    ],
    technicalDetails: "PHP backend for product management and user sessions, responsive design using CSS Grid and Flexbox.",
    challenges: "Creating a visually appealing interface while ensuring compatibility across different browsers and screen sizes.",
    featured: false
  }
];

export default projects;

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
import Condo from "../images/Condo.png";
import Medca from "../images/medca.png";
import Bargain from "../images/bargain.jpg";
import Attendance from "../images/attendance.png";  

// Project data array
const projects = [
  
  {
    id: "medca",
    title: "MedcaConnect",
    shortDescription: "Instant Personalized Support Circles",
    fullDescription: "Medca Connect is here to make life a little easier for people who feel alone due to illness, mental health issues, or addiction. The platform is built with React Native, Express.JS, Node.JS, as well as MongoDB for the database. Not only was the work completed on this project full-stack, it gave me exposure to the world of mobile development, as well as the importance of security in applications.",
    image: Medca,
    status: "completed",
    tags: ["Mobile Development", "React Native", "Node.JS", "Express.JS"],
    technicalDetails: "RESTful API backend with Express.JS, mobile application build with React Native, MongoDB database for storage. JWT for secure user authentication.",
    challenges: "Implementation of video calling and messaging through Agora libraries.",
    featured: true
  },
  {
    id: "condo",
    title: "Condo Management Web Application",
    shortDescription: "Residential estate management project",
    fullDescription: "This project allows landlords to manage their tenants and keep track of their expenses/income.",
    image: Condo,
    status: "completed",
    tags: ["Web Development", "Next.JS", "Database Design", "API development"],
    links: [
      { type: "github", url: "https://github.com/CONCORDIA-SOEN-390/Condo-Mgmt-Web-App"},
      { type: "live", url: "https://condo-mgmt-web-app.vercel.app/" }
    ],
    technicalDetails: "RESTful API backend with Next.JS, Supabase database for data storage.",
    featured: true
  },
  {
    id: "collatz",
    title: "Collatz Conjecture Solution",
    shortDescription: "Research project attempting to solve the Collatz Conjecture using pattern recognition algorithms.",
    fullDescription: "While being more of an analysis/research type of project, I am attempting to solve the Collatz Conjecture by using algorithms to find patterns that appear in the recursion process. This has allowed me to deepen my understanding of pattern recognition methods.",
    image: Collatz,
    status: "in-progress",
    tags: ["Data Analysis", "Pattern Recognition", "Algorithms", "Research"],
    // links: [
    //   { type: "github", url: "https://github.com/ryanguzelian/collatz-conjecture" }
    // ],
    technicalDetails: "Implementing various algorithms to identify patterns in the Collatz sequences, using data visualization techniques to analyze results.",
    challenges: "Working with potentially infinite sequences and optimizing computation time for large numbers.",
    featured: false
  },
  {
    id: "attendance",
    title: "Attendance Management System",
    shortDescription: "Complete embedded system solution to manage attendance to exams.",
    fullDescription: "The AMS was made as a way to render the Concordia campus \"smart\". Through its intuitive design, students are able to simply tap their ID cards to the reader to log their attendance to an exam, saving over 10 minutes per exam and thus potentially minimizing administrative costs.",
    image: Attendance,
    status: "completed",
    tags: ["Arduino", "AWS EC2", "React.JS", "Express.JS", "C++"],
    links: [
      { type: "live", url: "https://soen-422-project.vercel.app/" },
    ],
    technicalDetails: "Frontend built with React.JS and hosted on Vercel, backend RESTful API with Express.JS, hosted on AWS EC2. Supabase database for data storage. Arduino board using code written in C++. Utilizes MiFare technology for attendance tracking.",
    challenges: "Tried implementing Agora's voice calling libraries which have intergation with OpenAI's APIs, but ended up using RTC connections instead.",
    featured: true
  },
  {
    id: "bargain",
    title: "Bargain Bot",
    shortDescription: "AI-powered agent for negotiating ISP prices.",
    fullDescription: "Bargain Bot is an AI-powered agent designed to negotiate internet service provider (ISP) prices on behalf of users. It uses OpenAI's realtime API to negotiate deals on behalf of the user.",
    image: Bargain,
    status: "completed",
    tags: ["AI", "React.JS", "Node.JS", "Express.JS"],
    links: [
      { type: "github", url: "https://github.com/McHacksNegotiator/NegotiationApp" },
    ],
    technicalDetails: "RESTful API backend with Express.JS, web application build with React. Utilizes OpenAI realtime LLM APIs for time-sensitive user voice data processing.",
    challenges: "Tried implementing Agora's voice calling libraries which have intergation with OpenAI's APIs, but ended up using RTC connections instead.",
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
    // links: [
    //   { type: "github", url: "https://github.com/ryanguzelian/blackout-launcher" }
    // ],
    technicalDetails: "Built using Kotlin and the Android SDK, with a focus on customizable UI elements and notification management.",
    challenges: "Balancing minimalist design with necessary functionality to ensure the launcher remains practical for daily use.",
    featured: false
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
      { type: "github", url: "https://github.com/RyanGuzelian/Alpha_team_soen341project2023" },
      // { type: "live", url: "https://hired-platform.herokuapp.com/" }
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
      { type: "github", url: "https://github.com/RyanGuzelian/Maalem" },
    ],
    technicalDetails: "WebSocket implementation for real-time chat functionality, containerized with Docker for consistent deployment, Google OAuth integration for authentication.",
    challenges: "Managing real-time connections and ensuring message delivery even with unreliable network conditions.",
    featured: true
  },
  {
    id: "asteroids",
    title: "Asteroids",
    shortDescription: "Recreation of the classic Asteroids game using Java and Slick2D library.",
    fullDescription: "This recreation of the retro asteroids game was an introduction to game development that was done in Java, with the Slick2D library. While the library itself is outdated, it allowed for a deeper understanding of OOP concepts as well as the render/display cycle encountered in gaming environments, and how to control it.",
    image: Asteroids,
    status: "completed",
    tags: ["Java", "OOP", "Game Development", "Slick2D"],
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
    technicalDetails: "PHP backend for product management and user sessions, responsive design using CSS Grid and Flexbox.",
    challenges: "Creating a visually appealing interface while ensuring compatibility across different browsers and screen sizes.",
    featured: false
  }
];

export default projects;

import Asteroids from '../images/asteroids.jpg';
import Maalem from '../images/maalem.jpg';
import Organik from '../images/organik.jpg';
import Hired from '../images/hired.jpg';
import Collatz from '../images/collatz.jpg';
import Blackout from '../images/blackout-preview.png';
import Condo from '../images/Condo.png';
import Medca from '../images/medca.png';
import Bargain from '../images/bargain.jpg';
import Attendance from '../images/attendance.png';

// Shared by the homepage, searchable archive and directly linked case studies.
const projects = [
  {
    id: 'courtsy', title: 'Courtsy',
    shortDescription: 'Booking and CRM for sports facilities. An independent product, from design to deployment.',
    fullDescription: 'I independently designed, built, and deployed Courtsy, a multi-tenant booking and CRM platform for sports complexes.',
    status: 'completed', tags: ['React', '.NET', 'PostgreSQL', 'Docker'], featured: true,
    links: [{ type: 'live', url: 'https://www.courtsy.ca', label: 'Visit Courtsy' }],
    problem: 'Sports complexes need to manage bookings and customer relationships. Serving multiple facilities from one platform also requires keeping each tenant’s resources separate.',
    contribution: 'I owned the product from design through implementation and deployment, building the React interface, .NET backend, and PostgreSQL data layer.',
    technicalDetails: 'The platform uses React, .NET, PostgreSQL, and Docker. I designed custom token-based authentication with role-based access control, and a resource-ownership resolver that prevents insecure direct object references across tenant boundaries.',
    outcome: 'A deployed booking and CRM product, with authorization designed around both user roles and tenant ownership.',
  },
  {
    id: 'medca', title: 'MedcaConnect', image: Medca, featured: true, status: 'completed',
    shortDescription: 'A mobile platform for support circles, with video calls and live messaging.',
    fullDescription: 'MedcaConnect helps people experiencing illness, mental health issues, or addiction connect with a support circle.',
    tags: ['React Native', 'Node.js', 'Express.js', 'MongoDB'],
    contribution: 'I worked across the mobile application and backend, integrating video calling and live messaging through Agora.',
    technicalDetails: 'React Native provides the mobile interface, with an Express.js API and MongoDB for storage. I implemented JWT authentication and containerized services with Docker.',
    outcome: 'Hands-on experience delivering a mobile interface, real-time communication, and authenticated backend services together.',
  },
  {
    id: 'attendance', title: 'Attendance Management System', image: Attendance, featured: true, status: 'completed',
    shortDescription: 'An exam attendance system connecting a physical card reader to a web application.',
    fullDescription: 'Students tap their ID card on a reader to record their attendance at an exam.',
    tags: ['Arduino', 'C++', 'React', 'Express.js', 'AWS EC2'],
    links: [{ type: 'live', url: 'https://soen-422-project.vercel.app/' }],
    contribution: 'I built a hardware board using Arduino libraries and a MiFare reader, along with a companion web application.',
    technicalDetails: 'C++ runs on the Arduino hardware. The React interface communicates with an Express.js API, deployed on AWS EC2, with Supabase for data storage.',
    outcome: 'A project that connected embedded hardware, a web interface, and a remotely hosted backend.',
  },
  {
    id: 'condo', title: 'Condo Management Web Application', image: Condo, featured: false, status: 'completed',
    shortDescription: 'A web application for managing tenants, residential properties, and expenses.',
    fullDescription: 'A residential property management project that lets landlords manage tenants and track income and expenses.',
    tags: ['Next.js', 'Supabase', 'Database design', 'API development'],
    links: [{ type: 'github', url: 'https://github.com/CONCORDIA-SOEN-390/Condo-Mgmt-Web-App' }, { type: 'live', url: 'https://condo-mgmt-web-app.vercel.app/' }],
    technicalDetails: 'A Next.js application with API endpoints and Supabase for data storage.',
  },
  {
    id: 'bargain', title: 'Bargain Bot', image: Bargain, featured: false, status: 'completed',
    shortDescription: 'A voice agent exploring how to negotiate internet service prices.',
    fullDescription: 'Bargain Bot is a project exploring voice-based negotiation of internet service provider prices on a user’s behalf.',
    tags: ['AI', 'React', 'Node.js', 'Express.js'],
    links: [{ type: 'github', url: 'https://github.com/McHacksNegotiator/NegotiationApp' }],
    technicalDetails: 'A React interface and Express.js backend, using the OpenAI realtime API for voice processing.',
  },
  {
    id: 'hired', title: 'Hired', image: Hired, featured: false, status: 'completed',
    shortDescription: 'A full-stack job search platform connecting employers and applicants.',
    fullDescription: 'Hired brings job seekers and employers together in a React application backed by Express.js and MongoDB.',
    tags: ['React', 'Express.js', 'MongoDB', 'Full-stack'],
    links: [{ type: 'github', url: 'https://github.com/RyanGuzelian/Alpha_team_soen341project2023' }],
    contribution: 'I contributed across the frontend and backend and served as scrum master for the team.',
    technicalDetails: 'React on the frontend, an Express.js API, and MongoDB for user profiles and job listings.',
  },
  {
    id: 'maalem', title: 'Maalem', image: Maalem, featured: false, status: 'completed',
    shortDescription: 'A peer-to-peer student help application with real-time chat.',
    fullDescription: 'Maalem is a student help application with a custom messaging system and Google sign-in.',
    tags: ['React', 'Node.js', 'Docker', 'WebSockets'],
    links: [{ type: 'github', url: 'https://github.com/RyanGuzelian/Maalem' }],
    technicalDetails: 'React and Node.js, WebSockets for chat, Google authentication, and Docker for containerization.',
  },
  {
    id: 'blackout', title: 'Blackout Launcher', image: Blackout, featured: false, status: 'in-progress',
    shortDescription: 'An Android launcher exploring a quieter smartphone interface.',
    fullDescription: 'An Android launcher that aims to reduce distracting parts of the interface while preserving everyday usability.',
    tags: ['Android', 'UI/UX design', 'Digital wellbeing'],
  },
  {
    id: 'collatz', title: 'Collatz Conjecture Exploration', image: Collatz, featured: false, status: 'in-progress',
    shortDescription: 'An exploration of patterns in Collatz sequences.',
    fullDescription: 'An ongoing research exercise using algorithms to explore patterns in Collatz sequences. This is an investigation, not a claimed solution to the conjecture.',
    tags: ['Data analysis', 'Pattern recognition', 'Algorithms', 'Research'],
  },
  {
    id: 'asteroids', title: 'Asteroids', image: Asteroids, featured: false, status: 'completed',
    shortDescription: 'A Java recreation of the classic arcade game.',
    fullDescription: 'A recreation of Asteroids built with Java and Slick2D, exploring object-oriented programming, rendering, and game controls.',
    tags: ['Java', 'OOP', 'Game development', 'Slick2D'],
    technicalDetails: 'Java and the Slick2D library for the game’s rendering and input loop.',
  },
  {
    id: 'organik', title: 'Organik', image: Organik, featured: false, status: 'completed',
    shortDescription: 'An early grocery store website built with core web technologies.',
    fullDescription: 'A grocery store website built with JavaScript, PHP, HTML, and CSS, developing my foundation in web development and interface design.',
    tags: ['JavaScript', 'PHP', 'HTML/CSS', 'UI design'],
  },
];

export default projects;

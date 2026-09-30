/**
 * Projects data.
 *
 * To add a project, append an object with this shape:
 *   {
 *     id:        unique slug, also shown in the feed label bar
 *     title:     display name
 *     tagline:   one line, shown under the title
 *     description: a short paragraph, featured projects only
 *     image:     imported image, or null for projects with no screenshot
 *     status:    "live" | "complete" | "in-progress"
 *     stack:     array of technologies
 *     links:     array of { label, url }
 *     featured:  true renders it as a panel, false as a compact list row
 *   }
 */

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

const projects = [
  {
    id: "courtsy",
    title: "Courtsy",
    tagline: "Multi-tenant booking platform and CRM for sports complexes",
    description:
      "A SaaS product where every request has to be checked against both the user's role and the tenant they belong to. I designed token-based authentication with role-based access control and a resource-ownership resolver that prevents insecure direct object references across tenant boundaries, then set up the production email and DNS infrastructure for transactional messaging on a custom domain.",
    image: null,
    status: "in-progress",
    stack: ["React", ".NET", "PostgreSQL", "RBAC"],
    links: [],
    featured: true,
  },
  {
    id: "attendance",
    title: "Attendance Management System",
    tagline: "Card-reader attendance tracking for exam halls",
    description:
      "Students tap a student ID against a MiFare reader to log attendance to an exam, replacing a paper roll call that cost over ten minutes per sitting. An Arduino board handles the read, a React front end and an Express API on EC2 handle everything after it.",
    image: Attendance,
    status: "complete",
    stack: ["Arduino", "C++", "React.js", "Express.js", "AWS EC2"],
    links: [{ label: "Live site", url: "https://soen-422-project.vercel.app/" }],
    featured: true,
  },
  {
    id: "medca",
    title: "MedcaConnect",
    tagline: "Support circles for people managing illness and recovery",
    description:
      "A mobile platform that connects people going through illness, mental health issues, or addiction with a small circle of support. Built full-stack in React Native against an Express API, with JWT authentication and Agora for video and messaging.",
    image: Medca,
    status: "complete",
    stack: ["React Native", "Node.js", "Express.js", "MongoDB"],
    links: [],
    featured: true,
  },
  {
    id: "bargain",
    title: "Bargain Bot",
    tagline: "A voice agent that negotiates your internet bill",
    description:
      "Built at McHacks. The agent calls an internet provider on the user's behalf and negotiates the price, using OpenAI's realtime API to handle time-sensitive voice back-and-forth over a WebRTC connection.",
    image: Bargain,
    status: "complete",
    stack: ["React.js", "Node.js", "Express.js", "OpenAI Realtime"],
    links: [
      {
        label: "Source",
        url: "https://github.com/McHacksNegotiator/NegotiationApp",
      },
    ],
    featured: true,
  },
  {
    id: "condo",
    title: "Condo Management Web App",
    tagline: "Property management for landlords and tenants",
    description:
      "A residential estate management app letting landlords manage tenants and track income and expenses, built on Next.js with Supabase behind it.",
    image: Condo,
    status: "complete",
    stack: ["Next.js", "Supabase", "REST APIs"],
    links: [
      {
        label: "Source",
        url: "https://github.com/CONCORDIA-SOEN-390/Condo-Mgmt-Web-App",
      },
      { label: "Live site", url: "https://condo-mgmt-web-app.vercel.app/" },
    ],
    featured: false,
  },
  {
    id: "hired",
    title: "Hired",
    tagline: "Job platform connecting employers and job seekers",
    description:
      "A full-stack job board where I also acted as scrum master. React front end, Express API, MongoDB for profiles and listings.",
    image: Hired,
    status: "complete",
    stack: ["React.js", "Express.js", "MongoDB"],
    links: [
      {
        label: "Source",
        url: "https://github.com/RyanGuzelian/Alpha_team_soen341project2023",
      },
    ],
    featured: false,
  },
  {
    id: "maalem",
    title: "Maalem",
    tagline: "Peer-to-peer student help with real-time messaging",
    description:
      "A student help platform with a custom WebSocket messaging system, containerized with Docker and authenticated through Google Sign-In.",
    image: Maalem,
    status: "complete",
    stack: ["React.js", "Node.js", "WebSockets", "Docker"],
    links: [{ label: "Source", url: "https://github.com/RyanGuzelian/Maalem" }],
    featured: false,
  },
  {
    id: "blackout",
    title: "Blackout Launcher",
    tagline: "An Android launcher that strips out the dopamine",
    description:
      "A launcher that removes the parts of the phone UI designed to pull you back in, while keeping it practical enough for daily use.",
    image: Blackout,
    status: "in-progress",
    stack: ["Kotlin", "Android SDK"],
    links: [],
    featured: false,
  },
  {
    id: "collatz",
    title: "Collatz Conjecture",
    tagline: "Pattern recognition across Collatz sequences",
    description:
      "An attempt at the Collatz conjecture from the data side: running the recursion at scale and looking for structure in the sequences it produces.",
    image: Collatz,
    status: "in-progress",
    stack: ["Python", "Data analysis"],
    links: [],
    featured: false,
  },
  {
    id: "asteroids",
    title: "Asteroids",
    tagline: "The 1979 arcade game, rebuilt in Java",
    description:
      "The 1979 arcade game rebuilt in Java with Slick2D — collision detection, particle effects, and a hand-rolled game loop.",
    image: Asteroids,
    status: "complete",
    stack: ["Java", "Slick2D"],
    links: [],
    featured: false,
  },
  {
    id: "organik",
    title: "Organik",
    tagline: "Grocery storefront built on plain PHP and CSS",
    description:
      "A grocery storefront built before frameworks: PHP on the back, plain JavaScript and CSS Grid on the front.",
    image: Organik,
    status: "complete",
    stack: ["JavaScript", "PHP", "HTML/CSS"],
    links: [],
    featured: false,
  },
];

export default projects;

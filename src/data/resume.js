/**
 * Resume data — single source of truth for the identity, work log, capability
 * matrix, and education rows. Sourced from Ryan_Guzelian_Resume.docx.
 */

export const profile = {
  name: "Ryan Guzelian",
  firstName: "Ryan",
  lastName: "Guzelian",
  role: "Software Developer, Go",
  employer: "Genetec",
  location: "Montreal, Canada",
  timezone: "America/Toronto",
  statement:
    "Software developer in Montreal. I build the backend of physical security systems — the gateways, services, and test infrastructure behind products that control who gets through a door.",
};

export const contact = {
  email: "ryanguzimp@gmail.com",
  phone: "(514) 589-4949",
  linkedin: "https://linkedin.com/in/ryanguzelian",
  linkedinLabel: "linkedin.com/in/ryanguzelian",
  github: "https://github.com/RyanGuzelian",
  githubLabel: "github.com/RyanGuzelian",
  site: "ryanguzelian.com",
  resume: process.env.PUBLIC_URL + "/Ryan Guzelian Resume.pdf",
};

/**
 * Identity record shown beside the hero name. Deliberately does not repeat the
 * name — it is already set at 104px immediately to the left.
 */
export const identity = [
  { label: "Role", value: "Software Developer, Go — Genetec" },
  { label: "Zone", value: "Montreal, Canada" },
  { label: "Credential", value: "Grad. Certificate in Cybersecurity, McGill" },
];

/**
 * Work log, newest first.
 * `date` is the start, formatted for the log's date column.
 * `status` is "active" or "closed".
 * `figures` surface the hard numbers; omit when a role has none.
 */
export const experience = [
  {
    id: "genetec-go",
    date: "2026.08",
    range: "Aug 2026 — Present",
    org: "Genetec",
    role: "Software Developer, Go",
    location: "Montreal, Canada",
    status: "active",
    summary:
      "Building the public API surface of the Security Center SaaS platform.",
    bullets: [
      "Building an API gateway in Go that exposes internal platform services as public APIs on the Security Center SaaS product, opening the platform to customer and third-party integrations.",
      "Developing the accompanying React interface for configuring and inspecting the endpoints published through the gateway.",
    ],
    stack: ["Go", "React", "REST APIs", "Microservices"],
  },
  {
    id: "genetec-sdet",
    date: "2026.01",
    range: "Jan 2026 — Aug 2026",
    org: "Genetec",
    role: "Software Developer in Test",
    location: "Montreal, Canada",
    status: "closed",
    summary:
      "Stood up mobile test infrastructure for the Security Center SaaS platform from scratch.",
    bullets: [
      "Built end-to-end test automation for the Security Center SaaS mobile platform in Flutter, Dart, and Patrol, automating 15+ core user flows previously covered only by manual QA.",
      "Established the mobile test infrastructure from scratch: provisioned a Mac Mini as a dedicated CI agent and built a pipeline that runs the full suite on every pull request.",
      "Parallelized test execution across jobs, cutting suite runtime by 60% and keeping PR feedback fast as coverage grew.",
      "Developed an internal Claude Code skill that generates Patrol test suites from written test cases across multiple repositories, replacing manual authoring.",
    ],
    figures: [
      { value: "−60%", label: "suite runtime" },
      { value: "15+", label: "flows automated" },
    ],
    stack: ["Flutter", "Dart", "Patrol", "CI/CD"],
  },
  {
    id: "dataannotation",
    date: "2025.08",
    range: "Aug 2025 — Dec 2025",
    org: "DataAnnotation",
    role: "Freelance Software Developer",
    location: "Montreal, Canada",
    status: "closed",
    summary: "Evaluation tooling for large language model output.",
    bullets: [
      "Built tools and scripts to evaluate large language model output on summarization, question answering, and code generation, producing structured judgments used as training signal.",
    ],
    stack: ["Python", "LLM evaluation"],
  },
  {
    id: "dormakaba-qa",
    date: "2025.05",
    range: "May 2025 — Aug 2025",
    org: "Dormakaba",
    role: "QA Automation Intern",
    location: "Montreal, Canada",
    status: "closed",
    summary: "Moved the automation suite onto Raspberry Pi hardware.",
    bullets: [
      "Ported the existing automation tooling from Windows to Linux to run on Raspberry Pi 4 hardware.",
      "Built automated audit-report tests using Java and RestAssured.",
    ],
    stack: ["Java", "RestAssured", "Linux", "Raspberry Pi"],
  },
  {
    id: "dormakaba-dev",
    date: "2024.05",
    range: "May 2024 — Dec 2024",
    org: "Dormakaba",
    role: "C# Development Intern",
    location: "Montreal, Canada",
    status: "closed",
    summary: "Backend APIs across a message-driven microservice architecture.",
    bullets: [
      "Developed and maintained backend APIs in C# and .NET across a microservice architecture communicating over a RabbitMQ bus.",
      "Researched library-version compatibility and led the upgrade, gaining up to 30% in message throughput.",
    ],
    figures: [{ value: "+30%", label: "message throughput" }],
    stack: ["C#", ".NET", "RabbitMQ", "MassTransit"],
  },
  {
    id: "pw",
    date: "2023.05",
    range: "May 2023 — Aug 2023",
    org: "Pratt & Whitney Canada",
    role: "Programmer Analyst Intern",
    location: "Longueuil, Canada",
    status: "closed",
    summary: "Messaging technology evaluation for interservice communication.",
    bullets: [
      "Evaluated messaging technologies (RabbitMQ, Amazon SNS, SQS) for interservice communication and prototyped .NET microservices to compare them.",
      "Contributed to reference-architecture reviews with solution architects, replacing custom in-house libraries with market-standard ones.",
    ],
    stack: [".NET", "RabbitMQ", "AWS SNS/SQS"],
  },
  {
    id: "cae",
    date: "2022.09",
    range: "Sep 2022 — Dec 2022",
    org: "CAE",
    role: "Full Stack Developer Intern",
    location: "Montreal, Canada",
    status: "closed",
    summary: "Rebuilt an internal inventory system used on the factory floor.",
    bullets: [
      "Rebuilt an internal inventory management system using React.js, .NET, and SQL, increasing adoption among factory-floor employees.",
    ],
    stack: ["React.js", ".NET", "SQL"],
  },
];

/** Capability matrix — label column, value column. */
export const capabilities = [
  {
    label: "Languages",
    items: ["Go", "C#", "Java", "TypeScript", "JavaScript", "Dart", "SQL"],
  },
  {
    label: "Backend",
    items: [
      ".NET",
      "Go",
      "Node.js",
      "Express.js",
      "REST APIs",
      "RabbitMQ",
      "MassTransit",
      "Microservices",
    ],
  },
  { label: "Frontend", items: ["React.js", "AngularJS", "Flutter"] },
  {
    label: "Testing",
    items: ["Patrol", "JUnit", "Jest", "RestAssured", "Test-driven development"],
  },
  { label: "Data", items: ["PostgreSQL", "MySQL", "MongoDB"] },
  {
    label: "Tools",
    items: ["Git", "Docker", "AWS", "CI/CD pipelines", "Postman", "JIRA"],
  },
  {
    label: "Spoken",
    items: ["English", "French", "Arabic", "Armenian"],
  },
];

export const education = [
  {
    school: "McGill University",
    credential: "Graduate Certificate in Cybersecurity",
    detail: "GPA 4.0",
    years: "2025 — 2026",
  },
  {
    school: "Concordia University",
    credential: "B.Eng. Software Engineering",
    detail: "With Distinction, Co-op",
    years: "2021 — 2025",
  },
  {
    school: "Collège de Bois-de-Boulogne",
    credential: "DEC, Computer Science and Mathematics",
    detail: "",
    years: "2019 — 2021",
  },
];

export const about = [
  "I work on the software side of physical security. At Genetec I'm building an API gateway in Go that opens the Security Center platform to third-party integrations, and before that I built the mobile test infrastructure the platform ships against. At Dormakaba I worked on the .NET services behind access control hardware.",
  "The through-line is systems that have to be right: a door that opens for the wrong person is a different kind of bug. That's also what took me to McGill for a graduate certificate in cybersecurity while working full time. Outside of work I'm usually building something small and self-contained, or speaking one of the four languages I grew up between.",
];

export const navigation = [
  { id: "work", label: "Work" },
  { id: "projects", label: "Projects" },
  { id: "capabilities", label: "Capabilities" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

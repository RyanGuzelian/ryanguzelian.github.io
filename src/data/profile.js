export const experience = [
  {
    company: 'Genetec', role: 'Software Developer, Go', dates: 'Aug 2026 – Present',
    points: [
      'Building an API gateway in Go that exposes internal Security Center SaaS services as public APIs for customer and third-party integrations.',
      'Developing the React interface for configuring and inspecting endpoints published through the gateway.',
    ],
  },
  {
    company: 'Genetec', role: 'Software Developer in Test', dates: 'Jan 2026 – Aug 2026',
    points: [
      'Automated 15+ core mobile user flows with Flutter, Dart, and Patrol.',
      'Established the test infrastructure from scratch, including a dedicated Mac Mini CI agent and a pipeline running the full suite on every pull request.',
      'Parallelized execution across jobs, cutting suite runtime by 60%.',
      'Developed an internal Claude Code skill to generate Patrol test suites from written test cases across repositories.',
    ],
  },
  {
    company: 'DataAnnotation', role: 'Freelance Software Developer', dates: 'Aug 2025 – Dec 2025',
    points: ['Built tools and scripts to evaluate language model output on summarization, question answering, and code generation, producing structured judgments used as training signal.'],
  },
  {
    company: 'Dormakaba', role: 'QA Automation Intern', dates: 'May 2025 – Aug 2025',
    points: [
      'Ported automation tooling from Windows to Linux to run on Raspberry Pi 4 hardware.',
      'Built automated audit-report tests with Java and RestAssured.',
    ],
  },
  {
    company: 'Dormakaba', role: 'C# Development Intern', dates: 'May 2024 – Dec 2024',
    points: [
      'Developed backend APIs in C# and .NET across a microservice architecture communicating over RabbitMQ.',
      'Researched library compatibility and led an upgrade that gained up to 30% in message throughput.',
    ],
  },
  {
    company: 'Pratt & Whitney Canada', role: 'Programmer Analyst Intern', dates: 'May 2023 – Aug 2023',
    points: [
      'Evaluated RabbitMQ, Amazon SNS, and SQS and prototyped .NET microservices to compare interservice messaging options.',
      'Contributed to reference-architecture reviews with solution architects.',
    ],
  },
  {
    company: 'CAE', role: 'Full Stack Developer Intern', dates: 'Sep 2022 – Dec 2022',
    points: ['Rebuilt an internal inventory management system with React, .NET, and SQL, increasing adoption among factory-floor employees.'],
  },
];

export const education = [
  { school: 'McGill University', degree: 'Graduate Certificate in Cybersecurity', dates: '2025 – 2026', note: 'GPA 4.0' },
  { school: 'Concordia University', degree: 'B.Eng. Software Engineering', dates: '2021 – 2025', note: 'With Distinction, Co-op' },
  { school: 'Collège de Bois-de-Boulogne', degree: 'DEC, Computer Science and Mathematics', dates: '2019 – 2021' },
];

export const skills = [
  ['Languages', 'Go, C#, Java, TypeScript, JavaScript, Dart, SQL'],
  ['Backend', '.NET, Go, Node.js, Express.js, REST APIs, RabbitMQ, MassTransit, microservices'],
  ['Frontend', 'React, AngularJS, Flutter'],
  ['Testing', 'Patrol, JUnit, Jest, RestAssured, test-driven development'],
  ['Data', 'PostgreSQL, MySQL, MongoDB'],
  ['Tools', 'Git, Docker, AWS, CI/CD pipelines, Postman, JIRA'],
];

import eVotingImage from '../../property/Voting-image.jpg'
import weatherImage from '../../property/laptop.jpg'
import resume from '../../property/Shobhit_Singh_Resume_2026.pdf'

export const profile = {
  name: 'Shobhit Singh',
  role: 'Full-stack developer',
  email: 'snghshobhit@gmail.com',
  resume,
  summary:
    'I build responsive, approachable web experiences and the systems behind them. My focus is front-end craft, backed by a growing full-stack toolkit.',
  socials: [
    { label: 'GitHub', href: 'https://github.com/CoderShobhitSingh/' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/shobhit-singh-51940a267/' },
    { label: 'Instagram', href: 'https://www.instagram.com/snghshobhit' },
  ],
}

export const skillGroups = [
  { name: 'Frontend', skills: ['JavaScript', 'React', 'HTML', 'CSS', 'Tailwind CSS'] },
  { name: 'Backend', skills: ['Node.js', 'Express.js', 'REST APIs', 'MongoDB', 'Java'] },
  { name: 'Tools & DB', skills: ['Git', 'GitHub', 'Postman', 'MongoDB', 'OpenWeather API'] },
]

export const projects = [
  {
    name: 'Weather App',
    category: 'API integration',
    repository: 'https://github.com/CoderShobhitSingh/weather_app',
    image: weatherImage,
    description: 'A weather experience built with JavaScript and the OpenWeather API.',
    tags: ['JavaScript', 'REST API', 'CSS'],
    points: ['Connects a front end to live weather data', 'Practices API-driven interface states'],
  },
  {
    name: 'E-Voting System',
    category: 'Full-stack application',
    repository: 'https://github.com/CoderShobhitSingh/e-voting',
    image: eVotingImage,
    imageFit: 'contain',
    description: 'A full-stack electronic voting system project.',
    tags: ['React.js', 'Express.js', 'Node,js','MongoDb','Tailwind.css'],
    points: ['Includes a user-facing voting experience and server-side functionality', 'Built as an end-to-end web application'],
  },
]

export const milestones = [
  {
    type: 'Education',
    title: 'B.Tech in Computer Science',
    organization: 'GLA University, Mathura',
    description: 'Studied computer science with a focus on building practical software projects.',
    link: 'https://drive.google.com/file/d/12pQjV8XRym0erj9LjlPE_sBP9R0iILof/view?usp=sharing',
  },
  {
    type: 'Certification',
    title: 'Meta Front-End Developer Professional Certificate',
    organization: 'Meta',
    description: 'Professional learning in front-end development and modern web fundamentals.',
    link: 'https://drive.google.com/file/d/1wAfO9Z_IV8WSJJb6hG0bols13Uv9myGm/view?usp=sharing',
  },
  {
    type: 'Certification',
    title: 'SQL using MySQL',
    organization: 'HackerRank',
    description: 'Validates hands-on proficiency in complex SQL queries, multi-table joins, subqueries, aggregations, window functions, and relational database optimization.',
    link: '',
  },
  {
    type: 'Certification',
    title: 'Java',
    organization: 'HackerRank',
    description: 'Validates core Java proficiency, object-oriented programming (OOP) principles, class hierarchies, exception handling, and data structure implementations.',
    link: '',
  },
  {
    type: 'Certification',
    title: 'AI Automation with n8n',
    organization: 'TuteDude',
    description: 'Demonstrates competency in low-code workflow orchestration using n8n, webhook triggers, API integrations, JSON transformations, and configuring autonomous AI agents with conversational memory.',
    link: 'https://drive.google.com/file/d/1OHBzeKevQ0Q7WeAdrpjmrgfouuzYaiJ3/view?usp=drive_link',
  },
]
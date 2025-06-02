export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];


export const myProjects = [
  {
    title: 'Apimio - Product Information Management System (PIMS)',
    desc: 'Apimio is a comprehensive Product Information Management (PIMS) platform, enabling businesses to centralize, enrich, and distribute product data across multiple sales channels. It improves operational efficiency and ensures product data consistency.',
    subdesc:
      'Built with Laravel, Vue.js, and TailwindCSS, Apimio offers scalable solutions for managing product catalogs efficiently.',
    href: 'https://app.apimio.com/',
    texture: '/textures/project/project1.mp4',
    logo: './threejs-portfolio/assets/apimio.svg',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: `${import.meta.env.BASE_URL}/assets/spotlight1.png`,
    tags: [
      {
        id: 1,
        name: 'Laravel',
        path: `${import.meta.env.BASE_URL}assets/laravel.svg`,
      },
      {
        id: 2,
        name: 'Vue.js',
        path: `${import.meta.env.BASE_URL}/assets/vue.svg`,
      },
      {
        id: 3,
        name: 'TailwindCSS',
        path: `${import.meta.env.BASE_URL}assets/tailwindcss.png`,
      },
    ],
  },
  {
    title: 'Keystone - Trucking Management System',
    desc: 'Keystone is a powerful trucking management system designed to streamline logistics operations. It handles fleet tracking, route optimization, and scheduling to ensure smooth transportation workflows.',
    subdesc:
      'Developed with Django, React.js, and PostgreSQL, Keystone is tailored for the logistics industry, ensuring real-time data accuracy and operational efficiency.',
    href: 'https://phpstack-980736-3458264.cloudwaysapps.com/',
    texture: '/textures/project/project2.mp4',
    logo: `${import.meta.env.BASE_URL}assets/keystone.svg`,
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: `${import.meta.env.BASE_URL}assets/spotlight2.png`,
    tags: [
      {
        id: 1,
        name: 'Django',
        path: `${import.meta.env.BASE_URL}assets/django.svg`,
      },
      {
        id: 2,
        name: 'React.js',
        path: `${import.meta.env.BASE_URL}assets/react.svg`,
      },
      {
        id: 3,
        name: 'PostgreSQL',
        path: `${import.meta.env.BASE_URL}assets/postgresql.svg`,
      },
    ],
  },
  {
    title: 'Weather App - Mausam',
    desc: 'Mausam is a lightweight and user-friendly weather application providing real-time weather updates, forecasts, and alerts. It leverages API integrations for accurate weather predictions.',
    subdesc:
      'Built with React.js, Node.js, and OpenWeather API, Mausam ensures quick and reliable weather data delivery for users worldwide.',
    href: 'https://mausam.pk/',
    texture: '/textures/project/project3.mp4',
    logo: `${import.meta.env.BASE_URL}assets/project-logo-mausam.png`,
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: `${import.meta.env.BASE_URL}assets/spotlight3.png`,
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: `${import.meta.env.BASE_URL}assets/react.svg`,
      },
      {
        id: 2,
        name: 'Node.js',
        path: `${import.meta.env.BASE_URL}assets/nodejs.svg`,
      },
      {
        id: 3,
        name: 'OpenWeather API',
        path: `${import.meta.env.BASE_URL}assets/openweather.svg`,
      },
    ],
  },
  {
    title: 'BOVIT - Ticket and Event Management System',
    desc: 'BOVIT is an event management system designed to streamline ticket sales, attendee management, and event organization for large-scale events.',
    subdesc:
      'Powered by Next.js, Stripe, and Firebase, BOVIT offers a robust and secure platform for managing events and payments with ease.',
    href: 'https://www.youtube.com/',
    texture: '/textures/project/project4.mp4',
    logo: `${import.meta.env.BASE_URL}assets/project-logo-bovit.png`,
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: `${import.meta.env.BASE_URL}assets/spotlight4.png`,
    tags: [
      {
        id: 1,
        name: 'Next.js',
        path: `${import.meta.env.BASE_URL}assets/nextjs.svg`,
      },
      {
        id: 2,
        name: 'Stripe',
        path: `${import.meta.env.BASE_URL}assets/stripe.svg`,
      },
      {
        id: 3,
        name: 'Firebase',
        path: `${import.meta.env.BASE_URL}assets/firebase.svg`,
      },
    ],
  },
];


export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Laravel',
    pos: 'Lead Web Developer',
    duration: '2022 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.",
    icon: `${import.meta.env.BASE_URL}assets/framer.svg`,
    animation: 'victory',
  },
  {
    id: 2,
    name: 'React Js',
    pos: 'Web Developer',
    duration: '2020 - 2022',
    title: "Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.",
    icon: `${import.meta.env.BASE_URL}assets/figma.svg`,
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Jira Software',
    pos: 'Junior Web Developer',
    duration: '2019 - 2020',
    title: "Jira helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.",
    icon: `${import.meta.env.BASE_URL}assets/notion.svg`,
    animation: 'salute',
  },
];

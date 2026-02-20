import { college,IITG,school,auctionwebsite,jobsphere,truecode,taskflow,bigInteger,expanseplanner,instagram } from "../assets/images";
import {
    powerbi,
    qr,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    typescript,
    java,
    jqerry,
    boot,
    python,
    calc,
    hotstar,
    mysql,
    excel,
    pwlogo,
    postman,
    aws,
    x,
    redis,
    socketio,
} from "../assets/icons";

export const skills = [
    // {
    //     imageUrl: html,
    //     name: "HTML",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: css,
    //     name: "CSS",
    //     type: "Frontend",
    // },
    // {
    //     imageUrl: boot,
    //     name: "Express",
    //     type: "Backend",
    // },
    // {
    //     imageUrl: tailwindcss,
    //     name: "Tailwind CSS",
    //     type: "Frontend",
    // },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend/Backend",
    },
     {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend/Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Full-Stack",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
   
   
  
    
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
   
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: mysql,
        name: "MySQL",
        type: "Database",
    },
     {
        imageUrl: redis,
        name: "Redis",
        type: "Database",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Programming Language",
    },
    
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Visualization",
    },
   
    {
        imageUrl: excel,
        name: "Excel",
        type: "Data Analysis",
    },
    {
        imageUrl: socketio,
        name: "Socket.IO",
        type: "Real-time Communication",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },{
        imageUrl: postman,
        name: "Postman",
        type: "API Testing",
    },
    {
        imageUrl: aws,
        name: "AWS",
        type: "Cloud Computing",
    },

    
    
   



];

export const education = [
    {
        title: "St. Augustine High School",
        company_name: "Matriculation",
        icon: school,
        iconBg: "#accbe1",
        date: "March 2012 - April 2019",
        points: [
            "Excelled in math, consistently top 3 in school until 10th grade."
        ],
    },
    {
        title: "Inter Science College",
        company_name: "Intermidiate",
        icon: college,
        iconBg: "#fbc3bc",
        date: "Apr 2019 - Mar 2021",
        points: [
            "Started coding with C++ in 11th, later focused on JEE prep, overcoming COVID-19 challenges."
        ],
    },
    {
        title: "IIT Guwahati",
        company_name: "B.Sc.(Honours) in Data Science & AI",
        icon: IITG,
        iconBg: "#b7e4c7",
        date: "Sep 2023 - Present",
        points: [
            "Currently studying at IIT Guwahati (IITG), gaining skills essential for the corporate world, a dream college for many.",
            "Grade : 8.14 CPI (Till 7th Trimester)"
            
        ],
    },
    
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/ankitraj061',
    },
    {
        name: 'X (Twitter)',
        iconUrl: x,
        link: 'https://x.com/AnkitRaj432315',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ankitraj061',
    },{
        name: 'Instagram',
        iconUrl: instagram,
        link: 'https://www.instagram.com/ankitraj061/',
    }
];

export const projects = [
     {
        iconUrl: truecode,
        theme: 'btn-back-pink',
        name: 'TrueCode (Coding Platform Similar to LeetCode)',
        description: 'Developed a full-stack coding platform using MERN stack where users can solve coding problems, view leaderboards, and discuss solutions.',
        skills: ['Next.js','Redux', 'Node.js', 'Express', 'MongoDB','TypeScript','Redis','Zudge0','Compiler'],
        githubLink: 'https://github.com/ankitraj061/leetcode_frontend',
        liveLink: 'https://truecode.shop',
    },
    {
        iconUrl: auctionwebsite,
        theme: 'btn-back-red',
        name: 'Cricket Auction Management System',
        description: 'Developed a full-stack auction website where teams can bid for available players or mark them as unsold. I built this for our own turf cricket league, which had more than 60 players participating. ',
        skills: ['Next.js', 'Node.js', 'Express', 'PostgreSQL','Prisma ORM','Redis'],
        githubLink: 'https://github.com/ankitraj061/cricket-auction-frontend',
        liveLink: 'https://www.turfcricket.online/',
    },
    {
        iconUrl: jobsphere,
        theme: 'btn-back-green',
        name: 'Job Sphere (Job Portal)',
        description: 'Built a Job Portal where admin can post jobs and candidates can apply for the jobs. This project is i built for End-Semester project in my college and selected as one of the best projects in our department and got a Certificate of Excellence for the same.',
        skills: ['Next.js', 'Node.js', 'Express', 'PostgreSQL','Prisma ORM','TypeScript'],
        githubLink: 'https://github.com/ankitraj061/job_sphere',
    },
      {
        iconUrl: taskflow,
        theme: 'btn-back-yellow',
        name: 'TaskFlow (Task Management App)',
        description: 'Built a Realtime Task Management App similar to Trello, Jira, where users can create boards, lists, and cards to manage their tasks effectively. Implemented features like drag-and-drop, due dates, etc.',
        skills: ['Next.js', 'Node.js', 'Express', 'PostgreSQL','Prisma ORM','TypeScript','Socket.IO'],
        githubLink: 'https://github.com/ankitraj061/taskflow',
    },
    {
        iconUrl: qr,
        theme: 'btn-back-blue',
        name: 'QR-Code Generator',
        description: 'Built a QR code generator with the help of Node.js and Express.js which takes in a URL and returns a QR code image and also allows the user to download it.',
        skills: ['Node.js', 'Express', 'JavaScript'],
        githubLink: 'https://github.com/ankitraj061/QR-Code-Generater',
    },
   
    {
        iconUrl: expanseplanner,
        theme: 'btn-back-black',
        name: 'Expanse Planner',
        description: 'Built a full-stack expense planner application where users can track their expenses, set budgets, and visualize their spending habits with charts and graphs.',
        skills: ['React', 'TypeScript', 'Node.js', 'Express', 'PostgreSQL'],
        liveLink: 'https://github.com/ankitraj061/ExpansePlanner',
    },
    {
        iconUrl: bigInteger,
        theme: 'btn-back-yellow',
        name: 'BigInteger Class',
        description: 'Implemented a BigInteger class in Java, enabling efficient arithmetic operations on large integer values.',
        skills: ['Java'],
        githubLink: 'https://github.com/ankitraj061/CustomBigIntegerClassImplementation.git',
    },
  
];
 

export const experience = [
    {
        title: "Frontend Developer Intern",
        company_name: "Physics Wallah",
        icon: pwlogo,
        iconBg: "#E6DEDD",
        date: "Dec 2024 - Present",
        points: [
            "Developed and maintained React-based web applications, implementing modern designs",
            "Collaborated with the development team to create responsive and interactive frontend solutions"
        ],
    }
]

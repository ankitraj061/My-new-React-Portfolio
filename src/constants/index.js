import { college,IITG,school } from "../assets/images";
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
    pwlogo
} from "../assets/icons";

export const skills = [
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: boot,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
   
   
   
    {
        imageUrl: jqerry,
        name: "Motion",
        type: "Animation",
    },
    
    // {
    //     imageUrl: nextjs,
    //     name: "Next.js",
    //     type: "Frontend",
    // },
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
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: java,
        name: "Java",
        type: "Frontend",
    },
    {
        imageUrl: powerbi,
        name: "Power BI",
        type: "Data Visualization",
    },
    {
        imageUrl: excel,
        name: "Redux",
        type: "State Management",
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
    },
    
    
    // {
    //     imageUrl: typescript,
    //     name: "TypeScript",
    //     type: "Frontend",
    // }



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
            "Currently studying at IIT Guwahati (IITG), gaining skills essential for the corporate world, a dream college for many."
            
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
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/ankitraj061',
    }
];

export const projects = [
    {
        iconUrl: calc,
        theme: 'btn-back-red',
        name: 'Calculator',
        description: 'Developed a calculator where we can perfom mathematical operations. I used HTML, CSS and JavaScript.',
        link: 'https://ankitraj061.github.io/Calculator/',
    },
    {
        iconUrl: hotstar,
        theme: 'btn-back-green',
        name: 'Hotstar-Clone',
        description: 'Created a hotstar clone just to check our designing and functionality skills ',
        link: 'https://ankitraj061.github.io/Hotstar-clone/',
    },
    {
        iconUrl: qr,
        theme: 'btn-back-blue',
        name: 'QR-Code Generator',
        description: 'Built a QR code generator with the help of Node.js and Express.js which takes in a URL and returns a QR code image and also allows the user to download it.',
        link: 'https://github.com/ankitraj061/QR-Code-Generater',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Full Stack Instagram Clone',
        description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
        link: 'https://github.com/adrianhajdin/social_media_app',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Creative To-Do List',
        description: 'Developed a To-Do List using HTML, CSS, and JavaScript. I have tried to incorporate some creativity; follow the link to check it out.',
        link: 'https://to-do-list-psi-tan.vercel.app/',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'BigInteger Class',
        description: 'Implemented a BigInteger class in Java, enabling efficient arithmetic operations on large integer values.',
        link: 'https://github.com/ankitraj061/CustomBigIntegerClassImplementation.git',
    }
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
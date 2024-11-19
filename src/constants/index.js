import { college,IITG,school } from "../assets/images";
import {
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
    excel
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
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
   
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: jqerry,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
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
        imageUrl: python,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: excel,
        name: "Redux",
        type: "State Management",
    },
    
    
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }

];

export const experiences = [
    {
        title: "St. Augustine High School",
        company_name: "Till Matriculation",
        icon: school,
        iconBg: "#accbe1",
        date: "March 2012 - April 2019",
        points: [
            "I rocked at math, always in the top 10 during my school years till the 10th grade.",
            "I was the head honcho of the green group, leading with fun and competition, learning about teamwork and leadership.",
            "No stress about the future – just playing more, studying less, and enjoying the green group vibe made my early school days unforgettable.",
        ],
    },
    {
        title: "Inter Science College",
        company_name: "Intermidiate",
        icon: college,
        iconBg: "#fbc3bc",
        date: "Apr 2019 - Mar 2021",
        points: [
            "In 11th grade, I dove into the realms of Maths and computer science, sparking my interest in programming, and initiating my coding journey with C++.",
            "Upon learning about JEE Mains after completing 11th, I shifted gears to intense exam preparation, setting my sights on a challenging yet rewarding academic pursuit.",
            "The emergence of the COVID-19 pandemic during my preparations disrupted our studies significantly, presenting unforeseen challenges and reshaping the dynamics of my academic journey.",
        ],
    },
    {
        title: "Indian Institute of Technology, Guwahati",
        company_name: "B.Sc.(Honours) in DA & AI",
        icon: IITG,
        iconBg: "#b7e4c7",
        date: "Sep 2023 - Present",
        points: [
            "Amidst the excitement of being part of my dream college, I encountered and navigated real-world challenges, contributing to my personal and academic growth.",
            "The challenges became opportunities to delve into the intricacies of data science, honing my skills in building AI models. The hands-on experiences provided a profound understanding of the field",
            "Maintaining an impressive CGPA of 9, my academic journey has been marked by dedication and excellence.",
            
        ],
    },
    // {
    //     title: "Full stack Developer",
    //     company_name: "Meta",
    //     icon: meta,
    //     iconBg: "#a2d2ff",
    //     date: "Jan 2023 - Present",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
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
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://github.com/adrianhajdin/projects_realestate',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'BigInteger Class',
        description: 'Implemented a BigInteger class in Java, enabling efficient arithmetic operations on large integer values.',
        link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    }
];

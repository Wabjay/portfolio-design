import Ayrem1 from "./ayrem/1.jpg"
import Ayrem2 from "./ayrem/2.jpg"
import Ayrem3 from "./ayrem/3.jpg"
import Ayrem4 from "./ayrem/4.jpg"
import Ayrem5 from "./ayrem/5.jpg"
import Ownerfi1 from "./ownerfi/1.jpg"
import Ownerfi2 from "./ownerfi/2.jpg"
import Ownerfi3 from "./ownerfi/3.jpg"
import Ownerfi4 from "./ownerfi/4.jpg"
import Ownerfi5 from "./ownerfi/5.jpg"
import Ethco1 from "./ethco/1.jpg"
import Ethco2 from "./ethco/2.jpg"
import Ethco3 from "./ethco/3.jpg"
import Ethco4 from "./ethco/4.jpg"
import Ethco5 from "./ethco/5.jpg"
import Techtank1 from "./techtank/1.jpg"
import Techtank2 from "./techtank/2.jpg"
import Techtank3 from "./techtank/3.jpg"
import Techtank4 from "./techtank/4.jpg"
import Techtank5 from "./techtank/5.jpg"
import Maxim1 from "./maxim/1.jpg"
import Maxim2 from "./maxim/2.jpg"
import Maxim3 from "./maxim/3.jpg"
import Maxim4 from "./maxim/4.jpg"
import Maxim5 from "./maxim/5.jpg"
import Ecokpala1 from "./ecokpala/1.jpg"
import Ecokpala2 from "./ecokpala/2.jpg"
import Ecokpala3 from "./ecokpala/3.jpg"
import Ecokpala4 from "./ecokpala/4.jpg"

import ComfyTag1 from "./comfytag/2.jpg"
import ComfyTag2 from "./comfytag/1.jpg"
import ComfyTag3 from "./comfytag/01.jpg"
import ComfyTag4 from "./comfytag/3.jpg"




export const technologies = [
  "JavaScript",
  "Axios",
  "React",
  "CSS-in-JS",
  "TypeScript",
  "NodeJS",
  "Sass",
  "Nextjs",
  "TailwindCss",
  "VITE"
];

export const skills = [
  "Design Systems",
  "Performance Optimization",
  "PWAs",
  "Progressive Enhancement",
  "Responsive Web Design",
  "SE Optimization",
];

export const projectList = [
  {
    path: "comfytag",
    img: [ComfyTag1,ComfyTag2,ComfyTag3,ComfyTag4],
    client: "Project",
    industry: "Events",
    title: "Comfytag",
    link: ["https://comfytag.vercel.app", "https://comfytag-dash.vercel.app"],
    text: `We are the leading online ticket platform for events and activities. We provide a convenient and secure way for you to purchase tickets to your favorite music festivals, sporting events, theatrical performances, and more.`,
    tasks: ["VITE", "React", "ExpressJs","MongoDB","Nodejs", "NextJs", "Redux Toolkit", "AntDesign", "ContextApi", ],
    role: "Fullstack"
  },
  {
    path: "ayrem",
    img: [Ayrem1,Ayrem2,Ayrem3,Ayrem4,Ayrem5],
    client: "Ayrem LTD",
    industry: "Cryptocurrency, Fintech",
    title: "Ayrem App",
    link: ["https://ayrem.net/"],
    text: `Ayrem is a fast and seamless digital platform that provides access to exchanging digital assets like bitcoin and gift cards. We are redefining Africa’s digital currency exchange space by making your digital transactions easier. We bring you secure and trusted means in your digital asset exchanges for cash.`,
    tasks: ["HTML", "JavaScript", "CSS", "API", "Axios"],
    role: "Frontend"
  },
  {
    path: "ownerfi",
    img: [Ownerfi1,Ownerfi2,Ownerfi3,Ownerfi4,Ownerfi5],
    client: "Ownerfi LTD",
    industry: "Proptech, Real Estate",
    title: "Ownerfi App",
    link: ["www.ownerfi.com"],
    text: `Ownerfi is an innovative real estate company that provides homeowners and landlords a creative way to sell their property and at the same time earn trues passive income without the stress of Property management. Our creative owner financing solution is a groundbreaking product for millions of American landlords and homeowners.`,
    tasks: ["React", "Firebase", "Google places", "Emailjs-com", "Context api","Ant Design","ReactQuill"],
    role: "Web Developer"
  },
  {
    path: "ethco",
    img: [Ethco1,Ethco2,Ethco3,Ethco4,Ethco5],
    client: "Ethco Uk",
    industry: "Foodtech, E-commerce",
    title: "Ethco",
    link: ["https://www.getethco.com/"],
    text: `Ethco help Ethnic and Independent convenience store owners with low technical skills go online in the easiest way possible. We are leveraging artificial intelligence (AI) to make it extremely easy for our stores to automate processes and shorten the process of creating and publishing products.`,
    tasks: ["HTML", "JavaScript", "CSS", "Airtable", "Formspree", "React", "Nextjs", "Redux", "Ant Design"],
    role: "Frontend"
  },
  {
    path: "techtanks",
    img: [Techtank1, Techtank5, Techtank2, Techtank3, Techtank4, Techtank5],
    client: "TechTanks LTD",
    industry: "Proptech, Real Estate",
    title: "TechTanks Landing page",
    link: ["https://techtanks.tech"],
    text: `TechTanks is an IT solutions (Web, mobile app, custom software development, type approval, etc) company in Nigeria. We are a diverse group of digital strategists, technologists, critical thinkers, and thought leaders. We offer a comprehensive set of software development and technical services from requirements discovery to support and promote high quality and continuous improvement.`,
    tasks: ["React", "Emailjs-com","Bootstrap", "CSS"],
    role: "Web Developer"
  },
  {
    path: "maxim",
    img: [Maxim2, Maxim1, Maxim3, Maxim4, Maxim5],
    client: "MONSTERLABS TECHNOLOGIES LTD",
    industry: "Proptech, Real Estate",
    title: "Maxim Landing page",
    link: ["https://maxim-v2.netlify.app"],
    text: `Maxim Infrastructure connects and processes financial and non-financial data sources into usable data formats available for individual credit and background appraisals globally.`,
    tasks: ["TailwindCss", "JavaScript", "CSS", "Airtable"],
    role: "Web Developer"
  },
  {
    path: "ecokpala",
    img: [Ecokpala1, Ecokpala2, Ecokpala3, Ecokpala4],
    client: "Emmanuel Okpala",
    industry: "Consulting Agency",
    title: "Ecokpala Booking website",
    link: ["https://www.ecokpala.com/"],
    text: `A decade of experience in consultancy, design, operations and management. My experience spans for-profit, non-profit, and governmental organisations. My background is in Architecture and Urban Design. I have managed projects, programs and business development roles for leading organisations in Nigeria.`,
    tasks: ["React", "Ant-Design", "Bootstrap", "Firebase", "Airtable"],
    role: "Web Developer"
  },
];


export const companies = [
  {
    role: "Frontend Developer",
    name: "Pixelgum",
    date: {
      start: "May 2021",
      end: "Present",
    },
    contract: "Part time",
    brief:
      "Shaping the future of commerce and entrepreneurship – building and advocating for inclusive and thoughtful experiences for over three million merchants across the globe.",
    tasks: [ "JavaScript",
    "React",
    "CSS-in-JS",
    "TypeScript",
    "NodeJS",
    "Sass",
    "Next.js",
    "TailwindCss",
    "Bootstrap"
  ],
    link: "#",
  },
  {
    role: "Frontend Developer",
    name: "Ethco UK",
    date: {
      start: "August 2022",
      end: "April 2023",
    },
    contract: "Part time",
    brief: `Ethco is helping ethnic and independent stores go digital using low-touch technology, whilst assisting customers to order from their local store online.`,
    tasks: ["React", "Nextjs", "Redux", "Ant Design", "Airtable", "Formspree","JavaScript", "CSS" ],
    link: "https://www.getethco.com",
  },
  {
    role: "Frontend Developer",
    name: "Ayrem",
    date: {
      start: "May 2020",
      end: "February 2021",
    },
    contract: "Part time",
    brief: `Ayrem is a fast and seamless digital platform that provides access to exchanging digital assets like bitcoin and gift cards. We are redefining Africa’s digital currency exchange space by making your digital transactions easier. We bring you secure and trusted means in your digital asset exchanges for cash.`,
    tasks: ["HTML", "JavaScript", "CSS", "API", "Axios"],
    link: "https://ayrem.net/",
    duties: [

    ]
  },
];




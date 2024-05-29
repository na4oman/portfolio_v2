import {
  SiReact,
  SiNextdotjs,
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiNodedotjs,
  SiMui,
  SiBootstrap,
  SiPostman,
  SiGithub,
  SiGit,
  SiFirebase,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiVercel,
  SiNetlify,
  SiLinkedin,
  SiFacebook,
} from 'react-icons/si'
import { FaSass } from 'react-icons/fa'

export const navLinks = [
  {
    id: 1,
    title: 'About',
    href: 'about',
  },
  {
    id: 2,
    title: 'My Skills',
    href: 'skills',
  },
  {
    id: 3,
    title: 'Work',
    href: 'work',
  },
  {
    id: 4,
    title: 'Contact',
    href: 'contact',
  },
]

export const socialLinks = [
  {
    name: 'linkedin',
    href: 'https://www.linkedin.com/in/atanas-irikev-1247051b3/',
    icon: <SiLinkedin size='1.5rem' />,
  },
  {
    name: 'github',
    href: 'https://github.com/na4oman',
    icon: <SiGithub size='1.5rem' />,
  },
  {
    name: 'facebook',
    href: 'https://www.facebook.com/atanas.t.irikev/',
    icon: <SiFacebook size='1.5rem' />,
  },
]

export const mySkills = [
  {
    skill: 'HTML5',
    icon: <SiHtml5 color='#e75212' size='4rem' />,
  },
  {
    skill: 'CSS3',
    icon: <SiCss3 color='#2965f1' size='4rem' />,
  },
  {
    skill: 'Sass',
    icon: <FaSass color='#c76494' size='4rem' />,
  },
  {
    skill: 'React',
    icon: <SiReact color='#61dbfb' size='4rem' />,
  },
  {
    skill: 'Next.js',
    icon: <SiNextdotjs color='#fff' size='4rem' />,
  },
  {
    skill: 'MongoDB',
    icon: <SiMongodb color='#00ed64' size='4rem' />,
  },
  {
    skill: 'Express',
    icon: <SiExpress color='#fff' size='4rem' />,
  },
  {
    skill: 'JavaScript',
    icon: <SiJavascript color='#f7e018' size='4rem' />,
  },
  {
    skill: 'Node.js',
    icon: <SiNodedotjs color='#83cd29' size='4rem' />,
  },
  {
    skill: 'MUI',
    icon: <SiMui color='#00b0ff' size='4rem' />,
  },
  {
    skill: 'Bootstrap',
    icon: <SiBootstrap color='#7a09f7' size='4rem' />,
  },
  {
    skill: 'Postman',
    icon: <SiPostman color='#ff6c37' size='4rem' />,
  },
  {
    skill: 'GitHub',
    icon: <SiGithub color='#fff' size='4rem' />,
  },
  {
    skill: 'Git',
    icon: <SiGit color='#f05033' size='4rem' />,
  },
  {
    skill: 'Firebase',
    icon: <SiFirebase color='#ffcb2c' size='4rem' />,
  },
  {
    skill: 'TailwindCSS',
    icon: <SiTailwindcss color='#38bdf8' size='4rem' />,
  },
  {
    skill: 'Vercel',
    icon: <SiVercel color='#fff' size='4rem' />,
  },
  {
    skill: 'Netlify',
    icon: <SiNetlify color='#3aafbc' size='4rem' />,
  },
]

export const themes = [
  'light',
  'dark',
  'cupcake',
  'bumblebee',
  'emerald',
  'corporate',
  'synthwave',
  'retro',
  'cyberpunk',
  'valentine',
  'halloween',
  'garden',
  'forest',
  'aqua',
  'lofi',
  'pastel',
  'fantasy',
  'wireframe',
  'black',
  'luxury',
  'dracula',
  'cmyk',
  'autumn',
  'business',
  'acid',
  'lemonade',
  'night',
  'coffee',
  'winter',
  'dim',
  'nord',
  'sunset',
]

export const projects = [
  {
    id: '1',
    title: 'Travel App',
    technologies: 'Mui, NextJS, MongoDB, Mapbox',
    summary:
      'Fully responsive product application with functionality: search, bookmarks, pagination, product detail page, Mapbox for showing product location, adding comments. Using MongoDB for storing data. SWR hook for data fetching.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/mui-next-travel-app.png',
    demoLink: 'https://mui-nextjs-travel-app-atanas.netlify.app',
    codeLink: 'https://github.com/na4oman/mui-nextjs-travel-app',
  },
  {
    id: '2',
    title: 'YelpCamp',
    technologies: 'NodeJS, Express, MongoDB, Mapbox',
    summary:
      'Fully responsive RESTful API with CRUD functionality. EJS template for generating HTML markup. Login using PassportJS along with Mapbox location, storing images in Cloudinary. MongoDB is used for storing data as campgrounds, users, reviews and logout session.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/yelpcamp.png',
    demoLink: 'https://yelp-camp-atanas.onrender.com/',
    codeLink: 'https://github.com/na4oman/yelp-camp',
  },
  {
    id: '3',
    title: 'Proshop shopping App',
    technologies: 'MongoDB, Express, React, NodeJS',
    summary:
      'Fully responsive e-commerce application with full CRUD functionality along with search, pagination, product detail page, posting product review, login with JWT, user profile page, PayPal payments. Admin dashboard for managing all users, products and orders. Used React-Bootstrap, React-Router, Redux-Thunk.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/proshop.png',
    demoLink: 'https://proshop-app-atanas.onrender.com/',
    codeLink: 'https://github.com/na4oman/proshopapp',
  },
  {
    id: '4',
    title: 'Natours tours',
    technologies: 'NodeJS, Express, MongoDB, Stripe, JWT',
    summary:
      'Tours app with functionality: detail tour page, login with JWT, buy tour using Stripe payments, user profile page, my tours page, adding reviews. Using MongoDB for storing tours, users, reviews, bookings. Pug template for generating HTML markup.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/natours-tours.png',
    demoLink: 'https://natours-app-atanas.onrender.com/',
    codeLink: 'https://github.com/na4oman/natours',
  },
  // {
  //   id: '5',
  //   title: 'Quotes App',
  //   technologies: 'React, Redux Toolkit, Firebase',
  //   summary:
  //     'Fully responsive quotes app where you can create and comment quotes. Using CSS modules for styling, Firebase as a DB and Redux Toolkit for getting and fetching http requests. Pages: All quotes, New quote, Quote detail and Not found.',
  //   description:
  //     'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
  //   image: '/images/projects/quotes.png',
  //   demoLink: 'https://quotes-app-atanas.netlify.app',
  //   codeLink: 'https://github.com/na4oman/quotes-app',
  // },
  // {
  //   id: '6',
  //   title: 'Forkify',
  //   technologies: 'JavaScript, SASS',
  //   summary:
  //     'Food recipe app. Fetching DB from external API with functionality: search, pagination, bookmarks, create new recipe. It is used localStorage for storing session data.',
  //   description:
  //     'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
  //   image: '/images/projects/forkify.png',
  //   demoLink: 'https://forkify-atanas.netlify.app',
  //   codeLink: 'https://github.com/na4oman/forkify-search-food-app',
  // },
  {
    id: '7',
    title: 'Omnifood',
    technologies: 'React, TailwindCSS',
    summary:
      'Fully responsive product landing page created with React and TailwindCSS. Designed and created by Jonas Schmedtmann in his HTML and CSS Udemy course and recreated by me using modern technologies like React and TailwindCSS.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/omnifood.png',
    demoLink: 'https://omnifood-react-tailwindcss.netlify.app/',
    codeLink: 'https://github.com/na4oman/omnifood-react-tailwindcss',
  },
  {
    id: '8',
    title: 'Natours with SASS',
    technologies: 'HTML, CSS, SASS',
    summary:
      'Fully responsive product landing page created only with HTML and SASS. It uses best practises for structuring a page with HTML5 semantic elements. Using SASS for styling the page as well as best practices to structure Sass files.',
    description:
      'Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna. Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna, Torem ipsum dolor sit amet, consectetur adipisicing elitsed do eiusmo tempor incididunt ut labore et dolore magna',
    image: '/images/projects/natours-with-sass.png',
    demoLink: 'https://natours-with-css-and-sass-atanas.netlify.app/',
    codeLink: 'https://github.com/na4oman/natours-with-sass',
  },
]

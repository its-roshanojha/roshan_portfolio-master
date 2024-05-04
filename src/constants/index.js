import {
  pnrimg,
  qrgenimg,
  gymimg,
  portfolioimg,
  borrowandlendahandimg,
  phantompressimg,
  paypolimg,
  tribetangoimg,
  infinitemealsimg,
  gitmeimg,
  aksharpharmacyimg,
} from "../assets/projectscreenshots/";
import materialuiicon from "../assets/skills/materialui.svg";
import golangicon from "../assets/skills/golang.svg";
import nextjsicon from "../assets/skills/nextjs.svg";
import daisyuiicon from "../assets/skills/daisyui.svg";

export const socialIcons = [
  {
    name: "github",
    class: " fa-brands fa-github",
    link: "https://github.com/its-roshanojha",
    text: "Fork My Repos On Github",
  },
  {
    name: "linkedin",
    class: " fa-brands fa-linkedin",
    link: "https://www.linkedin.com/in/roshanojha/",
    text: "Connect On LinkedIn",
  },
  {
    name: "email",
    class: "fa-solid fa-envelope",
    link: "mailto:its.roshanojha@example.com",
    text: "Send me an Email",
  },
  {
    name: "youtube",
    class: "fa-brands fa-youtube",
    link: "https://www.youtube.com/channel/UCb2YxqW4tBbPQEniY5oZdOw",
    text: "Subscribe on YouTube",
  },
];

export const project = [
  {
    title: "Infinite Meals",
    img: infinitemealsimg,
    subtitle: [
      {
        value:
          "Infinite Meals is a recipe search engine that uses OpenAI's GPT-3.5-Turbo-1106 Model through Open AI API to generate recipes for any given Food. ",
      },
      {
        value:
          "It's a simple and easy way to find new recipes and get inspiration for your next meal.",
      },
    ],
    link: "https://imeals.rajaryan.work/",
    gitlink: "https://github.com/8rxn/infinitemeals",
  },
  {
    title: "Akshar Pharmacy",
    img: aksharpharmacyimg,
    subtitle: [
      {
        value:
        "Brand Website for Akshar Pharmacy, an Amazon-based company specialising in Ayurvedic beauty items",
      },
    ],
    link: "https://www.aksharpharmacy.com/",
    state: "Freelance",
  },
  {
    title: "GitMe",
    img: gitmeimg,
    subtitle: [
      {
        value:
          "GitMe is a Github Card Generator that uses Github API to fetch user data and generate a card for the user. ",
      },
      {
        value: "Runs on Cloudflare Workers.",
      },
    ],
    link: "https://gitme.rajaryan.work/",
    gitlink: "https://github.com/8rxn/gitme",
  },
  
  {
    title: "TribeTango",
    img: tribetangoimg,
    subtitle: [
      {
        value:
          "TribeTango is a platform for our fellow gamers to connect and interact with each other while making this whole process fun and rewarding just like a game.",
      },
      { value: "HACK 36 6.0 - Awarded Best Use of Verbwire API" },
    ],
    link: "https://tribetango.vercel.app",
    gitlink: "https://github.com/8rxn/projectbarfi",
  },
  {
    title: "PayPol",
    img: paypolimg,
    subtitle: [
      {
        value:
          "A web3 based project for managing transactions and cryptocurrencies on the Ethereum blockchain.",
      },
      { value: "EthForAll By Devfolio" },
    ],
    link: "https://paypol.vercel.app",
    gitlink: "https://github.com/anushrxy/project-1ndex",
  },
  {
    title: "PNR Tracker",
    img: pnrimg,
    subtitle: [
      {
        value:
          "   Provides Realtime Data About Your PNR along with all relevant information.",
      },
    ],
    link: "https://trackpnr.rajaryan.work/",
    gitlink: "https://github.com/8rxn/pnr-tracker-rxn",
  },
  {
    title: "Phantom Press",
    img: phantompressimg,
    subtitle: [
      {
        value:
          "An application service designed to help share anonymous bits of news without any fear.",
      },
      { value: "HackNitr 4.0- Awarded Best Use of Auth0 " },
    ],
    link: "https://phantompress.co",
    gitlink: "https://github.com/duckling69/phantompress",
  },

  {
    title: "BorrowAndLend-a-hand",
    img: borrowandlendahandimg,
    subtitle: [
      {
        value:
          "An application service that helps the community share and reduce wastage of resources.",
      },
      {
        value:
          "Hacky New Year - Awarded Best Sustainability Hack sponsored by Avanade ",
      },
    ],
    link: "https://borrowandlend-a-hand.vercel.app/",
    gitlink: "https://github.com/duckling69/Borrowandlendahand",
  },
  {
    title: "QR Gen",
    img: qrgenimg,
    subtitle: [
      {
        value:
          " Creates Qr Codes from input Prompt with customization such as size and dark mode",
      },
    ],
    link: "https://getqr.rajaryan.work",
    gitlink: "https://github.com/8rxn/qrgen",
  },
  {
    title: "GYM-RXN",
    img: gymimg,
    subtitle: [
      {
        value:
          " Provides collection of thousands of exercise categorised by muscle group and equipment. ",
      },
    ],
    link: "https://gymrxn.netlify.app/",
    gitlink: "https://github.com/8rxn/gym-app-jsmastery",
  },
];

export const techStack = [
  {
    className: "fa-brands fa-html5",
  },
  {
    className: "fa-brands fa-css3",
  },
  {
    className: "fa-brands fa-js",
  },
  {
    className: "fa-brands fa-react",
  },
  {
    className: "fa-brands fa-git-alt",
  },
  {
    className: "fa-brands fa-github",
  },
  {
    className: "fa-brands fa-docker",
  },
  {
    src: materialuiicon,
  },
  {
    className: "fa-brands fa-bootstrap",
  },
];

import Kenai from "../assets/kenai.png";
import Rachi from "../assets/Rachi.png";
import Naped from "../assets/naped.png";
import Plan from "../assets/plan.png";
import Backend from "../assets/backend.png";
import MecanicaMundial from "../assets/mecanica-mundial.png";
import CodeNFT from "../assets/tela.png";




export interface ProjectType{
  id: number,
  imgPath: string,
  title: string,
  description: string,
  tools: string[],
  github: string,
  web: string, 
  category: string
}

export const PROJECTS_MOCK: ProjectType[] = [
  {
    id: 1,
    imgPath: Kenai,
    title: "Kenai",
    description: "Serviço de streaming",
    tools: ["react", "typescript", "axios", "react-icons","react-router-dom", "styled-components"],
    github: "https://github.com/Gguife/kenai",
    web: "https://kenai-murex.vercel.app",
    category: "Front-end"
  },
  {
    id: 2,
    imgPath: CodeNFT,
    title: "CodeNFT",
    description: "Landing Page de NFTs",
    tools: [  "react","typescript", "CSS", "swiper", "framer-motion"],
    github: "https://github.com/Gguife/CodeNFT",
    web: "https://codenft-virid.vercel.app/",
    category: "Front-end"
  },
  {
    id: 3,
    imgPath: Plan,
    title: "Plano",
    description: "Plateforma de vendas de plano",
    tools: ["react", "CSS", "javascript", "react-router-dom"],
    github: "https://github.com/Gguife/planPurchase",
    web: "https://plan-gamma.vercel.app/",
    category: "Front-end"
  },
  {
    id: 4,
    imgPath: MecanicaMundial,
    title: "Mecânica Mundial",
    description: "Empresa Mecânica mundial",
    tools: ["react", "typescript", "formspree", "phosphor-icons", "react-router-dom", "styled-components" ],
    github: "",
    web: "https://mecanica-mundial.netlify.app/",
    category: "Front-end"
  },
  {
    id: 5,
    imgPath: Backend,
    title: "API livros",
    description: "API de livros DNC",
    tools: ["nodejs", "express", "mongoose", "dotenv", "mongodb"],
    github: "https://github.com/Gguife/livrosDNC-Backend",
    web: "",
    category: "Back-end"
  },
  {
    id: 6,
    imgPath: Backend,
    title: "Board Tasks",
    description: "Projeto BoardTasks",
    tools: ["nodejs", "express", "swagger", "jsonwebtoken", "bcrypt", "dotenv", "mongoose", "mongodb"],
    github: "https://github.com/Gguife/BoardTasks-back",
    web: "",
    category: "Back-end"
  },
  {
    id: 7,
    imgPath: Backend,
    title: "RESTful API",
    description: "Java RESTful API Back-end Santander",
    tools: ["java", "spring-boot", "spring-data-jpa"],
    github: "https://github.com/Gguife/RESTful-API-Dio",
    web: "",
    category: "Back-end"
  },
  {
    id: 8,
    imgPath: Naped,
    title: "Naped",
    description: "Sua plataforma de entretenimento",
    tools: ["react", "typescript", "CSS", "react-router-dom"],
    github: "https://github.com/Gguife/Naped",
    web: "https://naped-nine.vercel.app/",
    category: "Front-end"
  }, 
  {
    id: 9,
    imgPath: Backend,
    title: "Finance API",
    description: "Tudo em um só lugar",
    tools: ["nodejs", "express", "dotenv", "mysql", "knex", "jsonwebtoken", "express-bearer-token"],
    github: "https://github.com/Gguife/finance-fullstack-api",
    web: "",
    category: "Back-end"
  }, 
  {
    id: 10,
    imgPath: Rachi,
    title: "Rachi",
    description: "Tudo em um só lugar",
    tools: ["HTML", "CSS", "javascript"],
    github: "https://github.com/Gguife/Rachi",
    web: "https://gguife.github.io/Rachi/",
    category: "Front-end"
  },
  {
    id: 11,
    imgPath: Backend,
    title: "Produto digital",
    description: "Escola DNC",
    tools: ["nodejs", "express", "docker", "mysql", "knex"],
    github: "https://github.com/Gguife/Ednc",
    web: "",
    category: "Back-end"
  },
  {
    id: 12,
    imgPath: Backend,
    title: "API para Conversão monetária",
    description: "Escola DNC",
    tools: ["nodejs", "express", "axios", "dotenv", "jest", "sequelize", "mysql"],
    github: "https://github.com/Gguife/Challenge-bravo",
    web: "",
    category: "Back-end"
  },
]
import Kenai from "../assets/kenai.png";
import Rachi from "../assets/Rachi.png";
import Naped from "../assets/naped.png";
import Plan from "../assets/plan.png";
import Backend from "../assets/code.png";
import MecanicaMundial from "../assets/mecanica-mundial.png";
import CodeNFT from "../assets/tela.png";




export interface ProjectType{
  id: number,
  imgPath: string,
  title: string,
  description: string,
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
    github: "https://github.com/Gguife/kenai",
    web: "https://kenai-murex.vercel.app",
    category: "Front-end"
  },
  {
    id: 2,
    imgPath: CodeNFT,
    title: "CodeNFT",
    description: "Landing Page de NFTs",
    github: "https://github.com/Gguife/CodeNFT",
    web: "https://codenft-virid.vercel.app/",
    category: "Front-end"
  },
  {
    id: 3,
    imgPath: Plan,
    title: "Plano",
    description: "Plateforma de vendas de plano",
    github: "https://github.com/Gguife/planPurchase",
    web: "https://plan-gamma.vercel.app/",
    category: "Front-end"
  },
  {
    id: 4,
    imgPath: MecanicaMundial,
    title: "Mecânica Mundial",
    description: "Empresa Mecânica mundial",
    github: "",
    web: "https://mecanica-mundial.netlify.app/",
    category: "Front-end"
  },
  {
    id: 5,
    imgPath: Backend,
    title: "API livros",
    description: "API de livros DNC",
    github: "https://github.com/Gguife/livrosDNC-Backend",
    web: "",
    category: "Back-end"
  },
  {
    id: 6,
    imgPath: Backend,
    title: "Board Tasks",
    description: "Projeto BoardTasks",
    github: "https://github.com/Gguife/BoardTasks-back",
    web: "",
    category: "Back-end"
  },
  {
    id: 7,
    imgPath: Backend,
    title: "RESTful API",
    description: "Java RESTful API Back-end Santander",
    github: "https://github.com/Gguife/RESTful-API-Dio",
    web: "",
    category: "Back-end"
  },
  {
    id: 8,
    imgPath: Naped,
    title: "Naped",
    description: "Sua plataforma de entretenimento",
    github: "https://github.com/Gguife/Naped",
    web: "https://naped-nine.vercel.app/",
    category: "Front-end"
  }, 
  {
    id: 9,
    imgPath: Backend,
    title: "Integração e modelagem de dados de um produto digital",
    description: "Escola DNC",
    github: "https://github.com/Gguife/Ednc",
    web: "",
    category: "Back-end"
  }, 
  {
    id: 10,
    imgPath: Rachi,
    title: "Rachi",
    description: "Tudo em um só lugar",
    github: "https://github.com/Gguife/Rachi",
    web: "https://gguife.github.io/Rachi/",
    category: "Front-end"
  },
]
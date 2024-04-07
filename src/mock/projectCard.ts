import Kenai from "../assets/kenai.png";
import Rachi from "../assets/Rachi.png";
import Naped from "../assets/naped.png";
import Backend from "../assets/backend.png";
import MecanicaMundial from "../assets/mecanica-mundial.png";
import CodeNFT from "../assets/tela.png";
import Clima from "../assets/clima.png";




export interface ProjectType{
  id: number,
  imgPath: string,
  title: string,
  description: string,
  tools: string[],
  desc: string,
  web: string, 
  category: string
}

export const PROJECTS_MOCK: ProjectType[] = [
  {
    id: 1,
    imgPath: Kenai,
    title: "Kenai",
    description: "Serviço de streaming",
    tools: ["react", "typescript"],
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    web: "https://kenai-murex.vercel.app",
    category: "Front-end"
  },
  {
    id: 2,
    imgPath: CodeNFT,
    title: "CodeNFT",
    description: "Landing Page de NFTs",
    tools: [  "react","typescript", "CSS"],
    desc: "",
    web: "https://codenft-virid.vercel.app/",
    category: "Front-end"
  },
  {
    id: 3,
    imgPath: MecanicaMundial,
    title: "Mecânica Mundial",
    description: "Empresa Mecânica mundial",
    tools: ["react", "typescript"],
    desc: "",
    web: "https://mecanica-mundial.netlify.app/",
    category: "Front-end"
  },
  {
    id: 4,
    imgPath: Backend,
    title: "API livros",
    description: "API de livros DNC",
    tools: ["nodejs","mongodb"],
    desc: "",

    web: "https://github.com/Gguife/livrosDNC-Backend",
    category: "Back-end"
  },
  {
    id: 5,
    imgPath: Backend,
    title: "Board Tasks",
    description: "Projeto BoardTasks",
    tools: ["nodejs","swagger","mongodb"],
    desc: "",
    web: "https://github.com/Gguife/BoardTasks-back",
    category: "Back-end"
  },
  {
    id: 6,
    imgPath: Backend,
    title: "RESTful API",
    description: "Java RESTful API Back-end Santander",
    tools: ["java", "spring-boot"],
    desc: "",
    web: "https://github.com/Gguife/RESTful-API-Dio",
    category: "Back-end"
  },
  {
    id: 7,
    imgPath: Naped,
    title: "Naped",
    description: "Sua plataforma de entretenimento",
    tools: ["react", "typescript", "CSS"],
    desc: "",
    web: "https://naped-nine.vercel.app/",
    category: "Front-end"
  }, 
  {
    id: 8,
    imgPath: Backend,
    title: "Finance API",
    description: "Tudo em um só lugar",
    tools: ["nodejs","mysql"],
    desc: "",
    web: "https://github.com/Gguife/finance-fullstack-api",
    category: "Back-end"
  }, 
  {
    id: 9,
    imgPath: Rachi,
    title: "Rachi",
    description: "Tudo em um só lugar",
    tools: ["HTML", "CSS", "javascript"],
    desc: "",
    web: "https://gguife.github.io/Rachi/",
    category: "Front-end"
  },
  {
    id: 10,
    imgPath: Backend,
    title: "Produto digital",
    description: "Escola DNC",
    tools: ["nodejs", "docker", "mysql"],
    desc: "",
    web: "https://github.com/Gguife/Ednc",
    category: "Back-end"
  },
  {
    id: 11,
    imgPath: Backend,
    title: "API para Conversão monetária",
    description: "Escola DNC",
    tools: ["nodejs","jest", "sequelize", "mysql", "docker"],
    desc: "",
    web: "https://github.com/Gguife/Challenge-bravo",
    category: "Back-end"
  },
  {
    id: 12,
    imgPath: Clima,
    title: "Gguife clima",
    description: "Veja como está o tempo da sua cidade",
    tools: ["HTML", "CSS", "javascript"],
    desc: "",
    web: "https://gguife.github.io/Clima-JS/",
    category: "Front-end"
  },
]
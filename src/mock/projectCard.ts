import GguifeMovies from "../assets/Gguife-movies.png";
import Ggf from "../assets/GGF.png";
import EcommerceDNC from "../assets/E-commerce.png";
import PhoneStore from "../assets/phone-store.png"
import Plan from "../assets/plan.png";
import Backend from "../assets/backend.png";
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
    imgPath: GguifeMovies,
    title: "Gguife Movies",
    description: "Filmes em cartaz",
    github: "https://github.com/Gguife/Movie-list",
    web: "https://movie-list-mauve.vercel.app/",
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
    imgPath: Ggf,
    title: "GGF",
    description: "Plataforma de anúncios",
    github: "https://github.com/Gguife/OlxClone-GGF",
    web: "",
    category: "Front-end"
  },
  {
    id: 5,
    imgPath: EcommerceDNC,
    title: "E-commerce DNC",
    description: "Plataforma de E-commerce",
    github: "https://github.com/Gguife/E-commerce-DNC",
    web: "",
    category: "Front-end"
  },
  {
    id: 6,
    imgPath: Backend,
    title: "API livros",
    description: "API de livros DNC",
    github: "https://github.com/Gguife/livrosDNC-Backend",
    web: "",
    category: "Back-end"
  },
  {
    id: 7,
    imgPath: Backend,
    title: "Board Tasks",
    description: "Projeto BoardTasks",
    github: "https://github.com/Gguife/BoardTasks-back",
    web: "",
    category: "Back-end"
  },
  {
    id: 8,
    imgPath: Backend,
    title: "RESTful API",
    description: "Java RESTful API Back-end Santander",
    github: "https://github.com/Gguife/RESTful-API-Dio",
    web: "",
    category: "Back-end"
  },
  {
    id: 9,
    imgPath: MecanicaMundial,
    title: "Mecânica Mundial",
    description: "Empresa Mecânica mundial",
    github: "",
    web: "https://mecanica-mundial.netlify.app/",
    category: "Clientes"
  }, 
  {
    id: 10,
    imgPath: Backend,
    title: "Integração e modelagem de dados de um produto digital",
    description: "Escola DNC",
    github: "https://github.com/Gguife/Ednc",
    web: "",
    category: "Back-end"
  }, 
  {
    id: 11,
    imgPath: PhoneStore,
    title: "Loja de Celulares",
    description: "Plataforma de venda de Celulares",
    github: "https://github.com/Gguife/celular-store",
    web: "https://celular-store.vercel.app/",
    category: "Front-end"
  },
]
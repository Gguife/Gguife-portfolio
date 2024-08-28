import Kenai from "../assets/kenai.png";
import Rachi from "../assets/Rachi.png";
import Naped from "../assets/naped.png";
import Backend from "../assets/backend.png";
import SystemAuth from "../assets/systemAuth.png";
import MecanicaMundial from "../assets/mecanica-mundial.png";
import CodeNFT from "../assets/tela.png";
import Clima from "../assets/clima.png";




export interface ProjectType{
  id: number,
  imgPath: string,
  title: string,
  subtitle: string,
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
    subtitle: "Serviço de streaming",
    tools: ["react", "typescript"],
    desc: "O desenvolvimento deste site foi criado visando uma plataforma de streaming. Ao consumirmos uma API pública (TMDB) de filmes em cartaz, o site traz a sinopse do filme, sua língua de origem e muitos outros detalhes interessantes. O sistema foi desenvolvido totalmente em React com TypeScript. Tivemos o uso de ferramentas como Axios para fazer as requisições com a API, Styled-components para a estilização do nosso site e React-router-dom para a criação das rotas de login e a rota principal. Um sistema totalmente responsivo e intuitivo para o usuário.",
    web: "https://kenai-murex.vercel.app",
    category: "Front-end"
  },
  {
    id: 2,
    imgPath: CodeNFT,
    title: "CodeNFT",
    subtitle: "Landing Page de NFTs",
    tools: [  "react","typescript", "CSS"],
    desc: "Sistema criado com o objetivo de oferecer uma experiência maravilhosa ao usuário. Desenvolvi esta Landing Page com uma atenção grande aos detalhes, priorizando a responsividade e beleza estética do site. Utilizando tecnologias como React com Typescript, Framer Motion para animações e Swiper, foi criado um ambiente digital muito atrativo.",
    web: "https://codenft-virid.vercel.app/",
    category: "Front-end"
  },
  {
    id: 3,
    imgPath: MecanicaMundial,
    title: "Mecânica Mundial",
    subtitle: "Empresa Mecânica mundial",
    tools: ["react", "typescript"],
    desc: "Um projeto freelancer com o objetivo da captação de novos clientes. O projeto foi desenvolvido para aumentar a exposição da Mecânica Mundial ao público e facilitar o recebimento de currículos, centralizando tudo no site. A Mecânica Mundial é uma empresa familiar que atua no mercado há mais de 30 anos, no ramo de carros leves, nos modelos B2C e B2B. A Landing Page foi o meio proposto para dar maior visibilidade da empresa e de seus serviços e produtos.",
    web: "https://mecanica-mundial.netlify.app/",
    category: "Front-end"
  },
  {
    id: 4,
    imgPath: SystemAuth,
    title: "System authentication",
    subtitle: "Sistema de autenticação de usuários",
    tools: ["nodejs","MySQL", "Sequelize", "docker-compose", "Redis","Jest"],
    desc: "Um sistema de gerencimaneto de livros, desenvolvido em Node.js com Express, oferece um CRUD para inserir, visualizar, atualizar e remover os livros. Utilizando banco de dados não relacionais MongoDB para armazenar os dados inseridos. Com oesse sistema os usuários tem a liberdade de utilizá-lo conforme suas nessecidades, seja para catalogar os livros já lidos ou para manter uma lista dos livros desejados para leitura futura. ",
    web: "https://github.com/Gguife/livrosDNC-Backend",
    category: "Back-end"
  },
  {
    id: 5,
    imgPath: Backend,
    title: "Board Tasks",
    subtitle: "Projeto BoardTasks",
    tools: ["nodejs","swagger","mongodb"],
    desc: "Desenvolvido em Node.js com Express, BoardTask tem como objetivo ajudar a organizar suas tarefas da melhor forma. Na sua criação, são utilizadas ferramentas como bcrypt para criptografia dos dados dos usuários e JWT para autenticação, além do Swagger para documentação automatizada, NoSQL MongoDB, entre outras. Seja na gestão de projetos complexos ou no gerenciamento de tarefas diárias, o BoardTask é a solução ideal para manter a produtividade e a organização em dia.",
    web: "https://github.com/Gguife/BoardTasks-back",
    category: "Back-end"
  },
  {
    id: 6,
    imgPath: Backend,
    title: "RESTful API",
    subtitle: "Java RESTful API Back-end Santander",
    tools: ["java", "spring-boot"],
    desc: "Em minha trajetória no bootcamp Santander, tive como desafio construir uma aplicação em Java com foco na criação de uma RESTful API. Utilizei o Spring Boot e o Spring Data para simplificar a integração com o banco de dados, com o planejamento desde da modelagem do banco de dados até sua integração usando MySQL. A aplicação simula uma conta bancária, armazenando e gerenciando os dados do usuário de forma eficiente e segura.",
    web: "https://github.com/Gguife/RESTful-API-Dio",
    category: "Back-end"
  },
  {
    id: 7,
    imgPath: Naped,
    title: "Naped",
    subtitle: "Sua plataforma de entretenimento",
    tools: ["react", "typescript", "CSS"],
    desc: "Desenvolvimento de uma Landing Page de entretenimento, visando muito a responsividade e o uso de rotas deixando projeto com uma interatividade maior e uma beleza única. Aprimorada para uma experiência de usuário agradável. Ferramentas usadas para o desenvolvimento foram o React com Typescript e o react-router-dom para as rotas da nossa aplicação. Todo o layout foi estilizado com CSS puro.",
    web: "https://naped-nine.vercel.app/",
    category: "Front-end"
  }, 
  {
    id: 8,
    imgPath: Backend,
    title: "Finance API",
    subtitle: "Tudo em um só lugar",
    tools: ["nodejs","mysql"],
    desc: "Contabilizando seus gastos e ganhos do mês, o Finance foi desenvolvido para um gerenciamento mais eficaz do seu dinheiro. Com ele, você consegue aprimorar seu controle financeiro. Desenvolvido em Node.js com Express, os dados são armazenados no banco de dados relacional MySQL, utilizando Knex para interagir com o banco e realizar a criação de suas migrações. No sistema, conseguimos realizar as operações matemáticas necessárias para, ao final do mês, retornarmos seu saldo exato, contabilizando seu defit ou granhos mensais.",
    web: "https://github.com/Gguife/finance-fullstack-api",
    category: "Back-end"
  }, 
  {
    id: 9,
    imgPath: Rachi,
    title: "Rachi",
    subtitle: "Tudo em um só lugar",
    tools: ["HTML", "CSS", "javascript"],
    desc: "Uma landing page clean, simples e encantadora. Feita em HTML, CSS e JavaScript puro, aqui apresentamos a landing page da marca Rachi - tudo o que você precisa. O site é totalmente responsivo, focando principalmente na beleza e nas informações do produto. Inclui uma seção detalhando como o Rachi funciona, seus aplicativos disponíveis para download e seus planos com preços detalhados, classificados como Bronze, Prata e Ouro.",
    web: "https://gguife.github.io/Rachi/",
    category: "Front-end"
  },
  {
    id: 10,
    imgPath: Backend,
    title: "Produto digital",
    subtitle: "Escola DNC",
    tools: ["nodejs", "docker", "mysql"],
    desc: "Integrando e modelando dados de um produto digital, esta aplicação utiliza imagens MySQL em um container Docker para interagir de forma eficiente com o sistema em Node.js. Com foco na simulação de um e-commerce, o software armazena informações detalhadas dos usuários, bem como dos produtos e suas respectivas quantidades em estoque. Trata-se de um sistema seguro que prioriza a rapidez de execução.",
    web: "https://github.com/Gguife/Ednc",
    category: "Back-end"
  },
  {
    id: 11,
    imgPath: Backend,
    title: "API para Conversão monetária",
    subtitle: "Escola DNC",
    tools: ["nodejs","jest", "sequelize", "mysql", "docker"],
    desc: "O Software de Conversão Monetária é um desafio proposto pela Bravo com o objetivo de proporcionar a conversão das quatro principais moedas: EUR, BRL, BTC e USD. Para isso, o sistema interage com uma API pública que fornece os preços atualizados das moedas, simplificando assim o processo de conversão. Desenvolvida com foco na rapidez e na entrega de dados precisos, a aplicação foi desenvolvida com o intuito de garantir que meu sistema suporte determinadas moedas e que suas operações sejam eficientes.",
    web: "https://github.com/Gguife/Challenge-bravo",
    category: "Back-end"
  },
  {
    id: 12,
    imgPath: Clima,
    title: "Gguife clima",
    subtitle: "Veja como está o tempo da sua cidade",
    tools: ["HTML", "CSS", "javascript"],
    desc: "Desenvolvida com HTML, CSS e JavaScript puro, esta aplicação utiliza uma API pública de clima para oferecer informações meteorológicas em tempo real. Com um design responsivo e intuitivo, o site combina beleza e charme, proporcionando uma experiência agradável aos usuários. Seja para verificar o clima local ou explorar diferentes regiões, esta aplicação é uma escolha elegante.",
    web: "https://gguife.github.io/Clima-JS/",
    category: "Front-end"
  },
]
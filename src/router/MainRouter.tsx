import { useRoutes } from "react-router-dom";
import Main from "../views/main/index.tsx";
import NotFound from "../views/404/index.tsx";
import ProjectsPage from "../views/project/allProjects/index.tsx";
import ProjectSelected from "../views/project/projectID/index.tsx";
import ArticlePage from "../views/article/blog/index.tsx";
import ArticleSelected from "../views/article/articleID/index.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Main />},
    {path: "/projetos", element: <ProjectsPage />},
    {path: "/projeto/:id", element: <ProjectSelected />},
    {path: "/blog", element: <ArticlePage />},
    {path: "/artigo/:id", element: <ArticleSelected />},
    { path: "*", element: <NotFound /> },
  ])

  return router;
}
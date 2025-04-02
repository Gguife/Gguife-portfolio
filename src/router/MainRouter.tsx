import { useRoutes } from "react-router-dom";
import About from "../views/about/index.tsx";
import Main from "../views/main/index.tsx";
import NotFound from "../views/404/index.tsx";
import ProjectSelected from "../components/projects/projectId/Project.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Main />},
    {path: "/sobre", element: <About />},
    {path: "/projeto/:id", element: <ProjectSelected />},
    { path: "*", element: <NotFound /> },
  ])

  return router;
}
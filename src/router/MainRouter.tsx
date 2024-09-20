import { useRoutes } from "react-router-dom";
import About from "../views/about/index.tsx";
import Main from "../views/main/index.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/article", element: <Main />},
    {path: "/", element: <About />},
  ])

  return router;
}
import { useRoutes } from "react-router-dom";
import About from "../views/about/index.tsx";
import Main from "../views/main/index.tsx";
import Login from "../views/login/index.tsx";
import Posts from "../views/posts/index.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Main />},
    {path: "/sobre", element: <About />},
    {path: "/login", element: <Login />},
    {path: "/all-posts", element: <Posts />},
  ])

  return router;
}
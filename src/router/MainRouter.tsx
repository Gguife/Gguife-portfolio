import { useRoutes } from "react-router-dom";
import About from "../views/about/index.tsx";
import Main from "../views/main/index.tsx";
import Login from "../views/login/index.tsx";
import ManagePost from "../views/dashboard/index.tsx";
import ProtectedRoute from "../components/jwt/index.tsx";
import NotFound from "../views/404/index.tsx";
import ProjectsView from "../views/project/view/index.tsx";
import CreateProject from "../views/project/create/index.tsx";
import ProjectEdit from "../views/project/edit/index.tsx";

export const MainRouter = () =>{
  const router = useRoutes([
    {path: "/", element: <Main />},
    {path: "/sobre", element: <About />},
    {path: "/login", element: <Login />},
    {
      path: "/dashboard",
      element: (
        <ProtectedRoute>
          <ManagePost />
        </ProtectedRoute>
      )
    },
    {
      path: "/gerencia/projetos",
      element: (
        <ProtectedRoute>
          <ProjectsView />
        </ProtectedRoute>
      )
    },
    {
      path: "/gerencia/projetos/criar",
      element: (
        <ProtectedRoute>
          <CreateProject />
        </ProtectedRoute>
      )
    },
    {
      path: "/gerencia/projetos/editar/:id",
      element: (
        <ProtectedRoute>
          <ProjectEdit />
        </ProtectedRoute>
      )
    },
    { path: "*", element: <NotFound /> },
  ])

  return router;
}
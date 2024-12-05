import { Link } from "react-router-dom";
import { ManageSection } from "./style.ts"
import axios from "axios";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { useEffect, useState } from "react";

interface CustomJwrPayload extends JwtPayload {
  id: string;
}


const ManagePost = () => {

  const [username, setUsername] = useState<string>("");

  const userData = async () => {
    const token = localStorage.getItem("token");

    if(!token) return console.error("Token não encontrado.")

    try{
      const decodeToken = jwtDecode<CustomJwrPayload>(token);
      const userId = decodeToken.id;

      if(!userId) return console.error("Id do usuário não encontrado");

      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/user/${userId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      const user = response.data.user;
      setUsername(user.username);
    }catch(err: any){
      console.error("Erro inesperado:", err);
    }
  } 

  useEffect(() => {
    userData();
  }, [])

  return (
    <ManageSection>
      <h1>Seja bem-vindo <span>{username}</span></h1>
      <div className="link-posts">
        <Link to="">Artigos</Link>
        <Link to="/gerencia/projetos">Projetos</Link>
      </div>
    </ManageSection>
  )
}


export default ManagePost;
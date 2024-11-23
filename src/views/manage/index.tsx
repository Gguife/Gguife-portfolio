import { Link } from "react-router-dom";
import { ManageSection } from "./style.ts"


const ManagePost = () => {
  return (
    <ManageSection>
      <h1>Seja bem-vindo <span>Usuário</span></h1>
      <div className="link-posts">
        <Link to="">Artigos</Link>
        <Link to="">Projetos</Link>
      </div>
    </ManageSection>
  )
}


export default ManagePost;
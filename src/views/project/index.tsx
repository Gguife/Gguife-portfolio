import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectSelectedSection } from "./style";
import { TbWorldCode } from "react-icons/tb";
import { FaCode } from "react-icons/fa";
import { FaTools } from "react-icons/fa";


interface Project {
  title: string;
  content: string;
  tools: string;
  linkDeploy: string;
  linkRepository: string;
  imageUrl: string;
}

const ProjectSelected = () => {
  const {id} = useParams();
  const [project, setProject] = useState<Project | null>(null);

  const projectFetch = async () => {
    try{
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/project/${id}`);
      const projectData = response.data.project;

      console.log(projectData)

      setProject(projectData);
    }catch(err: any){
      console.error("Erro ao buscar o projeto:", err.message);
    }
  }

  useEffect(() => {
    projectFetch();
  }, [])

  return (
    <ProjectSelectedSection>
      {project ? (
        <div key={id} className="project-selected-content">
          <img
            src={project.imageUrl}
            alt={`imagem do projeto ${project.title}`}
            />
          <h2>{project.title}</h2>
          <p>{project.content}</p>
          <ul className="tools">
            <span>tecnologias <FaTools className="tool-icon"/></span>
            {project.tools.split(", ").map((tool, index) => (
              <li key={index} className="tool">
                {tool}
              </li>
            ))}
          </ul>
          <div className="project-links">
            <a href={project.linkDeploy}>Versão web <TbWorldCode className="links-icon" /></a>
            <a href={project.linkRepository}>Código fonte<FaCode className="links-icon" /></a>
          </div>
        </div>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </ProjectSelectedSection>
  )

}

export default ProjectSelected;
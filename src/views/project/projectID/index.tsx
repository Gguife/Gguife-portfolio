import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectSelectedSection } from "./style";
import { TbWorldCode } from "react-icons/tb";
import { FaCode } from "react-icons/fa";

import { FcServices } from "react-icons/fc";


interface Project {
  title: string;
  introduction: string;
  content: string;
  tools: string[];
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
      const projectData = response.data;

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
              {project.tools.map((tool, index) => (
                  <li key={index} className="tool"><FcServices />{tool}</li>
              ))}
          </ul>
          <div className="project-links">
            {project.linkDeploy ? (
              <a href={project.linkDeploy}>Versão web <TbWorldCode className="links-icon" /></a>
            ) : (
              <span style={{display: "none"}}></span>
            )}
            {project.linkRepository ? (
              <a href={project.linkRepository}>Código fonte<FaCode className="links-icon" /></a>
            ) : (
              <span style={{display: "none"}}></span>
            )}
          
          </div>
        </div>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </ProjectSelectedSection>
  )

}

export default ProjectSelected;
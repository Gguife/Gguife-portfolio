import { useState } from "react";
import { ProjectSection, ProjectButton, ProjectCard } from "./style";
//MOCK
import { PROJECTS_MOCK } from "../../mock/projectCard";
//ICONS
import { TbWorldCode, TbCode } from "react-icons/tb";


export const Projects = () =>{
  const [activeTab, setActiveTab] = useState("Front-end");

  const handleTabClick = (category: string) => {
    setActiveTab(category);
  };

  // Filtrar projetos com base na categoria ativa
  const filteredProjects = PROJECTS_MOCK.filter(
    (project) => project.category === activeTab
  );
  return (
    <ProjectSection id="projetos">
      <h1>Meus Projetos</h1>
      <ProjectButton>
        <button onClick={() => handleTabClick("Front-end")} className={activeTab === "Front-end" ? "active-button" : ""}>Front-end</button>
        <button onClick={() => handleTabClick("Back-end")} className={activeTab === "Back-end" ? "active-button" : ""}>Back-end</button>
        <button onClick={() => handleTabClick("Clientes")} className={activeTab === "Clientes" ? "active-button" : ""}>Clientes</button>
      </ProjectButton>
      <ProjectCard>
      {filteredProjects.map((project) => (
          <div className="project-card" key={project.id}>
            <img src={project.imgPath} alt="Imagem do Projeto" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.github} target="_blank" rel="noopener noreferrer">
              <TbCode />
            </a>
            <a href={project.web} target="_blank" rel="noopener noreferrer">
              <TbWorldCode />
            </a>
          </div>
        ))}
      </ProjectCard>
    </ProjectSection>
  )
}
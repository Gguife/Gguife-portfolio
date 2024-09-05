import { useState, useEffect } from "react";
import { ProjectSection, ProjectButton, ProjectCard, ProjectCardDesc } from "./style";
import { PROJECTS_MOCK } from "../../mock/projectCard";
import { TbWorldCode } from "react-icons/tb";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";
import { IoEyeSharp, IoCloseCircleOutline } from "react-icons/io5";
import Motion from "../Motion";

type Project = {
  id: number;
  category: string;
  imgPath: string;
  title: string;
  subtitle: string;
  tools: string[];
  desc: string;
  web: string;
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Front-end");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [motionKey, setMotionKey] = useState(0);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setMotionKey((prevKey) => prevKey + 1);
  };

  const handleProjectClick = (project: Project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
  };

  useEffect(() => {
    const filtered = PROJECTS_MOCK.filter((project) => project.category === activeTab);
    setFilteredProjects(filtered);
  }, [activeTab]);

  return (
    <Motion className="section-projetos" id="projetos" key={motionKey}>
      <ProjectSection>
        <h1>Projetos</h1>
        <ProjectButton>
          <button onClick={() => handleTabClick("Front-end")} className={activeTab === "Front-end" ? "active-button" : ""}>
            Front-end
          </button>
          <button onClick={() => handleTabClick("Back-end")} className={activeTab === "Back-end" ? "active-button" : ""}>
            Back-end
          </button>
        </ProjectButton>
        <ProjectCard>
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
              <motion.div key={project.id} variants={item} className="project-card" onClick={() => handleProjectClick(project)}>
                <img src={project.imgPath} alt="Imagem do Projeto" />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  <p className="desc">{project.subtitle}</p>
                </div>
                <p className="tools">
                  {project.tools.map((tool) => (
                    <span key={tool} className={`tool-${tool.toLowerCase().replace(/\s+/g, '-')}`}>{tool}</span>
                  ))}
                </p>
                <IoEyeSharp className="eye-icon" />
              </motion.div>
            ))
          ) : (
            <p>Nenhum projeto encontrado para esta categoria.</p>
          )}
        </ProjectCard>
        <ProjectCardDesc show={selectedProject !== null}>
          {selectedProject && (
            <motion.div className="mobile-project-details">
              <span onClick={handleClose}><IoCloseCircleOutline className="closeIcon"/></span>
              <div className="details-container">
                <div className="top-contianer">
                  <img src={selectedProject.imgPath} alt="Imagem do Projeto" />
                  <h3>{selectedProject.title}<br/><span className="subtitle">{selectedProject.subtitle}</span></h3>
                </div>
                <div className="project-container-main">
                  <p className="project-container-desc">{selectedProject.desc}</p>
                  <span className="tools-title">🛠 Tecnologias</span>
                  <p className="project-container-tools">
                  {selectedProject.tools.map((tool) => (
                    <ul>
                      <li key={tool} className="tool">{tool}</li>
                    </ul>
                  ))}  
                  </p>
                </div>
                <a href={selectedProject.web} target="_blank">
                  Veja o projeto<TbWorldCode className="link-icon" />
                </a>
              </div>
            </motion.div>
          )}
        </ProjectCardDesc>
      </ProjectSection>
    </Motion>
  );
};

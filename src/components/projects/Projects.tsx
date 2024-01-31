import { useState, useEffect } from "react";
import { ProjectSection, ProjectButton, ProjectCard } from "./style";

import { PROJECTS_MOCK } from "../../mock/projectCard";

import { TbWorldCode, TbCode } from "react-icons/tb";

import Motion from "../Motion";
import { motion } from "framer-motion";
import { item } from "../../lib/Variants";

type Project = {
  id: number;
  category: string;
  imgPath: string;
  title: string;
  description: string;
  github: string;
  web: string;
};

export const Projects = () => {
  const [activeTab, setActiveTab] = useState("Front-end");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [motionKey, setMotionKey] = useState(0);

  const handleTabClick = (category: string) => {
    setActiveTab(category);
    setMotionKey((prevKey) => prevKey + 1);
  };

  useEffect(() => {
    const filtered = PROJECTS_MOCK.filter((project) => project.category === activeTab);
    setFilteredProjects(filtered);
  }, [activeTab]);

  return (
    <Motion className="section-projetos" id="projetos" key={motionKey}>
      <ProjectSection id="projetos">
        <h1>Meus Projetos</h1>
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
              <motion.div key={project.id}  variants={item} className="project-card">
                <img src={project.imgPath} alt="Imagem do Projeto" />
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <a href={project.github} target="_blank" rel="noopener noreferrer">
                  <TbCode />
                </a>
                <a href={project.web} target="_blank" rel="noopener noreferrer">
                  <TbWorldCode />
                  </a>
              </motion.div>
            ))
          ) : (
            <p>Nenhum projeto encontrado para esta categoria.</p>
          )}
        </ProjectCard>
      </ProjectSection>
    </Motion>
  );
};

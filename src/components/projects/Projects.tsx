import { useState, useEffect } from "react";
import { ProjectSection, ProjectButton, ProjectCard } from "./style";
import { IoEyeSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  content: string;
  tools: string;
  imageUrl: string;
  categoryId: number;
}

export const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]); // Armazena todos os projetos
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]); // Armazena os projetos filtrados
  const [visibleProjects, setVisibleProjects] = useState<number>(6); // Controla quantos projetos são visíveis inicialmente
  const [selectedCategory, setSelectedCategory] = useState<number>(1);

  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/projects`, {
        params: {username: 'linux'}
      });
      setAllProjects(response.data.projects || []);
    } catch (err: any) {
      console.error("Erro ao buscar projetos:", err);
    }
  };

  const filterProjectsByCategory = (categoryId: number) => {
    const filtered = allProjects.filter(
      (project) => project.categoryId === categoryId
    );
    setFilteredProjects(filtered);
  };

  const handleShowMore = () => {
    setVisibleProjects((prev) => prev + 6); // Incrementa o número de projetos visíveis
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjectsByCategory(selectedCategory);
    setVisibleProjects(6); // Reseta para 6 quando a categoria muda
  }, [selectedCategory, allProjects]);

  return (
    <ProjectSection>
      <h1>Projetos Pessoais</h1>
      <ProjectButton>
        <button
          onClick={() => setSelectedCategory(1)}
          style={{
            backgroundColor: selectedCategory === 1 ? "#f67f01" : "#f8f9fa",
            color: selectedCategory === 1 ? "black" : "black",
        }}>
          Front-end
        </button>
        <button
          onClick={() => setSelectedCategory(2)}
          style={{
            backgroundColor: selectedCategory === 2 ? "#f67f01" : "#f8f9fa",
            color: selectedCategory === 2 ? "black" : "black",
          }}
        >
          Back-end
        </button>
        <button
          onClick={() => setSelectedCategory(3)}
          style={{
            backgroundColor: selectedCategory === 3 ? "#f67f01" : "#f8f9fa",
            color: selectedCategory === 3 ? "black" : "black",
          }}
        >
          Sistemas
        </button>
      </ProjectButton>
      <ProjectCard>
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="project-card">
              <Link to={`/projeto/${project.id}`}>
                <img
                  src={project.imageUrl}
                  alt={`imagem do projeto ${project.title}`}
                />
                <h3>{project.title}</h3>
                <ul className="tools">
                  {project.tools.split(", ").map((tool, index) => (
                    <li key={index} className="tool">
                      {tool}
                    </li>
                  ))}
                </ul>
                <IoEyeSharp className="eye-icon" />
              </Link>
            </div>
          ))
        ) : (
          <p>Nenhum projeto encontrado para esta categoria.</p>
        )}
      </ProjectCard>
      {visibleProjects < filteredProjects.length && (
        <button onClick={handleShowMore} className="show-more">Mostrar mais <MdKeyboardDoubleArrowDown className="show-more-icon" /></button>
      )}
    </ProjectSection>
  );
};
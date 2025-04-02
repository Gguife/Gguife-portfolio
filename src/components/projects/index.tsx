import { useState, useEffect } from "react";
import { ProjectSection, ProjectButton, ProjectCard } from "./style";
import { IoEyeSharp } from "react-icons/io5";
import { MdKeyboardDoubleArrowDown } from "react-icons/md";
import axios from "axios";
import { Link } from "react-router-dom";
import Image from "../../assets/kenai.png";

interface Project {
  id: number;
  title: string;
  introduction: string;
  content: string;
  tools: string[];
  imageUrl: string;
  categoryId: number;
}

export const Projects = () => {
  const [allProjects, setAllProjects] = useState<Project[]>([]);
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [visibleProjects, setVisibleProjects] = useState<number>(6);
  const [selectedCategory, setSelectedCategory] = useState<number>(1);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(1);
  const limit = 8;

  const fetchProjects = async (newPage: number = 1) => {
    try {
      const username = "linux";
      const response = await axios.get(
        `${import.meta.env.VITE_BACKEND_URL}/projects/${username}?page=${newPage}&limit=${limit}`
      );

      setAllProjects(response.data.projects || []);
      setPage(response.data.page);
      console.log(response.data.total)
      setTotalPages(Math.ceil(response.data.total / limit));
    } catch (err: any) {
      console.error("Erro ao buscar projetos:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  useEffect(() => {
    filterProjectsByCategory(selectedCategory);
  }, [selectedCategory, allProjects]);

  const filterProjectsByCategory = (categoryId: number) => {
    const filtered = allProjects.filter(
      (project) => project.categoryId === categoryId
    );
    setFilteredProjects(filtered);
    setVisibleProjects(4);
  };

  return (
    <ProjectSection>
      <h1>Projetos pessoais mais recentes</h1>
      <ProjectButton>
        {[1, 2, 3].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            style={{
              backgroundColor: selectedCategory === category ? "#f67f01" : "#f8f9fa",
              color: "black",
            }}
          >
            {category === 1 ? "Front-end" : category === 2 ? "Back-end" : "Sistemas"}
          </button>
        ))}
      </ProjectButton>
      <ProjectCard>
        {filteredProjects.length > 0 ? (
          filteredProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className="project-card">
              <Link to={`/projeto/${project.id}`}>
                <img
                  src={project.imageUrl || Image}
                  alt={`Imagem do projeto ${project.title}`}
                />
                <h3>{project.title}</h3>
                <p className="introduction">{project.introduction}</p>
                <ul className="tools">
                  {project.tools.map((tool, index) => (
                    <li key={index} className="tool">{tool}</li>
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
        <button onClick={() => setVisibleProjects((prev) => prev + 6)} className="show-more">
          Mostrar mais <MdKeyboardDoubleArrowDown className="show-more-icon" />
        </button>
      )}

      <div className="pagination">
        <button disabled={page === 1} onClick={() => fetchProjects(page - 1)}>Anterior</button>
        <span>Página {page} de {totalPages}</span>
        <button disabled={page === totalPages} onClick={() => fetchProjects(page + 1)}>Próximo</button>
      </div>
    </ProjectSection>
  );
};

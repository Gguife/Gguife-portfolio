import { useState, useEffect } from "react";
import { ProjectSection, ProjectsCard } from "./style";
import axios from "axios";
import { Link } from "react-router-dom";

interface Project {
  id: number;
  title: string;
  introduction: string;
  content: string;
  tools: string[];
  imageUrl: string;
  categoryId: number;
}

const categoryNames: { [key: number]: string } = {
  1: "Frontend",
  2: "Backend",
  3: "Software"
}

export const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]); 
  const [filteredProjects, setFilteredProjects] = useState<Project[]>([]);
  const [selectedCategory, setSelectedCategory] = useState(1);
  const limit = 9;

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const username = "linux";
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/projects/${username}?limit=${limit}`
        );

        console.log(response.data.projects);
        setProjects(response.data.projects);
      } catch (err: any) {
        console.error("Erro ao buscar projetos:", err);
      }
    };

    fetchProjects(); 
  }, []);
  
  useEffect(() => {
    filteredProjectByCategory(selectedCategory);
  }, [projects, selectedCategory])


  const filteredProjectByCategory = (categoryId: number) => { 
    const filtered = projects.filter(
      (project) => project.categoryId === categoryId
    );
    setFilteredProjects(filtered);
  };

  return (
    <ProjectSection>
      <h1>Projetos</h1>
      
      <ProjectsCard>
        {filteredProjects.length === 0 ? (
          <p className="no-projects">Sem projetos para esta categoria...</p>
        ) : (
          <div className="projects-list">
            {filteredProjects.map((project) => (
              <div className="project-card" key={project.id}>
                <span>{categoryNames[project.categoryId]}</span>
                <h3>{project.title} <Link to={`/projeto/${project.id}`} className="internal-links read-about"> Veja projeto ➔</Link></h3>
                <p>{project.introduction}</p>
              </div>
            ))}
          </div>
        )}

        <div className="project-categories">
          <button onClick={() => setSelectedCategory(1)}
            style={{
              backgroundColor: selectedCategory === 1 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
              color: selectedCategory === 1 ? "var(--text-primary-color)" : "var(--text-second-color)",
          }}>
            Front-end
          </button>
          <button onClick={() => setSelectedCategory(2)}
            style={{
              backgroundColor: selectedCategory === 2 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
              color: selectedCategory === 2 ? "var(--text-primary-color)" : "var(--text-second-color)",
          }}>
            Back-end
          </button>
          <button onClick={() => setSelectedCategory(3)}
            style={{
              backgroundColor: selectedCategory === 3 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
              color: selectedCategory === 3 ? "var(--text-primary-color)" : "var(--text-second-color)",
          }}>
            Software
          </button>
        </div>
      </ProjectsCard>
      <Link to="/projetos" className="internal-links read-more">Veja todos os projetos ➔</Link>
    </ProjectSection>
  );
};

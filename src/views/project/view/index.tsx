import { Link } from "react-router-dom";
import { ProjectModal, ProjectPaginate, ProjectsCards, ProjectsViewSection } from "./style";
import { FaPen } from "react-icons/fa";
import axios from "axios";
import { useEffect, useState } from "react";

interface Project {
  id: number;
  title: string;
  content: string;
  tools: string;
  imageUrl: string;
}

const ProjectsView = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selectProjectId, setSelectProjectId] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState<string>('');
  const [take] = useState<number>(6);
  const [skip, setSkip] = useState<number>(0);
  const [total, setTotal] = useState<number>(0);


  const fetchProjects = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/projects`, {
        params: {search, take, skip}
      });

      setProjects(response.data.projects || []); 
      setTotal(response.data.total || 0);
    } catch (err: any) {
      console.error("Erro inesperado:", err);
    }
  };

  const openModal = (id: number) => {
    setSelectProjectId(id);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectProjectId(null);
  };

  const handlerDelete = async () => {
    if (selectProjectId === null) return;

    const token = localStorage.getItem("token");
    try {
      await axios.delete(`${import.meta.env.VITE_BACKEND_URL}/projects/${selectProjectId}`, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      setProjects((prev) => prev.filter((project) => project.id !== selectProjectId));
      closeModal();
    } catch (err: any) {
      console.error("Erro ao deletar projeto:", err);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, [search, skip]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    setSkip(0);
  }

  const handlePageClick = (pageNumber: number) => {
    setSkip((pageNumber - 1) * take);
  };

  const totalPages = Math.ceil(total / take);

  return (
    <ProjectsViewSection>
      <div className="header-section">
        <h1>Todos os seus projetos</h1>
        <Link to="/gerencia/projeto/criar">Criar Projeto</Link>
      </div>
      <div className="search">
        <input type="text" name="search" id="search" value={search} onChange={handleSearch} placeholder="Buscar projetos..." />
      </div>
      {projects && projects.length === 0 ? (
        <p>Não há projetos disponíveis.</p>
      ) : (
        <ProjectsCards>
          {projects.map((project) => (
            <div key={project.id} className="ind-project-card">
              <Link to={`/gerencia/projeto/editar/${project.id}`} className="project-edit">
                <FaPen />
              </Link>
              <img src={project.imageUrl} alt={`Imagem do projeto ${project.title}`} />
              <h3>{project.title}</h3>
              <ul className="tools">
                {project.tools
                  .split(", ")
                  .map((tool, index) => (
                    <li key={index} className="tool">
                      {tool}
                    </li>
                  ))}
              </ul>

              <button className="project-delete" onClick={() => openModal(project.id)}>
                Deletar
              </button>
            </div>
          ))}
        </ProjectsCards>
      )}
      <ProjectPaginate>
      {[...Array(totalPages)].map((_, index) => (
          <button
            key={index}
            onClick={() => handlePageClick(index + 1)}
            className={skip / take === index ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}
      </ProjectPaginate>
      {isModalOpen && (
        <ProjectModal>
          <div className="modal-content">
            <p>Tem certeza que deseja deletar <br /> este projeto?</p>
            <div className="modal-actions">
              <button onClick={handlerDelete} className="confirm-delete">
                Sim, deletar
              </button>
              <button onClick={closeModal} className="cancel-delete">
                Cancelar
              </button>
            </div>
          </div>
        </ProjectModal>
      )}
    </ProjectsViewSection>
  );
};

export default ProjectsView;

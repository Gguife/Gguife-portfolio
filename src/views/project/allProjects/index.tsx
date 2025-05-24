import axios from "axios";
import { ProjectsSection, ProjectsCards } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

interface Project {
  id: number;
  title: string;
  introduction: string;
  tools: string[];
  imageUrl: string;
}

const Articles = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [total, setTotal] = useState(0);



  useEffect(() => {
    const fetchAritcles = async () => {
      try {
        const username = 'linux';
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/projects/${username}?page=${page}&limit=${limit}`
        );

        setProjects(response.data.projects);
        setTotal(response.data.total);
      }catch(e: any) {
        console.error("Error ao buscar artigos: ", e);
      } 
    }


    fetchAritcles();
  }, [page])

  const totalPages = Math.ceil(total / limit);

  return (
    <ProjectsSection>
      <ProjectsCards>
        {projects.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          <div className="project-list">
            {projects.map((project) => (
              <div className="project" key={project.id}>
                <div className="project-image">
                  <Link to={`/projeto/${project.id}`}><img src={project.imageUrl} alt="" /></Link>
                </div>
                <div className="project-desc">
                  <h3>{project.title}</h3> 
                  <p>{project.introduction}</p> 
                  <ul>
                    {project.tools.map((tool, index) => (
                      <li key={index}>{tool}</li>
                    ))}
                  </ul>
                  <Link to={`/projeto/${project.id}`} className="internal-links read-about" key={project.id}>
                  Leia sobre ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </ProjectsCards>
      <div className="more-pages">
        <button onClick={() => setPage(prev => Math.max(prev - 1, 1))} disabled={page === 1}>
          <IoMdArrowRoundBack  />
        </button>
        <span style={{ margin: '0 10px' }}>
          Página {page} de {totalPages}
        </span>
        <button onClick={() => setPage(prev => Math.min(prev + 1, totalPages))} disabled={page === totalPages}>
          <IoMdArrowRoundForward />
        </button>
      </div>
    </ProjectsSection>
  )
}

export default Articles;
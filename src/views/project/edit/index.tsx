import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProjectEditSection } from "./stye";


interface Project {
  id: number;
  title: string;
  content: string;
  tools: string;
  linkDeploy: string;
  linkRepository: string;
}


const ProjectEdit = () => {
  const {id} = useParams();
  const [project, setProject] = useState<Project | null>(null);

  const fetchProject = async () => {
    try{
      const response = await axios.get(`http://localhost:8080/project/${id}`);
    
      const projectData = response.data.project;
      if(!projectData){
        console.error('Nenhum projeto foi encontrado!');
        return null;
      }
      
      setProject(projectData);
    }catch(err: any){
      console.error("Erro ao buscar o projeto:", err.message);
    }
  }

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if(project){
      const {name, value} = e.target;
      setProject({...project, [name]: value});
    }
  }


  const saveChanges = async () => {
    const token = localStorage.getItem("token");
    try {
      if(project) {
          await axios.put(`http://localhost:8080/projects/${id}`, project, {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          }
        });
        alert('Projeto atualizado com sucesso!');
        window.location.href = "/gerencia/projetos";
      }
    }catch(err: any) {
      console.error("Erro ao salvar o projeto:", err.message);
      alert("Erro ao salvar o projeto.");
    }
  }


  useEffect(() => {
    fetchProject();
  }, [])

  return (
    <ProjectEditSection>
      <h1>Editando projeto: <span>{project?.title}</span></h1>
      <form>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" value={project?.title} id="title" onChange={handlerChange} />
        
        <label htmlFor="content">Descrição</label>
        <textarea name="content" id="content" value={project?.content} rows={10} onChange={handlerChange} ></textarea>
        
        <label htmlFor="tools">Ferramentas</label>
        <input type="text" name="tools" value={project?.tools} id="tools" onChange={handlerChange} />
        
        <label htmlFor="linkDeploy">link versão web</label>
        <input type="text" name="linkDeploy" value={project?.linkDeploy} id="linkDeploy" onChange={handlerChange} />
        
        <label htmlFor="linkRepository">link repositório</label>
        <input type="text" name="linkRepository" value={project?.linkRepository} id="linkRepository" onChange={handlerChange} />
    
        <button type="button" onClick={saveChanges}>Salvar Alterações</button>
      </form>
    </ProjectEditSection>
  )
}


export default ProjectEdit;
import { useEffect, useState } from "react";
import axios from "axios";
import { CreateProjectSection } from "./style";

const CreateProject = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<number | string>("");  // ID da categoria selecionada
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [tools, setTools] = useState("");
  const [linkDeploy, setLinkDeploy] = useState("");
  const [linkRepository, setLinkRepository] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchCategory = async () => {
      try{
        const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/categories`);

        setCategories(response.data.categories);
      }catch(err: any){
        console.error("Erro ao carregar categorias:", err);
        setError("Erro ao carregar categorias.");
      }
    };

    fetchCategory();
  }, [])


  const handlerSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError("");

    const formData =  new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("tools", tools);
    formData.append("linkDeploy", linkDeploy);
    formData.append("linkRepository", linkRepository);
    formData.append("categoryId", selectedCategory.toString());

    if(image){
      formData.append("imageUrl", image);
    }

    const token = localStorage.getItem("token");

    try{
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/project`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${token}`,
        },
      });

      window.location.href = "/gerencia/projetos";
    }catch(err: any){
      if (err.response) {
        const { message } = err.response.data;
        setError(message || "Erro ao realizar o cadastro do projeto.");
      } else {
        console.error("Erro inesperado:", err);
        setError("Erro inesperado. Tente novamente mais tarde.");
      }
    }
  }

  return (
    <CreateProjectSection>
      <form onSubmit={handlerSubmit}>
        <label htmlFor="title">Titulo</label>
        <input type="text" name="title" value={title} id="title" onChange={(e) => {setTitle(e.target.value)}}  />
        
        <label htmlFor="content">Descrição</label>
        <textarea name="content" id="content" value={content} rows={10} onChange={(e) => {setContent(e.target.value)}} ></textarea>
        
        <label htmlFor="tools">Ferramentas</label>
        <input type="text" name="tools" value={tools} id="tools" onChange={(e) => {setTools(e.target.value)}}  />
        
        <label htmlFor="linkDeploy">link versão web</label>
        <input type="text" name="linkDeploy" value={linkDeploy} id="linkDeploy" onChange={(e) => {setLinkDeploy(e.target.value)}}  />
        
        <label htmlFor="linkRepository">link repositório</label>
        <input type="text" name="linkRepository" value={linkRepository} id="linkRepository" onChange={(e) => {setLinkRepository(e.target.value)}}  />
        
        <label htmlFor="categoryId">Categoria</label>
        <select name="categoryId" value={selectedCategory} id="categoryId" onChange={(e) => {setSelectedCategory(e.target.value)}}>
          <option value="">Selecione uma categoria:</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        
        <label htmlFor="imageUrl">Imagem do projeto</label>
        <input 
          type="file" 
          name="imageUrl"
          id="imageUrl" 
          accept="image/*" 
          onChange={(e) => {
            const file = e.target.files?.[0];
            setImage(file || null);
          }}  
        />
        
        <button type="submit">Criar</button>
        {error && <p style={{color: "red"}}>{error}</p>}
      </form>
    </CreateProjectSection>
  )
}


export default CreateProject;
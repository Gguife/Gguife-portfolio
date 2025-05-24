import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ArticleSelectedSection, MarkdownContent } from "./style";

interface Article {
  title: string;
  introduction: string;
  content: string; // Este será o conteúdo em Markdown
  imageUrl: string;
}

const ArticleSelected = () => {
  const { id } = useParams();
  const [article, setArticle] = useState<Article | null>(null);

  const projectFetch = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/article/${id}`);
      const projectData = response.data;

      setArticle(projectData);
    } catch (err: any) {
      console.error("Erro ao buscar o projeto:", err.message);
    }
  };

  useEffect(() => {
    projectFetch();
  }, [id]);


  return (
    <ArticleSelectedSection>
      {article ? (
        <div key={id} className="article-selected-content">
          <img src={article.imageUrl} alt={`imagem do projeto ${article.title}`} />
          <h1>{article.title}</h1>
          {/* Exibindo o conteúdo do Markdown convertido para HTML */}
          <MarkdownContent>
            <div dangerouslySetInnerHTML={{__html: article.content}} />
          </MarkdownContent>
        </div>
      ) : (
        <p>Projeto não encontrado</p>
      )}
    </ArticleSelectedSection>
  );
};

export default ArticleSelected;
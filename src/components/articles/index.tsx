import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { MainArticleSection, ArticleCard } from "./style";
import { MdArticle } from "react-icons/md";

interface Article {
  id: number;
  title: string;
  introduction: string;
  imageUrl: string;
  tagId: number;
  createdAt: string;
}

const tagNames: { [key: number]: string } = {
  1: "Tech",
  2: "Lifestyle",
  3: "Career"
}


export const Articles = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedTag, setSelectedTag] = useState(1);
  const limit = 4;

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const username = 'linux';
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/articles/${username}?limit=${limit}`
        );
        
        setArticles(response.data.articles);
      } catch (error) {
        console.error("Erro ao buscar artigos", error);
      }
    };
    
    fetchArticles();
  }, []); 

  useEffect(() => {
      filteredArticleByTag(selectedTag);
  }, [articles, selectedTag]);

  const filteredArticleByTag = (tagId: number) => {
    const filtered = articles.filter(
      (article) => article.tagId === tagId
    );
    setFilteredArticles(filtered);
  }



  return(
      <MainArticleSection>
        <h1> <MdArticle /> Blog Pessoal</h1>

        <ArticleCard>
          {filteredArticles.length === 0 ? (
            <p className="no-articles">Sem postagens para esta categoria...</p>
          ) : (
            <div className="articles-list">
            {filteredArticles.map((article) => (
              <div className="article-card" key={article.id}>
                <div className="article-image">
                  <Link to={`/artigo/${article.id}`}><img src={article.imageUrl} alt="" width="100px" /></Link>
                </div>
                <div className="article-desc">
                  <span>{article.createdAt}<span className="tag">{tagNames[article.tagId]}</span></span>
                  <h3>{article.title}</h3> 
                  <p>{article.introduction}</p>
                  <Link to={`/artigo/${article.id}`} className="internal-links read-about" key={article.id}>
                    Leia sobre ➔
                  </Link> 
                </div>
              </div>
            ))}
            
          </div>
          )}

          <div className="article-tags">
            <button onClick={() => setSelectedTag(1)}
              style={{
                backgroundColor: selectedTag === 1 ? "var(--text-link-subcolor)" : "var(--primary-color)",
                color: selectedTag === 1 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              Tech
            </button>
            <button onClick={() => setSelectedTag(2)}
              style={{
                backgroundColor: selectedTag === 2 ? "var(--text-link-subcolor)" : "var(--primary-color)",
                color: selectedTag === 2 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              lifestyle
            </button>
            <button onClick={() => setSelectedTag(3)}
              style={{
                backgroundColor: selectedTag === 3 ? "var(--text-link-subcolor)" : "var(--primary-color)",
                color: selectedTag === 3 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              Career
            </button>
          </div>
        </ArticleCard>
        <Link to="/blog" className="internal-links read-more">Veja todos os artigos ➔</Link>
      </MainArticleSection>
  );
}
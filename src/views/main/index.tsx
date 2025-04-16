import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MainPageSection, MainAboutMeCard, MainArticleSection, ArticleCard } from "./style";

interface Article {
  id: number;
  title: string;
  introduction: string;
  tagId: number;
  createdAt: string;
}

const tagNames: { [key: number]: string } = {
  1: "Tech",
  2: "Lifestyle",
  3: "Career"
}

const MainPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [selectedTag, setSelectedTag] = useState(1);
  const limit = 9;

  
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const username = 'linux';
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/articles/${username}?limi=${limit}`
        );

        console.log(response.data.articles)
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
    console.log(filtered);
  }

  return (

    <MainPageSection>
      <MainAboutMeCard>
        <div className="main-about-description">
          <h3>Guilherme Gomes<span>Desenvolvedor web full-stack</span></h3>
          <p>
            Criando soluções que conectam o que está por trás das telas com o que vemos.
            Aqui, compartilho experiências, desafios e conquistas sobre tecnologia, programação, cibersegurança e minha jornada pessoal, 
            com objetivo de deixar a tecnologia mais simples e acessível, 
            enquanto navego pelo mundo digital.
          </p>
          <Link to="/sobre" className="internal-links">Mais sobre mim ➔</Link>
        </div>
      </MainAboutMeCard>

      <MainArticleSection>
        <h1>Blog Pessoal</h1>

        <ArticleCard>
          {filteredArticles.length === 0 ? (
            <p className="no-articles">Sem postagens para esta categoria...</p>
          ) : (
            <div className="articles-list">
            {filteredArticles.map((article) => (
              <div className="article-card">
                <span>{article.createdAt}<span className="tag">{tagNames[article.tagId]}</span></span>
                <h3> 
                  {article.title} 
                  <Link to={`/artigo/${article.id}`} className="internal-links read-about" key={article.id}>
                  Leia sobre ➔
                  </Link>
                </h3> 
                <p>{article.introduction}</p> 
              </div>
            ))}
            
          </div>
          )}

          <div className="article-tags">
            <button onClick={() => setSelectedTag(1)}
              style={{
                backgroundColor: selectedTag === 1 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
                color: selectedTag === 1 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              Tech
            </button>
            <button onClick={() => setSelectedTag(2)}
              style={{
                backgroundColor: selectedTag === 2 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
                color: selectedTag === 2 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              lifestyle
            </button>
            <button onClick={() => setSelectedTag(3)}
              style={{
                backgroundColor: selectedTag === 3 ? "var(--text-link-subcolor)" : "var(--primary-soft-color)",
                color: selectedTag === 3 ? "var(--text-primary-color)" : "var(--text-second-color)",
            }}>
              Career
            </button>
          </div>
        </ArticleCard>
        <Link to="/blog" className="internal-links read-more">Veja todos os artigos ➔</Link>
      </MainArticleSection>
    </MainPageSection>
  );
};

export default MainPage;

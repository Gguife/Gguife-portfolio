import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { MainPageSection, MainAboutMeCard, MainArticleSection } from "./style";
import Perfil from "../../assets/profile.jfif";

interface Article {
  id: number;
  title: string;
  description: string;
  social_image: string;
  url: string;
  tag_list: string[];
}

const MainPage: React.FC = () => {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await axios.get<Article[]>("https://dev.to/api/articles?username=gguife&per_page=5&sort_by=published_at");
        setArticles(response.data);
      } catch (error) {
        console.error("Erro ao buscar artigos", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <MainPageSection>
      <MainAboutMeCard>
        <img src={Perfil} alt="Foto de perfil" />
        <div className="main-about-description">
          <h3>Guilherme Gomes<span>Desenvolvedor web full-stack</span></h3>
          <p>
            Criando soluções que conectam o que está por trás das telas com o que vemos.
            Aqui compartilho os desafios e conquistas do dia-a-dia,
            tentando deixar a tecnologia mais simples e acessível, 
            enquanto navego pelo mundo digital.
          </p>
          <Link to="/sobre">Mais sobre mim</Link>
        </div>
      </MainAboutMeCard>

      <MainArticleSection>
        <h1>Últimas postagens</h1>

        {articles.length === 0 ? (
          <p>Carregando postagens...</p>
        ) : (
          <div className="articles-list">
            {articles.map((article) => (
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                <div key={article.id} className="article-card">
                  <img src={article.social_image} alt={article.title} />
                  <div className="article-content">
                    <h2>{article.title}</h2>
                    <p>{article.description}</p>
                      
                  </div>
                </div>
              </a>
            ))}
          </div>
        )}
      </MainArticleSection>
    </MainPageSection>
  );
};

export default MainPage;

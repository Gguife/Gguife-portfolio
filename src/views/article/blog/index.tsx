import axios from "axios";
import { BlogSection, BlogCards } from "./style";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";



interface Articles {
  id: number;
  title: string;
  introduction: string;
  imageUrl: string;
  tagId: number;
  createdAt: string;
}

const Articles = () => {
  const [articles, setArticles] = useState<Articles[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(9);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    const fetchAritcles = async () => {
      try {
        const username = 'linux';
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/articles/${username}?page=${page}&limit=${limit}`
        );


        setTotal(response.data.total);
        setArticles(response.data.articles);
      }catch(e: any) {
        console.error("Error ao buscar artigos: ", e);
      } 
    }


    fetchAritcles();
  }, [page])


  const totalPages = Math.ceil(total / limit);

  return (
    <BlogSection>
      <BlogCards>
        {articles.length === 0 ? (
          <p>Carregando...</p>
        ) : (
          <div className="article-list">
            {articles.map((article) => (
              <div className="article" key={article.id}>
                <div className="article-image">
                  <Link to={`/artigo/${article.id}`}><img src={article.imageUrl} alt="" /></Link>
                </div>
                <div className="article-desc">
                  <span>{article.createdAt}<span className="tag">Tech</span></span>
                  <h3> 
                    {article.title} 
                  </h3> 
                  <p>{article.introduction}</p> 
                  <Link to={`/artigo/${article.id}`} className="internal-links read-about" key={article.id}>
                  Leia sobre ➔
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </BlogCards>
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
    </BlogSection>
  )
}

export default Articles;
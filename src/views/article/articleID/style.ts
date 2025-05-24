import styled from "styled-components";

export const ArticleSelectedSection = styled.section`
padding: 1rem;

  .article-selected-content {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 100%;
    }

    h1 {
      font-size: 2rem;
      margin: 2rem0;
      text-align: center;
    }
  }


@media(max-width: 800px) {
  .article-selected-content {

    h1 {
      font-size: 1.5rem;
      margin: 2rem;
    }
  }
}

@media(max-width: 480px) {
  .article-selected-content {

    h1 {
      font-size: 1.1rem;
      margin: 2rem 0 .9rem 0;
    }
  }
}
`;


export const MarkdownContent = styled.div`
  line-height: 1.7;
  font-size: 1rem;
  width: 100%;
  overflow-wrap: break-word;

  h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 1.3rem 0 .8rem;
    line-height: .8rem;
  }

  h2 { font-size: 1.7rem; }
  h3 { font-size: 1.5rem; }
  h4 { font-size: 1.25rem; }
  h5 { font-size: 1.1rem; }
  h6 { font-size: 1rem; }

  p {
    margin: 1rem 0;
  }

  a {
    color: #0070f3;
    text-decoration: underline;
    &:hover {
      color: #0056b3;
    }
  }

  ul, ol {
    margin: 1em 0 1em 1.5em;
    padding-left: 1em;
  }

  li {
    margin: 0.5em 0;
  }

  code {
    background: #111;
    padding: 0.2em 0.4em;
    border-radius: 3px;
    font-size: 0.95em;
  }

  pre {
    background: #111;
    padding: 1rem;
    border-radius: 6px;
    font-size: 0.9rem;
    margin: 1rem 0;
    white-space: pre;
    overflow-x: auto;
    max-width: 100%;
    box-sizing: border-box;
  }
  blockquote {
    border-left: 4px solid #ccc;
    padding-left: 1em;
    margin: 1em 0;
    color: #555;
    font-style: italic;
  }

  table {
    border-collapse: collapse;
    width: 100%;
    margin: 1.5rem 0;
  }

  th, td {
    border: 1px solid #555;
    padding: 0.6rem;
    text-align: left;
  }

  th {
    background-color: #111;
    font-weight: bold;
  }

  hr {
    border: none;
    border-top: 3px solid #111;
    margin: 3rem auto;
    width: 50%;
  }


   @media (max-width: 768px) {
    font-size: 0.9rem;

    h2 { font-size: 1.4rem; }
    h3 { font-size: 1.3rem; }
    h4 { font-size: 1.1rem; }
    h5 { font-size: 1rem; }
    h6 { font-size: 0.9rem; }

    pre {
      font-size: 0.7rem;
      padding: 0.5rem;
      margin: 0.4rem 0;
      overflow-x: auto;
      white-space: pre;
      -webkit-overflow-scrolling: touch;
    }

    hr {
      width: 70%;
      margin: 2rem auto;
    }
  }

  @media (max-width: 480px) {
    font-size: 0.85rem;

    h2 { font-size: 1.1rem; }
    h3 { font-size: 1rem; }
    h4 { font-size: 0.95rem; }
    h5 { font-size: 0.9rem; }
    h6 { font-size: 0.85rem; }

    ul, ol {
      margin-left: 1.2em;
      padding-left: 0.8em;
    }

    pre {
      font-size: 0.7rem;
    }

    hr {
      width: 90%;
      margin: 1.5rem auto;
    }

    th, td {
      white-space: normal; /* Permite quebra nas células da tabela */
      font-size: 0.85rem;
      padding: 0.4rem;
    }
  }
`;
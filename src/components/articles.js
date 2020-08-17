import React from "react";
import { connect } from "react-redux";
import Article from "./article";

const Articles = ({ articles = [] }) => {
  const curso =   onGet(articles.params.id);

  return (
    <section className="Articles">
      {articles.map(article => (
        <Article key={article.id} article={article} />
      ))}
    </section>
  );
};

const mapStateToProps = ({ articles }) => ({ articles });

export default connect(mapStateToProps)(Articles);

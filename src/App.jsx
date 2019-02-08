import React, { Component } from "react";
import "./app.css";

import Header from "./components/layout/Header";

import Article from "./components/Article";

const sampleArticles = [
  {
    id: "90444900-9820-448b-9780-b6fea57ac116",
    publishedOn: "2000-10-17",
    title: "Minima corrupti hic",
    abstract:
      "Laborum recusandae nesciunt earum quisquam rerum. Voluptatem velit ipsum est nesciunt cupiditate.",
    journal: {
      id: "A",
      name: "Journal A"
    },
    authors: ["Ari Bednar", "Cedrick Batz", "Wayne Klein", "Jasper Auer"]
  },
  {
    id: "90444900-9820-448b-9780-b6fea57ac116",
    publishedOn: "2000-10-17",
    title: "Minima corrupti hic",
    abstract:
      "Laborum recusandae nesciunt earum quisquam rerum. Voluptatem velit ipsum est nesciunt cupiditate.",
    journal: {
      id: "A",
      name: "Journal A"
    },
    authors: ["Ari Bednar", "Cedrick Batz", "Wayne Klein", "Jasper Auer"]
  }
];

const ArticlesContainer = ({ articles }) => {
  return articles.map(article => (
    <Article key={article.id} article={article} />
  ));
};

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="p-8 bg-whitesmoke min-h-screen">
          <ArticlesContainer articles={sampleArticles} />
        </div>
      </>
    );
  }
}

export default App;

import React, { Component } from "react";
import "./app.css";

import Header from "./components/layout/Header";

import Article from "./components/Article";

const sampleArticle = {
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
};

class App extends Component {
  render() {
    return (
      <>
        <Header />

        <div className="p-8 bg-whitesmoke min-h-screen">
          <Article article={sampleArticle} />
        </div>
      </>
    );
  }
}

export default App;

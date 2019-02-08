import React, { Component } from "react";
import "./app.css";

import Header from "./components/layout/Header";
import Article from "./components/Article";
import UserInput from "./components/UserInput";

import { fetchArticles, buildUrl, filterArticles } from "./utils/utils";


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
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.submitUserInput = this.submitUserInput.bind(this);
  }
  async componentDidMount() {
    const URL = await buildUrl()
    const articles = await fetchArticles(URL);
    this.setState({
      ...this.state,
      articles
    });
  }

  async submitUserInput(journalIds, searchTerm) {
    const URL = await buildUrl(journalIds);
    const articles = await fetchArticles(URL);
    const filtered = searchTerm
      ? filterArticles(articles, searchTerm)
      : articles;

    this.setState({
      ...this.state,
      articles: filtered
    });
  }

  render() {
    const { articles } = this.state
    return (
      <>
        <Header />
        <UserInput submitUserInput={this.submitUserInput} />
        <div className="p-8 bg-whitesmoke min-h-screen">
          <ArticlesContainer articles={articles} />
        </div>
      </>
    );
  }
}

export default App;

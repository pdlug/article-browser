import React, { Component } from 'react';
import './app.css';

import Header from './components/layout/Header';
import Article from './components/Article';
import UserInput from './components/UserInput';

import { fetchArticles, buildUrl, filterArticles } from './utils/utils';

const ArticlesContainer = ({ articles }) => articles.map(article => (
  <Article key={article.id} article={article} />
));

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
    };
    this.submitUserInput = this.submitUserInput.bind(this);
  }

  async componentDidMount() {
    const URL = await buildUrl();
    const articles = await fetchArticles(URL);
    this.setState(state => ({
      ...state,
      articles,
    }));
  }

  async submitUserInput(journalIds, searchTerm) {
    const URL = await buildUrl(journalIds);
    const articles = await fetchArticles(URL);
    const filtered = searchTerm
      ? filterArticles(articles, searchTerm)
      : articles;

      console.log(filtered)
    this.setState(state => ({
      ...state,
      articles: filtered,
    }));
  }

  render() {
    const { articles } = this.state;
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

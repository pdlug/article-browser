import React, { Component } from 'react';
import './app.css';

import Header from './components/layout/Header';
import Article from './components/Article';
import UserInput from './components/UserInput';

import { fetchArticles, buildUrl, filterArticles, mapArticlesToObj, highlightSearchTerm, reduceActiveChoices, concatChosenArticlesFromObj } from './utils/utils';

const ArticlesContainer = ({ articles }) => {
  if (articles.length === 0) return <h2>Search returned no results</h2>
  return articles.map(article => <Article key={article.id} article={article} />);
};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      chosenArticles: [],
      articlesObj: {
        A: [],
        B: [],
        C: [],
        D: [],
      },
      articlesCount: 0,
      articleIds: ["A", "B", "C", "D"]
    };
    this.submitUserInput = this.submitUserInput.bind(this);
  }

  async componentDidMount() {
    const URL = await buildUrl();
    const articles = await fetchArticles(URL);
    const articlesObj = mapArticlesToObj(articles);
    this.setState(state => ({
      ...state,
      articlesCount: articles.length,
      articles,
      chosenArticles: articles,
      articlesObj,
    }));
  }

  async submitUserInput(activeChoices, searchTerm) {
    const { articles, articlesObj } = this.state;
    const choices = await reduceActiveChoices(activeChoices);
    const currArticles = choices.length !== 0 
      ? await concatChosenArticlesFromObj(choices, articlesObj)
      : articles;
    const filtered = typeof searchTerm === 'undefined' || searchTerm === ''
      ? currArticles
      : filterArticles(currArticles, searchTerm);
    this.setState(state => ({
      ...state,
      articlesCount: filtered.length,
      chosenArticles: filtered,
    }));
  }

  render() {
    const { chosenArticles, articlesCount, articleIds } = this.state;
    return (
      <>
        <Header />
        <UserInput articleIds={articleIds} submitUserInput={this.submitUserInput} />
        <div className="p-8 bg-whitesmoke min-h-screen">
          <div className="my-3">
            <h3>
              {`${articlesCount} articles`}
            </h3>
          </div>
          <ArticlesContainer articles={chosenArticles} />

        </div>
      </>
    );
  }
}

export default App;

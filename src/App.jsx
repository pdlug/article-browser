import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './app.css';

import Header from './components/layout/Header';
import ArticleContainer from './components/ArticleContainer/ArticleContainer';
import UserInput from './components/layout/UserInput';

import {
  fetchArticles,
  buildUrl,
  filterArticles,
  mapArticlesToObj,
  reduceActiveChoices,
  concatChosenArticlesFromObj,
} from './utils/utils';

const ArticlesContainer = ({ articles, searchTerm, searchPresent }) => (
  <div>
    {articles.length === 0
      ? <h2>Search returned no results</h2>
      : articles.map(article => (
        <ArticleContainer
          key={article.id}
          searchPresent={searchPresent}
          searchTerm={searchTerm}
          article={article}
        />
      ))}
  </div>
);

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
      articleIds: ['A', 'B', 'C', 'D'],
      searchTerm: '',
      searchPresent: false,
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
      searchTerm,
      searchPresent: searchTerm !== '' || searchTerm !== 'undefined',
    }));
  }

  render() {
    const {
      chosenArticles, articlesCount, articleIds, searchTerm, searchPresent,
    } = this.state;
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
          <ArticlesContainer articles={chosenArticles} searchPresent={searchPresent} searchTerm={searchTerm} />
        </div>
      </>
    );
  }
}

ArticlesContainer.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  articles: PropTypes.array.isRequired,
  searchTerm: PropTypes.string.isRequired,
  searchPresent: PropTypes.bool.isRequired,
};

export default App;

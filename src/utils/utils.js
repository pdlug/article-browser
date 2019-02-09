export const fetchArticles = url => fetch(url)
  .then(response => response.json())
  .then(articles => articles)
  .catch((err) => {
    // [NOTE]: In all situations we would handle this error better
    console.log(err);
    return err;
  });

export const buildUrl = async (activeChoices = {}) => {
  const baseUrl = 'https://fake-article-api.now.sh/articles';
  const empty = Object.keys(activeChoices).length === 0 && activeChoices.constructor === Object;
  let url;
  if (empty) {
    url = baseUrl;
  } else {
    const params = Object.keys(activeChoices).filter(key => activeChoices[key])
    const length = params.length;
    url = await params.reduce((acc, curVal, index) => (index === length - 1 ? `${acc}journal=${curVal.toUpperCase()}` : `${acc}journal=${curVal.toUpperCase()}&`), `${baseUrl}?`);
  }
  return url;
};

export const searchArticle = (article, regx) => {
  const {
    title,
    abstract,
  } = article;
  const searchAttributes = [title, abstract, ...article.authors];
  return searchAttributes.some(attr => regx.test(attr));
};

export const searchArticleHighlightTerm = (article, regx) => {
  console.log(regx)
  return {
    ...article,
    title: article.title.replace(regx, `<span class="bg-green">${article.title}</span>`),
    abstract: article.abstract.replace(regx, `<span class="bg-green">${article.abstract}</span>`),
  };
};

export const filterArticles = (articles, searchTerm) => {
  const searchRegex = new RegExp(searchTerm, 'i');
  return articles.filter(article => searchArticle(article, searchRegex));
};

export const filterArticlesObj = (choices, articlesObj, searchTerm) => {
  return choices.reduce((acc, choice) => {
    let currArr = articlesObj[choice];
    currArr = searchTerm ? filterArticles(currArr) : currArr;
    return acc.length === 0 ? [...currArr] : [...acc, ...currArr];
  }, []);
};

export const highlightSearchTerm = (filteredArticles, searchTerm) => {
  console.log(searchTerm)
  const searchRegex = new RegExp(searchTerm, 'i');
  console.log('highlightSearchTerm')
  return filteredArticles.map((article) => {
    return searchArticleHighlightTerm(article, searchRegex);
  });
}

export const concatChosenArticlesFromObj = (choices, articlesObj) => {
  return choices.reduce((acc, choice) => {
    const currArrs = articlesObj[choice];
    return acc.length === 0 ? [...currArrs] : [...acc, ...currArrs];
  }, []);
};

export const reduceActiveChoices = (activeChoices) => {
  return Object.keys(activeChoices).filter(choice => activeChoices[choice]);
}

export const mapArticlesToObj = (articles) => {
  return articles.reduce((acc, article) => {
    if (acc.hasOwnProperty(article.journal.id)) {
      acc[article.journal.id].push(article);
      return acc;
    }
    acc[article.journal.id] = [article];
    return acc;
  }, {});
};

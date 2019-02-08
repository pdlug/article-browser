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
  console.log(searchAttributes);
  return searchAttributes.some(attr => regx.test(attr));
};

export const filterArticles = (articles, searchTerm) => {
  const searchRegex = new RegExp(searchTerm, 'i');
  console.log(searchRegex.ignoreCase);
  console.log(searchRegex);
  return articles.filter(article => searchArticle(article, searchRegex));
};

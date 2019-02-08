export const fetchArticles = (url) => {
  return fetch(url)
    .then(response => response.json())
    .then(articles => {
      return articles
    })
    .catch(err => {
      // [NOTE]: In all situations we would handle this error better
      console.log(err)
      return err
    })
}
export const buildUrl = async (params = []) => {
  const baseUrl = "https://fake-article-api.now.sh/articles";
  let url;
  if (params.length === 0) {
    url = baseUrl;
  } else {
    const length = params.length
    url = await params.reduce((acc, curVal, index) => {
      return index === length - 1 ? `${acc}journal=${curVal}` : `${acc}journal=${curVal}&`
    }, `${baseUrl}?`);
  }
  return url;
};


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
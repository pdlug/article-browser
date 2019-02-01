# Browse Articles - Sample React Application

**NOTE:** *This is a sample application used for training and interview tasks. It is intentionally anemic but feel free to use it if you find it useful.*

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses [Tailwind CSS](https://tailwindcss.com) for styling built using [PostCSS](https://postcss.org).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Tasks

### Task 1: Load articles from an API

Out of the box the application displays three articles on the page. This uses hardcoded placeholder data in a single article component (`./src/components/Article.jsx`). The first step is to replace these placeholder article boxes and their placeholder strings with data loaded from an API.

The fake article API provides 100 fake articles regenerated each time it's called. Each of these articles is in one of four fake journals ("Journal A", "Journal B", "Journal C", "Journal D").

The API is available here: https://fake-article-api.now.sh/articles

Example of a single article:

```json
{
  "id": "90444900-9820-448b-9780-b6fea57ac116",
  "publishedOn": "2000-10-17",
  "title": "Minima corrupti hic",
  "abstract": "Laborum recusandae nesciunt earum quisquam rerum. Voluptatem velit ipsum est nesciunt cupiditate.",
  "journal": {
    "id": "A",
    "name": "Journal A"
  },
  "authors": [
    "Ari Bednar",
    "Cedrick Batz",
    "Wayne Klein",
    "Jasper Auer"
  ]
}
```

Add functionality to fetch the articles from this API on page load and display each article on the page.


### Task 2: Filtering by journal

Now that we have articles dynamically displaying we'd like to let the user filter by journal. Provide a component that allows the user to select one or more journals ("Journal A", "Journal B", etc.). The `journal` parameter on the `/articles` API endpoint above allows filtering by journal using the journal ID. When the journals are selected update the call to the API to include them as parameters, for example:

Return only articles in "Journal A":

```
https://fake-article-api.now.sh/articles?journal=A
```

Return only articles in "Journal A" and "Journal B":

```
https://fake-article-api.now.sh/articles?journal=A&journal=B
```

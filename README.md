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

### `npm run lint`

Run eslint and report any errors/warnings.

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


### Task 2: Add tests

 Add a unit test for the Article component created above using [Enzyme](https://airbnb.io/enzyme/). The file `./src/components/Article.test.jsx` contains stubbed out test expections which should be made to pass along with any other test coverage you feel is appropriate.


### Task 3: Add filtering by journal

Now that we have articles dynamically displaying we'd like to let the user filter by journal. Provide a component that allows the user to select one or more journals ("Journal A", "Journal B", etc.). The `journal` parameter on the `/articles` API endpoint above allows filtering by journal using the journal ID. When the journals are selected update the call to the API to include them as parameters.

**Example:** Return only articles in "Journal A":

```
https://fake-article-api.now.sh/articles?journal=A
```

**Example:** Return only articles in "Journal A" and "Journal B":

```
https://fake-article-api.now.sh/articles?journal=A&journal=B
```

### Task 4: Add search functionality

Add a search text box to the header that when submitted looks returns only the articles that match the text entered. The text may appear in the title, abstract, or author names. If the user enters multiple terms only articles that include all terms should be returned but those terms may match across fields. For example, given the articles:

```json
[
  { 
    "id": "4673a875-8caa-4675-9f11-832204cf9c32",
    "title": "Distinctio deleniti dolorem",
    "authors": [
      "Virgil Raynor",
      "Carmella Connelly",
      "Aniya Miller"
    ]
  }
  {
    "id": "a7810fce-3544-4306-806d-5a95b1aabbe2",
    "title": "Distinctio maiores odio",
    "authors": [
      "Alana Schuppe",
      "Joan Baumbach",
      "Myriam Kris"
    ]
  }
}
```

If the user enters the search term "distinctio" both articles should be returned since this term matches their titles. If the user enters the search terms "distinctio raynor" only the first article should be returned since it is the only one that matches both terms ("distinctio" in the title, and "raynor" in the authors).

No search API endpoint is provided so the search functionality will need to operate on the set of articles loaded from the API at the time of page load (all search functionality will be client side). 
import * as React from "react";

import "./app.css";

import Header from "./components/layout/Header";

import Articles from "./components/Articles";

const App = (): JSX.Element => (
  <>
    <Header>Article Browser</Header>

    <div className="p-8 bg-whitesmoke min-h-screen">
      <Articles />
    </div>
  </>
);

export default App;

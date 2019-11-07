import React from "react";

import "./app.css";

import Header from "./components/layout/Header";

import Article from "./components/Article";

const App: React.FC = () => (
  <>
    <Header />

    <div className="p-8 bg-whitesmoke min-h-screen">
      <Article />
      <Article />
      <Article />
    </div>
  </>
);

export default App;

import React from "react";
import { shallow, mount } from "enzyme";

import Article from "./Article";

const testArticle = {
  id: "90444900-9820-448b-9780-b6fea57ac116",
  publishedOn: "2000-10-17",
  title: "Minima corrupti hic",
  abstract:
    "Laborum recusandae nesciunt earum quisquam rerum. Voluptatem velit ipsum est nesciunt cupiditate.",
  journal: {
    id: "A",
    name: "Journal A"
  },
  authors: ["Ari Bednar", "Cedrick Batz", "Wayne Klein", "Jasper Auer"]
};

describe("<Article />", () => {
  it("should display Article Title", () => {
    const wrapper = mount(<Article article={testArticle} />);
    expect(wrapper.props().article.title !== null).toBe(true);
    expect(wrapper.props().article.title !== undefined).toBe(true);
    expect(wrapper.props().article.title === "Minima corrupti hic").toBe(true);
    wrapper.unmount();
  });

  it("should display Article Journal Name", () => {
    const wrapper = mount(<Article article={testArticle} />);
    expect(wrapper.props().article.journal.name !== null).toBe(true);
    expect(wrapper.props().article.journal.name !== undefined).toBe(true);
    expect(wrapper.props().article.journal.name === "Journal A").toBe(true);
    wrapper.unmount();
  });

  it("should display Article Abstract", () => {
    const wrapper = mount(<Article article={testArticle} />);
    expect(wrapper.props().article.abstract !== null).toBe(true);
    expect(
      wrapper.props().article.abstract ===
        "Laborum recusandae nesciunt earum quisquam rerum. Voluptatem velit ipsum est nesciunt cupiditate."
    ).toBe(true);
    wrapper.unmount();
  });

  it("should display all related Authors", () => {
    const wrapper = mount(<Article article={testArticle} />);
    expect(wrapper.props().article.authors.length === 4).toBe(true);
    expect(wrapper.props().article.authors[0] === "Ari Bednar").toBe(true);
    expect(wrapper.props().article.authors[1] === "Cedrick Batz").toBe(true);
    expect(wrapper.props().article.authors[2] === "Wayne Klein").toBe(true);
    expect(wrapper.props().article.authors[3] === "Jasper Auer").toBe(true);
    wrapper.unmount();
  });
});

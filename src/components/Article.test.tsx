import React from "react";
import { render } from "@testing-library/react";

import Article from "./Article";

const article = render(<Article />);

it("should display Article Title", () => {
  expect(false).toBe(true);
});

it("should display Article Journal Name", () => {
  expect(false).toBe(true);
});

it("should display Article Abstract", () => {
  expect(false).toBe(true);
});

it("should display all related Authors", () => {
  expect(false).toBe(true);
});

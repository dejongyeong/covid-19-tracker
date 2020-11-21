import React from "react";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { render, act } from "@testing-library/react";

import App from "./App";

// Tutorial 1: https://reactrouter.com/web/guides/testing
// Tutorial 2: https://testing-library.com/docs/example-react-router/
test("Home renders correctly", () => {
  const tree = renderer
    .create(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

test("Navigation", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);

  render(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>,
    root
  );

  // initial page
  expect(document.getElementById("covid-data")).toBeInTheDocument();

  // verify page content after navigation
  act(() => {
    const goInfoLink = document.querySelector(".info-link");
    goInfoLink.dispatchEvent(new MouseEvent("click", { bubbles: true }));
  });

  expect(document.getElementById("covid-info")).toBeInTheDocument();
});

test("Landing on a bad page", () => {
  const root = document.createElement("div");
  document.body.appendChild(root);
  render(
    <MemoryRouter initialEntries={["/admin"]}>
      <App />
    </MemoryRouter>,
    root
  );

  expect(document.getElementById("page-404")).toBeInTheDocument();
});

import "jest-styled-components";
import renderer from "react-test-renderer";
import { render, cleanup } from "@testing-library/react";

import { Circle1, Circle2 } from "./BackgroundCircles";
import { MEDIA_QUERIES } from "../../../utils/Constants";

afterEach(cleanup);

test("Circle 1 Snapshot", () => {
  const { container } = render(<Circle1 />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Circle 2 Snapshot", () => {
  const { container } = render(<Circle2 />);
  expect(container.firstChild).toMatchSnapshot();
});

test("Circle 1 Width and Height", () => {
  const tree = renderer.create(<Circle1 />).toJSON();
  expect(tree).toHaveStyleRule("width", "747px");
  expect(tree).toHaveStyleRule("width", "482.21px", {
    media: `${MEDIA_QUERIES.sm}`,
  });
  expect(tree).toHaveStyleRule("height", "747px");
  expect(tree).toHaveStyleRule("height", "482.21px", {
    media: `${MEDIA_QUERIES.sm}`,
  });
});

test("Circle 2 Width and Height", () => {
  const tree = renderer.create(<Circle2 />).toJSON();
  expect(tree).toHaveStyleRule("width", "297.56px");
  expect(tree).not.toHaveStyleRule("width", "297.56px", {
    media: `${MEDIA_QUERIES.sm}`,
  });
  expect(tree).toHaveStyleRule("height", "297.56px");
  expect(tree).not.toHaveStyleRule("height", "297.56px", {
    media: `${MEDIA_QUERIES.sm}`,
  });
});

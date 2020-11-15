import "jest-styled-components";
import { cleanup } from "@testing-library/react";
import { Circle1, Circle2 } from "./BackgroundCircles";
import { renderWithTheme } from "../../../helpers";

/**
 *  Tutorial 1: https://medium.com/styled-components/effective-testing-for-styled-components-67982eb7d42b (2017)
 *  Tutorial 2: https://github.com/yannickcr/eslint-plugin-react/issues/522
 * */

afterEach(cleanup);

describe("Circle Snapshots", () => {
  it("renders circle 1 correctly", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders circle 2 correctly", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});

describe("Circle Width and Height", () => {
  test("Circle 1 Width and Height", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toHaveStyleRule("width", "747px");
    expect(tree).toHaveStyleRule("width", "482.21px", {
      media: `(max-width:calc(480px - 0.02px))`,
    });
    expect(tree).toHaveStyleRule("height", "747px");
    expect(tree).toHaveStyleRule("height", "482.21px", {
      media: `(max-width:calc(480px - 0.02px))`,
    });
  });

  test("Circle 2 Width and Height", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toHaveStyleRule("width", "297.56px");
    expect(tree).not.toHaveStyleRule("width", "297.56px", {
      media: `(max-width:calc(480px - 0.02px))`,
    });
    expect(tree).toHaveStyleRule("height", "297.56px");
    expect(tree).not.toHaveStyleRule("height", "297.56px", {
      media: `(max-width:calc(480px - 0.02px))`,
    });
  });
});

describe("Apply background color according to passed props", () => {
  test("Circle 1", () => {
    const tree = renderWithTheme(<Circle1 />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      expect.stringContaining("#eae2b7")
    );
    expect(tree).toHaveStyleRule("opacity", "50%");
  });

  test("Circle 2: Applies styles according to passed props", () => {
    const tree = renderWithTheme(<Circle2 />).toJSON();
    expect(tree).toHaveStyleRule(
      "background-color",
      expect.stringContaining("#eae2b7")
    );
    expect(tree).toHaveStyleRule("opacity", "50%");
  });
});

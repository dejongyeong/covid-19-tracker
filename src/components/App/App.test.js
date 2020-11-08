import { render } from "@testing-library/react";
import App from "./App";

// Tutorial: https://www.smashingmagazine.com/2020/07/react-apps-testing-library/
// refactor to use describe, it pattern:
describe("<App />", () => {
  it("Renders <App /> component correctly", () => {
    const { getByText } = render(<App />);
    expect(getByText(/learn react/i)).toBeInTheDocument();
  });
});

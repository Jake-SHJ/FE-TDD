import React from "react";

import { render } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  it("renders tasks", () => {
    const { container } = render(<App />);
    expect(container).toHaveTextContent("text rendering test");
  });
});

import React from "react";

import { render } from "@testing-library/react";

import App from "../src/App";

describe("App", () => {
  it("render", () => {
    render(<App />);
  });
});

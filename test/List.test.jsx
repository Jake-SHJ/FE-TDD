import React from "react";

import { render } from "@testing-library/react";

import List from "../src/List";

describe("List", () => {
  const tasks = [
    { id: 1, title: "text rendering test" },
    { id: 2, title: "test ok" },
  ];
  it("renders tasks", () => {
    const { container } = render(<List tasks={tasks} />);
    expect(container).toHaveTextContent("text rendering test");
    expect(container).toHaveTextContent("test ok");
  });
});

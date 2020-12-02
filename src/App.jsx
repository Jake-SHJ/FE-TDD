import React from "react";
import List from "./List";

const App = () => {
  const tasks = [
    { id: 1, title: "text rendering test" },
    { id: 2, title: "test ok" },
  ];
  return (
    <div>
      <h1>To-Do</h1>
      <List tasks={tasks} />
    </div>
  );
};

export default App;

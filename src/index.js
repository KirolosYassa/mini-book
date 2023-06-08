import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookList from "./Book";

const App = () => {
  return (
    <div>
      <BookList />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

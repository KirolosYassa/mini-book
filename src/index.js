import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import BookList from "./Book";
import { store } from "./redux/store";
import { Provider } from "react-redux";

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
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

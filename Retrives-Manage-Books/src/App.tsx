import "./App.css";

import BooksStore from "./BooksStore";
import Comment from "./Comment";
import Home from "./Home";
import Login from "./Login";

function App() {
  return (
    <>
      <div className="container">
        <Home />
        <Login />
        <BooksStore />
        <Comment />
      </div>
    </>
  );
}

export default App;

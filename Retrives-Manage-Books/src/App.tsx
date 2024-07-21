import { Route, Routes } from "react-router-dom";
import "./App.css";

import BooksStore from "./BooksStore";
import Login from "./Login";
import Welcome from "./Welcome";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/books" element={<BooksStore />} />
          <Route path="/register" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

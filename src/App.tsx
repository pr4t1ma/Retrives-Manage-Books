import { Route, Routes } from "react-router-dom";
import "./App.css";

import Login from "./Login";
import Welcome from "./Welcome";
import Register from "./Register";
import BooksStore from "./BooksStore";
import Bookdetail from "./Bookdetail";

function App() {
  return (
    <>
      <div className="container">
        <Routes>
          <Route path="/" element={<Welcome />} />
          {/* <Route path="/books" element={<BooksStore />} /> */}
          <Route path="/books" element={<BooksStore />} />
          <Route path="/bookdetail" element={<Bookdetail />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;

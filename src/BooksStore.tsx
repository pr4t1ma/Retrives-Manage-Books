import { useEffect, useState } from "react";
import Book from "./Book";
import Bookdetail from "./Bookdetail";
import { Link } from "react-router-dom";

const BooksStore = () => {
  const [serchTerm, setSerchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [booksData, setBooksData] = useState<any[]>([]);
  const getBooks = async () => {
    const data = await fetch(
      "https://669b7bc3276e45187d359bc8.mockapi.io/books",
      {
        method: "GET",
      }
    ).then((res) => res.json());
    setBooksData(data);
    setResults(data);
  };
  useEffect(() => {
    getBooks();
  }, []);

  const handlerInputVal = (e: any) => {
    setSerchTerm(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(serchTerm);
    console.log(booksData);
    const filterResults = booksData.filter((book) =>
      book.name.toLowerCase().includes(serchTerm.toLowerCase())
    );
    setResults(filterResults);
  };
  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="searchbar">
          <input
            type="search"
            placeholder="search"
            onChange={handlerInputVal}
            value={serchTerm}
          />
          <button className=" btn btn-primary" type="submit">
            search
          </button>
        </div>
      </form>

      <div className="books flex">
        {results.map((book) => {
          return (
            <Link to="/Bookdetail">
              <Book
                key={book.id}
                title={book.name}
                author={book.author}
                text={book.description}
                img={book.img}
              />
            </Link>
          );
        })}
        <Bookdetail />
      </div>
    </div>
  );
};

export default BooksStore;

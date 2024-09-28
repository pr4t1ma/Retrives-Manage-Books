import { useEffect, useState } from "react";
import Book from "./Book";
import { Link } from "react-router-dom";

const BooksStore = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [booksData, setBooksData] = useState<any[]>([]);
  const getBooks = async () => {
    const data = await fetch("http://localhost:3050/books", {
      method: "GET",
    }).then((res) => res.json());
    setBooksData(data);
    setResults(data);
  };
  useEffect(() => {
    getBooks();
  }, []);

  const handlerInputVal = (e: any) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    console.log(searchTerm);
    console.log(booksData);
    const filterResults = booksData.filter(
      (book) =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
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
            value={searchTerm}
          />
          <button className=" btn btn-primary" type="submit">
            search
          </button>
        </div>
      </form>

      <div className="books flex">
        {results.map((book) => {
          return (
            <Link to="/bookdetail">
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
      </div>
    </div>
  );
};

export default BooksStore;

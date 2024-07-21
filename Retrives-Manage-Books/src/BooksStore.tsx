import { useEffect, useState } from "react";
import Book from "./Book";

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
    const filterResults = booksData.filter((book) =>
      book.name.toLowerCase().includes(serchTerm.toLowerCase())
    );
    setBooksData(booksData);
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

      <div className="flex">
        {results.map((book) => {
          return (
            <Book
              title={book.name}
              author={book.author}
              text={book.description}
              img={book.img}
            />
          );
        })}
      </div>
    </div>
  );
};

export default BooksStore;

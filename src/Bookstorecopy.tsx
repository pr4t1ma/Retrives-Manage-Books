import { useEffect, useState } from "react";

const Bookstorecopy = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState<any[]>([]);
  const [bookData, setBookData] = useState<any[]>([]);

  const getBooks = async () => {
    const data = await fetch(
      "https://669b7bc3276e45187d359bc8.mockapi.io/books"
    ).then((res) => res.json());
    setResults(data);
    setBookData(data);
  };

  useEffect(() => {
    getBooks();
  });

  const handlerSubmit = (e: any) => {
    console.log(results, "hello");
    e.prevenDefault();
    const filterResults = bookData.filter((book) =>
      book.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setResults(filterResults);
  };

  const handlerInputVal = (e: any) => {
    setSearchTerm(e.target.value);
  };
  return (
    <div>
      <form action="" onSubmit={handlerSubmit}>
        <input
          type="text"
          placeholder="Search"
          onChange={handlerInputVal}
          value={searchTerm}
        />
        <button className="btn btn-active" onSubmit={handlerSubmit}>
          Serch
        </button>
        <div>
          {results.map((book) => {
            return <div>{book.name}</div>;
          })}
        </div>
      </form>
    </div>
  );
};

export default Bookstorecopy;

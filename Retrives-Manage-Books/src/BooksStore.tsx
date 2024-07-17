import { useState } from "react";
import Bookstore from "./Book";

const BooksStore = () => {
  const [inputVal, setInputVal] = useState("");
  const handlerInputVal = () => {
    setInputVal("");
  };
  const handlerBtn = (e: React.MouseEvent<HTMLButtonElement>) => {
    const value = (e.target as HTMLButtonElement).value;
    console.log(value, "hi");
  };
  return (
    <div className="">
      <div className="searchbar">
        <input
          type="search"
          placeholder="search"
          onChange={handlerInputVal}
          value={inputVal}
        />
        <button className=" btn btn-primary" onClick={handlerBtn}>
          search
        </button>
      </div>
      <div className="flex">
        <Bookstore
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxjOMFh_4S3R1OqtAD6TcO5PGJiMBswZYwsw&s"
          author="Mr.Handels"
          title="Book title"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu"
        />
        <Bookstore
          img="https://blog.uxfol.io/wp-content/uploads/2023/02/hooked-book-cover.png"
          author="Ms.Anni"
          title="Book title-2"
          text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam volu"
        />
        <Bookstore
          img="https://gabrielhidalgo.com.au/wp-content/uploads/2022/01/User-Interface-UI-design-books-gabriel-hidalgo-1024x592.jpg"
          author="Ms.Cabrielhidalgo"
          title="Dont make me think"
          text="This is my selection of the best UI books that I have read so far. I’ve selected a good mix as some of these books have a design technical focus and others some basic human psychology information"
        />

        <Bookstore
          img="https://simpleprogrammer.com/wp-content/uploads/2015/03/careerguide-amazon.jpg"
          author="Ms.JOHN SONMEZ"
          title="Simpler Programmer"
          text="Quite often I am asked about the top programming books that I'd recommend all software developers should read."
        />

        <Bookstore
          img="https://images-us.bookshop.org/ingram/9798538497140.jpg?height=500&v=v2"
          author="Ms.JOHN SONMEZ"
          title="Simpler Programmer"
          text="Quite often I am asked about the top programming books that I'd recommend."
        />

        <Bookstore
          img="https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1420871997i/1220152.jpg"
          author="Ms.JOHN SONMEZ"
          title="Simpler Programmer"
          text="Quite often I am asked about the top programming books that I'd recommend"
        />

        <Bookstore
          img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFqKPmt09wRRlbOhhsnKihFXatJp3Oa76raA&s"
          author="Ms.JOHN SONMEZ"
          title="Simpler Programmer"
          text="Quite often I am asked about the top programming books that I'd"
        />
      </div>
    </div>
  );
};

export default BooksStore;

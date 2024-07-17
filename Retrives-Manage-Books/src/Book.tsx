import { FC } from "react";
type BookProps = {
  img: string;
  title: string;
  author: string;
  text: string;
};
const Book: FC<BookProps> = ({ img, title, author, text }) => {
  return (
    <div>
      <div className="book-card">
        <img src={img} alt="" />
        <h2>{title}</h2>
        <p>{author}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Book;

import Comment from "./Comment";

const Bookdetail = () => {
  return (
    <div className="book-details">
      <img
        src="https://th.bing.com/th/id/OIP.kpAMTMeMN7Ewhx54RCRTeAHaEh?rs=1&pid=ImgDetMain"
        alt=""
      />

      <div className="book-detailsmeta">
        <h1>The Great Gatsby</h1>
        <p>
          <strong>Author:</strong> F. Scott Fitzgerald
        </p>
        <p>
          <strong>Publication Year:</strong> 1925
        </p>

        <p>
          <strong>Rating:</strong> 4.5/5
        </p>

        <p>
          *The Great Gatsby* is a novel set in the Roaring Twenties, a period of
          economic prosperity and cultural change in America. The story is
          narrated by Nick Carraway, who recounts his experiences with the
          mysterious and wealthy Jay Gatsby, his love for the elusive Daisy
          Buchanan, and the lavish parties Gatsby throws in hopes of rekindling
          their past romance. Through its rich symbolism and complex characters,
          the novel explores themes of wealth, ambition, and the American Dream.
        </p>
        <p>
          <strong>ISBN:</strong> 978-0743273565
        </p>

        <p>
          <strong>Publisher:</strong> Scribner
        </p>
        <Comment />
      </div>
    </div>
  );
};

export default Bookdetail;

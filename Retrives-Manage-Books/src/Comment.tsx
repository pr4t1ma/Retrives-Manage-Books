const Comment = () => {
  return (
    <div>
      <h1>Comment goes here</h1>
      <div className="comment-box">
        <input type="text" placeholder="comment " />
        <div>
          <div className="userimg">
            <img
              src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
              alt=""
            />
            <p>Jana Smith</p>
            <div className="date">23.4.2222</div>
          </div>
          <div className="tex">here is the comment text goes here</div>
          <div className="review">*****</div>
        </div>
      </div>
    </div>
  );
};

export default Comment;

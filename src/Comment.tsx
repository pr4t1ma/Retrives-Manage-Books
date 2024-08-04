const Comment = () => {
  return (
    <div className="comment-wrapper">
      <div className="comment-card">
        <div>
          <div className="userinfo">
            <img
              src="https://cdn.pixabay.com/photo/2014/03/25/16/54/user-297566_640.png"
              alt=""
            />
            <div className="reviewmeta">
              <p>Jana Smith</p>
              {/* <div className="date">23.4.2222</div> */}

              {/* <div className="review">*****</div> */}
            </div>
          </div>
        </div>
        <input type="text" placeholder="comment " />
      </div>
    </div>
  );
};

export default Comment;

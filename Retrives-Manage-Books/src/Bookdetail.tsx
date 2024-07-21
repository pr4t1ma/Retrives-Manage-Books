import Comment from "./Comment";

const Bookdetail = () => {
  return (
    <div>
      <img
        src="https://th.bing.com/th/id/R.cc989d93242ea9b8d9f7d31d4a52e4f4?rik=%2b9IkTIa59%2fPqvw&riu=http%3a%2f%2fgetwallpapers.com%2fwallpaper%2ffull%2fb%2f5%2f8%2f165930.jpg&ehk=KR67Pv2C0d71F9yJ4Igz9wd1q7iSZYHza5GGsqipEtU%3d&risl=&pid=ImgRaw&r=0"
        alt=""
      />
      <div className="details">
        <h3>Book details</h3>
        <p>Here is more book deatils ba-hjdfhdusfh</p>
        <div className="user-comm">
          <div className="userimg">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/004/607/791/small/man-face-emotive-icon-smiling-male-character-in-blue-shirt-flat-illustration-isolated-on-white-happy-human-psychological-portrait-positive-emotions-user-avatar-for-app-web-design-vector.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Comment />
    </div>
  );
};

export default Bookdetail;

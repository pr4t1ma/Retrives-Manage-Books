import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="register main">
      <h1>Welcome to my book store</h1>
      <div className="btn-wrapper">
        <Link to="register" className="btn btn-btn">
          Register
        </Link>
        <Link className=" btn btn-primary" to="/login">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

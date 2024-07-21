import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="register main">
      <h1>Welcome to my book store</h1>
      <div className="btn-wrapper">
        <Link className="btn btn-btn" to="Register">
          Register
        </Link>
        <Link className="btn btn-active" to="Login">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Welcome;

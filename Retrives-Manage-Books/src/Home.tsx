import { useState } from "react";

const Home = () => {
  const [username, SetUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState("");

  const handlersignIn = () => {
    console.log(setRegister, "hello");
  };

  return (
    <div className="home main">
      <h1>Welcome to my book store</h1>
      <div className="btn-wrapper">
        <button className="active">Register</button>
        <button className="btn">Sign In</button>
      </div>
    </div>
  );
};

export default Home;

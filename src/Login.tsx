import { ChangeEventHandler, useState } from "react";

const Login = () => {
  const [inputVal, setInputVal] = useState("");

  const ChangeInputVal: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value);
    console.log("hello", e);
  };
  return (
    <div className="main">
      <div className="signin-form">
        <form action="">
          <div className="form-wrapper">
            <h2>Login</h2>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="Email"
              id="email"
              placeholder="Email"
              onChange={ChangeInputVal}
              value={inputVal}
            />
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="Password"
              id="password"
              placeholder="Password"
              onChange={ChangeInputVal}
              value={inputVal}
            />
            <button className="btn">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

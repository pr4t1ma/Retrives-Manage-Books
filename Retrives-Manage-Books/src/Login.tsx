import { ChangeEventHandler, useState } from "react";

const Login = () => {
  const [inputVal, setInputVal] = useState("");

  const ChangeInputVal: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value);
    console.log("hello", e);
  };
  return (
    <div className="main">
      <div className="main-wrap">
        <div className="User-img">
          <img
            src="https://img.freepik.com/premium-vector/person-working-laptop-with-style-vector_995281-336.jpg"
            alt=""
          />
        </div>
        <form action="">
          <div className="form-wrapper">
            <h2>SignIn</h2>
            <label htmlFor="name">Name</label>
            <input
              type="name"
              name="Email"
              id="name"
              placeholder="Name"
              onChange={ChangeInputVal}
              value={inputVal}
            />
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

            <div className="btn-wrapper">
              <button className="active">SignIn</button>
              <button className="btn">Create Account</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;

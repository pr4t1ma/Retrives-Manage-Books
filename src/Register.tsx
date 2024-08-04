import { ChangeEventHandler, useState } from "react";

const Register = () => {
  const [inputVal, setInputVal] = useState("");

  const ChangeInputVal: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputVal(e.target.value);
    console.log("hello", e);
  };
  return (
    <div>
      <h1>Register Here</h1>
      <div className="signin-form">
        <form action="">
          <div className="form-wrapper">
            <label htmlFor="Name">Name</label>
            <input
              type="name"
              name="name"
              id="name"
              placeholder="name"
              onChange={ChangeInputVal}
              value={inputVal}
            />
            <label htmlFor="name">Name</label>
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

export default Register;

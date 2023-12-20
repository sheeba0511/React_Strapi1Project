import React, { useState } from "react";

export default function Register() {
  //1 Hooks variable area
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //2 function area
  let sendData = () => {
    let payload = {
      username: username,
      email: email,
      password: password,
    };

    fetch("http://localhost:1337/api/auth/local/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // 3 return area
  return (
    <>
      <form className="container w-25 offset-3">
        <h4> Registeration Form</h4>
        <div className="mb-3 ">
          <label htmlFor="username" className="form-label">
            UserName
          </label>
          <input
            type="text"
            name="username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            className="form-control"
            id="username"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3 ">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="button" onClick={sendData} className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

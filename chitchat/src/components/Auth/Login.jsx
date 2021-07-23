import axios from "axios";
import React, { useEffect, useState } from "react";
import actions from "../Store/actions/actions";
import { useMyContext } from "../Store/Context/Context";
import "./Style.css";
const Login = () => {
  const [state, dispatch] = useMyContext();
  const [token, setToken] = useState(null);
  const [message, setMessage] = useState(null);
  const formSubmitted = async (e) => {
    e?.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    await axios.post("http://localhost:4000/login", { data: { username, password } }).then((res) => {
      if (res.data.success) {
        setToken(res.data.token);
        setMessage(null);
      } else {
        setMessage(res.data.message);
      }
    });
  };
  const pageHandler = async (token) => {
    axios
      .get("http://localhost:4000/chat", {
        headers: {
          authorization: token,
        },
      })
      .then((response) => {
        if (response.data.success) {
          dispatch({ type: actions.USER_LOGIN_SUCCESS, payload: { status: true } });
          dispatch({ type: actions.ADD_USER, payload: response.data.user });
        } else {
          setMessage(response.data.message);
        }
      });
  };
  useEffect(() => {
    if (token) {
      pageHandler(token);
    }
  }, [token]);
  return (
    <div className="login">
      <h1>Login {token}</h1>

      <form onSubmit={(e) => formSubmitted(e)} id="formSubmit" method="POST" action="http://localhost:4000/login" encType="application/json">
        <input type="text" placeholder="Username" required="required" id="username" />
        <input type="password" placeholder="Password" required="required" id="password" />
        <button type="submit" className="btn btn-primary btn-block btn-large">
          Let me in.
        </button>
      </form>
      <br />
      {message && <span className="messages">{message}</span>}
    </div>
  );
};

export default Login;

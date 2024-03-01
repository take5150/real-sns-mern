import React, { useContext, useRef } from "react";
import "./Login.css";
import { loginCall } from "../../actionCalls";
import { AuthContext } from "../../state/AuthContext";
import { Link } from "react-router-dom";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    loginCall(
      {
        email: email.current.value,
        password: password.current.value,
      },
      dispatch
    );
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">みんなと楽しく会話しましょう。</span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={(e) => handleSubmit(e)}>
            <p className="loginMsg">ログインはこちらから</p>
            <input
              type="email"
              className="loginInput"
              placeholder="EMail"
              required
              ref={email}
            />
            <input
              type="password"
              className="loginInputPassword"
              placeholder="Password"
              required
              ref={password}
            />
            <button className="loginButton">ログイン</button>
            <Link
              to="/register"
              style={{ textDecoration: "none", marginBottom: "20px" }}
            >
              <span className="loginForgotButton">パスワードを忘れた方へ</span>
            </Link>
            <Link to="/register" style={{ width: "60%" }}>
              <button className="loginRegister">アカウントを作成する</button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

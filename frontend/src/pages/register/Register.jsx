import React, { useRef } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default function Register() {
  const username = useRef();
  const email = useRef();
  const password = useRef();
  const confirmation = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password.current.value !== confirmation.current.value) {
      confirmation.current.setCustomValidity("パスワードが違います");
    } else {
      try {
        const user = {
          username: username.current.value,
          email: email.current.value,
          password: password.current.value,
        };

        await axios.post("/auth/register", user);
      } catch (err) {}
    }
  };
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">みんなと楽しく会話しましょう。</span>
        </div>
        <div className="registerRight">
          <form onSubmit={(e) => handleSubmit(e)} className="registerBox">
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザ名"
              required
              ref={username}
            />
            <input
              type="email"
              className="registerInput"
              placeholder="EMail"
              required
              ref={email}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="パスワード"
              required
              ref={password}
            />
            <input
              type="password"
              className="registerInput"
              placeholder="確認用パスワード"
              required
              ref={confirmation}
            />
            <button type="submit" className="registerButton">
              サインアップ
            </button>
            <Link
              to="/login"
              style={{ textDecoration: "none", textAlign: "center" }}
            >
              <span className="loginToButton">ログイン画面に移動する</span>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

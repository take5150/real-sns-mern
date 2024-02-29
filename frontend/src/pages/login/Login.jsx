import React from "react";
import "./Login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Real SNS</h3>
          <span className="loginDesc">みんなと楽しく会話しましょう。</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <p className="loginMsg">ログインはこちらから</p>
            <input type="text" className="loginInput" placeholder="EMail" />
            <input type="text" className="loginInput" placeholder="Password" />
            <button className="loginButton">ログイン</button>
            <span className="loginForgotButton">パスワードを忘れた方へ</span>
            <button className="loginRegister">アカウント作成</button>
          </div>
        </div>
      </div>
    </div>
  );
}

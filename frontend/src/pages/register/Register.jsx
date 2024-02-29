import React from "react";
import "./Register.css";

export default function Register() {
  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">Real SNS</h3>
          <span className="registerDesc">みんなと楽しく会話しましょう。</span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <p className="registerMsg">新規登録はこちら</p>
            <input
              type="text"
              className="registerInput"
              placeholder="ユーザ名"
            />
            <input type="text" className="registerInput" placeholder="EMail" />
            <input
              type="text"
              className="registerInput"
              placeholder="パスワード"
            />
            <input
              type="text"
              className="registerInput"
              placeholder="確認用パスワード"
            />
            <input
              type="text"
              className="registerInput"
              placeholder="Password"
            />
            <button className="registerButton">サインアップ</button>
            <button className="loginButton">ログイン</button>
          </div>
        </div>
      </div>
    </div>
  );
}

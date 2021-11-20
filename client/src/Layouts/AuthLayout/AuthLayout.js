import React, { useState } from "react";
import { Link } from "react-router-dom";
import Forgot from "../../components/Forgot/Forgot";
import Login from "../../components/Login/Login";
import Register from "../../components/Register/Register";
import "./authlayout.scss";
function AuthLayout() {
  const [isLogin, setIsLogin] = useState(true);
  const [isRegister, setIsRegister] = useState(false);
  const [isForgot, setIsForgot] = useState(false);
  const handleClickButton = (value) => {
    if (value === "register") {
      setIsRegister(true);
      setIsLogin(false);
      setIsForgot(false);
    } else if (value === "login") {
      setIsRegister(false);
      setIsLogin(true);
      setIsForgot(false);
    } else {
      setIsRegister(false);
      setIsLogin(false);
      setIsForgot(true);
    }
  };
  return (
    <div className="authlayout">
      {/* logo */}
      <div className="authlayout_logo">
        <img src="./assets/img/shuttle.svg" alt="logo" />
      </div>

      {isLogin && <Login />}
      {isRegister && <Register />}
      {isForgot && <Forgot />}

      <div className="authlayout_actions">
        <p
          className="authlayout_actions-r"
          onClick={
            isLogin
              ? () => handleClickButton("register")
              : () => handleClickButton("login")
          }
        >
          {isLogin ? "register" : "login"}
        </p>

        <p
          className="authlayout_actions-l"
          onClick={() => handleClickButton("forgot")}
        >
          forgot?
        </p>
      </div>
    </div>
  );
}

export default AuthLayout;

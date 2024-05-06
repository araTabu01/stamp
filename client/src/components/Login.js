import React, { useState } from "react";
import { FaUser, FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import backgroundImage from "../Assets/login_backgrd.jpg";
import { userLogin } from "../api";
import "../styles/loginStyle.css";

const Login = () => {
  const [easyproID, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      console.log(
        "The received easyproId and password in the login component is ",
        easyproID,
        " and ",
        password
      );
      const response = await userLogin(easyproID, password);

      if (response.data.error) {
        setErrorMessage(response.data.error);
      } else {
        localStorage.setItem("userId", JSON.stringify(easyproID));
        localStorage.setItem("userInfo", JSON.stringify(response.data.user));
        navigate("/home");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div
      className="login-container"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundColor: "#f0f0f0",
      }}
    >
      <div className="overlay"></div>
      <div className="login-form">
        <h2>ログイン</h2>
        <div className="input-container">
          <FaUser className="input-icon" />
          <input
            type="text"
            placeholder="EasyPro ID"
            value={easyproID}
            onChange={(e) => setUsername(e.target.value)}
            pattern="[A-Za-z0-9]+"
          />
        </div>
        <div className="input-container">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {showPassword ? (
            <FaEyeSlash
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          ) : (
            <FaEye
              className="password-icon"
              onClick={() => setShowPassword(!showPassword)}
            />
          )}
        </div>
        <button onClick={handleLogin}>ログイン</button>
        {errorMessage && <h3 style={{ color: "red" }}>{errorMessage}</h3>}
      </div>
    </div>
  );
};

export default Login;

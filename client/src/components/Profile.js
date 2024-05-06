import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import logoImage from "../Assets/logo.png";
import { FaHome } from "react-icons/fa"; // Import home icon from react-icons library
import "../styles/profileStyle.css";

const UserProfile = () => {
  const [userInfo, setUserInfo] = useState(null);
  const userId = JSON.parse(localStorage.getItem("userId"));

  useEffect(() => {
    axios
      .get(`http://localhost:5000/user/${userId}`)
      .then((response) => {
        setUserInfo(response.data);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  }, [userId]);

  if (!userInfo) {
    return <h1>読み込み中....</h1>;
  }

  return (
    <div className="user-profile-container">
      {/* Header */}
      <header className="header">
        <div className="logo">
          <img src={logoImage} alt="Your Logo" />
        </div>
        <div className="home-button-container">
          <Link to="/home" className="home-button">
            <FaHome size={30} />
          </Link>
        </div>
      </header>

      {/* Profile Content */}
      <div className="user-profile">
        <div className="profile-header">
          <h2>従業員情報</h2>
        </div>
        <div className="profile-content">
          {/* Display User Info */}
          <div className="profile-info">
            <div className="profile-label">名前:</div>
            <div className="profile-value">{userInfo.business_name}</div>
          </div>
          <div className="profile-info">
            <div className="profile-label">Easypro ID:</div>
            <div className="profile-value">{userInfo.easyproID}</div>
          </div>
          <div className="profile-info">
            <div className="profile-label">場所:</div>
            <div className="profile-value">{userInfo.location}</div>
          </div>
          <div className="profile-info">
            <div className="profile-label">部門:</div>
            <div className="profile-value">{userInfo.dept}</div>
          </div>
          <div className="profile-info">
            <div className="profile-label">グループ:</div>
            <div className="profile-value">{userInfo.group}</div>
          </div>
          <div className="profile-info">
            <div className="profile-label">チーム:</div>
            <div className="profile-value">{userInfo.team}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

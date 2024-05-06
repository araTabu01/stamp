import React, { useState, useEffect } from "react";
import { FaHome } from "react-icons/fa";
import Logo from "../Assets/logo.png";
import { Link } from "react-router-dom";
import "../styles/historyStyle.css";

const History = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setFormDataList(parsedFormData);
    }
  }, []);

  return (
    <div className="history-page-container">
      {" "}
      {/* New container div */}
      <div className="history-container">
        {/* Logo */}
        <a
          href="https://www.tel-mic.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-container top-left"
        >
          <img src={Logo} alt="Your Logo" className="logo" />
        </a>
        <Link to="/home" className="home-button top-right">
          <FaHome size={30} />
        </Link>

        <div className="history-table-container">
          <table className="history-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Branch</th>
                <th>Requester</th>
                <th>Document Type</th>
                <th>Document Name</th>
                <th>Seal Name</th>
                <th>Number of Stamps</th>
                <th>Reason</th>
                <th>Approval Date</th>
                <th>Approver</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Render form data rows dynamically */}
              {Array.isArray(formDataList) && formDataList.length > 0 ? (
                formDataList.map((formData, index) => (
                  <tr key={index}>
                    <td>{formData.date}</td>
                    <td>{formData.branch}</td>
                    <td>{formData.name}</td>
                    <td>{formData.documentType}</td>
                    <td>{formData.documentName}</td>
                    <td>{formData.kindOfStamp}</td>
                    <td>{formData.numberOfStamp}</td>
                    <td>{formData.reason}</td>
                    <td>{formData.approvalDate}</td>{" "}
                    {/* Display approval date from admin page */}
                    <td>{formData.authorizer}</td>
                    <td>{formData.isApproved ? "承認済" : "保留中"}</td>{" "}
                    {/* Display status based on isApproved */}
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="11">データなし</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Embedded CSS */}
      </div>
    </div>
  );
};

export default History;

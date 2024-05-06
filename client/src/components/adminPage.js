import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaTrash, FaFileExcel } from "react-icons/fa";
import logoImage from "../Assets/logo.png";
import "../styles/adminStyle.css";
import { exportToExcel } from "../utils/excelUtils";

const Admin = () => {
  const [formDataList, setFormDataList] = useState([]);

  useEffect(() => {
    const storedFormData = localStorage.getItem("formData");
    if (storedFormData) {
      const parsedFormData = JSON.parse(storedFormData);
      setFormDataList(parsedFormData);
    }
  }, []);

  const updateLocalStorage = (data) => {
    localStorage.setItem("formData", JSON.stringify(data));
  };
  const userId = JSON.parse(localStorage.getItem("userId"));

  // Check if user is authorized
  if (userId !== "12345") {
    // Handle unauthorized access
    // Redirect to login or show error message
    return <h2>Unauthorized Access</h2>;
  }

  const handleCheckboxChange = (index) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index].isApproved =
      !updatedFormDataList[index].isApproved;
    updatedFormDataList[index].status = updatedFormDataList[index].isApproved
      ? "承認済"
      : "保留中";
    if (!updatedFormDataList[index].isApproved) {
      // Reset approval date if not approved
      updatedFormDataList[index].approvalDate = "";
    }
    setFormDataList(updatedFormDataList);
    updateLocalStorage(updatedFormDataList);
    alert(
      updatedFormDataList[index].isApproved
        ? "リクエストが承認されました!"
        : "リクエストが拒否されました!"
    );
  };

  const handleDateChange = (index, event) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList[index].approvalDate = event.target.value;
    setFormDataList(updatedFormDataList);
    updateLocalStorage(updatedFormDataList);
  };

  const handleDeleteRow = (index) => {
    const updatedFormDataList = [...formDataList];
    updatedFormDataList.splice(index, 1);
    setFormDataList(updatedFormDataList);
    updateLocalStorage(updatedFormDataList);
  };

  const handleExportExcel = () => {
    exportToExcel(formDataList);
  };

  return (
    <div className="admin-container">
      <div className="logo">
        <a
          href="https://www.tel-mic.co.jp/"
          target="_blank"
          rel="noopener noreferrer"
          className="logo-container"
        >
          <img src={logoImage} alt="Your Logo" />
        </a>
      </div>
      <div className="home-button-container">
        <Link to="/home" className="home-button">
          <FaHome size={30} />
        </Link>
        <button className="export-button" onClick={handleExportExcel}>
          <FaFileExcel size={30} />
        </button>
      </div>
      <div className="admin-table-container">
        <table className="admin-table">
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
              <th>Approve</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {formDataList && formDataList.length > 0 ? (
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
                  <td>
                    <input
                      type="date"
                      value={formData.approvalDate}
                      onChange={(event) => handleDateChange(index, event)}
                      disabled={formData.isApproved}
                    />
                  </td>
                  <td>{formData.authorizer}</td>
                  <td>{formData.status}</td>
                  <td className="center-checkbox">
                    {formData.isApproved ? (
                      <>
                        承認済
                        <button
                          style={{
                            backgroundColor: "darkblue",
                            color: "white",
                            border: "none",
                            padding: "6px 14px",
                            borderRadius: "4px",
                            cursor: "pointer",
                            marginLeft: "15px",
                          }}
                          onClick={() => handleCheckboxChange(index)}
                        >
                          Undo
                        </button>
                      </>
                    ) : (
                      <input
                        type="checkbox"
                        onChange={() => handleCheckboxChange(index)}
                      />
                    )}
                  </td>
                  <td>
                    <FaTrash
                      onClick={() => handleDeleteRow(index)}
                      style={{ cursor: "pointer" }}
                    />
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="13">No data</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Admin;

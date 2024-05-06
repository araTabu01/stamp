// controllers/profile.js

import { UserInfo } from "../models/user.js";

// Function to get all user information
export const getAllUserInfo = async (req, res) => {
  try {
    const allUserInfo = await UserInfo.find();

    if (allUserInfo.length === 0) {
      return res.status(404).json({ message: "No user information found" });
    }

    return res.status(200).json(allUserInfo);
  } catch (error) {
    console.error("Error fetching user information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Function to get single user information by ID
export const getSingleUserInfo = async (req, res) => {
  try {
    const userInfo = await UserInfo.findOne({ easyproID: req.params.id });

    if (!userInfo) {
      return res
        .status(404)
        .json({ message: "User information with specified ID not found" });
    }

    return res.status(200).json(userInfo);
  } catch (error) {
    console.error("Error fetching user information:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// Import necessary modules
import { UserInfo } from "../models/userInfo"; // Adjust the path as needed

// Controller function to handle form submission
const saveFormData = async (req, res) => {
  try {
    // Extract form data from request body
    const formData = req.body;

    // Create a new instance of UserInfo model with form data
    const newUserInfo = new UserInfo(formData);

    // Save the new instance to the database
    const savedUserInfo = await newUserInfo.save();

    res
      .status(201)
      .json({ message: "Data saved successfully", data: savedUserInfo });
  } catch (error) {
    res.status(500).json({
      message: "An error occurred while saving data",
      error: error.message,
    });
  }
};

// Export the controller function for use in routes
export { saveFormData };

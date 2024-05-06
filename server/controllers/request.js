import { UserInfo } from "../models/requestModel"; // Update the path to your model file
// Controller function to create a new user info entry
const createUserInfo = async (req, res) => {
  try {
    const {
      date,
      name,
      branch,
      doc_type,
      doc_name,
      Kind_of_stamp,
      number_stamp,
      situation,
      authorizer,
    } = req.body;

    const newUserInfo = new UserInfo({
      date,
      name,
      branch,
      doc_type,
      doc_name,
      Kind_of_stamp,
      number_stamp,
      situation,
      authorizer,
    });

    const savedUserInfo = await newUserInfo.save();

    res.status(201).json(savedUserInfo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Controller function to fetch all user info entries
const getInfo = async (req, res) => {
  try {
    const allUserInfo = await UserInfo.find();
    res.status(200).json(allUserInfo);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createUserInfo, getInfo };

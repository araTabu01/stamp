import { UserInfo } from "../models/login.Model.js";

const login = async (req, res) => {
  const { easyproID, password } = req.body;

  try {
    // Check if easyproID and password are provided
    if (!easyproID || !password) {
      return res.status(400);
    }

    // Find user by easyproID
    const user = await UserInfo.findOne({ easyproID });

    if (!user || password !== user.password) {
      return res.json({ error: "IDまたはパスワードが間違っています！" });
    }

    // If passwords match, login successful
    return res.status(200).json({ message: "Login successful", user });
  } catch (error) {
    console.error("Error occurred:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

export { login };

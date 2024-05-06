import mongoose from "mongoose";
const { Schema } = mongoose;

const userInfoSchema = new Schema(
  {
    easyproID: {
      type: Number,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export const UserInfo = mongoose.model("logins", userInfoSchema);

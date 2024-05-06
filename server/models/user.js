import mongoose from "mongoose";
const { Schema } = mongoose;

const userInfoSchema = new Schema(
  {
    easyproID: {
      type: Number,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    business_name: {
      type: String,
      required: true,
    },
    dept: {
      type: String,
    },
    group: {
      type: String,
    },
    team: {
      type: String,
    },
    location: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserInfo = mongoose.model("employees", userInfoSchema);

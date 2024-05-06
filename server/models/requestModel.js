import mongoose from "mongoose";
const { Schema } = mongoose;

const userInfoSchema = new Schema(
  {
    date: {
      type: Date,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    branch: {
      type: String,
      required: true,
    },
    doc_type: {
      type: String,
    },
    doc_name: {
      type: String,
    },
    Kind_of_stamp: {
      type: String,
    },
    number_stamp: {
      type: Number,
    },
    situation: {
      type: String,
    },
    authorizer: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

export const UserInfo = mongoose.model("request", userInfoSchema);

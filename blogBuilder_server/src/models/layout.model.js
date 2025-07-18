import mongoose, { Schema } from "mongoose";

const sectionSchema = new Schema(
  {
    type: {
      String,
      required: true,
    },
    image: String,
    text: String,
    title: String,
    content: String,
  },
  {
    _id: false,
  }
);

const layoutSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  layoutConfig: {
    layoutType: { type: String, default: "grid" },
    columns: { type: Number, default: 3 },
  },
});

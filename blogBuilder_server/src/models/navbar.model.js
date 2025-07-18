import mongoose from "mongoose";

const NavbarItemSchema = new mongoose.Schema({
  label: { type: String, required: true },
  path: { type: String, required: true },
  target: { type: String, default: "_self" },
  icon: String,
});

const NavbarSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },
  //   logoText: {
  //     type: String,
  //     default: "MySite",
  //   },
  siteTitle: {
    type: String,
    default: "Welcome to My Website",
  },
  position: {
    type: String,
    enum: ["left", "center", "right"],
    default: "left",
  },
  items: {
    type: [NavbarItemSchema],
    default: [
      { label: "Home", path: "/" },
      { label: "Blog", path: "/blog" },
      { label: "Contact", path: "/contact" },
    ],
  },
});

export default mongoose.model("Navbar", NavbarSchema);

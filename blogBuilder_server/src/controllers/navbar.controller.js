import Navbar from "../models/Navbar.js";

// Get navbar config for the logged-in user
export const getNavbar = async (req, res) => {
  try {
    const navbar = await Navbar.findOne({ user: req.userId });
    if (!navbar) return res.status(404).json({ message: "Navbar not found" });
    res.json(navbar);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Update navbar config for the logged-in user
export const updateNavbar = async (req, res) => {
  try {
    const updatedNavbar = await Navbar.findOneAndUpdate(
      { user: req.userId },
      req.body, // expects full or partial navbar object
      { new: true, runValidators: true }
    );
    if (!updatedNavbar)
      return res.status(404).json({ message: "Navbar not found" });
    res.json({ success: true, navbar: updatedNavbar });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// Optional: Create a default navbar for a new user (call after registration)
export const createNavbarForUser = async (userId) => {
  try {
    const exists = await Navbar.findOne({ user: userId });
    if (exists) return exists; // already exists, don't create duplicate

    const navbar = await Navbar.create({ user: userId });
    return navbar;
  } catch (err) {
    console.error("Failed to create default navbar:", err);
    throw err;
  }
};

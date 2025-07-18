import jwt from "jsonwebtoken";
import mongoose, { Schema } from "mongoose";
const userSchema = new Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      trim: true,
    },
    confirmPassword: {
      type: String,
      required: true,
      validate: {
        validator: function (value) {
          return this.password === value;
        },
        message: "Passwords do not match",
      },
    },
  },
  {
    timestamps: true,
  }
);

userSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 10);
  this.confirmPassword = null;
  next();
});
userSchema.methods.isPasswordCorrect = async function (password) {
  if (!password) return null;
  return await bcrypt.compare(password, this.password);
};
userSchema.generateAccessToken = function () {
  return jwt.sign(
    {
      _id: this._id,
      email: this.email,
    },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    {
      expiresIn: process.env.ACCESS_TOKEN_EXPIRE,
    }
  );
};
userSchema.methods.generateRefreshToken = function () {
  return jwt.sign({ _id: this._id }, process.env.REFRESH_TOKEN_SECRET_KEY, {
    expiresIn: REFRESH_TOKEN_EXPIRE,
  });
};

const User = mongoose.model("User", userSchema);
export default User;

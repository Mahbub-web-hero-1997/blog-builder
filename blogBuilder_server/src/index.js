import app from "./app.js";
import connectDb from "./db/connectionDb.js";
import dotenv from "dotenv";
dotenv.config();

connectDb()
  .then(() => {
    const port = process.env.PORT || 5000;
    app.listen(port, () => {
      console.log("This app running on PORT:", port);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to DB:", error.message);
  });

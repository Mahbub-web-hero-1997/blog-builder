import cookieParser from "cookie-parser";
import express from "express";
import cors from "cors";
const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static("./public/temp"));
app.use(
  express.urlencoded({
    extended: true,
    limit: "16kb",
  })
);
app.use(
  cookieParser({
    secure: true,
    httpOnly: true,
  })
);

export default app;

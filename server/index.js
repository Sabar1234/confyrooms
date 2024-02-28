const express = require("express");
const connectDb = require("./dataBase/db");
const app = express();
const port = 3000;
const userRouter = require("./routes/user");
const ProductRouter = require("./routes/products");
const cookieParser = require("cookie-parser");
const cors = require("cors");
connectDb();
app.use(
  cors({
    origin: true, //"http://localhost:5173",
    credentials: true,
  })
);
app.use(cookieParser());
app.use(express.json());
app.use("/api", userRouter);
app.use("/api", ProductRouter);

app.get("/", (req, res) => res.send("Hellow World"));
app.listen(port, () => console.log(`App is running on ${port}`));

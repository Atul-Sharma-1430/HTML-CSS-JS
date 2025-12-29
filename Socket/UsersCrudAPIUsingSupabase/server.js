const express = require("express");
const userRouter = require("./routers/userRouter");

const app = express();

app.use(express.json()); // ye middleware hai jo json data ko parse krta hai
app.use("/users", userRouter); // ye middleware hai jo userRouter ko use krta hai

app.listen(4000, () => {
  console.log("Server is running on port 4000");
});

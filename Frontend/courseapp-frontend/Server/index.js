const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const adminRouter = require('./routes/admin');
const userRouter = require('./routes/user');

const app = express();

app.use(cors());
app.use(express.json()); 

app.use("/admin", adminRouter);
app.use("/user", userRouter);

mongoose.connect("mongodb+srv://demo:demo123@cluster0.2aib0we.mongodb.net/", {
})

app.listen(3000, () => 
    console.log("Server is running on port 3000"))
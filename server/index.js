const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors");
require('dotenv').config();
const app=express();


 app.use(express.json());

app.use('/api/auth', require('./routes/auth'));
app.use('/api/user',require('./routes/user'))

async function main() {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log(" Connected to MongoDB");

    app.listen(3002, () => {
      console.log("Server running on port 3002");
    });
  } catch (err) {
    console.error("Failed to connect to MongoDB", err);
  }
}

main();

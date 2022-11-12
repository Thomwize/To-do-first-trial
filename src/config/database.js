const mongoose = require("mongoose");
const { config } = require("dotenv");
config();
async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_DB_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("Connected to mongoDB");
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = connect;

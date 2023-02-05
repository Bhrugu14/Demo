const mongoose = require("mongoose");
const url = `mongodb+srv://hiral0812:hiral0812@cluster0.keb4cpf.mongodb.net/test`;

mongoose.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (err) {
    if (err) {
      console.log("Error While Connecting The DB", err);
      process.exit();
    } else {
      console.log(
        mongoose.connection.readyState,
        "MongoDB Connection Successfully"
      );
    }
  }
);
module.exports = { mongoose };

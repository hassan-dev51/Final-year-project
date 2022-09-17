const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("====================================");
    console.log(`connection successfull`);
    console.log("====================================");
  })
  .catch(() => {
    console.log(`erro`);
  });

const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose
  .connect(DB)
  .then(() => {
    console.log("====================================");
    console.log(`connection successfull`);
    console.log("====================================");
  })
  .catch(() => {
    console.log(`erro`);
  });

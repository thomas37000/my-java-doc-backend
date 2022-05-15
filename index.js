const express = require("express");
const PORT = 8080;
const app = express();

const cors = require("cors");


app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});

// middlewares


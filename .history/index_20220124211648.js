import express from "express";

const app = express();

// app.listen(3000, () => console.log("Example app listening on port 3000!"));

import "dotenv/config";

app.get("/users", (req, res) => {
  return res.send("GET HTTP method on user resource");
});

app.post("/users", (req, res) => {
  return res.send("POST HTTP method on user resource");
});

app.put("/users/:userId", (req, res) => {
  return res.send(`PUT HTTP method on user/${req.params.userId} resource`);
});

app.delete("/users/:userId", (req, res) => {
  return res.send(`DELETE HTTP method on user/${req.params.userId} resource`);
});

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);

/* ---testing --  */
console.log(" NASA API ");
// console.log(process.env.API_KEY);

let users = {
  1: {
    id: "1",
    username: "Robin X",
  },
  2: {
    id: "2",
    username: "Carol S",
  },
};

let messages = {
  1: {
    id: "1",
    text: "Good Day",
    userId: "1",
  },
  2: {
    id: "2",
    text: "By World",
    userId: "2",
  },
};

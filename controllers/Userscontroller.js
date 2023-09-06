const userData = require("../models/userInfo");
module.exports = {
  get: (req, res) => {
    res.send(userData);
  },

  getByid: (req, res) => {
    const id = parseInt(req.params.id);
    const userByid = userData.find((user) => user.id === id);
    if (userByid) {
        res.json(userByid);
    }else{
        res.status(404).json({ Error: "user not found" });
    }
    
  },

  post: (req, res) => {
    const { username, name, email } = req.body;
    const newUser = {
      id: userData.length + 1,
      name: name,
      username: username,
      email: email,
    };
    userData.push(newUser);
    res.json("new user added");
  },

  put: (req, res) => {
    const id = parseInt(req.params.id);
    const { username, name, email } = req.body;
    const userIndex = userData.findIndex((user) => user.id === id);
    if (userIndex === -1) {
      res.status(404).json({ Error: "user not found" });
    } else {
      userData[userIndex] = { ...userData[userIndex], name, username, email };
      res.json(userData[userIndex]);
    }
  },

  delete: (req, res) => {
    const id = parseInt(req.params.id);
    const userindex = userData.findIndex((user) => user.id === id);
    if (userindex === -1) {
      res.status(404).json({ Error: "user not found" });
    } else {
      userData.splice(userindex, 1);
      res.json(userData);
    }
  },
};

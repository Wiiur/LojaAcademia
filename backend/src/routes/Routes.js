const express = require("express");
const { registerUser, loginUser, getUsers } = require("../controllers/userController");
const verifyToken = require("../../middleware/verifyToken");
const router = express.Router();


//controle de usuario
router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/", getUsers);
router.get("/meus-dados", verifyToken, (req, res) => {
    res.json({
      message: "Acesso liberado",
      uid: req.user.uid,
      email: req.user.email
    });
  });

module.exports = router;

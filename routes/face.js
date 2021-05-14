const express = require("express");
const Usuarios = require("../models/usuarios.model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { DetectFaceExtract } = require("../functions/faceRecognition.js");

router.post("/face", async function (req, res) {
  console.log(req.body);
  const { photo } = req.body;
  console.log(photo.toString());
  await DetectFaceExtract(photo);
});

module.exports = router;

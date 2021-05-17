const express = require("express");
const router = express.Router();
const { DetectFaceExtract } = require("../functions/faceRecognition.js");

const Face = require("../models/face.model");

router.post("/face", async function (req, res) {
  console.log(req.body);
  const { blob } = req.body;
  //console.log(photo.toString());
  await DetectFaceExtract(blob);
});


router.post('/save', (req, res) => {
  const data = req.body;
  console.log(data)
  const newFace = new Face(data);

  newFace.save((error) => {
      if (error) {
          res.status(500).json({ msg: 'There is a leaking pipe :(' });
          console.log(error);
          return;
      }
      // BlogPost
      return res.json({
          msg: 'Your data has been saved!!!'
      });
  });
});

module.exports = router;

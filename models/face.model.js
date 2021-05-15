const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const FaceSchema = new Schema(
  {
    faceId: { type: String, required: true },
    recognitionModel: { type: String, required: true },
    faceRectangle: { type: Object, required: true },
    faceAttributes: { type: Object, required: true }
  },
  {
    timestamps: true,
  }
);

const Faces = mongoose.model("Face", FaceSchema);

module.exports = Faces;

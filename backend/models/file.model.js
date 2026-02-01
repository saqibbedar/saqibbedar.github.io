import mongoose from "mongoose";
const { Schema, model, models } = mongoose;

const fileSchema = new Schema(
  {
    filename: { type: String, required: true, trim: true },
    url: { type: String, required: true, trim: true },
    mimeType: { type: String, trim: true },
    size: { type: Number, min: 0 },
    sha256: { type: String, trim: true }, // integrity / dedupe
    storage: { type: String, enum: ["S3", "Local", "GCS"], default: "Local" },
    uploadedBy: { type: Schema.Types.ObjectId, ref: "User" },
    uploadedAt: { type: Date, default: Date.now },
  },
  { timestamps: true }
);

fileSchema.index({ sha256: 1 }, { sparse: true });

export default models.File || model("File", fileSchema);

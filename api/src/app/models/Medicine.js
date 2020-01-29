import mongoose from "mongoose";

const medicineSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true
    },
    expireDate: {
      type: String,
      format: Date
    },
    availableQuantity: {
      type: String
    },
    createdBy: {
      type: mongoose.ObjectId,
      required: true
    }
  },
  { timestamps: true }
);

const Medicine = mongoose.model("Medicine", medicineSchema);

export default Medicine;

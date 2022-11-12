import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: String,
      default: "user",
    },
    root: {
      type: Boolean,
      default: false,
    },
    avatar: {
      type: String,
      default:
        "https://res.cloudinary.com/dnzxum3u2/image/upload/v1668205484/4035889-200_ty7cfo.png",
    },
  },
  {
    timestamps: true,
  }
);

let Dataset = mongoose.models.user || mongoose.model("user", userSchema);
export default Dataset;

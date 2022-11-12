import bcrypt from "bcrypt";

import { connectDB, validate } from "../../../utils";
import { User } from "../../../models";

connectDB();
export default async (req, res) => {
  if (req.method === "POST") register(req, res);
};

const register = async (req, res) => {
  try {
    const userData = req.body;

    const user = await User.findOne({ email: userData.email });
    if (user)
      return res.status(400).json({ err: "This email already exists." });

    const passwordHash = await bcrypt.hash(userData.password, 12);

    const newUser = new User({ ...userData, password: passwordHash });

    await newUser.save();

    return res.json({ message: "User created successfully!" });
  } catch (err) {
    res.status(500).json({ err: err.message });
  }
};

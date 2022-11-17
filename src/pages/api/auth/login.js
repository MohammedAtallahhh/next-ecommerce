import bcrypt from "bcrypt";

import connectDB from "../../../utils/connectDB";
import User from "../../../models/user";

import { createAccessToken, createRefreshToken } from "../../../utils/token";

connectDB();

export default async (req, res) => {
  if (req.method === "POST") login(req, res);
};

const login = async (req, res) => {
  try {
    const { email, password } = JSON.parse(req.body);

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ err: "This user does not exist." });

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch)
      return res.status(400).json({ err: "Incorrect password." });

    const access_token = createAccessToken({ id: user._id });
    const refresh_token = createRefreshToken({ id: user._id });

    res.json({
      message: "Login Success!",
      refresh_token,
      access_token,
      user: {
        name: user.name,
        email: user.email,
        role: user.role,
        avatar: user.avatar,
        root: user.root,
      },
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ err });
  }
};

import jwt from "jsonwebtoken";

import connectDB from "../../../utils/connectDB";
import Users from "../../../models/user";
import { createAccessToken } from "../../../utils/token";

connectDB();

export default async (req, res) => {
  try {
    const rf_token = req.cookies.refreshtoken;

    if (!rf_token) return res.status(400).json({ err: "Please login now!" });

    // console.log({ rf_token, save: process.env.REFRESH_TOKEN_SECRET });

    const result = jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET);

    // if (!result)
    //   return res
    //     .status(400)
    //     .json({ err: "Your token is incorrect or has expired." });

    // const user = await Users.findById(result.id);
    // if (!user) return res.status(400).json({ err: "User does not exist." });

    // const access_token = createAccessToken({ id: user._id });
    // res.json({
    //   access_token,
    //   user: {
    //     name: user.name,
    //     email: user.email,
    //     role: user.role,
    //     avatar: user.avatar,
    //     root: user.root,
    //   },
    // });
  } catch (err) {
    return res.status(500).json({ err });
  }
};

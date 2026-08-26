import genToken from "../config/token.js";
import UserModel from "../models/user.model.js";

export const googleAuth = async (req, res) => {
  try {

    const { name, email } = req.body;

    if (!name || !email) {
      return res.status(400).json({
        message: "Name and Email are required",
      });
    }

    let user = await UserModel.findOne({ email });

    // Create only if user does not exist
    if (!user) {
      user = await UserModel.create({
        name,
        email,
      });
    }

    // Generate token
    let token = await genToken(user._id);

    // Store cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.status(200).json({
      message: "Google login successful",
      user,
    });

  } catch (error) {

    console.log(error);

    return res.status(500).json({
      message: `Error in google auth ${error.message}`,
    });
  }
};

export const logOut = async (req, res) => {
  try {

    res.clearCookie("token", {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      message: "Logout successfully",
    });

  } catch (error) {

    return res.status(500).json({
      message: `Logout error controller ${error.message}`,
    });
  }
};
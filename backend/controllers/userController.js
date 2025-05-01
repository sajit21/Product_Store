import { sql } from "../config/db.js";
import bcryptjs from "bcryptjs";
import { generateToken } from "../utils/generateToken.js";

export const Signup = async (req, res) => {
  try {
    const { fullname, username, email, password, confirmPassword, gender } =
      req.body;

    if (!fullname || !username || !email || !password || !gender) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    const createUser = await sql`
      INSERT INTO users (fullname, username, email, password, gender)
      VALUES (${fullname}, ${username}, ${email}, ${hashedPassword}, ${gender})
      RETURNING *
    `;

    if (createUser && createUser[0]) {
      generateToken(createUser[0].id, res);
      return res.status(201).json({
        success: true,
        message: "User signup successful",
        data: createUser[0],
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Error creating user" });
    }
  } catch (error) {
    console.log("Something went wrong:", error.message);
    return res.status(500).json({ success: false, message: "Server error" });
  }
};

export const Login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(401)
        .json({ success: false, message: "Please include all field" });
    }
    const createUser = await sql`SELECT * FROM users where email=${email}`;
    // res.status(201).json({success:true,data:userData})
    if (createUser.length == 0) {
      return res
        .status(401)
        .json({ success: false, message: "user not found" });
    }
    const validatepassword = await bcryptjs.compare(
      password,
      createUser[0].password
    );
    if (!validatepassword) {
      return res
        .status(401)
        .json({ succes: false, message: "Incorrect password " });
    }
    generateToken(createUser[0].id, res);

    res.status(200).json({ success: true, message: "user login successfully" });
  } catch (error) {
    console.log("something is wrong", error.message);
    res.status(500).json({ success: false, message: "internal server error" });
  }
};

export const Logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ success: true, message: "successfully logout" });
  } catch (error) {
    console.log("something went wrong", error.message);
    req.status(500).json({ success: false, message: "internal server error" });
  }
};

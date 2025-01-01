const { response } = require("express");
const User = require("../Model/User");
const {generatetoken}=require("../Middleware/Token")


const InsertData = async (req, res) => {
  const { first_name, last_name, email, password } = req.body;

  if (!first_name || !last_name || !email || !password) {
    return res.status(400).json({
      status:false,
      message: "All fields are required",
    });
  }
  
    const isUserExist= await User.findOne({email:email})
    if(isUserExist){
      return res.json({
        status:false,
        message:"This Email Is already Register"
      })
    }
  try {
    const user = await User.create({
      first_name,
      last_name,
      email,
      password,
    });

    res.status(201).json({
      response: user,
      status:true,
      message: "Successfully Added User",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      response: error.message,
      message: "Internal Server Error",
    });
  }
};


//login User
const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  // Validate email and password
  if (!email || !password) {
    return res.status(400).json({
      status: false,
      message: "All fields are required",
    });
  }

  try {
    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        status: false,
        message: "User not found",
      });
    }

    if (user.password !== password) {
      return res.status(401).json({
        status: false,
        message: "Invalid password",
      });
    }

    // Generate token
    const token=await generatetoken(email)

console.log(token)
    res.json({
      status: true,
      message: "Successfully logged in",
      token:token,
      user: {
        email: user.email,
        userId: user.userId,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({
      status: false,
      message: "Server error. Please try again later.",
    });
  }
};





module.exports = {  InsertData,LoginUser };

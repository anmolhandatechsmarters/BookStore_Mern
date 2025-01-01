const jwt = require("jsonwebtoken");
const SECRETE_Password = process.env.JSONTOKEN_PASSWORD;
require("dotenv").config();
const generatetoken = async (email) => {
  console.log(SECRETE_Password);
  const token = jwt.sign(
    { email },
    SECRETE_Password,
    { expiresIn: "1h" } 
  );
  return token;
};

const verifytoken = async (token) => {
  try {
    const decode = jwt.verify(token, SECRETE_Password);
    return decode;
  } catch {
    return false;
  }
};

module.exports = { generatetoken, verifytoken };

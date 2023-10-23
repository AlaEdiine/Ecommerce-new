const bcrypt = require("bcrypt");
const cookieParser = require("cookie-parser");
const { UUSER } = require("../Models/_user");
const { createError } = require("../Service/Error");
const { GenerateToken } = require("../utils/GenerateToken");



// TODO: Login User
module.exports.Login = async (req, res, next) => {
  try {
    let { email, password } = req.body;

    // Cheking User
    const result = await UUSER.findOne({ Email: email });
    if (!result) return next(createError(401, "Email Is Not Exist"));

    // Bcrypt && Compare password
    const Result_Password = result.Password;
    const validPassword = await bcrypt.compare(password, Result_Password);

    // isTrue : Call Generate token
    if (validPassword) {
      const token = GenerateToken(result);
      return res
        .cookie("Token", token, { httpOnly: true, secure: true })
        .status(200)
        .json({result , token});
    }

    // isFalse
    return next(createError(404, "Wrong Email or Password"));
  } catch (err) {
    return next(err);
  }
};

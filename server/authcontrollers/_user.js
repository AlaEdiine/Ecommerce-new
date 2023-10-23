const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser"); // cookies
const { UUSER } = require("../Models/_user");
const { createError } = require("../Service/Error");
require("dotenv").config();

//TODO: AJOUTER USER
module.exports.AJOUTER_USER = async (req, res, next) => {
  try {
    Data = req.body.form;

    // Hash Password
    const salt = await bcrypt.genSalt(10);
    HashPassword = await bcrypt.hash(Data.Password, salt);
    const dataForm = { ...Data, Password: HashPassword };

    // Search User
    const result = await UUSER.findOne({ Email: Data.Email });

    // if (result) return res.status(202).send({ message: "Email exist" });
    if (result) return next(createError(401, "Email Exist"));

    // Save User into Database
    const document = await UUSER.insertMany(dataForm);
    const Id = document[0]._id;
    const FirstName = document[0].FirstName;
    const isAdmin = document[0].isAdmin;

    // Generate Token
    const token = jwt.sign(
      { id: Id, isAdmin: isAdmin },
      process.env.SECRET_KEY_JWT
    );

    return res
      .cookie("Token", token, { httpOnly: true, secure: true })
      .status(200)
      .json({ name: FirstName, id: Id });
  } catch (err) {
    return next(err);
  }
};

//TODO: UPDATE USER
module.exports.UPDATE_USER = async (req, res, next) => {
  try {
    /***************
    ******
      VALIDATION
    ****** 
    ****************/
    if (!req.file) {
      return res.status(400).json({ message: "No File Provided" });
    }

    const result = await UUSER.findByIdAndUpdate(
      req.params.id,
      { $set: req.body , Photo : req.file.filename  },
      { new: true }
    ).select("-Password");
    if (!result) return next(createError(401, "Error Search"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};

//TODO: UPDATE USER
module.exports.DELETE_USER = async (req, res, next) => {
  try {
    console.log(req.params);
    const result = await USER.findByIdAndDelete({ _id: req.params.id });
    if (!result) return next(createError(401, "Error Search"));
    return res.status(200).send("Succes deleted ouvrier");
  } catch (err) {
    return next(err);
  }
};

//TODO: GET USER
module.exports.GET_USER = async (req, res, next) => {
  console.log(req.infoUser);
  try {
    const result = await UUSER.findById({ _id: req.infoUser.id });
    console.log(result);
    if (!result) return next(createError(401, "Error Search"));
    return res
      .status(200)
      .send(result);
  } catch (err) {
    return next(err);
  }
};

//TODO: GET USER BY ID
module.exports.GET_USER_BY_ID = async (req, res, next) => {
  console.log(req.infoUser);
  try {
    const result = await UUSER.findById({ _id: req.infoUser.id });
    if (!result) return next(createError(401, "Error Search"));
    console.log(result);
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};

//TODO: GET ALL USER
module.exports.GET_ALL_USER = async (req, res, next) => {
  try {
    console.log(req.params);
    const result = await USER.find();
    if (!result) return next(createError(401, "Error Search"));
    return res.status(200).send(result);
  } catch (err) {
    return next(err);
  }
};
//TODO: GET ALL USER
module.exports.TEST = async (req, res, next) => {
  try {
    const token = "fgRYTYdfge-rd`[{#";
    return res.status(200).json(token);
  } catch (err) {
    return next(err);
  }
};

import "./signin.css";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useContext, useState } from "react";
import { SnackbarProvider } from "notistack";
import CloseIcon from "@mui/icons-material/Close";
import { ShopContext } from "../../ShopContext/Shopcontext";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import PasswordIcon from "@mui/icons-material/Password";
import CircularProgress from "@mui/material/CircularProgress";
import Axios from "../../api/axios";
import { useNavigate } from "react-router";
import Error from "../Snackbar/Error";

const SignIn = () => {

  const [form, setform] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState({});
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setform({ ...form, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate()
  const valueContext = useContext(ShopContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = {}
    setLoading(true)
    try {
      const myVar = undefined;
      if (form.FirstName === myVar) {
      validationErrors.FirstName = "FirstName is required"
     } else if (form.FirstName.length < 3) {
      validationErrors.FirstName = "FirstName is short minimuim character 3"
     }
     setError(validationErrors)

    //  if(Object.keys(validationErrors).length === 0){
    //    alert("form submitted")
    //  }
   
      await Axios.post(`/USER/AJOUTER`, {
       form
     }).then( (res) => {
      setLoading(false)
      console.log(res.data);
      valueContext.setUser(res.data)
      valueContext.setsignup(false);
      valueContext.setsignin(false);
     return navigate("/account");     
     })
   } catch (error) {
    setLoading(false)
     console.log(error);
     return Error("This Email is Exist", "error");
   }
   finally{
    return setLoading(false)
   }
  };
  return (
    <div className="box-2">
      <CloseIcon
        className="iconeClose"
        onClick={() => valueContext.setsignup(false)}
      />
      <SnackbarProvider autoHideDuration={2500} />
      <p className="p">Sign In</p>
      <form className="form" onSubmit={handleSubmit}>
        <label className="label">
          <AccountBoxRoundedIcon className="icones" />
          <input
            type="text"
            placeholder="First Name"
            name="FirstName"
            className="input"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
          />
        </label>
        {error.FirstName &&  <p className="messageError"> {error.FirstName} </p>
        }
        <label className="label">
          <AccountBoxRoundedIcon className="icones" />
          <input
            type="text"
            placeholder="Last Name"
            name="LastName"
            className="input"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
          />
        </label>



        <label className="label">
          <PersonIcon className="icones" />
          <input
            type="email"
            placeholder="Email"
            name="Email"
            className="input"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
          />
        </label>



        <label className="label">
          <HttpsIcon className="icones" />
          <input
            type={showPassword ? "text" : "password"}
            name="Password"
            placeholder="Password"
            className="input"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
          />
          <span onClick={(e) => setShowPassword(true)}>
            <VisibilityOffIcon className="VisibilityOffIcon" />
          </span>
        </label>



        <label className="label">
          <PasswordIcon className="icones" />
          <input
            type={showPassword ? "text" : "password"}
            name="ConfirmPassword"
            placeholder="Confirm Password"
            className="input"
            autoComplete="true"
            onChange={(e) => handleChange(e)}
          /> 
          {!showPassword && (
            <span onClick={(e) => setShowPassword(!showPassword)}>
              <VisibilityOffIcon className="ShowPass" />
            </span>
          )}
          {showPassword && (
            <span onClick={(e) => setShowPassword(!showPassword)}>
              <RemoveRedEyeIcon className="ShowPass" />
            </span>
          )}
        </label>
        {form.Password !== form.ConfirmPassword &&
         <p className="messageError"> Wrong Confirm Password </p>
        }
       {loading && <CircularProgress /> }  
        <button type="submit" className="button">
        valider
        </button>
      </form>
    </div>
  );
};

export default SignIn;

import  './signin.css'
import PersonIcon from '@mui/icons-material/Person';
import HttpsIcon from '@mui/icons-material/Https';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useContext, useState } from 'react';
import { SnackbarProvider } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router";
import CloseIcon from '@mui/icons-material/Close';
import { ShopContext } from '../../ShopContext/Shopcontext';
import Axios from "../../api/axios";
import Error from '../Snackbar/Error';

const SignIn = () => {
  const navigate = useNavigate()
  const valueContext = useContext(ShopContext);

    const [showPassword,setShowPassword] = useState(false)
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [load, setLoad] = useState(false);

    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        setLoad(true);
          const {data} = await Axios.post("/auth/Login", {
            email,
            password,
          });
        setLoad(false);
      valueContext.setUser(data)
      valueContext.setsignup(false);
      valueContext.setsignin(false);
        navigate("/account");
      } catch (err) {
        console.log(err.message);
        console.log(err.response.status);
        if (err.response.status === 401) {
          return Error("Email Is Not Exist!", "error");
        }
        if (err.response.status === 404) {
          return Error("Wrong Email or Password !", "error");
        }
      } finally {
        setLoad(false);
      }
  
    };
  return (
    <div className='box-1'>
        <CloseIcon className='iconeClose' onClick={()=> valueContext.setsignin(false)} />
       <SnackbarProvider autoHideDuration={2500} />
    <p className='p'>Sign In</p>
    <form className='form' onSubmit={handleSubmit}>
      <label className='label'>
        <PersonIcon className='icones'/>
        <input type='text' placeholder='Email'  name="Email"  className='input' autoComplete='true' onChange={ e => setEmail(e.target.value)} />
      </label>
      <label className='label'>
        <HttpsIcon className='icones'/>    
        <input type={showPassword ? "text" : "password"} name="Password" placeholder='Password' className='input' autoComplete='true' onChange={ e => setPassword(e.target.value)}/>
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
      {load && <CircularProgress /> } 
      <button type='submit' className='button'>valider</button>
    </form>
  </div>
  )
}

export default SignIn

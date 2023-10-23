import styles from "./Home.module.css";
import PersonIcon from "@mui/icons-material/Person";
import HttpsIcon from "@mui/icons-material/Https";
import PasswordIcon from "@mui/icons-material/Password";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import AccountBoxRoundedIcon from '@mui/icons-material/AccountBoxRounded';
import {  useContext, useState } from "react";
import axios from "@/api/axios";
import { useNavigate } from "react-router";
import LoadPage from "@/_Components/Loading/LoadPage";
import Error from "@/_Components/Snackbar/Error";
import { SnackbarProvider } from "notistack";
import { UserContext } from "@/HOOK/Context/AuthorizationContext";

const SignUp = () => {
  const navigate = useNavigate();
  const { setUser } = useContext(UserContext)

  const [showPassword, setShowPassword] = useState(false);
  const [formInput, setFormInput] = useState({});
  const [load, setLoad] = useState(false);

  const HandleChange = (e) => {
    setFormInput({ ...formInput, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoad(true);
      const {data} = await axios.post("/USER/AJOUTER",  formInput );
      setLoad(false);
      setUser(data)
      // const TokenResponse = data.data.token;
      // accountService.SaveToken(TokenResponse);
      navigate("/admin/dash");
    } catch (err) {
      console.log(err.message);
      console.log(err.response.status);
      if (err.response.status === 401) {
        return Error("This Email is Exist !", "error");
      }
    } finally {
      setLoad(false);
    }
  };

  return (
    <div className={styles["box-1-signup"]}>
      <SnackbarProvider autoHideDuration={2500} />
      <p className={styles["p"]}>Sign Up</p>
      <form className={styles["form"]} onSubmit={handleSubmit}>
          <label className={styles["label"]}>
          <AccountBoxRoundedIcon />
          <input
            type="text"
            placeholder="Name"
            className={styles["input"]}
            autoComplete="true"
            name="Name"
            onChange={HandleChange}
          />
        </label>
        <label className={styles["label"]}>
          <PersonIcon />
          <input
            type="text"
            placeholder="Email"
            className={styles["input"]}
            autoComplete="true"
            name="Email"
            onChange={HandleChange}
          />
        </label>
        <label className={styles["label"]}>
          <HttpsIcon />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className={styles["input"]}
            autoComplete="true"
            name="Password"
            onChange={HandleChange}
          />
          <span onClick={(e) => setShowPassword(true)}>
            <VisibilityOffIcon className={styles["VisibilityOffIcon"]} />
          </span>
        </label>
        <label className={styles["label"]}>
          <PasswordIcon />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Confirm Password"
            className={styles["input"]}
            autoComplete="true"
            name="ConfirmPassword"
            onChange={HandleChange}
          />
          <span onClick={(e) => setShowPassword(true)}>
            <VisibilityOffIcon className={styles["VisibilityOffIcon"]} />
          </span>
        </label>
        {load && <LoadPage></LoadPage>}
        <button type="submit" className={styles["button"]}>
          valider
        </button>
      </form>
    </div>
  );
};

export default SignUp;

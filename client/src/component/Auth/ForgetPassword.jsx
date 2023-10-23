import styles from './Home.module.css'
import PersonIcon from '@mui/icons-material/Person';

const ForgetPassword = () => {
  return (
    <div className={styles['box-1-forgetpassword']}>
    <p className={styles['p']}>Forget Password</p>
    <form className={styles['form']}>
      <label className={styles['label']}>
        <PersonIcon/>
        <input type='text' placeholder='Email'    className={styles['input']} autoComplete='true' />
      </label>
      <button type='submit' className={styles['button']}>valider</button>
    </form>
  </div>
  )
}


export default ForgetPassword

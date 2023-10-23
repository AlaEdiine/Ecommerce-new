import styles from './Home.module.css'
import { useState } from "react";
import SignUp from './SignUp';
import SignIn from './SignIn';
import ForgetPassword from './ForgetPassword';


const Log = () => {

  const [showForm,setShowform] = useState(true)
  const [showForgetPassword,setShowForgetPassword] = useState(false)

  const getShowForm = () => {
    setShowform (!showForm)
    setShowForgetPassword(false)
  }
  const getShowForgetPassword = () => {
    setShowForgetPassword(true)
  }
  
  return (
    <div className={styles["home"]}>
      <div className={styles["container-1"]}>
        <div className={styles["title-box"]}>
          <div className={styles["title"]}>
            <p className={styles["p-title"]}>S</p>
            <p className={styles["p-title"]}>A</p>
            <p className={styles["p-title"]}>P</p>
            <p className={styles["p-title"]}>H</p>
            <p className={styles["p-title"]}>I</p>
            <p className={styles["p-title"]}>R</p>
          </div>
          <div className={styles["title-description"]}>
            Application de ventes et de gestion de Stock
          </div>
        </div>

        <div className={styles["description-box"]}>
          <p className={styles["p-description"]}>Supermarché</p>
          <p className={styles["p-description"]}>Boutiques de ventes</p>
          <p className={styles["p-description"]}>Pharmacies</p>
          <p className={styles["p-description"]}>Pizzeria</p>
          <p className={styles["p-description"]}>
            Grands Surfaces [ Geant , Carrefour , Monoprix ... ]
          </p>
        </div>

        <div className={styles["interface-box"]}>
          <p className={styles["p-interface"]}>
            Il y a Cinq Interfaces differents dans notre application
          </p>
          <p className={styles["p-interface"]}>Administrateur : Directeur</p>
          <p className={styles["p-interface"]}>
            Caissier(e) : vendeurs du produits{" "}
          </p>
          <p className={styles["p-interface"]}>
            Centralisateur : responsable du fonds (recette,depots) (CRA)
          </p>
          <p className={styles["p-interface"]}>
            Comptable : responsable de facturation et les bons du commandes
          </p>
          <p className={styles["p-interface"]}>
            Magasinie(e) : responsable du Stock (Retour-Périmé-ajout-Suppression
            ..)
          </p>
          <p className={styles["p-interface"]}>
            RH : responsable du resource humaine{" "}
          </p>
        </div>

        <div className={styles["image-box"]}>
          <p className={styles["image-title"]}>Les Outils utilisé</p>
          <p className={styles["image"]} />
        </div>
      </div>
      
{/* ----------------------------------------------------------------------------
------------------------------- container numero 2 -----------------------------
----------------------------------------------------------------------------- */}
      <div className={styles["container-2"]}>
        {showForgetPassword && <ForgetPassword></ForgetPassword>}
        {showForm && !showForgetPassword && <SignIn></SignIn>}
        {!showForm && !showForgetPassword && <SignUp></SignUp>}

        <div className={styles["box-multiple"]}>
          {showForm ? (
            <div className={styles["box-2"]} onClick={getShowForm}>
              <p className={styles["p"]}>Sign Up</p>
            </div>
          ) : (
            <div className={styles["box-2-signin"]} onClick={getShowForm}>
              <p className={styles["p"]}>Sign In</p>
            </div>
          )}
            <div className={styles["box-3"]} onClick={getShowForgetPassword}>
              <p className={styles["p"]}>
                Forget
                <br /> Password
              </p>
            </div>

        </div>
      </div>
    </div>
  );
}

export default Log

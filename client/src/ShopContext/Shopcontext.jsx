

import { createContext, useEffect, useState } from "react";
import Succes from "../component/Snackbar/Succes";
import Error from "../component/Snackbar/Error";
import Axios from "../api/axios";



// ********
// Shop Context
// ********
export const ShopContext = createContext();


// ********
// Auth Provider
// ********
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  const [persist, setPersist] = useState(false);
  const [LocalStorage , setLocalStorage] = useState([])
  const [dataLocalStorage , setDataLocalStorage] = useState(JSON.parse(localStorage.getItem('data')))


  useEffect(() => {
    const token = async ()=> {
        try{
       const {data} = await Axios.get("/USER/GET")
            setPersist(true);
            setUser(data);
        }
         catch (err) {
          console.log(err.message);
          console.log(err.response.status);
          setPersist(true);
        }
      }
     token()
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
console.log(user);


  const [cartitems, setcartitems] = useState([]);
  const [signin, setsignin] = useState(false);
  const [signup, setsignup] = useState(false);
  const [search, setsearch] = useState("");


// ********
// Function Increase Qte
// ********
  const increaseQte = (product , i) => {
    product.Qte++
    const listInvoice = [...cartitems]
    listInvoice[i]['total'] = listInvoice[i]['price'] * listInvoice[i]['Qte']
    setcartitems(listInvoice)
  };
  
  
// ********
// Function Decrease Qte
// ********
  const decreaseQte = (product , i) => {
    if(product.Qte <= 1) {
      return Error("Please Verify Quantity !", "info");
     }
    product.Qte--
    const listInvoice = [...cartitems]
    listInvoice[i]['total'] = listInvoice[i]['price'] * listInvoice[i]['Qte']
    setcartitems(listInvoice)
  };
  

// ********  
// Function Add To Cart Shop
// ********
  const addTocart = (product) => {
    if (cartitems.find((item) => item.id === product.id)) {
      Error("Product Is Exisit Into Cart !", "error");
      return setcartitems;
    }
      const quantity = {
          Qte: 1,
          total: product.price * 1,
      };    
      const newproduct = Object.assign(quantity, product);
      setcartitems([...cartitems, newproduct]);
      Succes("Product Added To Cart With Succes !", "success");
    };

// ********  
// Function Favorite Products
// ********    
var arr = []
const Favorite = (item) =>{
  if (dataLocalStorage.find((val) => val.id === item.id)) {
    Error("Product Is Exisit In Favorite !", "error");  
    return dataLocalStorage;
  }
  arr.push(item)
  if(dataLocalStorage === null){
    localStorage.setItem("data" , JSON.stringify(arr))
    setDataLocalStorage(JSON.parse(localStorage.getItem('data')))
   return  Succes("Product Added In Favorite !", "success");
  
  }else{
    const newArr = [...dataLocalStorage , item]
    localStorage.setItem("data" , JSON.stringify(newArr))
    setDataLocalStorage(JSON.parse(localStorage.getItem('data')))
    return  Succes("Product Added In Favorite !", "success");
  }
}



// ********
// Function Remove To Cart Shop
// ********
    const removeTocart = (product) => {
      const newcart = cartitems.filter((p) => p.id !== product.id);
      setcartitems(newcart);
      Succes("Product Removed With Succes !", "warning");
    };
    
// ********
// Sum TT Calc
// ********
  const total = cartitems.reduce((pri, prod) => pri + prod.price * prod.Qte, 0);
  
  
  
  return (
    <ShopContext.Provider
      value={{
        LocalStorage , 
        setLocalStorage,
        dataLocalStorage ,
        setDataLocalStorage,
        user,
        setUser,
        persist, 
        setPersist,
        search,
        setsearch,
        cartitems,
        setcartitems,
        addTocart,
        removeTocart,
        total,
        setsignin,
        signin,
        setsignup,
        signup,
        increaseQte,
        decreaseQte,
        Favorite
      }}
    >
      {children}
    </ShopContext.Provider>
  );
};

export default Context;

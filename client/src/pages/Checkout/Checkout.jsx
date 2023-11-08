import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import CircularProgress from "@mui/material/CircularProgress";
import Axios from '../../api/axios'
import '@/css/style.css'
import { ShopContext } from '../../ShopContext/Shopcontext'
import {loadStripe} from '@stripe/stripe-js';
import Message from '../../component/Snackbar/Message';
import { SnackbarProvider } from 'notistack';



const Checkout = () => {

 
  const valueContext = useContext(ShopContext)
  console.log(valueContext.user);
  const [loading, setLoading] = useState(false);
  const [DATA, setDATA] = useState([]);
  const navigate = useNavigate()
  const dataOrder = { 'PrimaryKey' : valueContext.user.id , Data : valueContext.cartitems }
  const id = valueContext.user.id

  // useEffect(() => {
  //   try {
  //     setLoading(true);
  //     Axios.get(`/USER/GET/${id}`).then((result) => {
  //       setLoading(false);
  //       console.log(result.data);
  //       setDATA(result.data);
  //     });
  //   } catch {
  //     setLoading(false);
  //   } finally {
  //     setLoading(false);
  //   }
  // }, []); // eslint-disable-line react-hooks/exhaustive-deps
  // // Pagination

  
const makePayment = async() =>{
  const carts = valueContext.cartitems
  const stripe = await loadStripe("pk_test_51O18oUI8VfQURt5gb8rFT2ibiwFFRAsHNLHt2SsdLATfKPjnYTjkHbNeyxFCRa0M1wKC9ha5giwREdqzMIjbGoJj00GRi7e7Tn")
   await Axios.post('/api/sessionCheckout', carts )
  .then((res)=> window.location.replace(res.data.url ) )
  .catch((err)=> console.log(err))

}

  // const HandleSubmit = async (e) => {
  //   e.preventDefault();
  //   setLoading(true)
  //   try {
  //     await Axios.post(`/ORDER/ADD`, {
  //       dataOrder
  //     }).then( (res) => {
  //     setLoading(false)
  //     console.log(res.data);
  //     navigate("/order");     
  //    })
  //  } catch (error) {
  //   setLoading(false)
  //    console.log(error);
  //    return Error(error, "error");
  //  }
  //  finally{
  //   setLoading(false)
  //  }
  // };

  return (
<div>
  <SnackbarProvider autoHideDuration={2500} />
  {valueContext.user == null ? 
  <>
  <p>Not found user please login</p>
  </>
  :
  <>
  {/* Breadcrumb Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-12">
        <nav className="breadcrumb bg-light mb-30">
          <Link className="breadcrumb-item text-dark" >Home</Link>
          <Link className="breadcrumb-item text-dark" >Shop</Link>
          <span className="breadcrumb-item active">Checkout</span>
        </nav>
      </div>
    </div>
  </div>
  {/* Breadcrumb End */}
  {/* Checkout Start */}
  <div className="container-fluid">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">
          {/* Billing Address */}
          Shipping Address
          </span></h5>
        <div className="bg-light p-30 mb-5">
          <div className="row">
            <div className="col-md-6 form-group">
              <label>First Name</label>
              <input className="form-control" type="text" placeholder={valueContext.user.FirstName} />
            </div>
            <div className="col-md-6 form-group">
              <label>Last Name</label>
              <input className="form-control" type="text" placeholder={valueContext.user.LastName} />
            </div>
            <div className="col-md-6 form-group">
              <label>E-mail</label>
              <input className="form-control" type="text" placeholder={valueContext.user.Email} />
            </div>
            <div className="col-md-6 form-group">
              <label>Mobile No</label>
              <input className="form-control" type="text" placeholder="..." />
            </div>
            <div className="col-md-6 form-group">
              <label>Address</label>
              <input className="form-control" type="text" placeholder="..." />
            </div>
            <div className="col-md-6 form-group">
              <label>ZIP Code</label>
              <input className="form-control" type="text" placeholder="..." />
            </div>
            <div className="col-md-6 form-group">
              <label>Country</label>
              <select className="custom-select">
                <option selected>Canada</option>
                <option>United States</option>
                <option>France</option>
                <option>Tunisia</option>
              </select>
            </div>
            <div className="col-md-6 form-group">
              <label>City</label>
              <input className="form-control" type="text" placeholder="Ex : Québec" />
            </div>
  
            <div className="col-md-12 form-group">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="newaccount" />
                <label className="custom-control-label" htmlFor="newaccount">Create an account</label>
              </div>
            </div>
            <div className="col-md-12">
              <div className="custom-control custom-checkbox">
                <input type="checkbox" className="custom-control-input" id="shipto" />
                <label className="custom-control-label" htmlFor="shipto" data-toggle="collapse" data-target="#shipping-address">Ship to different address</label>
              </div>
            </div>
          </div>
        </div>
        <div className="collapse mb-5" id="shipping-address">
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Shipping Address</span></h5>
          <div className="bg-light p-30">
            <div className="row">
              <div className="col-md-6 form-group">
                <label>First Name</label>
                <input className="form-control" type="text" placeholder="John" />
              </div>
              <div className="col-md-6 form-group">
                <label>Last Name</label>
                <input className="form-control" type="text" placeholder="Doe" />
              </div>
              <div className="col-md-6 form-group">
                <label>E-mail</label>
                <input className="form-control" type="text" placeholder="example@email.com" />
              </div>
              <div className="col-md-6 form-group">
                <label>Mobile No</label>
                <input className="form-control" type="text" placeholder="+123 456 789" />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 1</label>
                <input className="form-control" type="text" placeholder="123 Street" />
              </div>
              <div className="col-md-6 form-group">
                <label>Address Line 2</label>
                <input className="form-control" type="text" placeholder="123 Street" />
              </div>
              <div className="col-md-6 form-group">
                <label>Country</label>
                <select className="custom-select">
                  <option selected>United States</option>
                  <option>Afghanistan</option>
                  <option>Albania</option>
                  <option>Algeria</option>
                </select>
              </div>
              <div className="col-md-6 form-group">
                <label>City</label>
                <input className="form-control" type="text" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label>State</label>
                <input className="form-control" type="text" placeholder="New York" />
              </div>
              <div className="col-md-6 form-group">
                <label>ZIP Code</label>
                <input className="form-control" type="text" placeholder={123} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Order Total</span></h5>
        <div className="bg-light p-30 mb-5">
          <div className="border-bottom">
            <h6 className="mb-3">Products</h6>
            {valueContext.cartitems.map((elem)=> 
             <div className="d-flex justify-content-between" key={elem.id}>
              <img src={elem.photo} alt='' className='imagesCheckout'></img>
             <p>{elem.name}</p>
             <p>${elem.total}</p>
           </div>
            )}

          </div>
          <div className="border-bottom pt-3 pb-2">
            <div className="d-flex justify-content-between mb-3">
              <h6>Subtotal</h6>
              <h6>${valueContext.total}</h6>
            </div>
            <div className="d-flex justify-content-between">
              <h6 className="font-weight-medium">Shipping</h6>
              <h6 className="font-weight-medium">$10</h6>
            </div>
          </div>
          <div className="pt-2">
            <div className="d-flex justify-content-between mt-2">
              <h5>Total</h5>
              <h5>${valueContext.total + 10}</h5>
            </div>
          </div>
        </div>
        <div className="mb-5">
          <h5 className="section-title position-relative text-uppercase mb-3"><span className="bg-secondary pr-3">Payment</span></h5>
          <div className="bg-light p-30">
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" id="paypal" />
                <label className="custom-control-label" htmlFor="paypal">Paypal</label>
              </div>
            </div>
            <div className="form-group">
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" id="directcheck" />
                <label className="custom-control-label" htmlFor="directcheck">Direct Check</label>
              </div>
            </div>
            <div className="form-group mb-4">
              <div className="custom-control custom-radio">
                <input type="radio" className="custom-control-input" name="payment" id="banktransfer" />
                <label className="custom-control-label" htmlFor="banktransfer">Bank Transfer</label>
              </div>
            </div>
            <button type='button' onClick={makePayment} className="btn btn-block btn-primary font-weight-bold py-3"> {loading && <CircularProgress /> }  Place Order</button>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Checkout End */}
  </>
  }
</div>

  )
}

export default Checkout
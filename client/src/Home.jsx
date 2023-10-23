import React, { useContext } from 'react'
import Menu from './component/Menu'
import './css/style.css'
import { ShopContext } from './ShopContext/Shopcontext'
import { SnackbarProvider } from "notistack";
import { products, recentproducts } from './data/Products'
import { Link } from 'react-router-dom'
import Footer from './component/Footer'


const Home = () => {

const Values = useContext(ShopContext)

  return (
<div>
<Menu></Menu>
<SnackbarProvider autoHideDuration={2500} />
  {/* Carousel Start */}
  <div className="container-fluid mb-3">
    <div className="row px-xl-5">
      <div className="col-lg-8">
        <div id="header-carousel" className="carousel slide carousel-fade mb-30 mb-lg-0" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#header-carousel" data-slide-to={0} className="active" />
            <li data-target="#header-carousel" data-slide-to={1} />
            <li data-target="#header-carousel" data-slide-to={2} />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item position-relative active" style={{height: 430}}>
              <img className="position-absolute w-100 h-100"   src="https://www.pctipp.ch/img/1/6/9/7/4/1/2/Aufmacher_w580_h385.jpg" alt='catousel' style={{objectFit: 'cover'}}  />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">Apple MacBook</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Apple 2023 MacBook Pro Laptop  Apple M2 Pro chip, 12‑core CPU and 19‑core GPU: 16.2-inch Liquid Retina XDR Display, 16GB Unified Memory, 1TB SSD Storage.</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >
                    Shop Now
                    </Link>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="https://m.media-amazon.com/images/I/81xeH3po6aL._AC_UF1000,1000_QL80_.jpg" alt="carousel2" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">HP Pavilion</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Intel Core i5-1155G7 FHD, 16GB DDR4 - 512GB SSD Intel Iris Xe Graphics 430 Multi-Device Bluetooth Wireless Mouse with 4 Programmable Buttons/ 800 DPI - 4000 DPI/</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >Shop Now</Link>
                </div>
              </div>
            </div>
            <div className="carousel-item position-relative" style={{height: 430}}>
              <img className="position-absolute w-100 h-100" src="https://m-cdn.phonearena.com/images/review/5517-wide-two_1200/iPhone-14-Plus-review-Finally-a-big-iPhone-without-the-Pro-Max-tax.jpg" alt="img" style={{objectFit: 'cover'}} />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{maxWidth: 700}}>
                  <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">IPhone 14 Pro Max</h1>
                  <p className="mx-md-5 px-5 animate__animated animate__bounceIn">Apple IPhone 14 Plus review: <br /> Finally, a big iPhone without the Pro Max tax</p>
                  <Link to='/products' className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp" >Shop Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="col-lg-4">
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="https://www.trustedreviews.com/wp-content/uploads/sites/54/2022/10/iphone14proproductshots-1-10.jpeg" alt="offer-1" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <Link to='/products'  className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
        <div className="product-offer mb-30" style={{height: 200}}>
          <img className="img-fluid" src="https://m-cdn.phonearena.com/images/article/139425-wide-two_940/iPhone-14-Pro-Max-detailed-schematics-and-camera-specs-leaked" alt="offer-2" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Special Offer</h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Carousel End */}
  {/* Featured Start */}
  <div className="container-fluid pt-5">
    <div className="row px-xl-5 pb-3">
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <p className="fa fa-check text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <p className="fa fa-shipping-fast text-primary m-0 mr-2" />
          <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <p className="faS fa-exchange-alt text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
        </div>
      </div>
      <div className="col-lg-3 col-md-6 col-sm-12 pb-1">
        <div className="d-flex align-items-center bg-light mb-4" style={{padding: 30}}>
          <p className="fa fa-phone-volume text-primary m-0 mr-3" />
          <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
        </div>
      </div>
    </div>
  </div>
  {/* Featured End */}
  {/* Categories Start */}
  <div className="container-fluid pt-5">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Categories/Brand</span></h2>
    <div className="row px-xl-5 pb-3">
      <Link to='/shop/Apple' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <p className="text-decoration-none" >
          <p className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://target.scene7.com/is/image/Target/GUEST_59ebe22b-8680-4c95-912c-49d99f29c8a4" alt="cat-1" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category: Apple</h6>
              <small className="text-body">100 Products</small>
            </div>
          </p>
        </p>
      </Link>
      <Link to='/shop/Laptop' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="text-decoration-none" >
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://www.cdiscount.com/pdt2/3/v/0/2/700x700/bunhp15eh1043v0/rw/pc-portable-hp-pavilion-15-eh1043nf-15-fhd-ry.jpg" alt="cat2" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : Laptop</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </div>
      </Link>
      <Link to='/shop/MacBook' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <p className="text-decoration-none" >
          <div className="cat-item d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMQXvL__DMyVT8Q0jU83fURqMW-Lf2quX-ir2zorfFHT5alS7CtB0-7XE7MgudrID01BM&usqp=CAU" alt="cat-1" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : MacBook</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </p>
      </Link>
      <Link to='/shop/Phone' className="col-lg-3 col-md-4 col-sm-6 pb-1">
        <div className="text-decoration-none" >
          <div className="cat-item img-zoom d-flex align-items-center mb-4">
            <div className="overflow-hidden" style={{width: 100, height: 100}}>
              <img className="img-fluid" src="https://img.freepik.com/premium-psd/berlin-germany-may-14-2023-hand-holding-smart-phone-screen-mockup-iphone-smartphone-mockup-perspective-view-isolated-white-background_361816-8240.jpg" alt="cat2" />
            </div>
            <div className="flex-fill pl-3">
              <h6>Category : Mobile</h6>
              <small className="text-body">100 Products</small>
            </div>
          </div>
        </div>
      </Link>
    

    </div>
  </div>
  {/* Categories End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Featured Products</span></h2>
    <div className="row px-xl-5">
      {products?.filter((prod) =>
                  prod.name?.toLocaleLowerCase().includes(Values.search.toLocaleLowerCase())
                 ).map((item) => {
        return(
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={item.id}>
          <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
              <img className="img-fluid w-100"  src={item.photo} alt="imges" />
              <div className="product-action">
                <Link className="btn btn-outline-dark btn-square" onClick={()=> Values.addTocart(item)}><i className="fa fa-shopping-cart" /></Link>
                <Link className="btn btn-outline-dark btn-square" onClick={()=> Values.Favorite(item)} ><i className="far fa-heart" /></Link>
              </div>
            </div>
            <div className="text-center py-4">
              <Link className="h6 text-decoration-none text-truncate" >{item.name}</Link>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{item.price}</h5><h6 className="text-muted ml-2"><del>{item.oldprice}</del></h6>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small>({item.race})</small>
              </div>
            </div>
          </div>
        </div>
        )
      }
  
      )}
  
    </div>
  </div>
  {/* Products End */}
  {/* Offer Start */}
  <div className="container-fluid pt-5 pb-3">
    <div className="row px-xl-5">
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="https://img.freepik.com/photos-premium/deux-haut-parleurs-generative-ai_220873-24633.jpg" alt="offer-1" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Speakers</h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
      <div className="col-md-6">
        <div className="product-offer mb-30" style={{height: 300}}>
          <img className="img-fluid" src="https://www.fredzone.org/wp-content/uploads/2022/10/clavier_gaming_meilleurs_top.png" alt="offer-2" />
          <div className="offer-text">
            <h6 className="text-white text-uppercase">Save 20%</h6>
            <h3 className="text-white mb-3">Wireless Gaming Keyboards </h3>
            <Link to='/products' className="btn btn-primary">Shop Now</Link>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* Offer End */}
  {/* Products Start */}
  <div className="container-fluid pt-5 pb-3">
    <h2 className="section-title position-relative text-uppercase mx-xl-5 mb-4"><span className="bg-secondary pr-3">Recent Products</span></h2>
    <div className="row px-xl-5">
    {recentproducts?.filter((prod) =>
                  prod.name?.toLocaleLowerCase().includes(Values.search.toLocaleLowerCase())
                 ).map((item) => {
        return(
          <div className="col-lg-3 col-md-4 col-sm-6 pb-1" key={item.id}>
          <div className="product-item bg-light mb-4">
            <div className="product-img position-relative overflow-hidden">
              <img className="img-fluid w-100"  src={item.photo} alt="imges" />
              <div className="product-action">
                <Link className="btn btn-outline-dark btn-square" onClick={()=> Values.addTocart(item)}><i className="fa fa-shopping-cart" /></Link>
                <Link className="btn btn-outline-dark btn-square" ><i className="far fa-heart" /></Link>

              </div>
            </div>
            <div className="text-center py-4">
              <Link className="h6 text-decoration-none text-truncate" >{item.name}</Link>
              <div className="d-flex align-items-center justify-content-center mt-2">
                <h5>{item.price}</h5><h6 className="text-muted ml-2"><del>{item.oldprice}</del></h6>
              </div>
              <div className="d-flex align-items-center justify-content-center mb-1">
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small className="fa fa-star text-primary mr-1" />
                <small>({item.race})</small>
              </div>
            </div>
          </div>
        </div>
        )
      }
  
      )}
    </div>
  </div>
  {/* Products End */}

  {/* Footer Start */}
<Footer></Footer>
  {/* Footer End */}


</div>

  )
}

export default Home




import React, { useContext, useState } from "react";
import Menu from "./component/Menu";
import "./css/style.css";
import { allproducts } from "./data/Products";
import { SnackbarProvider } from "notistack";
import { ShopContext } from "./ShopContext/Shopcontext";
import { Link } from "react-router-dom";
import Rating from '@mui/material/Rating';
import Footer from "./component/Footer";

const Products = () => {
 

  const XSprice = allproducts.filter((produc) => produc.price < 100);
  const Sprice = allproducts.filter(
    (produc) => produc.price < 200 && produc.price > 100
  );
  const Mprice = allproducts.filter(
    (produc) => produc.price < 300 && produc.price > 200
  );
  const Lprice = allproducts.filter(
    (produc) => produc.price < 400 && produc.price > 300
  );
  const XLprice = allproducts.filter(
    (produc) => produc.price < 500 && produc.price > 400
  );

  const { addTocart, search } = useContext(ShopContext);

  const [data, setdata] = useState(allproducts);
  const [color, setColor] = useState(null);
  const [brand, setBrand] = useState(null);
  const [lowPrice, setLowPrice] = useState(null);
  // const [highPrice, setHighPrice] = useState(null);
  const [filtering, setFiltering] = useState(false);
  const [condition, setcondition] = useState([]);

  const [current, setCurrent] = useState(1);
  const [items, setItems] = useState(6);

  const endIndex = current * items;
  const startIndex = endIndex - items;
  var dataFilter = data
    // .sort((a, b) => highPrice === "high" && b.price - a.price)
    .sort((a, b) => lowPrice === "low" && a.price - b.price)
    .filter(
      (ele) =>
      ele.name?.toLocaleLowerCase().includes(search.toLocaleLowerCase()) &&
        (!!color === true && color !== "all-color"
          ? ele.color === color
          : data) &&
        (!!brand === true && brand !== "all-brand"
          ? ele.brand === brand
          : data) 
       
    );


  const DataPerPage = dataFilter.slice(startIndex, endIndex);
  if (dataFilter.length === 0 && filtering === false) {
    setFiltering(true);
  }
  if (dataFilter.length !== 0 && filtering === true) {
    setFiltering(false);
  }

  const NbPage = Math.ceil(dataFilter.length / items);
  const numbers = [...Array(NbPage + 1).keys()].slice(1);

  const Filter = (e) => {
    if (e.target.defaultChecked === true) {
      const result = condition.filter(
        (element) =>
          e.target.id - 100 > element.price || element.price > e.target.id
      );
      setcondition(result);
      setdata(result);
      e.target.defaultChecked = false;
    } else {
      const res = allproducts.filter(
        (element) =>
          e.target.id - 100 < element.price && element.price < e.target.id
      );
      setcondition([...condition, ...res]);
      const x = [...condition, ...res];
      setdata(x);
      e.target.defaultChecked = true;
    }
  };
  // ALL PRICE
  // If all checkbox Not Checked => Show Data
  // *****
  data.length === 0 && setdata(allproducts);
  // ***** End

  const handleChangePage = (id) => {
    setCurrent(id);
  };

  const prev = () => {
    if (current !== 1) {
      setCurrent(current - 1);
    }
  };
  const next = () => {
    if (current !== NbPage) {
      setCurrent(current + 1);
    }
  };

  const Showing = (e) =>{
    e.target.id === "6" 
    ? setItems(6)
    : e.target.id === "9"
    ? setItems(9)
    : setItems(12) 
  }
  return (
    <div>
      <Menu></Menu>
      <SnackbarProvider autoHideDuration={2500} />
      {/* Breadcrumb Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          <div className="col-12">
            <nav className="breadcrumb bg-light mb-30">
              <Link className="breadcrumb-item text-dark">Home</Link>
              <Link className="breadcrumb-item text-dark">Shop</Link>
              <span className="breadcrumb-item active">Shop List</span>
            </nav>
          </div>
        </div>
      </div>
      {/* Breadcrumb End */}
      {/* Shop Start */}
      <div className="container-fluid">
        <div className="row px-xl-5">
          {/* Shop Sidebar Start */}
          <div className="col-lg-3 col-md-4">
            {/* Price Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by price</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    defaultChecked={true}
                    id="price-all"
                    onChange={(e) => Filter(allproducts, e)}
                  />
                  <label className="custom-control-label" htmlFor="price-all">
                    All Price
                  </label>
                  <span className="badge border font-weight-normal">
                    {allproducts.length}
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="100"
                    onChange={(e) => Filter(e)}
                  />
                  <label className="custom-control-label" htmlFor="100">
                    $0 - $100
                  </label>
                  <span className="badge border font-weight-normal">
                    {XSprice.length}
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="200"
                    onChange={(e) => Filter(e)}
                  />
                  <label className="custom-control-label" htmlFor="200">
                    $100 - $200
                  </label>
                  <span className="badge border font-weight-normal">
                    {Sprice.length}
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="300"
                    onChange={(e) => Filter(e)}
                  />
                  <label className="custom-control-label" htmlFor="300">
                    $200 - $300
                  </label>
                  <span className="badge border font-weight-normal">
                    {Mprice.length}
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="400"
                    onChange={(e) => Filter(e)}
                  />
                  <label className="custom-control-label" htmlFor="400">
                    $300 - $400
                  </label>
                  <span className="badge border font-weight-normal">
                    {Lprice.length}
                  </span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    id="500"
                    onChange={(e) => Filter(e)}
                  />
                  <label className="custom-control-label" htmlFor="500">
                    $400 - $500
                  </label>
                  <span className="badge border font-weight-normal">
                    {XLprice.length}
                  </span>
                </div>
              </form>
            </div>
            {/* Price End */}
            {/* Color Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by color</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    defaultChecked={true}
                    id="all-color"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="all-color">
                    All Color
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    id="black"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="black">
                    Black
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    id="white"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="white">
                    White
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    id="red"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="red">
                    Red
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    id="blue"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="blue">
                    Blue
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="radio"
                    name="color"
                    className="custom-control-input"
                    id="green"
                    onChange={(e) => setColor(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="green">
                    Green
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Color End */}
            {/* Size Start */}
            <h5 className="section-title position-relative text-uppercase mb-3">
              <span className="bg-secondary pr-3">Filter by Brand</span>
            </h5>
            <div className="bg-light p-4 mb-30">
              <form>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    defaultChecked
                    id="all-brand"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="all-brand">
                    All Brand
                  </label>
                  <span className="badge border font-weight-normal">1000</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    id="Apple"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="Apple">
                    Apple
                  </label>
                  <span className="badge border font-weight-normal">150</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    id="Laptop"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="Laptop">
                    Laptop
                  </label>
                  <span className="badge border font-weight-normal">295</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    id="MacBook"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="MacBook">
                    MacBook
                  </label>
                  <span className="badge border font-weight-normal">246</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between mb-3">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    id="Samsung"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="Samsung">
                    Samsung
                  </label>
                  <span className="badge border font-weight-normal">145</span>
                </div>
                <div className="custom-control custom-checkbox d-flex align-items-center justify-content-between">
                  <input
                    type="radio"
                    name="brand"
                    className="custom-control-input"
                    id="MiniPhone"
                    onChange={(e) => setBrand(e.target.id)}
                  />
                  <label className="custom-control-label" htmlFor="MiniPhone">
                    Mini Phone
                  </label>
                  <span className="badge border font-weight-normal">168</span>
                </div>
              </form>
            </div>
            {/* Size End */}
          </div>
          {/* Shop Sidebar End */}
          {/* Shop Product Start */}
          <div className="col-lg-9 col-md-8">
            <div className="row pb-3">
              <div className="col-12 pb-1">
                <div className="d-flex align-items-center justify-content-between mb-4">
                  <div>
                    <button className="btn btn-sm btn-light">
                      <i className="fa fa-th-large" />
                    </button>
                    <button className="btn btn-sm btn-light ml-2">
                      <i className="fa fa-bars" />
                    </button>
                  </div>
                  <div className="ml-2">
                    <div className="btn-group">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Sorting
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <button
                          type="button"
                          className="dropdown-item"
                          id="low"
                          onClick={(e) => setLowPrice(e.target.id)}
                        >
                          Low Price
                        </button>
                        {/* <button
                          type="button"
                          className="dropdown-item"
                          id="high"
                          onClick={(e) => setHighPrice(e.target.id)}
                        >
                          High Price
                        </button> */}
                      </div>
                    </div>
                    <div className="btn-group ml-2">
                      <button
                        type="button"
                        className="btn btn-sm btn-light dropdown-toggle"
                        data-toggle="dropdown"
                      >
                        Showing
                      </button>
                      <div className="dropdown-menu dropdown-menu-right">
                        <button className="dropdown-item" id="6" onClick={(e)=>Showing(e)}>6</button>
                        <button className="dropdown-item" id="9" onClick={(e)=>Showing(e)}>9</button>
                        <button className="dropdown-item" id="12" onClick={(e)=>Showing(e)}>12</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {DataPerPage?.map((item) => {
                return (
                  <div
                    className="col-lg-4 col-md-6 col-sm-6 pb-1"
                    key={item.id}
                  >
                    <div className="product-item bg-light mb-4">
                      <div className="product-img position-relative overflow-hidden">
                        <img
                          className="img-fluid w-100"
                          src={item.photo}
                          alt="imges"
                        />
                        <div className="product-action">
                          <Link
                            className="btn btn-outline-dark btn-square"
                            onClick={() => addTocart(item)}
                          >
                            <i className="fa fa-shopping-cart" />
                          </Link>
                          <Link className="btn btn-outline-dark btn-square">
                            <i className="far fa-heart" />
                          </Link>
                           <Link to="/detail" state={item.id} className="btn btn-outline-dark btn-square">
                           <i className="fa fa-eye" />
                          </Link>
                          {/* <Link className="btn btn-outline-dark btn-square">
                            <i className="fa fa-search" />
                          </Link>  */}
                        </div>
                      </div>
                      <div className="text-center py-4">
                        <a
                          className="h6 text-decoration-none text-truncate"
                          href
                        >
                          {item.name}
                        </a>
                        <div className="d-flex align-items-center justify-content-center mt-2">
                          <h5>${item.price}</h5>
                          <h6 className="text-muted ml-2">
                            <del>${item.oldprice}</del>
                          </h6>
                        </div>
                        <div className="d-flex align-items-center justify-content-center mb-1">
                        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
                          <small> (99)</small>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filtering ? (
                <p className="msg">
                  There is no Data for these options Filters
                </p>
              ) : (
                <div className="col-12">
                  <nav>
                    <ul className="pagination justify-content-center">
                      <li className="page-item">
                        <Link className="page-link" onClick={prev}>
                          Previous
                        </Link>
                      </li>
                      {numbers.map((n, i) => (
                        <li key={i}
                          className={`page-item ${
                            current === n ? "active" : ""
                          }`}
                        >
                          <Link
                            className="page-link"
                            key={i}
                            onClick={() => handleChangePage(n)}
                          >
                            {n}
                          </Link>
                        </li>
                      ))}
                      <li className="page-item">
                        <Link className="page-link" onClick={next}>
                          Next
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              )}
            </div>
          </div>
          {/* Shop Product End */}
        </div>
      </div>
      {/* Shop End */}
      {/* Footer Start */}
<Footer></Footer>
      {/* Footer End */}

    </div>
  );
};

export default Products;

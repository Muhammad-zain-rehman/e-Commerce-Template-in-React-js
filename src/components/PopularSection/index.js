import React,{useEffect, useRef} from "react";
import { Axios } from "../..";

import product1 from "../../assets/images/products/products1.jpg";
import product2 from "../../assets/images/products/products2.jpg";
import product3 from "../../assets/images/products/products3.jpg";
import product4 from "../../assets/images/products/products4.jpg";

import "./style.css";

import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  get_product,
  get_product_success,
  get_product_failure,
  reset_product,
} from "../../redux/Slices/FetchProductSlice";
import { BASE_URL, BASE_URL_Images } from "../../constant";

const TrendingArea = (props) => {

  const dispatch = useDispatch();


  const loading = useSelector((state) => state.rack_fecth_products.loading);
  const error = useSelector((state) => state.rack_fecth_products.hasError);
  const products = useSelector((state) => state.rack_fecth_products.products);

  console.log(`KOKOKO: ${props.filteredValue}`)
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(get_product());
        const result = await Axios.get(
          'api/products'
        );
        console.log("res");
        dispatch(get_product_success(result.data.payload));
      } catch (err) {
        if (err.reponse) {
          dispatch(get_product_failure(err.reponse.data.description));
        } else {
          dispatch(get_product_failure('Network Error'));
        }
      }
    };
    fetchData();
    return () => {
      dispatch(reset_product());
    };
    //count: reload the page when status will be Change
    //curentPage:  reload the page if at pagination footer page will be page
    //props.refresh: comes from the MainRoutes.js: reload the page when Blog will be add
  }, [props.filteredValue]);

  return (
    <>
      {/* <!--===================================
=            Client Slider                   =
====================================--> */}

      {/* 
<!--===========================================
=            Popular deals section            =
============================================--> */}

      <section class="popular-deals section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2>My Products</h2>
                <p>Clothes mean nothing until someone lives in them.</p>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!-- offer 01 --> */}
            <div class="col-lg-12">
              <div class="trending-ads-slide flex overflow-x-auto no-scrollbar">
                {/* <div class="col-sm-12 col-lg-4">

                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">$200</div> 
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={product1}
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">11inch Macbook Air</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>Electronics
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div class="product-ratings">
                          <ul class="list-inline">
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {products.map((product) => (
                  // product.category_name === props.filteredValue ? 
                    <>
                  <div class="col-sm-12 col-lg-4">
                  {/* <!-- product card --> */}
                  <div class="product-item bg-light">
                    <div class="card ml-4 ">
                      <div class="thumb-content">
                        <div class="price">{product.price}</div> 
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={`${BASE_URL_Images}` + `${product.image}`}
                            alt="Card image cap"
                          />
                        </a>
                        {console.log(`IMAGE LINK: ${BASE_URL + product.image }`)}
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">{product.title}</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>{product.category_name}
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        {/* <div className=""> */}
                        <p class="card-text ">
                        {product.description}
                        </p>
                        {/* </div> */}
                        <div class="product-ratings">
                          <ul class="list-inline">
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                 </>
                // :""
                ))}
                {/* <div class="col-sm-12 col-lg-4">
                  
                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">$200</div>
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={product2}
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">Full Study Table Combo</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>Furnitures
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div class="product-ratings">
                          <ul class="list-inline">
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="col-sm-12 col-lg-4">
                  
                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">$200</div>
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={product3}
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">11inch Macbook Air</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>Electronics
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div class="product-ratings">
                          <ul class="list-inline">
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                {/* <div class="col-sm-12 col-lg-4">

                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">$200</div>
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={product2}
                            alt="Card image cap"
                          />
                        </a>
                      </div>
                      <div class="card-body">
                        <h4 class="card-title">
                          <a href="single.html">Full Study Table Combo</a>
                        </h4>
                        <ul class="list-inline product-meta">
                          <li class="list-inline-item">
                            <a href="single.html">
                              <i class="fa fa-folder-open-o"></i>Furnitures
                            </a>
                          </li>
                          <li class="list-inline-item">
                            <a href="#">
                              <i class="fa fa-calendar"></i>26th December
                            </a>
                          </li>
                        </ul>
                        <p class="card-text">
                          Lorem ipsum dolor sit amet, consectetur adipisicing
                          elit. Explicabo, aliquam!
                        </p>
                        <div class="product-ratings">
                          <ul class="list-inline">
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item selected">
                              <i class="fa fa-star"></i>
                            </li>
                            <li class="list-inline-item">
                              <i class="fa fa-star"></i>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}


              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TrendingArea;

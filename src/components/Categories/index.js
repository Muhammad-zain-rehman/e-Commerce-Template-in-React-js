import React,{useEffect} from "react";
import { Axios } from "../..";
import axios from "axios";


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-thumbs.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-buttons.css";
import "../../../node_modules/jquery-nice-select/css/nice-select.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useSelector, useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import {
  get_categories, get_categories_succes, get_category_failure, reset_category
} from "../../redux/Slices/FetchCategoriesSlice";

const AllCategories = () => {

  const dispatch = useDispatch();


  const loading = useSelector((state) => state.rack_fecth_categories.loading);
  const error = useSelector((state) => state.rack_fecth_categories.hasError);
  const categories = useSelector((state) => state.rack_fecth_categories.categories);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(get_categories());
        const result = await Axios.get(
          '/api/'
        );
        console.log("res");
        dispatch(get_categories_succes(result.data.payload));
      } catch (err) {
        if (err.reponse) {
          dispatch(get_category_failure(err.reponse.data.description));
        } else {
          dispatch(get_category_failure('Network Error'));
        }
      }
    };
    fetchData();
    return () => {
      dispatch(reset_category());
    };
    //count: reload the page when status will be Change
    //curentPage:  reload the page if at pagination footer page will be page
    //props.refresh: comes from the MainRoutes.js: reload the page when Blog will be add
  }, []);


  return (
    <>
      {/* 
<!--==========================================
=            All Category Section            =
===========================================--> */}

      <section class=" section">
        {/* <!-- Container Start --> */}
        <div class="container">
          <div class="row">
            <div class="col-12">
              {/* <!-- Section title --> */}
              <div class="section-title">
                <h2>All Categories</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Perferendis, provident!
                </p>
              </div>
              <div class="row">
              {categories.map((category) => (
                <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                <div class="category-block">
                  <div class="header">
                    <i class="fa fa-shopping-basket icon-bg-4"></i>
                    <h4 className="uppercase">{category.name}</h4>
                  </div>
                </div>
              </div>
              ))}
              
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-laptop icon-bg-1"></i>
                      <h4>Electronics</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Laptops <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Iphone <span>233</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Microsoft <span>183</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Monitors <span>343</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-apple icon-bg-2"></i>
                      <h4>Restaurants</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cafe <span>393</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Fast food <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Restaurants <span>13</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Food Track<span>43</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-home icon-bg-3"></i>
                      <h4>Real Estate</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Farms <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Gym <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Hospitals <span>83</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Parolurs <span>33</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-shopping-basket icon-bg-4"></i>
                      <h4>Shoppings</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Mens Wears <span>53</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Accessories <span>212</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Kids Wears <span>133</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          It & Software <span>143</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-briefcase icon-bg-5"></i>
                      <h4>Jobs</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          It Jobs <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cleaning & Washing <span>233</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Management <span>183</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Voluntary Works <span>343</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-car icon-bg-6"></i>
                      <h4>Vehicles</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Bus <span>193</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Cars <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Motobike <span>33</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Rent a car <span>73</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-paw icon-bg-7"></i>
                      <h4>Pets</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cats <span>65</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Dogs <span>23</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Birds <span>113</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Others <span>43</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
                {/* <!-- Category list --> */}
                {/* <div class="col-lg-3 offset-lg-0 col-md-5 offset-md-1 col-sm-6 col-6">
                  <div class="category-block">
                    <div class="header">
                      <i class="fa fa-laptop icon-bg-8"></i>
                      <h4>Services</h4>
                    </div>
                    <ul class="category-list">
                      <li>
                        <a href="category.html">
                          Cleaning <span>93</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Car Washing <span>233</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Clothing <span>183</span>
                        </a>
                      </li>
                      <li>
                        <a href="category.html">
                          Business <span>343</span>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div> */}
                {/* <!-- /Category List --> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </section>
    </>
  );
};

export default AllCategories;

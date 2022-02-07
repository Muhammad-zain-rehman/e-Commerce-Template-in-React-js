import React from "react";
import "./style.css";


import logo from "../../assets/images/logo.png";


import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-thumbs.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-buttons.css";
import "../../../node_modules/jquery-nice-select/css/nice-select.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

const NavBar = () => {

  const dispatch = useDispatch();


  const loading = useSelector((state) => state.rack_fecth_categories.loading);
  const error = useSelector((state) => state.rack_fecth_categories.hasError);
  const categories = useSelector((state) => state.rack_fecth_categories.categories);

  return (
    <>
      <section>
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <nav class="navbar navbar-expand-lg navbar-light navigation">
                <a class="navbar-brand" href="index.html">
                  <img src={logo} alt="" />
                </a>
                <button
                  class="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span class="navbar-toggler-icon"></span>
                </button>
                <div
                  class="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul class="navbar-nav ml-auto main-nav ">
                    <li class="nav-item active">
                      <a class="nav-link" href="index.html">
                        Home
                      </a>
                    </li>
                    <li class="nav-item dropdown dropdown-slide">
                      <a
                        class="nav-link dropdown-toggle"
                        data-toggle="dropdown"
                        href=""
                      >
                        Dashboard
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>

                      {/* <!-- Dropdown list --> */}
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="dashboard.html">
                          Dashboard
                        </a>
                        <a class="dropdown-item" href="dashboard-my-ads.html">
                          Dashboard My Ads
                        </a>
                        <a
                          class="dropdown-item"
                          href="dashboard-favourite-ads.html"
                        >
                          Dashboard Favourite Ads
                        </a>
                        <a
                          class="dropdown-item"
                          href="dashboard-archived-ads.html"
                        >
                          Dashboard Archived Ads
                        </a>
                        <a
                          class="dropdown-item"
                          href="dashboard-pending-ads.html"
                        >
                          Dashboard Pending Ads
                        </a>
                      </div>
                    </li>
                    <li class="nav-item dropdown dropdown-slide">
                      <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Pages{" "}
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                      {/* <!-- Dropdown list --> */}
                      <div class="dropdown-menu">
                        {/* {categories.map((category)=>(
                        <a class="dropdown-item lowercase" href="contact-us.html">
                          {category.name}
                        </a>  
                        ))} */}
                        <Link to='/jackets'>
                        <a class="dropdown-item" href="">
                          Jacket
                        </a>
                        </Link>
                        <Link to='/gloves'>
                        <a class="dropdown-item" href="404.html">
                          Gloves
                        </a>
                        </Link>
                        <Link to='/socks'>
                        <a class="dropdown-item" href="package.html">
                          Socks
                        </a>
                        </Link>

                      </div>




                    </li>
                    <li class="nav-item dropdown dropdown-slide">
                      <a
                        class="nav-link dropdown-toggle"
                        href=""
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Listing{" "}
                        <span>
                          <i class="fa fa-angle-down"></i>
                        </span>
                      </a>
                      {/* <!-- Dropdown list --> */}
                      <div class="dropdown-menu">
                        <a class="dropdown-item" href="category.html">
                          Ad-Gird View
                        </a>
                        <a class="dropdown-item" href="ad-listing-list.html">
                          Ad-List View
                        </a>
                      </div>
                    </li>
                  </ul>
                  <ul class="navbar-nav ml-auto mt-10">
                    <li class="nav-item">
                      <a class="nav-link login-button" href="login.html">
                        Login
                      </a>
                    </li>
                    <li class="nav-item">
                      <a
                        class="nav-link text-white add-button"
                        href="ad-listing.html"
                      >
                        <i class="fa fa-plus-circle"></i> Add Listing
                      </a>
                    </li>
                  </ul>
                </div>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NavBar;

import React, { useRef, useState } from "react";

import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-thumbs.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-buttons.css";
import "../../../node_modules/jquery-nice-select/css/nice-select.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaTshirt } from "react-icons/fa";
import { GiArmoredPants } from "react-icons/gi";
import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Select from "react-select";

const HeroArea = (props) => {
  const [inputValue, setInputValue] = useState("");
  const selectedInput = useRef(null);
  const categories = useSelector(
    (state) => state.rack_fecth_categories.categories
  );


  
  const options = categories.map((category) => ({
      "value": category.name ,
      "label": category.name 
    }))

  // console.log(`${arra}`)

  return (
    <>
      {/* <!--=============================== */}
      {/* =            Hero Area            = */}
      {/* ================================--> */}

      <section class="hero-area bg-1 text-center overly-1">
        {/* <!-- Container Start --> */}
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              {/* <!-- Header Contetnt --> */}
              <div class="content-block">
                <h1>Buy & Sell Near You </h1>
                <p>
                  Join the millions who buy and sell from each other <br />{" "}
                  everyday in local communities around the world
                </p>
                <div class="short-popular-category-list text-center">
                  <h2>Popular Category</h2>
                  <div class="flex flex-row justify-center">
                    <div class="flex flex-row px-1 hover:text-white">
                      <FaTshirt className="text-xss text-black sm:mt-1 " />
                      <Link to="/jackets">
                        <a
                          href="category.html"
                          className="text-md hover:text-white"
                        >
                          Jackets
                        </a>
                      </Link>
                    </div>
                    <div class="flex flex-row px-1 hover:text-white">
                      <GiArmoredPants className="text-xss text-black sm:mt-1 " />
                      <Link to="/socks">
                        <a
                          href="category.html"
                          className="text-md hover:text-white"
                        >
                          Socks
                        </a>
                      </Link>
                    </div>
                    {/* <div class="list-inline-item">
                      <a href="category.html">
                        <i class="fa fa-grav"></i> Pants
                      </a>
                    </div> */}
                    {/* <li class="list-inline-item">
                      <a href="category.html">
                        <i class="fa fa-car"></i> Cars
                      </a>
                    </li> */}
                    {/* <li class="list-inline-item">
                      <a href="category.html">
                        <i class="fa fa-cutlery"></i> Restaurants
                      </a>
                    </li>
                    <li class="list-inline-item">
                      <a href="category.html">
                        <i class="fa fa-coffee"></i> Cafe
                      </a>
                    </li> */}
                  </div>
                </div>
              </div>
              {/* <!-- Advance Search --> */}
              <div class="advance-search">
                {/* <div class="container"> */}
                {/* <div class="row justify-content-center"> */}
                <form>
                  <div class="flex justify-center gap-2">
                    <div class="w-64">
                      {/* <select class="py-3 rounded-md focus:outline-none focus:border-gray-100 border w-100 mt-lg-1 mt-md-2  "   */}
                      <Select
                        options={options}
                        onChange={(e)=>props.setFilteredValue(e.value)}
                        className="text-xs"
                      />

                      {/* > */}
                      {/* <option className="py-8">Select the Category</option> */}

                      {/* </select> */}
                    </div>
                    <div className="w-32 pt-1 bg-gray-200 text-black border rounded-md">
                    {/* <button
                      type="submit"
                      className=" bg-white text-black border rounded-md"
                    > */}
                      Search Now
                    {/* </button> */}
                    </div>
                  </div>
                </form>

                {/* </div> */}
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </section>
    </>
  );
};

export default HeroArea;

import React from "react";



import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-thumbs.css";
import "../../../node_modules/jquery-fancybox/source/helpers/jquery.fancybox-buttons.css";
import "../../../node_modules/jquery-nice-select/css/nice-select.css";
import "bootstrap-slider/dist/css/bootstrap-slider.css";
import "font-awesome/css/font-awesome.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




const CallToAction = () => {
  return (
    <>
      {/* 
<!--====================================
=            Call to Action            =
=====================================--> */}

      <section class="call-to-action  bg-1 section-sm">
        {/* <!-- Container Start --> */}
        <div class="container">
          <div class="row justify-content-md-center text-center">
            <div class="col-md-8">
              <div class="content-holder">
                <h2>Start today to get more exposure and grow your business</h2>
                <ul class="list-inline mt-30">
                  <li class="list-inline-item">
                    <a class="btn btn-primary" href="ad-listing.html">
                      Add Listing
                    </a>
                  </li>
                  <li class="list-inline-item">
                    <a class="btn btn-light" href="category.html">
                      Browser Listing
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- Container End --> */}
      </section>
    </>
  );
};

export default CallToAction;

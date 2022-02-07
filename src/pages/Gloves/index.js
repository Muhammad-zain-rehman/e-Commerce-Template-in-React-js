import React,{useEffect} from 'react'
import { useSelector, useDispatch } from "react-redux";
import { Axios } from '../..';

import { get_product,  get_product_success,
        get_product_failure,
        reset_product,  } from '../../redux/Slices/FetchProductSlice';
const Gloves = () => {
        const dispatch = useDispatch();

        const products = useSelector((state) => state.rack_fecth_products.products);

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
  }, []);

        return (
                <>
                 <section class="popular-deals section bg-gray">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="section-title">
                <h2 className='uppercase'>Our Gloves</h2>
                <p>Clothes mean nothing until someone lives in them.</p>
              </div>
            </div>
          </div>
          <div class="row">
            {/* <!-- offer 01 --> */}
            <div class="col-lg-12">
              <div class="trending-ads-slide flex overflow-x-auto no-scrollbar">
                {products.map((product) => (
                  <div class="col-sm-12 col-lg-4">
                  {/* <!-- product card --> */}
                  <div class="product-item bg-light">
                    <div class="card">
                      <div class="thumb-content">
                        <div class="price">{product.price}</div> 
                        <a href="single.html">
                          <img
                            class="card-img-top img-fluid"
                            src={product.image}
                            alt="Card image cap"
                          />
                        </a>
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
                        <p class="card-text line-clamp-1  ">
                        {product.description}
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
                </div>
                ))}
              


              </div>
            </div>
          </div>
        </div>
      </section>
                      </>
        )
}
export default Gloves;

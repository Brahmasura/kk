import React from "react";
import products from "./products.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.scss";
import productOne from "../../../Assets/home/productOne.png";
import productTwo from "../../../Assets/home/productTwo.png";

const Products = () => {
  // for the slider
  const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    accessiibility: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    padding: 0,
    // className: "center",
    // centerMode: true,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
            // centerMode:true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={products.productsContainer}>
      <h1>Our Products </h1>

      <Slider {...productSettings}>
        <div className={products.firstDiv}></div>
        <div className={products.secondDiv}></div>
        <div className={products.thirdDiv}></div>
        {/* <img src={productOne} alt="product pics" />
        <img src={productTwo} alt="product pics" />
        <img src={productOne} alt="product pics" /> */}

        
        

        

      </Slider>

      <a href="#"> view all </a>
    </div>
  );
};

export default Products;

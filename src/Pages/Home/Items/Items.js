import React from "react";
import Slider from "react-slick";
import itemStyle from "./itemStyle.module.scss";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.scss";
import productOne from "../../../Assets/home/productOne.png";
import productTwo from "../../../Assets/home/productTwo.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Items = () => {
  // // for the slider
  // const productSettings = {
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   accessiibility: true,
  //   autoplay: false,
  //   // autoplaySpeed: 5000,
  //   arrows: true,
  //   pauseOnHover: true,
  //   draggable: true,
  //   // padding: 0,
  //   // className: "center",
  //   // centerMode: true,
  //   responsive: [
  //     {
  //       breakpoint: 1450,
  //       settings: {
  //         // centerMode:true,
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 992,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },

  //     {
  //       breakpoint: 576,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //       },
  //     },
  //   ],
  // };


   // for the slider
   const productSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    accessiibility: true,
    autoplay: false,
    // autoplaySpeed: 5000,
    arrows: true,
    pauseOnHover: true,
    draggable: true,
    // padding: 0,
    responsive: [
      {
        breakpoint: 1450,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },

      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <div className={itemStyle.productsContainer}>
      <h1>Our Products </h1>

      <Slider {...productSettings}>
        <div className={itemStyle.firstDiv}>
        </div>
        <div className={itemStyle.secondDiv}>
        </div>
        <div className={itemStyle.thirdDiv}>
        </div>
     
      </Slider>

      <a href="#"> view all </a>
    </div>
  );
};

export default Items;

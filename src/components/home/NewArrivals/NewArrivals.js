import React from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  newArrOne,
  newArrTwo,
  newArrThree,
  newArrFour,
  newArrFive,
} from "../../../assets/images/index";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";

const NewArrivals = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        <div className="px-2">
          <Product
            _id="100001"
            img={newArrOne}
            productName="Round Table Clock"
            price="900"
            color="Black"
            badge={true}
            des="Kadio Analog rose black Clock."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100002"
            img={newArrTwo}
            productName="Smart Watch"
            price="1,599"
            color="Black"
            badge={true}
            des="Fire-Boltt Rise BT Calling,1.85, Voice Assistance & 123 Sports Single BT Connection Smartwatch  (Black Strap, Free Size)."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100003"
            img={newArrThree}
            productName="Realme 12 Pro"
            price="32000"
            color="Blue"
            badge={true}
            des="realme 12 Pro 5G (Submarine Blue, 128 GB)  (8 GB RAM)#JustHere."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100004"
            img={newArrFour}
            productName="JBL"
            price="600"
            color="Red"
            badge={false}
            des="JBL C150SI with One Button Universal Remote Wired Headset  (Red, In the Ear)."
          />
        </div>
        <div className="px-2">
          <Product
            _id="100005"
            img={newArrFive}
            productName="Samsung"
            price="1,19,999"
            color="Titanium Gray"
            badge={false}
            des="Samsung Galaxy S24 Ultra 5G."
          />
        </div>
      </Slider>
    </div>
  );
};

export default NewArrivals;

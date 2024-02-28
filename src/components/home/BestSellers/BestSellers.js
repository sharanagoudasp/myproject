import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  bestSellerOne,
  bestSellerTwo,
  bestSellerThree,
  bestSellerFour,
} from "../../../assets/images/index";

const BestSellers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Our Bestsellers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1011"
          img={bestSellerOne}
          productName="Flower Base"
          price="350"
          color="Blank and White"
          badge={true}
          des="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic excepturi quibusdam odio deleniti reprehenderit facilis."
        />
        <Product
          _id="1012"
          img={bestSellerTwo}
          productName="Vivo v29"
          price="40,000"
          color="Pink"
          badge={false}
          des="vivo V29 5G (Red, 256 GB)  (12 GB RAM)."
        />
        <Product
          _id="1013"
          img={bestSellerThree}
          productName="One Plus"
          price="17,806"
          color="Mixed"
          badge={true}
          des="OnePlus Nord CE 3 Lite 5G (Chromatic Gray, 128 GB)  (8 GB RAM)."
        />
        <Product
          _id="1014"
          img={bestSellerFour}
          productName="Ear Pods"
          price="999"
          color="Green"
          badge={false}
          des="Boult W20 with Zen ENC Mic, 32H Battery Life, Low Latency Gaming, Made in India, 5.3v Bluetooth Headset  (Pine Green, True Wireless)."
        />
      </div>
    </div>
  );
};

export default BestSellers;

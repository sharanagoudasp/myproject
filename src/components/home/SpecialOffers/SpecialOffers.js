import React from "react";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import {
  spfSix,
  spfTwo,
  spfThree,
  spfFour,
} from "../../../assets/images/index";

const SpecialOffers = () => {
  return (
    <div className="w-full pb-20">
      <Heading heading="Special Offers" />
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lgl:grid-cols-3 xl:grid-cols-4 gap-10">
        <Product
          _id="1101"
          img={spfSix}
          productName="Ear Buds"
          price="999"
          color="Blank and White"
          badge={true}
          des="truke Buds F1 Ultra with 60 Hours Playtime, Spatial Audio, 13mm Drivers, Multi-modes Bluetooth Headset  (Black, True Wireless)."
        />
        <Product
          _id="1102"
          img={spfTwo}
          productName="Smart Watch"
          price="2,429"
          color="Gray"
          badge={true}
          des="realme Smart Watch 2 with Superbright HD Display & 90 Sports Modes  (Black Strap, Regular)#JustHere."
        />
        <Product
          _id="1103"
          img={spfThree}
          productName="Headphones"
          price="799"
          color="Mixed"
          badge={true}
          des="ZEBRONICS Zeb Dynamic Bluetooth Wireless Headphone With Mic 30*H Playback, Call Function. Bluetooth Headset  (Black, On the Ear)."
        />
        <Product
          _id="1104"
          img={spfFour}
          productName="realme C53"
          price="9,499"
          color="Pink"
          badge={true}
          des="realme C53 (Champion Gold, 128 GB)  (6 GB RAM)#JustHere."
        />
      </div>
    </div>
  );
};

export default SpecialOffers;

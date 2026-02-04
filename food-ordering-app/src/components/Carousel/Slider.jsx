/* eslint-disable react/no-unescaped-entities */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Slider = () => {
  return (
    <div className="bg-transparent -mt-[5.5rem]">
      <div className=" relative z-10  overflow-visible">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showArrows={false}
          showThumbs={false}
          showStatus={false}
        >
          <div
            className="h-[31rem]"
            style={{
              background: `rgba(0, 0, 0, 0.56) url(https://i.imgur.com/oTjVZDM.jpg)`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
              // filter: "blur(0.5px)",
            }}
          >
            <div className="w-full h-full rounded-tl-lg rounded-bl-lg flex justify-center items-center">
              <div className=" select-none text-center w-[30rem] rounded-2xl md:px-12 py-2 px-4 ">
                <p className="text-[3rem] font-semibold text-white">
                  Welcome to KFC
                </p>
                <div className="block min-w-full min-h-full w-full h-[0.13rem]  bg-third"></div>
                <p className="text-center text-[1rem] mt-1 text-neutral-200">
                  Your Favourite Food Delivered Hot & Fresh.
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[31rem]"
            style={{
              background: `rgba(0, 0, 0, 0.6) url(https://i.imgur.com/pXO0FA9.png)`,
              backgroundPosition: "-10px center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
              // filter: "blur(0.5px)",
            }}
          >
            <div className="w-full  h-full rounded-tl-lg rounded-bl-lg flex justify-end items-center">
              <div className="select-none  text-start w-[30rem] rounded-2xl md:mr-[11rem] px-12 py-2 ">
                <p className=" text-[3rem] font-semibold text-white">
                  KFC Promotion
                </p>
                <div className="block min-w-full min-h-full w-full h-[0.13rem]  bg-third"></div>
                <p className="text-start text-[1rem] mt-1 text-neutral-100">
                  Unforgettable Taste: Treat yourself to the legendary taste
                  that has made KFC a global sensation. Our fillets are more
                  than food – they're a culinary experience.
                </p>
              </div>
            </div>
          </div>
          <div
            className="h-[31rem]"
            style={{
              background: `rgba(0, 0, 0, 0.6) url(https://i.imgur.com/q4hrs84.jpg)`,
              backgroundPosition: "center center",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              backgroundBlendMode: "darken",
              // filter: "blur(0.5px)",
            }}
          >
            <div className="w-full  h-full rounded-tl-lg rounded-bl-lg flex px-4 md:px-0 md:ml-16 items-center">
              <div className="select-none  text-center w-[30rem] rounded-2xl md:px-12 py-2 ">
                <p className=" text-[2rem] text-start font-semibold text-white">
                  BARGAIN BUCKET MENU CAMPAIGN
                </p>
                <div className="block min-w-full min-h-full w-full h-[0.13rem]  bg-third"></div>
                <p className="text-start text-[1rem] mt-1 text-neutral-100">
                  Seasoned with KFC's signature blend of secret herbs and
                  spices, KFC has managed to create a taste that is instantly
                  recognizable and universally beloved.
                </p>
              </div>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default Slider;

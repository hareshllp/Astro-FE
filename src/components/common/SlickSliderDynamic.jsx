import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlickSliderDynamic = ({ settings, items }) => {
  return (
    <div className="slider-container">
      <Slider {...settings}>
        {items.map((t) => {
          return (
            <div className="lg:px-auto mx-auto mt-7 flip-container">
              <div className="bg-[#51A95812] lg:m-4  rounded-[15px] relative">
                <a href={t.link}>
                  <div className="p-4 lg:p-[30px] lg:w-[569px] lg:h-[443px]">
                    <div>
                      <img
                        src={t.company_logo}
                        alt={t.logoAlt}
                        height={20}
                        width={120}
                      />
                      <p className="text-xl !font-bold pt-4 lg:w-4/5">
                        {t.title}
                      </p>
                      <p className="text-base text-white/80 pt-4">{t.des}</p>

                      <p className="pt-3 text-[#2EB1CE] flex items-center mt-2 cursor-pointer hover:underline w-max">
                        Read More
                        <button>Next</button>
                      </p>
                    </div>
                    <div className=" absolute top-5 right-5">
                      <div className="flipper">
                        <div className="hidden lg:block case-study-icon">
                          <img
                            src={t.icon}
                            alt="headphone"
                            height={82}
                            width={84}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          );
        })}
      </Slider>
    </div>
  );
};

export default SlickSlider;

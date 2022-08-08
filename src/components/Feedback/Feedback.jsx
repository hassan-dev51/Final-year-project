import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import usmandar from "../../assets/img/usmandar.jpg";
import Murad from "../../assets/img/Murad.jpg";
import babar from "../../assets/img/babar.jpeg";
import ali from "../../assets/img/ali.jpg";
import imran from "../../assets/img/imran.jpg";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Feedback.css";
const Feedback = () => {
  return (
    <div>
      <div className="feedback">
        <div className="feedback_main_div">
          <div className="feedback_inner_div">
            <div className="heading_div">
              <h2>Public feedback</h2>
            </div>
            <div className="img_slide">
              <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                  delay: 2500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
              >
                <SwiperSlide>
                  <div className="slide_flex">
                    <div className="slide_card">
                      <img src={usmandar} alt="error" />
                    </div>
                    <div className="slide_card_title">
                      <h3>Umer Dar</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Porro veniam ipsa beatae.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide_flex">
                    <div className="slide_card">
                      <img src={ali} alt="error" />
                    </div>
                    <div className="slide_card_title">
                      <h3>Ali Muhammad Khan</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Porro veniam ipsa beatae.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide_flex">
                    <div className="slide_card">
                      <img src={imran} alt="error" />
                    </div>
                    <div className="slide_card_title">
                      <h3>Imran Khan</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Porro veniam ipsa beatae.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide_flex">
                    <div className="slide_card">
                      <img src={babar} alt="error" />
                    </div>
                    <div className="slide_card_title">
                      <h3>Babar Azam</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Porro veniam ipsa beatae.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
                <SwiperSlide>
                  {" "}
                  <div className="slide_flex">
                    <div className="slide_card">
                      <img src={Murad} alt="error" />
                    </div>
                    <div className="slide_card_title">
                      <h3>Murad Saeed</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur, adipisicing
                        elit. Porro veniam ipsa beatae.
                      </p>
                    </div>
                  </div>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;

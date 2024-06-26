import React from "react";
import "./AboutUs.css";

// React-icons
import { FaMapMarked } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

//Imported Images
import img1 from "./imgs/air_services.webp";
import img2 from "./imgs/box_services.webp";
import img3 from "./imgs/img10.jpg";
import img4 from "./imgs/img12.jpg";
import img5 from "./imgs/img13.jpg";
import img6 from "./imgs/img24.jpg";
import img7 from "./imgs/img5.jpg";
import img8 from "./imgs/img6.jpg";
import img9 from "./imgs/img7.jpg";
import img10 from "./imgs/img8.jpg";
import img11 from "./imgs/img9.jpg";
import img12 from "./imgs/img11.jpg";
import img13 from "./imgs/img20.jpg";
import img14 from "./imgs/img21.jpg";
import img15 from "./imgs/img22.jpg";
import img16 from "./imgs/img23.jpg";
import img17 from "./imgs/img24.jpg";

// Initialization for ES Users
import { Carousel, initTWE } from "tw-elements";

initTWE({ Carousel });

const AboutUs = () => {
  return (
    <>
      <section data-aos="fade-up" class="text-gray-950 font-bold body-font">
        <div class="flex justify-center mt-10 text-4xl font-regular">
          لماذا نحن ؟
        </div>
        <p className="w-[100px] h-[4px] rounded-sm top-[20px] bg-rose-600 relative left-[-45%]"></p>

        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/58/97/7C/E53960D1295621EFCB5B13F335_1623567851299.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  أحدث شاحنات للنقل
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  أقل وأفضل أسعار وخصم 27% بمناسبة مرور "27" عام من الخبرة
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  كفاءة الوقت وأسرع خدمة
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  عملاء متخصصون و ذو خبرة عالية في المجال
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="mb-28">
        <div className="title relative text-center mb-16 text-4xl font-bold">
          <h1>أعمالنا</h1>
          <p className="w-24 h-1 rounded-sm top-5 bg-rose-600 mx-auto"></p>
        </div>
        <div className="slider max-w-screen-xl mx-auto px-4">
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            loop={true}>
            <SwiperSlide>
              <img src={img1} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img2} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img3} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img4} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img5} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img6} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img7} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img8} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img9} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img10} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img11} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img12} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img13} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img14} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img15} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img16} alt="..." className="w-full h-auto" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={img17} alt="..." className="w-full h-auto" />
            </SwiperSlide>
          </Swiper>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="m-4 md:m-8 dark:bg-gray-50 dark:text-gray-950">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-4xl text-center font-bold">دع الارقام تتكلم</h2>
          <p className="w-[100px] h-[4px] rounded-sm top-[20px] bg-rose-600 relative left-[-46%]"></p>
        </div>
        <div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex flex-col items-center p-4">
            <FaPeopleCarry className="text-6xl text-rose-600" />
            <h3 className="my-3 text-3xl font-bold">
              <strong>+</strong>125
            </h3>
            <div className="space-y-1 leading-tight">
              <h2 className="text-2xl">الذين يعملون من أجلك!</h2>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaTruck className="text-6xl text-rose-600" />
            <h3 className="my-3 text-3xl font-bold">
              <strong>+</strong>36
            </h3>
            <div className="space-y-1 leading-tight">
              <h2 className="text-2xl">عدد شاجنات النقل</h2>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaRegFaceSmile className="text-6xl text-rose-600" />
            <h3 className="my-3 text-3xl font-bold">
              <strong>+</strong>5200
            </h3>
            <div className="space-y-1 leading-tight">
              <h2 className="text-2xl">العملاء</h2>
            </div>
          </div>
          <div className="flex flex-col items-center p-4">
            <FaMapMarked className="text-6xl text-rose-600" />
            <h3 className="my-3 text-3xl font-bold">25</h3>
            <div className="space-y-1 leading-tight">
              <h2 className="text-2xl">الافرع ومستودعات التخزين</h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

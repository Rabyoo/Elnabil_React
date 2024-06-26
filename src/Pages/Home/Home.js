import React, { useEffect } from "react";
import "./Home.css";

// React-icons
import { FaGift } from "react-icons/fa6";
import { FaMapMarked } from "react-icons/fa";
import { FaRegFaceSmile } from "react-icons/fa6";
import { FaTruck } from "react-icons/fa6";
import { FaPeopleCarry } from "react-icons/fa";

//Imported Images
import img2 from "./imgs/img15.jpg";
import map from "./imgs/map.webp";
import whats_icon from "./imgs/whats_icon.webp";
import man_services from "./imgs/man-services.webp";
import man2_services from "./imgs/man2_services.jpg";
import air_services from "./imgs/air_services.webp";
import box_services from "./imgs/box_services.webp";

// Aos
import Aos from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Home = () => {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);

  return (
    <>
      <section className="heroSec relative top-[10px] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 sm:bg-transparent sm:from-white/25 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

        <div className="heroContent relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
          <div
            data-aos="fade-up"
            className="heroText max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl text-gray-800 font-extrabold sm:text-4xl">
              خدمات نقل العفش والأثاث خدمات تخزين الاثاث نقل مكيفات سبليت عناية
              تامة لكافة المنقولات فك وتركيب العفش والاثاث <br /> "ضمان شامل
              لكافة المنقولات"
            </h1>

            <div className="mt-8 flex flex-wrap gap-4 text-center">
              <a
                href="tel:+9660538090592"
                className="block w-full rounded bg-rose-600 px-12 py-3 text-xl font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto">
                اتصل بنا
              </a>

              <a
                href="https://wa.me/+9660538090592"
                className="block w-full rounded bg-white px-12 py-3 text-xl font-medium text-rose-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto">
                واتساب
              </a>
            </div>
          </div>

          <div data-aos="fade-up" className="card">
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="card-inner">
              <h1 className="text-center text-rose-600 relative top-3 text-5xl font-bold">
                خصم 27% لخدمات النقل والتخزين
              </h1>
              <br />
              <br />
              <br />
              <h2 className="text-center text-3xl font-semibold">
                يسعدنا التعامل معكم ...
              </h2>
            </div>
          </div>
        </div>
      </section>

      <section className="services bg-[#ebfaff] p-10">
        <div className="p-8">
          <h1 className="text-4xl font-bold text-gray-950 text-center mt-6">
            الخدمات
          </h1>
          <p className="text-center mt-6 text-xl font-bold text-gray-950">
            استخدام كافة وسائل الحماية من قفازات واقنعة طبية للحفاظ علي السلامة
            العامة
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div data-aos="fade-up" className="p-8 text-center">
            <div className=" rounded-full flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={man_services}
                style={{ borderRadius: "50%", boxShadow: "0 0px  5px #000" }}
                alt="..."
              />
            </div>
            <h2 className="uppercase text-2xl mt-6 font-bold mb-3">
              نقل العفش والاثاث
            </h2>
            <p className="font-medium text-lg text-gray-900 mb-3">
              تقدم شركة النبيل كافة خدمات نقل الاثاث باقل التكاليف وأسرع وقت
              لتوفير المال والجهد وراحة العملاء من نقل وفك وتركيب وتغليف الأثاث
              من خلال احدث سيارات مجهزه بمقاسات مختلفة من خلال متخصصون وعماله
              فنية مدربة .
            </p>
            <Link
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg"
              to="/transfer">
              أعرف أكثر
            </Link>
          </div>

          <div data-aos="fade-up" className="p-8 text-center">
            <div className=" rounded-full flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={air_services}
                style={{ borderRadius: "50%", boxShadow: "0 0px  5px #000" }}
                alt="..."
              />
            </div>
            <h2 className="uppercase text-2xl mt-6 font-bold mb-3">
              نقل المكيفات (فك وتركيب وتنظيف المكيفات)
            </h2>
            <p className="font-medium text-lg text-gray-900 mb-3">
              تقدم شركة النبيل كافة الخدمات الخاصة بفك وتركيب وصيانة وتنظيف ونقل
              المكيفات , مجموعات عمل متخصصة في التعامل مع كافة احجام وانواع
              المكيفات وتقديم كافة الخدمات والصيانة باحترافية تامة مع ضمان شامل
            </p>
            <Link
              to="/reassembleAndassemle"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </Link>
          </div>

          <div data-aos="fade-up" className="p-8 text-center">
            <div className=" rounded-full flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={man2_services}
                style={{ borderRadius: "50%", boxShadow: "0 0px  5px #000" }}
                alt="..."
              />
            </div>
            <h2 className="uppercase text-2xl mt-6 font-bold mb-3">
              تغليف العفش والاثاث
            </h2>
            <p className="font-medium text-lg text-gray-900 mb-3">
              تتميز شركتنا بتقديم خدمات التغليف بافضل الاسعار واجود خامات
              التغليف لتحظي مقتنياتك بعناية تامة وتحفظ من الاتربة والتلف
            </p>
            <Link
              to="/wrapping"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </Link>
          </div>

          <div data-aos="fade-up" className="p-8 text-center relative">
            <div className=" rounded-full flex justify-center items-center">
              <img
                className="w-[150px] h-[150px]"
                src={box_services}
                style={{ borderRadius: "50%", boxShadow: "0 0px  5px #000" }}
                alt="..."
              />
            </div>
            <h2 className="uppercase text-2xl mt-6 font-bold mb-3">
              خدمة تخزين الاثاث
            </h2>
            <p className="font-medium text-lg text-gray-900 mb-3">
              تعتبر شركة النبيل من افضل شركات تخزين الاثاث بالرياض حيث نضمن
              لعملائنا الكرام ارجاع كامل الاثاث المخزن بنفس الحالة التي تم
              استلامة بها وكذلك عدم ضياع او فقدان او تلف اي قطعة او كرتون من
              كامل الاثاث
            </p>
            <Link
              to="/storage"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </Link>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="dark:bg-gray-100 dark:text-gray-800 shadow-2xl mt-20">
        <div className="container flex flex-col-reverse mx-auto lg:flex-row">
          <div className="flex flex-col px-6 py-8 space-y-6 rounded-sm sm:p-8 lg:p-12 lg:w-1/2 xl:w-2/5 dark:bg-rose-600 dark:text-gray-50">
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <div className="space-y-2">
                <p className="text-2xl font-medium leading-snug">
                  نسعد بخدمتكم ...
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <div className="space-y-2">
                <p className="text-2xl font-medium leading-snug">
                  استمتع بكافة وسائل الراحة مع ضمان شامل للمنقولات .
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <div className="space-y-2">
                <p className="text-2xl font-medium leading-snug">
                  احصل علي خصم 27% علي كافة خدمات نقل العفش والاثاث وخدمات
                  التغليف والتخزين .
                </p>
              </div>
            </div>
            <div className="flex space-x-2 sm:space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-10 h-10">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
              </svg>
              <div className="space-y-2">
                <p className="text-2xl font-medium leading-snug">
                  يسعدنا التعامل معكم .
                </p>
              </div>
            </div>
          </div>
          <div className="lg:w-1/2 xl:w-3/5 dark:bg-gray-100">
            <div className="flex items-center justify-center p-4 md:p-8 lg:p-12">
              <img
                src={img2}
                alt=""
                className="rounded-lg shadow-lg dark:bg-gray-500 aspect-video sm:min-h-96"
              />
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="mt-32 bg-[#ebfaff]">
        <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              أرخص شركة نقل عفش في الوطن العربي
            </h2>
            <div className="w-24 h-1 rounded-sm mb-5 bg-rose-600 mx-auto"></div>
            <p className="text-lg font-bold text-gray-950">
              خصم (27%) بمناسبة مرور "27" عاما من الخبرة
            </p>
          </div>
          <div className="">
            <div className="max-w-md mx-auto text-center">
              <div className="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50 sm:w-24 sm:h-24 mx-auto">
                <FaGift className="text-8xl text-rose-600" />
              </div>
              <h6 className="mb-10 mt-10 text-rose-600 text-6xl font-bold leading-5">
                27%
              </h6>
              <p className="text-2xl text-rose-600">خصم خاص .. لكافة الخدمات</p>
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos="fade-up"
        className="m-4 md:m-8 dark:bg-gray-50 dark:text-gray-950">
        <div className="container mx-auto p-4 my-6 space-y-2 text-center">
          <h2 className="text-4xl text-center font-bold">دع الارقام تتكلم</h2>
          <p className="w-[100px] h-[4px] rounded-sm top-[20px] bg-rose-600 relative left-[-45%]"></p>
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
              <h2 className="text-2xl">عدد شاحنات النقل</h2>
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

      <section data-aos="fade-up" className="mt-32 bg-[#ebfaff]">
        <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              تتبع منقولاتك
            </h2>
            <div className="w-24 h-1 rounded-sm mb-5 bg-rose-600 mx-auto"></div>
            <p className="text-lg font-bold text-gray-950">مستمرون في التطور</p>
          </div>
          <div className="">
            <div className="max-w-md mx-auto text-center">
              <h1 className="mb-6 text-lg leading-relaxed text-gray-800">
                حصريا يمكنك متابعة المنقولات الخاصة بكم على خرائط جوجل حتى تصل
                إلى المكان المطلوب وذلك من خلال سيارات مجهزة بنظام التتبع
                العالمي GPS وذلك لتوفير أقصى درجات الالتزام والدقة.
              </h1>
              <img
                className="w-full max-w-sm mx-auto"
                src={map}
                alt="خرائط جوجل"
              />
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="mt-32">
        <div className="px-4 py-16 mx-auto max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
          <div className="max-w-xl mb-10 mx-auto text-center lg:max-w-2xl md:mb-12">
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
              اتصل بنا
            </h2>
            <div className="w-24 h-1 rounded-sm mb-5 bg-rose-600 mx-auto"></div>
            <h1 className="text-lg font-bold text-gray-950">
              اتصل بنا ... معاينة مجانية للمنقولات
            </h1>
          </div>
          <div className="max-w-md mx-auto text-center mt-[-10px]">
            <h1 className="text-3xl font-bold text-rose-600">0538090592</h1>
            <img className="w-20 mx-auto mt-3" src={whats_icon} alt="..." />
          </div>
        </div>
      </section>

      <form
        data-aos="fade-up"
        className="relative flex flex-col space-y-4 p-4 max-w-lg mx-auto mb-8"
        data-click-action="thankYouMessage">
        <div className="phoneNo flex flex-col">
          <label className="text-lg font-semibold mb-2">
            اترك رقمك سنتصل بك خلال دقائق "النبيل لنقل الاثاث"*
          </label>
          <input
            type="tel"
            name="telephone"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="services flex flex-col">
          <label className="text-lg font-semibold mb-2">الخدمة المطلوبة*</label>
          <select className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option value="الخدمات المطلوبة" selected>
              الخدمات المطلوبة
            </option>
            <option value="خدمات النقل والفك والتركيب">
              خدمات النقل والفك والتركيب
            </option>
            <option value="خدمات تخزين الاثاث">خدمات تخزين الاثاث</option>
            <option value="اخري">اخري</option>
          </select>
        </div>
        <div className="message flex flex-col">
          <label className="text-lg font-semibold mb-2">الرسالة*</label>
          <textarea
            name="message"
            cols="35"
            rows="3"
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="submit flex flex-col">
          <input
            type="submit"
            value="تسجيل للأتصال - بك"
            className="bg-rose-500 text-white p-2 rounded-md hover:bg-rose-600 transition duration-300 cursor-pointer"
          />
        </div>
      </form>
    </>
  );
};

export default Home;

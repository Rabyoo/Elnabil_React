import React from "react";

import whats_icon from "../Home/imgs/whats_icon.webp";

const ContactUs = () => {
  return (
    <>
      <section data-aos="fade-up" className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
          <div className="max-w-2xl lg:max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              زوروا موقعنا بألرياض
            </h2>
            <p className="w-[100px] h-[4px] rounded-sm top-[20px] bg-rose-600 relative left-[-44%]"></p>
          </div>
          <div className="mt-16 lg:mt-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3622.6320599628026!2d46.67529731439664!3d24.713551853386285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e2f044d367ce929%3A0x51167ed7c136d4d5!2sRiyadh%2C%20Saudi%20Arabia!5e0!3m2!1sen!2s!4v1620777294820!5m2!1sen!2s"
                  width="100%"
                  height="480"
                  allowfullscreen=""
                  style={{ border: "0" }}
                  loading="lazy"></iframe>
              </div>
              <div>
                <div className="max-w-full mx-auto rounded-lg overflow-hidden">
                  <div className="px-6 py-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      عنواننا
                    </h3>
                    <p className="mt-1 text-gray-900 font-medium">
                      المملكة العربية, الرياض
                    </p>
                  </div>
                  <div className="border-t border-gray-200 px-6 py-4">
                    <h3 className="text-xl font-medium text-gray-900">
                      تواصل علي
                    </h3>
                    <p className="mt-1 text-gray-950 font-bold">
                      Email: mnnnm1674@gmail.com
                    </p>
                    <p className="mt-1 text-gray-950 font-bold">
                      Phone1: +966 0538090592
                    </p>
                    <p className="mt-1 text-gray-950 font-bold">
                      Phone2: +966 0544147370
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section data-aos="fade-up" className="mt-22">
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
          <div className="max-w-md mx-auto text-center">
            <h1 className="text-3xl font-bold text-rose-600">0538090592</h1>
            <div className="flex justify-center mt-3">
              <img className="w-20" src={whats_icon} alt="..." />
            </div>
          </div>
        </div>
      </section>

      <form
        data-aos="fade-up"
        className="relative flex flex-col space-y-4 p-4 max-w-lg mx-auto mb-8">
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

export default ContactUs;

import React from 'react'

// React-icons
import { FaTruck } from "react-icons/fa";

// Images
import man from "../../Home/imgs/air_services.webp"

const ReassembleAndassemle = () => {
  return (
    <>
      <section class=" bg-blueGray-200 mt-2 mb-10">
        <div class="container mx-auto px-4">
          <div class="flex flex-wrap justify-center">
            <div class="lg:pt-12 pt-6 w-full md:w-8/12 px-4 p-2 text-center">
              <div class="relative break-words bg-gray-100 w-full mb-1 shadow-xl rounded-lg">
                <div class="px-4 py-2 flex-auto text-center">
                  <h1 class="text-4xl font-bold">
                    نقل المكيفات (فك وتركيب وتنظيف المكيفات)
                  </h1>
                </div>
              </div>
            </div>
          </div>

          <div class="flex flex-wrap items-center mt-16">
            <div class="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div class="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100">
                <FaTruck className="text-5xl text-rose-600" />
              </div>
              <p class="text-xl font-medium leading-relaxed mt-4 mb-4 text-blueGray-600">
                تقدم شركة النبيل كافة الخدمات الخاصة بفك وتركيب وصيانة وتنظيف
                ونقل المكيفات , مجموعات عمل متخصصة في التعامل مع كافة احجام
                وانواع المكيفات وتقديم كافة الخدمات والصيانة باحترافية تامة مع
                ضمان شامل
              </p>
            </div>
            <div class="w-full md:w-4/12 px-4 mr-auto ml-auto">
              <div class="relative flex flex-col min-w-0 break-words w-full mb-2 shadow-lg rounded-lg bg-rose-500">
                <img
                  alt="..."
                  src={man}
                  class="w-full align-middle rounded-t-lg"
                />
                <blockquote class="relative p-8 mb-4">
                  <h4 class="text-4xl font-bold text-gray-950">
                    خصم <span className="text-white">27%</span> علي كافة الخدمات
                  </h4>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
        <footer class="relative pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-4xl font-bold text-blueGray-500 py-1">
                  <h1> اتصل بنا ... معاينة مجانية للمنقولات</h1>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </section>
    </>
  );
}

export default ReassembleAndassemle

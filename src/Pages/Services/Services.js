import React from "react";

// Imported Images
import man_services from "./imgs/man-services.webp";
import man2_services from "./imgs/man2_services.jpg";
import air_services from "./imgs/air_services.webp";
import box_services from "./imgs/box_services.webp";

const Services = () => {
  return (
    <>
      <section
        data-aos="fade-up"
        className="services bg-[#ebfaff] p-10 mt-4 mb-6">
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
          <div className="p-8 text-center">
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
            <a
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg"
              href="/transfer">
              أعرف أكثر
            </a>
          </div>

          <div className="p-8 text-center">
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
            <a
              href="/reassembleAndassemle"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </a>
          </div>

          <div className="p-8 text-center">
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
            <a
              href="/wrapping"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </a>
          </div>

          <div className="p-8 text-center relative">
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
            <a
              href="/storage"
              className="text-white relative top-8 hover:bg-rose-600 transition bg-rose-500 rounded-lg p-2 text-center text-lg">
              أعرف أكثر
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;

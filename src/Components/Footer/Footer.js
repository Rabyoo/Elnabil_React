import React from "react";
import { Link } from "react-router-dom";

// React-Icons
import { FaSnapchat } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiTiktok } from "react-icons/si";



const Footer = () => {
  return (
    <>
      <footer class="bg-gray-100 dark:bg-gray-900">
        <div class="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <div class="flex justify-center text-teal-600 dark:text-teal-300">
            <Link to="/">
              <h1 className="text-4xl">النبيل</h1>
              <img src="" alt="" />
            </Link>
          </div>

          <ul class="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">

            <li>
              <Link
                style={{ letterSpacing: "1px" }}
                class=" transition text-lg hover:text-rose-500 dark:text-white dark:hover:text-rose-500"
                to="/">
                الرئيسية
              </Link>
            </li>

            <li>
              <Link
                style={{ letterSpacing: "1px" }}
                class=" transition text-lg hover:text-rose-500 dark:text-white dark:hover:text-rose-500"
                to="#">
                افضل شركة نقل عفش
              </Link>
            </li>

            <li>
              <Link
                style={{ letterSpacing: "1px" }}
                class=" transition text-lg hover:text-rose-500 dark:text-white dark:hover:text-rose-500"
                to="/aboutUs">
                عن الشركة
              </Link>
            </li>
          </ul>

          <ul class="mt-12 flex justify-center gap-6 md:gap-8">
            <li>
              <a
                href="https://www.tiktok.com/@keronabil078?_t=8nPKZMn0HiL&_r=1"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-rose-500 dark:text-white dark:hover:text-rose-500">
                <SiTiktok className="text-3xl" />
              </a>
            </li>

            <li>
              <a
                href="https://www.snapchat.com/add/kero2024598?share_id=3c4sd_CdiBA&locale=ar-AE"
                rel="noreferrer"
                target="_blank"
                class="text-gray-700 transition hover:text-rose-500 dark:text-white dark:hover:text-rose-500">
                <FaSnapchat className="text-3xl" />
              </a>
            </li>

          </ul>

          <p class="mx-auto mt-6 max-w-md text-center leading-relaxed text-gray-500 dark:text-gray-400">
            حقوق النشر © 2024 جميع الحقوق محفوظة - شركة النبيل لنقل الاثاث
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;

"use client";

import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <div className="w-screen h-screen bg-[#FFFFFF] flex items-center justify-center">
      <div className="w-[1000px] h-[500px] rounded-[20px] bg-[#674636] flex items-center justify-center shadow-md gap-4">
        {/* Image Login */}
        <div className="w-[450px] h-[450px]">
          <Image
            src={"/login-pict.png"}
            className="w-[500px] h-[450px]"
            width={0}
            height={0}
            alt={"logo"}
            unoptimized
          />
        </div>

        {/* Input Data Login */}
        <div className="w-[400px] h-[400px] rounded-[10px] bg-[#FFFFFF] flex flex-col items-center justify-center space-y-6">
          {/* Logo */}
          <div className="w-[160px] flex justify-center">
            <Image
              src={"/caisse-logo2.png"}
              className="w-[160px] h-[80px]"
              width={0}
              height={0}
              alt=""
              unoptimized
            />
          </div>

          <p className="text-[#929291] text-sm mt-2">Masukkan Nama Pengguna dan Kata Sandi.</p>

          {/* Input Nama Pengguna */}
          <div className="relative w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#C14600"
              viewBox="0 0 256 256"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path>
            </svg>
            <input
              type="text"
              placeholder="Nama Pengguna"
              className="w-full h-[40px] pl-[45px] pr-3 rounded-[10px] bg-[#C14600]/10 text-[16px] outline-[#C14600]"
            />
          </div>

          {/* Input Kata Sandi */}
          <div className="relative w-[300px]">
            {/* Ikon Kunci */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#C14600"
              viewBox="0 0 256 256"
              className="absolute left-3 top-1/2 transform -translate-y-1/2"
            >
              <path d="M216.57,39.43A80,80,0,0,0,83.91,120.78L28.69,176A15.86,15.86,0,0,0,24,187.31V216a16,16,0,0,0,16,16H72a8,8,0,0,0,8-8V208H96a8,8,0,0,0,8-8V184h16a8,8,0,0,0,5.66-2.34l9.56-9.57A79.73,79.73,0,0,0,160,176h.1A80,80,0,0,0,216.57,39.43ZM224,98.1c-1.09,34.09-29.75,61.86-63.89,61.9H160a63.7,63.7,0,0,1-23.65-4.51,8,8,0,0,0-8.84,1.68L116.69,168H96a8,8,0,0,0-8,8v16H72a8,8,0,0,0-8,8v16H40V187.31l58.83-58.82a8,8,0,0,0,1.68-8.84A63.72,63.72,0,0,1,96,95.92c0-34.14,27.81-62.8,61.9-63.89A64,64,0,0,1,224,98.1ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"></path>
            </svg>

            {/* Input Password */}
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Kata Sandi"
              className="w-full h-[40px] pl-[45px] pr-[45px] rounded-[10px] text-[16px] bg-[#C14600]/10 outline-[#C14600]"
              id="password"
            />

            {/* Ikon Mata (Show/Hide Password) */}
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#C14600"
                  viewBox="0 0 256 256"
                >
                  <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231.05,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#929291"
                  viewBox="0 0 256 256"
                >
                  <path d="M228,175a8,8,0,0,1-10.92-3l-19-33.2A123.23,123.23,0,0,1,162,155.46l5.87,35.22a8,8,0,0,1-6.58,9.21A8.4,8.4,0,0,1,160,200a8,8,0,0,1-7.88-6.69l-5.77-34.58a133.06,133.06,0,0,1-36.68,0l-5.77,34.58A8,8,0,0,1,96,200a8.4,8.4,0,0,1-1.32-.11,8,8,0,0,1-6.58-9.21L94,155.46a123.23,123.23,0,0,1-36.06-16.69L39,172A8,8,0,1,1,25.06,164l20-35a153.47,153.47,0,0,1-19.3-20A8,8,0,1,1,38.22,99c16.6,20.54,45.64,45,89.78,45s73.18-24.49,89.78-45A8,8,0,1,1,230.22,109a153.47,153.47,0,0,1-19.3,20l20,35A8,8,0,0,1,228,175Z"></path>
                </svg>
              )}
            </button>
          </div>

          {/* Tombol Masuk */}
          <button className="w-[300px] h-[40px] bg-[#C14600] rounded-[10px] text-[#F5F7F8] text-[16px] font-medium hover:bg-gray-300">
            Masuk
          </button>
        </div>
      </div>
    </div>
  );
}

import { Roboto } from "next/font/google";
import Image from "next/image";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Page() {
  return (
    <>
      <Login />
    </>
  );
}

function Login() {
  return (
    <div className="w-screen h-screen bg-[#FFFFFF] items-center justify-center flex">
      <div className="w-[1000px] h-[500px] rounded-[20px] bg-[#674636] items-center justify-center flex shadow-md gap-4">
        {/* image login */}
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

        {/* input data login */}
        <div className="w-[400px] h-[400px] rounded-[10px] bg-[#FFFFFF] flex flex-col items-center justify-center space-y-6 ">
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

          {/* Input Nama Pengguna */}
          <div className="relative w-[300px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="#000000"
              viewBox="0 0 256 256"
              className="absolute left-3 top-1/2 transform -translate-y-1/2 fill-[#C14600]"
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
            <input
              type="password"
              placeholder="Kata Sandi"
              className="w-full h-[40px] pl-[45px] pr-3 rounded-[10px] text-[16px] bg-[#C14600]/10 outline-[#C14600]"
              id="password"
            />
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

"use client";


import { useState } from "react";



export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-[calc(100%-256px)] h-[80px] shadow-md border-2 border-[#674636] items-center justify-between flex rounded-md p-3">
      {/* Nama Perusahaan */}
      <p className="text-[32px] font-bold text-[#674636]">Lusy Bakery</p>

      {/* Profil */}
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-x-2"
        >
          {/* Icon Profil */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="48"
            height="48"
            fill="#674636"
            viewBox="0 0 256 256"
          >
            <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
          </svg>

          {/* Nama Pengguna */}
          <p className="text-[16px] font-medium">Nama Pengguna saya</p>

          {/* Ikon Dropdown*/}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            stroke="currentColor"
            strokeWidth="1" // Tambahin ketebalan garisnya
            viewBox="0 0 16 16"
            className={`transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          >
            <path
              fillRule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-0 mt-2 w-32 bg-white shadow-md rounded-lg">
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Lihat Profil
            </button>
            <button className="block w-full text-left px-4 py-2 hover:bg-gray-200">
              Keluar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

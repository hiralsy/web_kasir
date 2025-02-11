import { Roboto } from "next/font/google";
import { useState } from "react";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Navbar() {
  return (
    <nav className="fixed w-[calc(100%-238px)] h-[80px] shadow-md border-2 border-[#674636] items-center justify-between flex rounded-md p-3">
      {/* Nama Perusahaan */}
      <p className="text-[32px] font-bold text-[#674636]">Lusy Bakery</p>

      {/* Profil */}
      <div className="flex items-center gap-x-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="48"
          height="48"
          fill="#674636"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
        </svg>
        <p className="text-[16px] font-medium">Nama Pengguna saya</p>

        {/* Dropdown Profil */}
        <select className="bg-transparent outline-none text-[16px] font-medium w-4 h-4">
          <option>Lihat Profil</option>
          <option>Keluar</option>
        </select>
      </div>
    </nav>
  );
}

import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function Navbar() {
  return (
    <div className="w-[1250px] h-[100px] ml-[270px] mr-[10px] mt-[10px] rounded-[10px] border-2 border-[#0A6847] items-center justify-between flex ">
      <p className="w-[260px] text-[40px] font-[700] ml-[20px] text-[#0A6847]">
        Lusy Bakery
      </p>
      <div className="flex items-center mr-5 justify-end">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          fill="#0A6847"
          viewBox="0 0 256 256"
        >
          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM96,120a32,32,0,1,1,32,32A32,32,0,0,1,96,120Zm97.76,66.41a79.66,79.66,0,0,0-36.06-28.75,48,48,0,1,0-59.4,0,79.66,79.66,0,0,0-36.06,28.75,88,88,0,1,1,131.52,0Z"></path>
        </svg>
        <p className="text-[18px] font-medium">Nama Pengguna saya</p>
        <div className="w-[15px] h-[25px] ml-1">
          <select
            className="w-[15px] h-[25px] bg-transparent rounded-none outline-none "
            name=""
            id=""
          >
            <option className="font-medium ">Lihat Profil</option>
            <option className="font-medium">Keluar</option>
          </select>
        </div>
      </div>
    </div>
  );
}

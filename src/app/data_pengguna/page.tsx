import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DataPengguna() {
  return (
    <div className="w-screen h-screen flex bg-[#F5F7F8]">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-[1250px] h-[580px] ml-[270px] mt-[20px] bg-yellow-50 "></div>
      </div>
    </div>
  );
}

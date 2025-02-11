import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function Transaksi() {
  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      {/* Sidebar */}
      <Sidebar />

      {/* Wrapper untuk Navbar & Konten */}
      <div className="flex-1 h-[100%]">
        {/* Navbar dengan posisi fixed */}
        <Navbar />

        {/* Konten utama */}
        <div className="mt-[92px] h-[calc(100%-92px)] flex bg-white shadow-md rounded-md gap-x-3">
            <div className="w-[60%] bg-pink-300">barang</div>
            <div className="w-[40%] bg-[#FFF8E8] border-2 border-[#674636] rounded-md p-2">
                <p className="text-[28px]">Pesanan</p>
            </div>
        </div>
      </div>
    </div>
  );
}

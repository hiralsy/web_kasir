import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DetailTransaksi() {
  return (
    <div className="w-screen h-screen bg-pink-100 items-center flex justify-center ">
      <div className="w-[450px] h-[550px] bg-[#F5F7F8] rounded-[10px] shadow-md ">
        <div className="w-full h-[70px] bg-yellow-300 flex items-center justify-center ">
          <span className="text-[40px] font-[600] text-[#0A6847] ">Detail Transaksi</span>
        </div>
        <div className="w-full h-[400px] bg-blue-300 p-[5px]  ">
          <div className="w-full h-full bg-[#F5F7F8] ">isi</div>
        </div>
        <div className="w-full h-[80px] bg-violet-400 flex ">
          <div className="w-1/2 h-full bg-gray-400 flex items-center justify-center">
            <button className="w-[150px] h-[40px] bg-[#F5F7F8] rounded-[10px] border-2 border-[#EB0A0A] text-[16px] font-[500] text-[#EB0A0A] hover:bg-gray-300 ">Tutup</button>
          </div>
          <div className="w-1/2 bg-yellow-300 items-center flex justify-center">
            <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[16px] text-[#F5F7F8] hover:bg-gray-300 ">Print</button>
          </div>
        </div>
      </div>
    </div>
  );
}

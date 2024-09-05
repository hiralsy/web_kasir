import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function DeleteProduk() {
  return (
    <div className="w-screen h-screen bg-pink-100 items-center flex justify-center ">
      <div className="w-[400px] h-[225px] bg-[#F5F7F8] rounded-[10px] shadow-md ">
        <div className="w-[400px] h-[80px]  items-center flex justify-center mt-[10px] ">
          <div className="w-[100px] h-[75px]  flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="#EB0A0A"
              viewBox="0 0 256 256"
              className=""
            >
              <path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path>
            </svg>
          </div>
        </div>
        <div className="w-[400px] h-[70px]  items-center flex justify-center ">
          <div className="w-[370px] h-[70px]  flex items-center ">
            <span className="text-[18px] font-[500] text-center  ">
              Apakah anda yakin ingin menghapus produk tersebut?
            </span>
          </div>
        </div>
        <div className="w-[400px] h-[60px]  flex ">
          <div className="w-[200px] h-full  flex items-center justify-center ">
            <button className="w-[150px] h-[40px] bg-[#F5F7F8] rounded-[10px] border-2 border-[#0A6847] font-medium text-[16px] text-[#0A6847] hover:bg-gray-300 ">
              Batal
            </button>
          </div>
          <div className="w-[200px] h-full  flex items-center justify-center">
            <button className="w-[150px] h-[40px] bg-[#EB0A0A] rounded-[10px] text-[16px] text-[#F5F7F8] font-medium hover:bg-gray-300 ">
              Hapus
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

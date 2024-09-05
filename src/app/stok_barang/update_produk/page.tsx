import { Poppins } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function UpdateProduk() {
  return (
    <div className="w-screen h-screen bg-pink-100 items-center flex justify-center ">
      <div className="w-[450px] h-[550px] bg-[#F5F7F8] rounded-[10px] shadow-md ">
        <div className="w-[450px] h-[80px]  items-center flex justify-center ">
          <span className="text-[#0A6847] font-[600] text-[40px] ">
            Edit Produk
          </span>
        </div>
        <div className="w-[450px] h-[350px]  pt-[10px] ">
          <div className="w-[450px] h-[85px]  items-center flex justify-center ">
            <div className=" flex flex-col  ">
              <label className="text-[#0A6847] text-[14px] font-[500] relative w-fit top-2 ml-[7px] px-[3px] bg-[#F5F7F8] ">
                Nama Produk
              </label>
              <input
                id=""
                type="text"
                placeholder="Masukkan nama produk..."
                className="border-[#0A6847] px-[10px] bg-[#F5F7F8] border-2 rounded-[5px] w-[400px] h-[45px] text-[16px] outline-none placeholder:text-black/25"
              />
            </div>
          </div>
          <div className="w-[450px] h-[85px]  items-center flex justify-center ">
            <div className=" flex flex-col  ">
              <label className="text-[#0A6847] text-[14px] font-[500] relative w-fit top-2 ml-[7px] px-[3px] bg-[#F5F7F8] ">
                Harga Satuan Produk
              </label>
              <input
                id=""
                type="text"
                placeholder="Masukkan harga satuan produk..."
                className="border-[#0A6847] px-[10px] bg-[#F5F7F8] border-2 rounded-[5px] w-[400px] h-[45px] text-[16px] outline-none placeholder:text-black/25"
              />
            </div>
          </div>
          <div className="w-[450px] h-[85px]  items-center flex justify-center ">
            <div className=" flex flex-col  ">
              <label className="text-[#0A6847] text-[14px] font-[500] relative w-fit top-2 ml-[7px] px-[3px] bg-[#F5F7F8] ">
                Stok Produk
              </label>
              <input
                id=""
                type="number"
                placeholder="Masukkan stok produk..."
                className="border-[#0A6847] px-[10px] bg-[#F5F7F8] border-2 rounded-[5px] w-[400px] h-[45px] text-[16px] outline-none placeholder:text-black/25"
              />
            </div>
          </div>
          <div className="w-[450px] h-[85px]  items-center flex justify-center ">
            <div className=" flex flex-col  ">
              <label className="text-[#0A6847] text-[14px] font-[500] relative w-fit top-2 ml-[7px] px-[3px] bg-[#F5F7F8] ">
                Gambar Produk
              </label>

              <input
                id=""
                type="file"
                className="border-[#0A6847] px-[10px] py-[8px] bg-[#F5F7F8] border-2 rounded-[5px] w-[400px] h-[45px] text-[16px] outline-none placeholder:text-black/25"
              />
            </div>
          </div>
        </div>
        <div className="w-[450px] h-[50px]  mt-[50px] flex  ">
          <div className="w-[225px] h-full  items-center flex justify-center ">
            <button className="w-[150px] h-[40px] bg-[#F5F7F8] rounded-[10px] text-[16px] font-[500] text-[#0A6847] border-2 border-[#0A6847] hover:bg-gray-300 ">
              Batal
            </button>
          </div>
          <div className="w-[225px] h-full  items-center flex justify-center ">
            <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[16px] font-[500] text-[#F5F7F8] hover:bg-gray-300 ">
              Simpan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

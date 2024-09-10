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

export default function StokBarang() {
  return (
    <div className="w-screen h-screen flex bg-[#F5F7F8] ">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />

        <div className="w-[1250px] h-[580px] ml-[270px] mt-[20px] bg-pink-300 ">
          {/* <div className="bg-yellow-400 h-[50px] w-[1250px]">

            <div className="bg-slate-300 w-[625px] h-[50px] flex items-center ">
            <div className="w-[50px] h-full p-2 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="35"
                  height="35"
                  fill="rgba(10, 104, 71, 0.6)"
                  viewBox="0 0 256 256"
                >
                  <path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32ZM72,48v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V80H48V48ZM208,208H48V96H208V208Zm-64-56a16,16,0,1,1-16-16A16,16,0,0,1,144,152Z"></path>
                </svg>
              </div>
              <div className="w-[200px] h-[40px] items-center flex ">
                <span className="text-[17px] text-[#0A6847] font-medium ">
                  08 Agustus 2024
                </span>
              </div>
            </div>
          </div> */}
          <div className="w-[1250px] h-[50px] bg-blue-300 flex pl-[5px] ">
            <div className=" w-[625px] h-[50px] items-center flex ">
              <div className="flex ">
                <input
                  type="text"
                  className=" w-[575px] h-[40px] bg-[#F5F7F8] pl-4 text-4 font-medium outline-0 rounded-tl-[50px] rounded-bl-[50px] border-2 border-[#0A6847] "
                  placeholder="Telusuri kode transaksi..."
                  id=""
                />
                <div className="flex w-10 h-10 items-center justify-center rounded-tr-[50px] rounded-br-[50px] bg-[#0A6847] p-2 ">
                  <svg
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                    className="pointer-events-none absolute w-6 fill-[#F5F7F8] "
                  >
                    <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                  </svg>
                </div>
              </div>
            </div>
            <div className="bg-slate-200 w-[625px] h-[50px] ">
              <div className="bg-violet-300 h-full w-[300px] flex items-center">
                <input
                  type="date"
                  name=""
                  id=""
                  className="w-[200px] h-[40px] border-2 border-[#0A6847] rounded-[10px] pl-2 pr-2 "
                />
              </div>
            </div>
          </div>
          <div className="bg-yellow-300 w-[1250px] h-[530px] flex p-[5px]">
            <div className="bg-red-500 w-[1240px] h-[520px] rounded-[10px] shadow-sm ">
              <div className="w-[1240px] h-[50px] bg-[#0A6847] rounded-tl-[10px] rounded-tr-[10px] flex justify-between ">
                <div className="w-[240px] h-full bg-orange-700 flex items-center justify-center ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8] ">
                    Kode Transaksi
                  </span>
                </div>
                <div className="w-[240px] h-full bg-orange-200 flex items-center justify-center">
                  <span className="text-[17px] font-[500] text-[#F5F7F8] ">
                    Tanggal
                  </span>
                </div>
                <div className="w-[240px] h-full bg-orange-300 flex items-center justify-center">
                  <span className="text-[17px] font-[500] text-[#F5F7F8] ">
                    Nama
                  </span>
                </div>
                <div className="w-[240px] h-full bg-orange-400 flex items-center justify-center">
                  <span className="text-[17px] font-[500] text-[#F5F7F8] ">
                    Total Harga
                  </span>
                </div>
                <div className="w-[240px] h-full bg-orange-500 flex items-center justify-center">
                  <span className="text-[17px] font-[500] text-[#F5F7F8] ">
                    Aksi
                  </span>
                </div>
              </div>
              <div className="w-[1240px] h-[470px] bg-[#F5F7F8] rounded-bl-[10px] rounded-br-[10px] no-scrollbar overflow-y-auto ">
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>

                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">26/08/2024</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">Pelanggan</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">10.000</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <button className="w-[150px] h-[40px] bg-[#0A6847] rounded-[10px] text-[#F5F7F8] font-[500] text-[16px] hover:bg-gray-300  ">Detail</button>
                  </div>
                </div>

                

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

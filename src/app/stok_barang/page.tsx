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

        <div className="w-[1250px] h-[580px] ml-[270px] mt-[20px] ">
          {/* <div className="w-full h-[50px] bg-yellow-300 ">
            <div className="w-[550px] h-[50px] bg-slate-400 flex items-center ">
              <div className="w-[50px] h-full bg-slate-50 p-2 ">
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
              <div className="w-[200px] h-[40px] bg-pink-200 items-center flex ">
                <span className="text-[17px] text-[#0A6847] font-medium ">
                  08 Agustus 2024
                </span>
              </div>
            </div>
          </div> */}

          <div className="w-full h-[580px]  ">
            <div className=" h-[50px] w-full flex ">
              <div className="flex w-[625px] h-[50px] items-center pl-[10px] ">
                <div className="flex ">
                  <input
                    type="text"
                    className=" w-[350px] h-[40px] bg-white pl-4 text-4 font-medium outline-0 rounded-tl-[50px] rounded-bl-[50px] border-2 border-[#0A6847] "
                    placeholder="Telusuri produk..."
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
                <div className="ml-5">
                  <select
                    name=""
                    id=""
                    className="accent-slate-600 w-[200px] h-[40px] p-[5px] rounded-[10px] border-[1px] border-[#0A6847] font-medium "
                  >
                    <option value="">Lihat Stok</option>
                    <option value="">Stok terkecil</option>
                    <option value="">Stok terbanyak</option>
                  </select>
                </div>
              </div>

              <div className="w-[625px] h-full pt-[8px] pl-[435px]   ">
                <button className="w-[180px] h-[35px] bg-[#0A6847] flex rounded-[10px] items-center pl-[10px] hover:bg-gray-300 ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={24}
                    height={24}
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="#F5F7F8"
                      strokeLinecap="square"
                      strokeLinejoin="round"
                      strokeWidth={32}
                      d="M256 112v288m144-144H112"
                    ></path>
                  </svg>
                  <span className="text-[#F5F7F8] ml-[5px] text-[16px] font-medium  ">
                    Tambah Produk
                  </span>
                </button>
              </div>
            </div>
            <div className="w-full h-[530px] p-[10px] overflow-y-auto no-scrollbar flex flex-wrap content-start gap-x-[63px] gap-y-[50px] ">
              <div className="w-[260px] h-[250px] bg-white rounded-[10px] p-[5px] shadow-lg ">
                <div className="w-[250px] h-[120px] rounded-[10px] mb-[5px] bg-gray-100 "></div>
                <div className="w-[250px] h-[130px] ">
                  <div className="w-[250px] h-[50px] font-semibold line-clamp-2 ">
                    nama produk nama produk roti bakery waffle apalah apalah
                    meni hmm
                  </div>
                  <div className="w-[250px] h-[30px] flex bg-blue-400   ">
                    <div className="w-[25px] h-full text-[16px] text-[#0A6748] font-medium bg-yellow-300 items-center flex ">
                      Rp
                    </div>
                    <div className="w-[225px] h-full text-[16px] text-[#0A6748] font-medium bg-yellow-500 items-center flex ">
                      harga satuan
                    </div>
                  </div>
                  <div className="w-[250px] h-[30px] flex bg-red-300 justify-between ">
                    <div className="w-[130px] h-full flex bg-yellow-200 items-center  ">
                      <div className="text-[16px] font-semibold bg-pink-400  ">Stok :</div>
                      <div className="w-[75px] h-full ml-[5px] text-[16px] font-semibold bg-green-400 flex items-center ">
                        12345
                      </div>
                    </div>
                    <div className="w-[90px] pl-[20px] h-full flex  bg-blue-500 ">
                      <div className="w-[30px] h-full items-center flex justify-center mr-[10px] hover:bg-gray-300 rounded-[5px] bg-violet-400 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#0A6847"
                          viewBox="0 0 256 256"
                        >
                          <path d="M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"></path>
                        </svg>
                      </div>
                      <div className="w-[30px] h-full items-center flex justify-center hover:bg-gray-300 rounded-[5px] bg-violet-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="#EB0A0A"
                          viewBox="0 0 256 256"
                        >
                          <path d="M216,48H180V36A28,28,0,0,0,152,8H104A28,28,0,0,0,76,36V48H40a12,12,0,0,0,0,24h4V208a20,20,0,0,0,20,20H192a20,20,0,0,0,20-20V72h4a12,12,0,0,0,0-24ZM100,36a4,4,0,0,1,4-4h48a4,4,0,0,1,4,4V48H100Zm88,168H68V72H188ZM116,104v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Zm48,0v64a12,12,0,0,1-24,0V104a12,12,0,0,1,24,0Z"></path>
                        </svg>
                      </div>
                    </div>
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

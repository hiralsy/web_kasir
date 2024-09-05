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

export default function TransaksiBayar() {
  return (
    <div className="w-screen h-screen flex bg-[#F5F7F8]">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-[1250px] h-[580px] ml-[270px] mt-[20px] flex bg-white ">
          <div className="w-[550px] h-[580px] bg-red-600 ">
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
            <div className="w-[550px] h-[530px] bg-yellow-900 items-center flex justify-center ">
              <div className="w-[530px] h-[510px] bg-pink-200 rounded-[10px] border-2 border-[#0A6847] p-[10px] ">
                <div className=" w-[510px] h-[40px] bg-yellow-50 mb-[5px] items-center flex ">
                  <span className="text-[#0A6847] text-[30px] font-semibold ">
                    Pesanan
                  </span>
                </div>
                <div className="w-[510px] h-[30px] bg-white border-t-[#0A6847] border-b-[#0A6847] border-[1px] mb-[5px] flex ">
                  <div className="bg-cyan-100 w-[230px] mr-[5px] text-[18px] text-[#0A6847] font-medium text-center ">
                    Produk
                  </div>
                  <div className="bg-cyan-400 w-[125px] mr-[5px] text-[18px] text-[#0A6847] font-medium text-center ">
                    Qty
                  </div>
                  <div className="bg-cyan-600 w-[145px] text-[18px] text-[#0A6847] font-medium text-center ">
                    Harga
                  </div>
                </div>
                <div className="w-[510px] h-[330px] bg-slate-50 mb-[5px] overflow-y-scroll no-scrollbar ">
                  <div className="w-full h-[110px] bg-red-400 flex ">
                    <div className="w-[235px] h-full bg-blue-500 ">
                      <div className="w-[230px] h-[100px] bg-blue-200 rounded-[10px] shadow-sm flex ">
                        <div className="w-[80px] h-full bg-slate-500 rounded-tl-[10px] rounded-bl-[10px] "></div>
                        <div className="w-[140px] h-full bg-yellow-50 ml-[5px] ">
                          <div className="w-full h-[70px] bg-green-200 line-clamp-3 font-medium  ">
                            nama produk
                          </div>
                          <div className="w-full h-[30px] bg-gray-200 flex  ">
                            <div className="w-[20px] h-full bg-yellow-300 font-medium flex items-center ">
                              Rp
                            </div>
                            <div className="w-[115px] h-full bg-green-300 ml-[5px] font-medium flex items-center ">
                              Harga satuan
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="w-[125px] h-full bg-slate-500 pt-4 pl-[2.5px] ">
                      <div className="w-[120px] h-[35px] bg-yellow-100 flex ">
                        <div className="w-10 h-full bg-green-200 pl-[7px] pt-[5px] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="red"
                            className="size-6 bg-yellow-400 hover:bg-gray-300 rounded-[5px] "
                          >
                            <path
                              fillRule="evenodd"
                              d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <div className="w-10 h-full bg-slate-100 pt-[5px] ">
                          <div className="bg-pink-200 w-[40px] h-[24px] text-center line-clamp-1">
                            <span className="font-medium ">12347889</span>
                          </div>
                        </div>
                        <div className="w-10 h-full bg-red-400 pl-[7px] pt-[5px] ">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 512 512"
                            className="bg-yellow-500 hover:bg-gray-300 rounded-[5px] "
                          >
                            <path
                              fill="none"
                              stroke="#0a6847"
                              strokeLinecap="square"
                              strokeLinejoin="round"
                              strokeWidth={32}
                              d="M256 112v288m144-144H112"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="w-[150px] h-full bg-green-300 pl-[5px] pt-4 ">
                      <div className="w-[142px] h-[35px] bg-blue-200 pt-[2.5px] flex justify-between ">
                        <div className="w-[25px] h-[30px] bg-yellow-300 font-medium text-[18px] flex items-center">
                          Rp
                        </div>
                        <div className="w-[115px] h-[30px] bg-gray-300 text-[18px] font-medium flex items-center ">
                          Harga
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full h-[110px] bg-red-400 flex "></div>
                  <div className="w-full h-[110px] bg-red-300 flex "></div>
                  <div className="w-full h-[110px] bg-red-200 flex "></div>
                  <div className="w-full h-[110px] bg-red-100 flex "></div>
                </div>
                <div className="w-[510px] h-[30px] bg-yellow-200 mb-[5px] flex justify-between ">
                  <div className="bg-pink-300 w-[50px] ">
                    <span className="text-[#0A6847] text-[20px] font-semibold ">
                      Total
                    </span>
                  </div>
                  <div className="w-[300px] h-full bg-white text-[20px] text-[#0A6847] font-semibold text-right ">
                    10.000
                  </div>
                </div>
                <div>
                  <button className="w-[510px] h-[35px] bg-[#F5F7F8] border-[2px] border-[#0A6847] text-[#0A6847] rounded-[10px] text-[16px] font-medium hover:bg-gray-300 ">
                    Batalkan Pesanan
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[700px] h-[580px] bg-orange-500 flex items-center justify-center ">
            <div className="w-[670px] h-[550px] bg-slate-50 ">
              <div className=" w-full h-[40px] bg-yellow-500 mb-[10px] items-center flex ">
                <span className="text-[#0A6847] text-[30px] font-semibold ">
                  Pembayaran
                </span>
              </div>
              <div className="w-full h-[500px] bg-pink-600 ">
                <div className="w-full h-[330px] bg-green-300 p-[5px] ">
                  <div className=" h-[50px] w-full pt-[5px] bg-slate-600 ">
                    <div className="flex">
                      <input
                        type="text"
                        className=" w-[620px] h-[40px] bg-white pl-4 text-base font-medium outline-0 rounded-tl-[50px] rounded-bl-[50px] border-2 border-[#0A6847] "
                        placeholder="Telusuri member..."
                        id=""
                      />
                      <div className="flex w-10 items-center justify-center rounded-tr-[50px] rounded-br-[50px] bg-[#0A6847] p-2">
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
                  <div className="w-full h-[30px] bg-pink-300 flex ">
                    {/* <form action=""> */}
                    <div className="w-[200px] h-full bg-yellow-200 justify-center items-center p-[3px] ">
                      <label className="font-medium flex items-center gap-1 bg-violet-400 ">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-5 h-5 items-center accent-[#0A6847]"
                        />
                        Member baru
                      </label>
                    </div>
                    <div className="w-[200px] h-full bg-yellow-400 justify-center items-center p-[3px] ">
                      <label className="font-medium flex items-center gap-1 bg-violet-800 ">
                        <input
                          type="checkbox"
                          name=""
                          id=""
                          className="w-5 h-5 items-center accent-[#0A6847]"
                        />
                        Pelanggan
                      </label>
                    </div>

                    {/* </form> */}
                  </div>
                  <div className="w-full h-[230px] mt-[5px] bg-blue-600 ">
                    <div className="flex mb-2 ">
                      <label htmlFor="" className="flex items-center">
                        Nama
                      </label>
                      <div className="w-[150px] bg-orange-300 text-end mr-1 flex items-center justify-end ">
                        :
                      </div>
                      <input
                        type="text"
                        className="w-[250px] h-[35px] outline-[#0A6847] rounded-[5px] pl-[5px] "
                      />
                    </div>
                    <div className="flex mb-3 ">
                      <label htmlFor="" className="flex items-center">
                        Nomor Telepon
                      </label>
                      <div className="w-[77px] bg-orange-600 mr-1 flex items-center justify-end">
                        :
                      </div>
                      <input
                        type="text"
                        className="w-[250px] h-[35px] outline-[#0A6847] rounded-[5px] pl-[5px] "
                      />
                    </div>
                    <div className="flex mb-2 ">
                      <label htmlFor="">Alamat</label>
                      <div className="w-[141px] bg-orange-900 text-end mr-1 ">
                        :
                      </div>
                      <textarea
                        name=""
                        id=""
                        className="w-[250px] h-[70px] outline-[#0A6847] rounded-[5px] pl-[5px]"
                      ></textarea>
                    </div>

                    <div className=" bg-yellow-300 w-full flex items-center justify-center mt-[20px] ">
                      <button className="bg-[#0A6847] w-[150px] h-[35px] rounded-[10px] text-[#F8F7F5] text-[16px] font-medium hover:bg-gray-300 ">
                        Simpan
                      </button>
                    </div>
                  </div>
                </div>
                <div className="w-full h-[170px] bg-green-600 p-[5px] ">
                  <div className="w-full h-[160px] bg-white ">
                    <div className="w-full h-[35px] bg bg-yellow-300 flex items-center justify-between ">
                      <span className="text-[20px] font-medium text-[#0A6847] ">
                        Total Bayar
                      </span>
                      <div className="flex">
                        <span className="h-[30px] bg-orange-400 text-[20px] text-[#0A6847] font-semibold text-end mr-2 ">
                          Rp
                        </span>
                        <div className="h-[30px] bg-gray-400 text-[20px] text-[#0A6847] font-semibold text-end ">
                          10.000
                        </div>
                      </div>
                    </div>
                    <div className="w-full h-[35px] bg bg-yellow-600 flex items-center justify-between ">
                      <span className="text-[20px] font-medium text-[#0A6847] ">
                        Jumlah Pembayaran
                      </span>
                      <div className="flex">
                        <span className="h-[30px] bg-orange-400 text-[20px] text-[#0A6847] font-semibold text-end mr-2 ">
                          Rp
                        </span>
                        <input
                          type="text"
                          className="w-[150px] h-[30px] bg-white text-[20px] text-[#0A6847] font-semibold text-end rounded-[5px] outline-[#0A6847] border-[2px] border-[#0A6847] "
                        />
                      </div>
                    </div>
                    <div className="w-full h-[50px] bg-yellow-100 p-[5px] mt-8 ">
                      <button className="w-[650px] h-[35px] bg-[#0A6847] text-white font-medium rounded-[10px] text-[16px] hover:bg-gray-300 ">
                        Bayar
                      </button>
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

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

export default function Member() {
  return (
    <div className="w-screen h-screen flex bg-[#F5F7F8]">
      <Sidebar />
      <div className="w-full h-full ">
        <Navbar />
        <div className="w-[1250px] h-[580px] ml-[270px] mt-[20px] bg-yellow-50 ">
          <div className="w-full h-[50px] bg-pink-400 ">
            <div className=" w-[625px] h-[50px] items-center flex bg-yellow-300 ">
              <div className="flex ">
                <input
                  type="text"
                  className=" w-[575px] h-[40px] bg-[#F5F7F8] pl-4 text-4 font-medium outline-0 rounded-tl-[50px] rounded-bl-[50px] border-2 border-[#0A6847] "
                  placeholder="Telusuri data pengguna..."
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
          </div>
          <div className="w-full h-[530px] p-[5px] bg-blue-400">
            <div className="w-[1240px] h-[520px] rounded-[10px] shadow-sm bg-yellow-200">
              <div className="w-full h-[50px] bg-[#0A6847] rounded-tl-[10px] rounded-tr-[10px] flex justify-between ">
                <div className="w-[240px] h-[50px] items-center justify-center flex bg-red-300 ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8]">
                    ID
                  </span>
                </div>
                <div className="w-[240px] h-[50px] items-center justify-center flex bg-red-200 ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8]">
                    Nama Member
                  </span>
                </div>
                <div className="w-[240px] h-[50px] items-center justify-center flex bg-yellow-200 ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8]">
                    Nomor Telepon
                  </span>
                </div>
                <div className="w-[240px] h-[50px] items-center justify-center flex bg-yellow-300 ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8]">
                    Alamat
                  </span>
                </div>
                <div className="w-[240px] h-[50px] items-center justify-center flex bg-yellow-400 ">
                  <span className="text-[17px] font-[500] text-[#F5F7F8]">
                    Aksi
                  </span>
                </div>
              </div>
              <div className="w-[1240px] h-[470px] rounded-bl-[10px] bg-red-300 overflow-y-auto no-scrollbar">
                <div className="w-[1240px] h-[50px]  border-b-2 border-gray-300 flex justify-between items-center ">
                  <div className="w-[240px] h-[45px] bg-blue-100 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">01</span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-200 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] text-center ">
                      Hira Lusy
                    </span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-300 flex items-center justify-center ">
                    <span className="text-[16px] font-[500] ">
                      081234567890
                    </span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-400 flex items-center justify-center  ">
                    <span className="text-[16px] font-[500] line-clamp-1 text-center ">
                      bumi indonesia bumi indonesia bumi indonesia bumi
                      indonesia
                    </span>
                  </div>
                  <div className="w-[240px] h-[45px] bg-blue-500 flex items-center justify-center ">
                    <div className="w-[130px] h-[40px] bg-red-100 flex items-center justify-center ">
                      <div className="w-[32px] h-[32px] items-center flex justify-center mr-[10px] hover:bg-gray-300 rounded-[5px] bg-violet-400 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
                          fill="#0A6847"
                          viewBox="0 0 256 256"
                        >
                          <path d="M230.14,70.54,185.46,25.85a20,20,0,0,0-28.29,0L33.86,149.17A19.85,19.85,0,0,0,28,163.31V208a20,20,0,0,0,20,20H92.69a19.86,19.86,0,0,0,14.14-5.86L230.14,98.82a20,20,0,0,0,0-28.28ZM91,204H52V165l84-84,39,39ZM192,103,153,64l18.34-18.34,39,39Z"></path>
                        </svg>
                      </div>

                      <div className="w-[32px] h-[32px] items-center flex justify-center hover:bg-gray-300 rounded-[5px] bg-violet-700 ">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="28"
                          height="28"
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

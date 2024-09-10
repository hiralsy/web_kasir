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
    <div className="w-screen h-screen flex bg-[#F5F7F8] fixed">
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
              <div className="w-full h-[50px] bg-gray-300 rounded-tl-[10px] rounded-tr-[10px] "></div>
              <div className="w-[1240px] h-[470px] rounded-bl-[10px] bg-red-300 overflow-y-auto no-scrollbar"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

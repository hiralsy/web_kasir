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

export default function Home() {
    return(
        <main className="w-screen h-screen bg-slate-600">
            <Navbar/>
        </main>
    );
}
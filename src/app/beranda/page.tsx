"use client";


import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";



export default function Home() {
  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      {/* Sidebar */}
      <Sidebar />

      {/* Wrapper untuk Navbar & Konten */}
      <div className="flex-1">
        {/* Navbar dengan posisi fixed */}
        <Navbar />

        {/* Konten utama */}
        <div className="mt-[92px] p-3 bg-white shadow-md rounded-md">
          content beranda
        </div>
      </div>
    </div>
  );
}

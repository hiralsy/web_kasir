"use client";

import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function RiwayatTransaksi() {
  const [showModal, setShowModal] = useState(false);
  const [selectedTransaction, setSelectedTransaction] = useState<{
    kode: number;
    tanggal: string;
    pelanggan: string;
    petugas: string;
    total: number;
    items: { name: string; qty: number; price: number }[];
  } | null>(null);
  const [search, setSearch] = useState("");
  const [filterDate, setFilterDate] = useState("");

  const transactions = [
    {
      kode: 100001, // Mengubah dari string ke number
      tanggal: "2024-02-15",
      pelanggan: "Budi Santoso",
      petugas: "Admin",
      total: 50000,
      items: [
        { name: "Croissant Butter", qty: 2, price: 20000 },
        { name: "Slice Cake", qty: 1, price: 30000 },
      ],
    },
    {
      kode: 100002,
      tanggal: "2024-02-16",
      pelanggan: "Siti Aminah",
      petugas: "Kasir 1",
      total: 75000,
      items: [
        { name: "Donut", qty: 3, price: 45000 },
        { name: "Muffin", qty: 2, price: 30000 },
      ],
    },
  ];

  const filteredTransactions = transactions.filter(
    (trx) =>
      trx.pelanggan.toLowerCase().includes(search.toLowerCase()) &&
      (filterDate ? trx.tanggal === filterDate : true)
  );

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      {/* Sidebar */}
      <Sidebar />

      {/* Wrapper untuk Navbar & Konten */}
      <div className="flex-1">
        {/* Navbar dengan posisi fixed */}
        <Navbar />

        {/* Konten utama */}
        <div className="mt-[92px] h-[calc(100%-92px)] p-3 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium text-[#929291]">
              Riwayat Transaksi
            </h1>
          </div>

          {/* Input Pencarian */}
          <input
            type="text"
            placeholder="Cari pelanggan..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-[50%] p-2 border-2 border-gray-300 rounded-lg focus:border-[#C14600] outline-none mb-4 mr-2"
          />

          {/* Filter Tanggal */}
          <input
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-md"
          />

          {/* Tabel Riwayat Transaksi */}
          <div className="overflow-y-auto max-h-[500px] custom-scrollbar">
            <table className="w-full border-collapse border border-gray-200">
              <thead className="bg-[#AAB396] text-[#4A4947] sticky top-0 z-1000">
                <tr className="">
                  <th className="border p-2">Kode</th>
                  <th className="border p-2">Tanggal</th>
                  <th className="border p-2">Pelanggan</th>
                  <th className="border p-2">Total</th>
                  <th className="border p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {filteredTransactions.length > 0 ? (
                  filteredTransactions.map((trx) => (
                    <tr key={trx.kode} className="text-center">
                      <td className="border p-2">{trx.kode}</td>
                      <td className="border p-2">{trx.tanggal}</td>
                      <td className="border p-2">{trx.pelanggan}</td>
                      <td className="border p-2">
                        Rp{trx.total.toLocaleString("id-ID")}
                      </td>
                      <td className="border p-2 w-[15%] ">
                        <button
                          onClick={() => {
                            setSelectedTransaction(trx);
                            setShowModal(true);
                          }}
                          className="w-[80px] bg-[#C14600] text-white px-3 py-1 rounded-lg hover:bg-gray-300"
                        >
                          Detail
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={5} className="text-center p-4 text-gray-500">
                      Tidak ada transaksi yang ditemukan
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Detail Transaksi */}
      {showModal && selectedTransaction && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[400px] z-9999">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-2 text-gray-600 hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
              </svg>
            </button>
            <h2 className="text-lg font-bold mb-3">Detail Transaksi</h2>
            <p>
              <strong>Kode:</strong> {selectedTransaction.kode}
            </p>
            <p>
              <strong>Tanggal:</strong> {selectedTransaction.tanggal}
            </p>
            <p>
              <strong>Pelanggan:</strong> {selectedTransaction.pelanggan}
            </p>
            <p>
              <strong>Petugas:</strong> {selectedTransaction.petugas}
            </p>
            <p>
              <strong>Total:</strong> Rp
              {selectedTransaction.total.toLocaleString("id-ID")}
            </p>
            <p className="mt-2">
              <strong>Barang Dibeli:</strong>
            </p>
            <ul>
              {selectedTransaction.items.map((item, index) => (
                <li key={index}>
                  {item.name} (x{item.qty}) - Rp
                  {item.price.toLocaleString("id-ID")}
                </li>
              ))}
            </ul>
            <div className="mt-4 flex justify-between">
              <button
                onClick={handlePrint}
                className="bg-green-500 text-white px-3 py-1 rounded"
              >
                Print
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Hapus
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

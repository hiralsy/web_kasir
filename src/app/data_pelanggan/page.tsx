"use client";

import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import { useState } from "react";

export default function DataPelanggan() {
  const [pelanggan, setPelanggan] = useState([
    { id: 1, nama: "Budi Santoso", alamat: "Jakarta", noHp: "081234567890" },
    { id: 2, nama: "Siti Aminah", alamat: "Bandung", noHp: "089876543210" },
  ]);

  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState<"add" | "edit" | "delete" | null>(
    null
  );
  const [selectedPelanggan, setSelectedPelanggan] = useState<{
    id: number;
    nama: string;
    alamat: string;
    noHp: string;
  } | null>(null);

  const openModal = (type: "add" | "edit" | "delete", pelanggan?: any) => {
    setModalType(type);
    setSelectedPelanggan(
      pelanggan || { id: 0, nama: "", alamat: "", noHp: "" }
    );
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setModalType(null);
    setSelectedPelanggan(null);
  };

  const handleSave = () => {
    if (modalType === "add" && selectedPelanggan) {
      setPelanggan([
        ...pelanggan,
        { ...selectedPelanggan, id: pelanggan.length + 1 },
      ]);
    } else if (modalType === "edit" && selectedPelanggan) {
      setPelanggan(
        pelanggan.map((p) =>
          p.id === selectedPelanggan.id ? selectedPelanggan : p
        )
      );
    }
    closeModal();
  };

  const handleDelete = () => {
    if (selectedPelanggan) {
      setPelanggan(pelanggan.filter((p) => p.id !== selectedPelanggan.id));
    }
    closeModal();
  };

  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      {/* Sidebar */}
      <Sidebar />

      {/* Wrapper untuk Navbar & Konten */}
      <div className="flex-1">
        {/* Navbar */}
        <Navbar />

        {/* Konten utama */}
        <div className="mt-[92px] h-[calc(100%-92px)] p-3 bg-white shadow-md rounded-md">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium text-[#929291]">
              Data Pelanggan
            </h1>
            <button
              onClick={() => openModal("add")}
              className="bg-[#3BB143] text-white px-4 py-2 rounded-md hover:bg-gray-300"
            >
              Tambah Pelanggan
            </button>
          </div>

          {/* Input Pencarian */}
          <input
            type="text"
            placeholder="Cari pelanggan..."
            className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-[#C14600] outline-none mb-4"
          />

          {/* Tabel Pelanggan */}
          <div className="overflow-y-auto max-h-[500px] custom-scrollbar">
            <table className="w-full border-collapse border border-gray-200 text-[16px]">
              <thead className="bg-[#AAB396] text-[#4A4947] sticky top-0 z-1000">
                <tr className="">
                  <th className="border p-2">ID</th>
                  <th className="border p-2">Nama Pelanggan</th>
                  <th className="border p-2">Alamat</th>
                  <th className="border p-2">No HP</th>
                  <th className="border p-2">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {pelanggan.map((p) => (
                  <tr key={p.id} className="text-center">
                    <td className="w-[5%] border p-2">{p.id}</td>
                    <td className="w-[25%] border p-2">{p.nama}</td>
                    <td className="border p-2">{p.alamat}</td>
                    <td className="w-[20%] border p-2">{p.noHp}</td>
                    <td className="w-[15%] border p-2">
                      <button
                        onClick={() => openModal("edit", p)}
                        className="w-[80px] bg-[#FF9D23] text-white px-3 py-1 rounded-lg mr-2 hover:bg-gray-300"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => openModal("delete", p)}
                        className="w-[80px] bg-[#D30000] text-white px-3 py-1 rounded-lg hover:bg-gray-300"
                      >
                        Hapus
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && selectedPelanggan && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-5 rounded-lg shadow-lg relative w-[400px] z-9999">
            {/* Tambah & Edit Pelanggan */}
            {modalType === "add" || modalType === "edit" ? (
              <>
                <h2 className="text-lg font-bold mb-3">
                  {modalType === "add" ? "Tambah Pelanggan" : "Edit Pelanggan"}
                </h2>
                <input
                  type="text"
                  placeholder="Nama Pelanggan"
                  value={selectedPelanggan.nama}
                  onChange={(e) =>
                    setSelectedPelanggan({
                      ...selectedPelanggan,
                      nama: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="Alamat"
                  value={selectedPelanggan.alamat}
                  onChange={(e) =>
                    setSelectedPelanggan({
                      ...selectedPelanggan,
                      alamat: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded mb-2"
                />
                <input
                  type="text"
                  placeholder="No HP"
                  value={selectedPelanggan.noHp}
                  onChange={(e) =>
                    setSelectedPelanggan({
                      ...selectedPelanggan,
                      noHp: e.target.value,
                    })
                  }
                  className="w-full p-2 border rounded mb-2"
                />

                <div className="mt-4 flex justify-between">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleSave}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Simpan
                  </button>
                </div>
              </>
            ) : (
              // Hapus Pelanggan
              <>
                <h2 className="text-lg font-bold mb-3">Hapus Pelanggan</h2>
                <p>
                  Apakah Anda yakin ingin menghapus {selectedPelanggan.nama}?
                </p>
                <div className="mt-4 flex justify-between">
                  <button
                    onClick={closeModal}
                    className="bg-gray-500 text-white px-3 py-1 rounded"
                  >
                    Batal
                  </button>
                  <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Hapus
                  </button>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

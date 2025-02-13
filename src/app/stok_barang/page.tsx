"use client";

import { useState } from "react";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";

type Product = {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
};

export default function StokBarang() {
  const [search, setSearch] = useState("");

  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Croissant Butter",
      price: 10000,
      stock: 10,
      image: "/croissant-butter.jpg",
    },
    {
      id: 2,
      name: "Slice Cake Chocolate",
      price: 8000,
      stock: 5,
      image: "/slice-cake-chocolate.jpg",
    },
    {
      id: 3,
      name: "Roti Tawar",
      price: 15000,
      stock: 2,
      image: "/roti-tawar.jpg",
    },
  ]);

  // State untuk barang yang sedang diedit
  const [editProduct, setEditProduct] = useState<null | any>(null);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Fungsi untuk menangani edit barang
  const handleEdit = (item: Product) => {
    setEditProduct(item); // Set produk yang sedang diedit
    setPreviewImage(item.image); // Set preview gambar
  };

  // State untuk konfirmasi hapus barang
  const [deleteProduct, setDeleteProduct] = useState<null | any>(null);

  // Fungsi hapus barang
  const handleDelete = () => {
    if (!deleteProduct) return;

    setProducts((prevProducts) =>
      prevProducts.filter((item: Product) => item.id !== deleteProduct.id)
    );
    setDeleteProduct(null);
  };

  // Fungsi edit input
  const handleEditChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    if (!editProduct) return;
    setEditProduct({ ...editProduct, [field]: e.target.value });
  };

  // Fungsi untuk menangani upload file gambar
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file);
      const imageUrl = URL.createObjectURL(file);
      setPreviewImage(imageUrl);
    }
  };

  // Fungsi simpan hasil edit barang
  const handleSaveEdit = () => {
    setProducts((prevProducts) =>
      prevProducts.map((item) =>
        item.id === editProduct.id
          ? {
              ...item,
              name: editProduct.name,
              price: Number(editProduct.price),
              stock: Number(editProduct.stock),
              image: previewImage || item.image, // Simpan preview atau gambar lama
            }
          : item
      )
    );
    setEditProduct(null);
    setPreviewImage(null);
    setSelectedFile(null);
  };

  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="mt-[92px] h-[calc(100%-92px)] shadow-md rounded-md p-3">
          {/* Input Cari  dan Tambah Barang */}
          <div className="flex justify-between items-center my-4">
            <input
              type="text"
              placeholder="Cari nama produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-[60%] p-2 border-2 border-gray-400 rounded-lg focus:border-[#C14600] outline-none"
            />
            <button className="px-4 py-2 bg-[#3BB146] text-white rounded-lg hover:bg-gray-300">
              Tambahkan Barang
            </button>
          </div>

          {/* Tabel Stok Barang */}
          <div className="overflow-y-auto max-h-[500px] custom-scrollbar">
            <table className="w-full border border-gray-300">
              {/* Bagian Thead Fixed */}
              <thead className="bg-[#AAB396] text-white sticky top-0 z-1000">
                <tr className="text-left">
                  <th className="p-1 border text-center">ID</th>
                  <th className="p-1 border text-center">Produk</th>
                  <th className="p-1 border text-center">Harga</th>
                  <th className="p-1 border text-center">Stok</th>
                  <th className="p-1 border text-center">Aksi</th>
                </tr>
              </thead>
              {/* Bagian Tbody Scroll */}
              <tbody className="">
                {products.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="text-center text-gray-500 italic p-3"
                    >
                      Tidak ada stok barang
                    </td>
                  </tr>
                ) : (
                  products
                    .filter((item) =>
                      item.name.toLowerCase().includes(search.toLowerCase())
                    )
                    .map((item) => (
                      <tr key={item.id}>
                        <td className="p-1 border text-center">{item.id}</td>
                        <td className="p-1 border-b flex items-center gap-2">
                          <Image
                            src={item.image}
                            alt={item.name}
                            width={50}
                            height={50}
                            className="w-[64px] h-[64px] rounded-md object-cover"
                          />
                          <p className="line-clamp-1">{item.name}</p>
                        </td>
                        <td className="px-2 py-1 border">
                          Rp{item.price.toLocaleString("id-ID")}
                        </td>
                        <td className="p-1 border text-center">{item.stock}</td>
                        <td className="p-1 border text-center">
                          <button
                            onClick={() => handleEdit(item)}
                            className="bg-[#C14600] text-white px-3 py-1 rounded-lg mr-2"
                          >
                            Edit
                          </button>

                          <button
                            onClick={() => setDeleteProduct(item)}
                            className="bg-[#D30000] text-white px-3 py-1 rounded-lg"
                          >
                            Hapus
                          </button>
                        </td>
                      </tr>
                    ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Modal Edit Barang */}
      {editProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] z-9999">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Edit Barang
            </h2>

            {/* Preview Gambar */}
            {previewImage && (
              <Image
                src={previewImage}
                alt="Preview"
                width={100}
                height={100}
                className="w-[100px] h-[100px] mb-3 rounded-md object-cover"
              />
            )}

            {/* Input Upload Gambar */}
            <input
              type="file"
              accept="image/*"
              className="mb-3"
              onChange={handleImageUpload}
            />

            <input
              type="text"
              value={editProduct.name}
              onChange={(e) => handleEditChange(e, "name")}
              className="w-full p-2 border rounded-lg mb-3"
              placeholder="Nama Produk"
            />
            <input
              type="number"
              value={editProduct.price}
              onChange={(e) => handleEditChange(e, "price")}
              className="w-full p-2 border rounded-lg mb-3"
              placeholder="Harga"
            />
            <input
              type="number"
              value={editProduct.stock}
              onChange={(e) => handleEditChange(e, "stock")}
              className="w-full p-2 border rounded-lg mb-3"
              placeholder="Stok"
            />
            <div className="flex justify-between">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setEditProduct(null)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-green-500 text-white rounded-lg"
                onClick={handleSaveEdit}
              >
                Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Modal Konfirmasi Hapus */}
      {deleteProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] z-[9999]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Hapus Barang
            </h2>
            <p className="text-gray-600">
              Apakah Anda yakin ingin menghapus{" "}
              <span className="font-semibold">{deleteProduct.name}</span>?
            </p>
            <div className="flex justify-between mt-4">
              <button
                className="px-4 py-2 bg-gray-500 text-white rounded-lg"
                onClick={() => setDeleteProduct(null)}
              >
                Batal
              </button>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded-lg"
                onClick={handleDelete}
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

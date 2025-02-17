"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import Image from "next/image";

type Product = {
  ProdukID: number;
  NamaProduk: string;
  Harga: number;
  Stok: number;
  Gambar: string;
};

export default function StokProduk() {
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [newProduct, setNewProduct] = useState({
    NamaProduk: "",
    Harga: "",
    Stok: "",
    Gambar: null as File | null,
  });
  const [editProduct, setEditProduct] = useState<Product | null>(null);
  const [deleteProduct, setDeleteProduct] = useState<Product | null>(null);
  const [showModal, setShowModal] = useState(false);
  const [previewImage, setPreviewImage] = useState<string>("");

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/api/produk");
      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("NamaProduk", newProduct.NamaProduk);
    formData.append("Harga", newProduct.Harga.replace(/\D/g, "")); // Hapus titik dan koma
    formData.append("Stok", newProduct.Stok);
    if (newProduct.Gambar) {
      formData.append("Gambar", newProduct.Gambar);
    }

    try {
      await axios.post("/api/produk", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      fetchProducts();
      setShowModal(false);
    } catch (error) {
      console.error("Error uploading product:", error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "Harga") {
      // Hapus semua karakter non-digit
      let rawValue = value.replace(/\D/g, "");

      // Format angka dengan titik sebagai pemisah ribuan
      let formattedValue = new Intl.NumberFormat("id-ID").format(
        parseInt(rawValue) || 0
      );

      setNewProduct((prev) => ({
        ...prev,
        [name]: formattedValue, // Simpan nilai yang diformat untuk tampilan
      }));
    } else {
      setNewProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Saat user memilih file gambar baru
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;

    const file = e.target.files[0];
    setNewProduct((prev) => ({ ...prev, Gambar: file }));
    setPreviewImage(URL.createObjectURL(file));
  };

  // Saat klik edit, pastikan newProduct berisi data produk yang dipilih
  const handleEdit = (item: Product) => {
    setEditProduct(item);
    setNewProduct({
      NamaProduk: item.NamaProduk,
      Harga: item.Harga.toString().replace(/\D/g, ""), // Pastikan hanya angka
      Stok: item.Stok.toString(),
      Gambar: null, // Kosongkan dulu, user bisa memilih gambar baru
    });
    setPreviewImage(item.Gambar); // Tetapkan gambar lama untuk preview
    setShowModal(true);
  };

  // Fungsi update produk
  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editProduct) return;

    const formData = new FormData();
    formData.append("NamaProduk", newProduct.NamaProduk);
    formData.append("Harga", newProduct.Harga.replace(/\D/g, "")); // Hanya angka
    formData.append("Stok", newProduct.Stok);

    if (newProduct.Gambar) {
      formData.append("Gambar", newProduct.Gambar); // Jika ada gambar baru, upload
    }

    try {
      const response = await axios.put(
        `/api/produk/${editProduct.ProdukID}`,
        formData,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      if (response.status === 200) {
        fetchProducts(); // Refresh data
        setShowModal(false);
        setEditProduct(null);
        setPreviewImage("");
      } else {
        console.error("Gagal mengupdate produk:", response);
      }
    } catch (error) {
      console.error("Error updating product:", error);
    }
  };

  const handleDelete = async () => {
    if (deleteProduct) {
      try {
        const response = await axios.delete(
          `/api/produk?id=${deleteProduct.ProdukID}`
        );
        if (response.status === 200) {
          setProducts(
            products.filter(
              (product) => product.ProdukID !== deleteProduct.ProdukID
            )
          );
          alert("Produk berhasil dihapus!");
        } else {
          alert("Gagal menghapus produk");
        }
      } catch (error) {
        console.error("Error deleting product:", error);
        alert("Terjadi kesalahan saat menghapus produk");
      } finally {
        setDeleteProduct(null);
      }
    }
  };

  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      <Sidebar />
      <div className="flex-1">
        <Navbar />
        <div className="mt-[92px] h-[calc(100%-92px)] shadow-md rounded-md p-3">
          <div className="flex justify-between items-center mb-4">
            <h1 className="text-xl font-medium text-[#929291]">Stok Produk</h1>
            <button
              className="px-4 py-2 bg-[#3BB146] text-white rounded-lg"
              onClick={() => setShowModal(true)}
            >
              Tambahkan Produk
            </button>
          </div>

          <div className="flex justify-between items-center my-4">
            <input
              type="text"
              placeholder="Cari nama produk..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 border-2 border-gray-300 rounded-lg focus:border-[#C14600] outline-none"
            />
          </div>

          <div className="overflow-x-auto max-h-[500px] custom-scrollbar">
            <table className="w-full border border-gray-300 shadow-md rounded-lg">
              <thead className="bg-[#AAB396] text-[#4A4947]">
                <tr className="text-center">
                  <th className="p-1 border">ID</th>
                  <th className="p-1 border">Produk</th>
                  <th className="p-1 border">Harga</th>
                  <th className="p-1 border">Stok</th>
                  <th className="p-1 border">Aksi</th>
                </tr>
              </thead>
              <tbody>
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
                      item.NamaProduk.toLowerCase().includes(
                        search.toLowerCase()
                      )
                    )
                    .map((item) => (
                      <tr key={item.ProdukID} className="w-[100%]">
                        <td className="w-[5%] p-1 border text-center">
                          {item.ProdukID}
                        </td>
                        <td className="w-full p-1 flex items-center border-b gap-2">
                          <Image
                            src={item.Gambar}
                            alt={item.NamaProduk}
                            width={50}
                            height={50}
                            className="bg-pink-400 rounded-md w-[64px] h-[64px] object-cover"
                          />
                          <p className="font-medium line-clamp-1">
                            {item.NamaProduk}
                          </p>
                        </td>
                        <td className="w-[15%] px-2 py-1 border">
                          {new Intl.NumberFormat("id-ID", {
                            style: "currency",
                            currency: "IDR",
                            minimumFractionDigits: 2, // Tanpa desimal
                          }).format(item.Harga)}
                        </td>
                        <td className="w-[10%] p-1 border text-center">
                          {item.Stok}
                        </td>
                        <td className="w-[15%] p-1 border text-center">
                          <button
                            onClick={() => handleEdit(item)}
                            className="w-[80px] bg-[#FF9D23] text-white px-3 py-1 rounded-lg mr-2 hover:bg-gray-300"
                          >
                            Edit
                          </button>
                          <button
                            onClick={() => setDeleteProduct(item)}
                            className="w-[80px] bg-[#D30000] text-white px-3 py-1 rounded-lg hover:bg-gray-300"
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

          {showModal && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] z-[9999]">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tambah Produk
                </h2>

                <p className="text-[14px] text-gray-400">Nama Produk</p>
                <input
                  type="text"
                  name="NamaProduk"
                  placeholder="Nama Produk"
                  className="w-full p-2 border mb-2"
                  value={newProduct.NamaProduk}
                  onChange={handleChange}
                />

                <p className="text-[14px] text-gray-400">Harga Produk</p>
                <input
                  type="text"
                  name="Harga"
                  placeholder="Harga"
                  className="w-full p-2 border mb-2"
                  value={newProduct.Harga}
                  onChange={handleChange}
                />

                <p className="text-[14px] text-gray-400">Stok Produk</p>
                <input
                  type="number"
                  name="Stok"
                  placeholder="Stok"
                  className="w-full p-2 border mb-2"
                  value={newProduct.Stok}
                  onChange={handleChange}
                />

                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="w-full aspect-[16/9] mb-3 rounded-md object-contain"
                  />
                )}
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={editProduct ? handleUpdate : handleSubmit}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}

          {showModal && !editProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] z-[9999]">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Tambah Produk
                </h2>
                {/* Form fields */}
                <p className="text-[14px] text-gray-400">Nama Produk</p>
                <input
                  type="text"
                  name="NamaProduk"
                  placeholder="Nama Produk"
                  className="w-full p-2 border mb-2"
                  value={newProduct.NamaProduk}
                  onChange={handleChange}
                />
                <p className="text-[14px] text-gray-400">Harga Produk</p>
                <input
                  type="text"
                  name="Harga"
                  placeholder="Harga"
                  className="w-full p-2 border mb-2"
                  value={newProduct.Harga}
                  onChange={handleChange}
                />
                <p className="text-[14px] text-gray-400">Stok Produk</p>
                <input
                  type="number"
                  name="Stok"
                  placeholder="Stok"
                  className="w-full p-2 border mb-2"
                  value={newProduct.Stok}
                  onChange={handleChange}
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                />
                {previewImage && (
                  <Image
                    src={previewImage}
                    alt="Preview"
                    width={100}
                    height={100}
                    className="w-full aspect-[16/9] mb-3 rounded-md object-contain"
                  />
                )}
                <div className="flex justify-between mt-4">
                  <button
                    className="bg-gray-500 text-white px-4 py-2 rounded"
                    onClick={() => setShowModal(false)}
                  >
                    Batal
                  </button>
                  <button
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    onClick={editProduct ? handleUpdate : handleSubmit}
                  >
                    Simpan
                  </button>
                </div>
              </div>
            </div>
          )}

          {deleteProduct && (
            <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="bg-white p-6 rounded-lg shadow-lg w-[350px] z-[9999]">
                <h2 className="text-xl font-bold text-gray-800 mb-4">
                  Hapus Produk
                </h2>
                <p className="text-gray-600">
                  Apakah Anda yakin ingin menghapus{" "}
                  <span className="font-semibold">
                    {deleteProduct.NamaProduk}
                  </span>
                  ?
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
      </div>
    </div>
  );
}

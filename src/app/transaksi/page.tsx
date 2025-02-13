"use client";

import { useState } from "react";
import { useRouter } from "next/navigation"; /*buat nge navigasi transaksi bayar*/
import Navbar from "@/components/navbar";
import Image from "next/image";
import Sidebar from "@/components/sidebar";

export default function Transaksi() {
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; qty: number }[]
  >([]);
  const [search, setSearch] = useState("");
  const [showConfirm, setShowConfirm] = useState(false);
  const [showEmptyCartAlert, setShowEmptyCartAlert] = useState(false);
  const router = useRouter();
  const [namaPelanggan, setNamaPelanggan] = useState("");
  const [nominalUang, setNominalUang] = useState("");
  const [kembalian, setKembalian] = useState(0);
  const [struk, setStruk] = useState<{
    kodeTransaksi: string;
    namaPelanggan: string;
    items: { id: number; name: string; price: number; qty: number }[];
    totalHarga: number;
    nominalUang: number;
    kembalian: number;
  } | null>(null);

  /*produk*/
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Croissant Butter",
      price: 10000,
      image: "/croissant-butter.jpg",
      stock: 10,
    },
    {
      id: 2,
      name: "Slice Cake Chocolate",
      price: 8000,
      image: "/slice-cake-chocolate.jpg",
      stock: 5,
    },
    {
      id: 3,
      name: "Roti Tawar",
      price: 15000,
      image: "/roti-tawar.jpg",
      stock: 2,
    },
    {
      id: 4,
      name: "Slice Cake Strawberry",
      price: 12000,
      image: "/slice-cake-strawberry.jpg",
      stock: 10,
    },
  ]);

  /*nambah pesanan*/
  const addToCart = (product: {
    id: number;
    name: string;
    price: number;
    image: string;
    stock: number;
  }) => {
    if (product.stock === 0) return;

    setCart((prevCart) => {
      const itemExists = prevCart.find((item) => item.id === product.id);

      if (itemExists) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...product, qty: 1 }];
    });

    setProducts((prevProducts) =>
      prevProducts.map((p) =>
        p.id === product.id ? { ...p, stock: p.stock - 1 } : p
      )
    );
  };

  const updateQty = (id: number, newQty: number) => {
    setCart((prevCart) => {
      return prevCart
        .map((item) => {
          if (item.id === id) {
            const diff = newQty - item.qty; // Hitung perubahan jumlah
            return { ...item, qty: newQty };
          }
          return item;
        })
        .filter((item) => item.qty > 0); // Hapus item jika jumlahnya 0
    });

    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        if (cartItem && cartItem.id === id) {
          return { ...product, stock: product.stock - (newQty - cartItem.qty) };
        }
        return product;
      })
    );
  };

  const handleCancelClick = () => {
    if (cart.length === 0) {
      setShowEmptyCartAlert(true);
    } else {
      setShowConfirm(true);
    }
  };

  const confirmCancel = () => {
    setProducts((prevProducts) => {
      return prevProducts.map((product) => {
        const cartItem = cart.find((item) => item.id === product.id);
        return cartItem
          ? { ...product, stock: product.stock + cartItem.qty }
          : product;
      });
    });
    setCart([]);
    setShowConfirm(false);
  };

  const handleBayar = () => {
    if (cart.length === 0) {
      setShowEmptyCartAlert(true);
      return;
    }

    if (parseInt(nominalUang) < totalHarga) {
      alert("Nominal uang tidak cukup!");
      return;
    }

    // Simpan data transaksi ke struk
    setStruk({
      kodeTransaksi: `TRX-${Math.floor(100000 + Math.random() * 900000)}`,
      namaPelanggan: namaPelanggan || "Pelanggan Umum",
      items: cart,
      totalHarga,
      nominalUang: parseInt(nominalUang),
      kembalian,
    });

    // Reset pesanan setelah pembayaran
    setCart([]);
    setNominalUang("");
    setKembalian(0);
    setNamaPelanggan("");
    localStorage.removeItem("cart");
  };

  const handleNominalUangChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uang = parseInt(e.target.value) || 0;
    setNominalUang(e.target.value);
    setKembalian(uang - totalHarga);
  };

  const totalHarga = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );

  return (
    <div className="w-screen h-screen bg-white p-3 flex gap-x-3">
      <Sidebar />

      <div className="flex-1 h-full">
        <Navbar />

        <div className="mt-[92px] h-[calc(100%-92px)] flex shadow-md rounded-md gap-x-3 p-3">
          <div className="w-[60%] p-1 rounded-md">
            <input
              type="text"
              placeholder="Cari barang..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full p-2 mb-4 border-2 border-gray-400 rounded-lg focus:border-[#C14600] outline-none"
            />
            <div className="grid grid-cols-2 gap-4 max-h-[500px] custom-scrollbar overflow-y-auto">
              {products
                .filter((product) =>
                  product.name.toLowerCase().includes(search.toLowerCase())
                )
                .map((product) => (
                  <button
                    key={product.id}
                    onClick={() => addToCart(product)}
                    disabled={product.stock === 0}
                    className={`flex items-center p-3 border-2 rounded-lg gap-3 w-full ${
                      product.stock === 0
                        ? "bg-gray-300 border-gray-400 text-gray-500 cursor-not-allowed"
                        : "bg-white text-[#C14600] border-[#674636] hover:bg-[#C14600]/25"
                    }`}
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      unoptimized
                      className="w-[80px] h-[80px] object-cover rounded-md"
                    />
                    <div className="flex flex-col text-left space-y-1">
                      <span className="font-semibold text-[#674636] line-clamp-2">
                        {product.name}
                      </span>
                      <span className="text-sm text-[#C14600]">
                        Rp{product.price.toLocaleString("id-ID")}
                      </span>
                      <span
                        className={`text-xs ${
                          product.stock === 0 ? "text-red-500" : "text-gray-600"
                        }`}
                      >
                        Stok: {product.stock === 0 ? "Habis" : product.stock}
                      </span>
                    </div>
                  </button>
                ))}
            </div>
          </div>
          <div className="w-[40%] h-[100%] space-y-2 ">
            <div className="h-[40%] bg-[#FFF8E8] border-2 border-[#674636] rounded-md p-3">
              <h2 className="text-[28px] mb-3 border-b-2 border-[#674636] text-[#674636] font-semibold">
                Pesanan
              </h2>
              <ul className="space-y-2 h-[80%] overflow-y-auto custom-scrollbar">
                {cart.length === 0 && (
                  <li className="text-gray-500 italic text-center">
                    Belum ada pesanan
                  </li>
                )}
                {cart.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center border-b pb-2"
                  >
                    <span className="font-medium w-40">{item.name}</span>

                    {/* Container untuk tombol - angka + */}
                    <div className="flex items-center justify-center gap-2 w-28">
                      <button
                        className="w-8 h-8 flex items-center justify-center bg-red-500 text-white rounded-md"
                        onClick={() => updateQty(item.id, item.qty - 1)}
                      >
                        −
                      </button>
                      <span className="font-semibold w-6 text-center">
                        {item.qty}
                      </span>
                      <button
                        className={`w-8 h-8 flex items-center justify-center rounded-md text-white ${
                          products.find((p) => p.id === item.id)?.stock === 0
                            ? "bg-gray-400 cursor-not-allowed"
                            : "bg-green-500"
                        }`}
                        onClick={() => updateQty(item.id, item.qty + 1)}
                        disabled={
                          products.find((p) => p.id === item.id)?.stock === 0
                        }
                      >
                        +
                      </button>
                    </div>

                    <span className="font-semibold w-24 text-right">
                      Rp{(item.qty * item.price).toLocaleString("id-ID")}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* pembayaran */}
            <div className="h-[60%] p-3 rounded-md border-2 border-[#674636] space-y-3">
              {/* Total Harga */}
              <div className="pt-2 flex justify-between font-bold text-lg">
                <span>Total:</span>
                <span>Rp{totalHarga.toLocaleString("id-ID")}</span>
              </div>

              {/* Input Nama Pelanggan */}
              <div className="">
                <label className="block text-gray-700 text-[14px] font-semibold mb-1">
                  Nama Pelanggan
                </label>
                <input
                  type="text"
                  className="w-full p-2 border rounded-lg text-[14px] "
                  placeholder="Masukkan nama pelanggan (opsional)"
                  value={namaPelanggan}
                  onChange={(e) => setNamaPelanggan(e.target.value)}
                />
              </div>

              {/* Input Nominal Bayar */}
              <div className="">
                <label className="block text-gray-700 text-[14px] font-semibold mb-1">
                  Nominal Bayar
                </label>
                <input
                  type="number"
                  className="w-full p-2 text-[14px] border rounded-lg"
                  placeholder="Masukkan nominal uang"
                  value={nominalUang}
                  onChange={handleNominalUangChange}
                />
              </div>

              {/* Kembalian */}
              <div className="">
                <label className="block text-gray-700 text-[14px] font-semibold mb-1">
                  Kembalian
                </label>
                <input
                  type="text"
                  className="w-full p-2 text-[14px] border rounded-lg bg-gray-200"
                  value={`Rp${kembalian.toLocaleString("id-ID")}`}
                  readOnly
                />
              </div>

              {/* Tombol Batalkan Pesanan & Bayar */}
              <div className="w-full flex space-x-3 justify-between">
                {/* Pop-up Konfirmasi Batalkan Pesanan */}
                {showConfirm && (
                  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[300px] text-center">
                      <h2 className="text-lg font-semibold mb-4">
                        Batalkan Pesanan?
                      </h2>
                      <p className="text-sm text-gray-600 mb-4">
                        Semua pesanan akan dihapus. Anda yakin?
                      </p>
                      <div className="flex justify-between">
                        <button
                          className="px-4 py-2 bg-gray-400 text-white rounded-lg"
                          onClick={() => setShowConfirm(false)}
                        >
                          Tidak
                        </button>
                        <button
                          className="px-4 py-2 bg-red-500 text-white rounded-lg"
                          onClick={confirmCancel}
                        >
                          Ya, Batalkan
                        </button>
                      </div>
                    </div>
                  </div>
                )}

                <button
                  className="w-[50%] px-4 py-2 bg-[#D30000] text-white rounded-lg"
                  onClick={handleCancelClick}
                >
                  Batalkan Pesanan
                </button>
                <button
                  className={`w-[50%] px-4 py-2 text-white rounded-lg ${
                    cart.length === 0 || parseInt(nominalUang) < totalHarga
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-green-500"
                  }`}
                  onClick={handleBayar}
                  disabled={
                    cart.length === 0 || parseInt(nominalUang) < totalHarga
                  }
                >
                  Bayar
                </button>
                {/* Struk Pembayaran */}
                {struk && (
                  <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
                      <h2 className="text-xl font-bold text-gray-800 mb-4">
                        Struk Pembayaran
                      </h2>
                      <p>
                        Kode Transaksi:{" "}
                        <span className="font-semibold">
                          {struk.kodeTransaksi}
                        </span>
                      </p>
                      <p>
                        Nama Pelanggan:{" "}
                        <span className="font-semibold">
                          {struk.namaPelanggan}
                        </span>
                      </p>
                      <ul className="mt-2 border-t pt-2">
                        {struk.items.map((item) => (
                          <li key={item.id} className="flex justify-between">
                            <span>
                              {item.name} (x{item.qty})
                            </span>
                            <span>
                              Rp
                              {(item.qty * item.price).toLocaleString("id-ID")}
                            </span>
                          </li>
                        ))}
                      </ul>
                      <p className="mt-2">
                        Total:{" "}
                        <span className="font-semibold">
                          Rp{struk.totalHarga.toLocaleString("id-ID")}
                        </span>
                      </p>
                      <p>
                        Nominal Uang: Rp
                        {struk.nominalUang.toLocaleString("id-ID")}
                      </p>
                      <p>
                        Kembalian: Rp{struk.kembalian.toLocaleString("id-ID")}
                      </p>
                      <button
                        onClick={() => setStruk(null)}
                        className="mt-4 w-full bg-red-500 text-white py-2 rounded-lg"
                      >
                        Tutup
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

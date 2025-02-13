"use client";

import { useState, useEffect } from "react";

export default function TransaksiBayar() {
  const [cart, setCart] = useState<
    { id: number; name: string; price: number; qty: number }[]
  >([]);
  const totalHarga = cart.reduce(
    (total, item) => total + item.price * item.qty,
    0
  );
  const [kodeTransaksi, setKodeTransaksi] = useState("");
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

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }

    // Generate kode transaksi (6-digit random number)
    setKodeTransaksi(`TRX-${Math.floor(100000 + Math.random() * 900000)}`);
  }, []);

  // Fungsi untuk menghapus semua item dalam keranjang
  const handleBatalkanPesanan = () => {
    setCart([]); // Kosongkan state cart
    localStorage.removeItem("cart"); // Hapus dari localStorage
  };

  // Hitung kembalian secara otomatis
  const handleNominalUangChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uang = parseInt(e.target.value) || 0;
    setNominalUang(e.target.value);
    setKembalian(uang - totalHarga);
  };

  // Fungsi untuk menampilkan struk pembayaran
  const handleBayar = () => {
    if (parseInt(nominalUang) < totalHarga) {
      alert("Nominal uang tidak cukup!");
      return;
    }

    setStruk({
      kodeTransaksi,
      namaPelanggan: namaPelanggan || "Pelanggan Umum",
      items: cart,
      totalHarga,
      nominalUang: parseInt(nominalUang),
      kembalian,
    });

    // Hapus pesanan setelah pembayaran
    setCart([]);
    localStorage.removeItem("cart");
  };

  return (
    <div className="w-screen h-screen flex bg-gray-100 p-6 gap-6">
      {/* Ringkasan Pesanan */}
      <div className="w-[50%] h-full bg-white shadow-lg rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
          Pesanan
        </h2>

        {/* Kode Transaksi */}
        <p className="text-gray-600 mt-2 italic">
          Kode Transaksi: <span className="font-semibold">{kodeTransaksi}</span>
        </p>

        {cart.length === 0 ? (
          <p className="text-center text-gray-500 italic mt-4">
            Tidak ada pesanan
          </p>
        ) : (
          <ul className="mt-4 space-y-3">
            {cart.map((item) => (
              <li key={item.id} className="flex justify-between border-b pb-2">
                <span className="text-gray-700">
                  {item.name} (x{item.qty})
                </span>
                <span className="font-semibold text-gray-900">
                  Rp{(item.qty * item.price).toLocaleString("id-ID")}
                </span>
              </li>
            ))}
          </ul>
        )}

        {/* Total Harga */}
        <div className="mt-4 border-t pt-3 flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span>Rp{totalHarga.toLocaleString("id-ID")}</span>
        </div>

        {/* Tombol Batalkan Pesanan */}
        {cart.length > 0 && (
          <button
            onClick={handleBatalkanPesanan}
            className="mt-4 w-full bg-red-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-red-600 transition"
          >
            Batalkan Pesanan
          </button>
        )}
      </div>

      {/* Pilih Metode Pembayaran */}
      <div className="w-[50%] h-full bg-white shadow-lg rounded-lg p-6 border">
        <h2 className="text-2xl font-bold text-gray-800 border-b pb-3">
          Pembayaran
        </h2>

        {/* Input Nama Pelanggan */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Nama Pelanggan
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-2"
            placeholder="Masukkan nama pelanggan (opsional)"
            value={namaPelanggan}
            onChange={(e) => setNamaPelanggan(e.target.value)}
          />
        </div>

        {/* Total Bayar */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Total Bayar
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 bg-gray-200"
            value={`Rp${totalHarga.toLocaleString("id-ID")}`}
            readOnly
          />
        </div>

        {/* Nominal Uang */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Nominal Uang
          </label>
          <input
            type="number"
            className="w-full border rounded-lg p-2"
            placeholder="Masukkan nominal uang"
            value={nominalUang}
            onChange={handleNominalUangChange}
          />
        </div>

        {/* Kembalian */}
        <div className="mt-4">
          <label className="block text-gray-700 font-semibold mb-1">
            Kembalian
          </label>
          <input
            type="text"
            className="w-full border rounded-lg p-2 bg-gray-200"
            value={`Rp${kembalian.toLocaleString("id-ID")}`}
            readOnly
          />
        </div>

        {/* Tombol Konfirmasi Pembayaran */}
        <button
          onClick={handleBayar}
          className="mt-6 w-full bg-green-500 text-white py-3 rounded-lg text-lg font-semibold hover:bg-green-600 transition"
        >
          Bayar
        </button>
      </div>

      {/* Struk Pembayaran */}
      {struk && (
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-[400px]">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              Struk Pembayaran
            </h2>
            <p>
              Kode Transaksi:{" "}
              <span className="font-semibold">{struk.kodeTransaksi}</span>
            </p>
            <p>
              Nama Pelanggan:{" "}
              <span className="font-semibold">{struk.namaPelanggan}</span>
            </p>
            <ul className="mt-2">
              {struk.items.map((item) => (
                <li key={item.id} className="flex justify-between">
                  <span>
                    {item.name} (x{item.qty})
                  </span>
                  <span>
                    Rp{(item.qty * item.price).toLocaleString("id-ID")}
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
            <p>Nominal Uang: Rp{struk.nominalUang}</p>
            <p>Kembalian: Rp{struk.kembalian.toLocaleString("id-ID")}</p>
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
  );
}

import { NextApiRequest, NextApiResponse } from "next";
import fs from "fs";
import path from "path";

const transaksiFilePath = path.join(process.cwd(), "data", "transaksi.json");
const produkFilePath = path.join(process.cwd(), "data", "produk.json");

// Baca data transaksi dari file
const readData = (filePath: string) => {
  if (!fs.existsSync(filePath)) return [];
  const data = fs.readFileSync(filePath, "utf-8");
  return JSON.parse(data);
};

// Tulis data transaksi ke file
const writeData = (filePath: string, data: any) => {
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
};

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const transaksi = readData(transaksiFilePath);
      const produkData = readData(produkFilePath);
      
      const { namaPelanggan, items, totalHarga, nominalUang, kembalian } = req.body;
      const kodeTransaksi = Math.floor(100000 + Math.random() * 900000);

      // Update stok produk
      items.forEach((item: { id: number; qty: number }) => {
        const produkIndex = produkData.findIndex((p: { id: number }) => p.id === item.id);
        if (produkIndex !== -1) {
          produkData[produkIndex].stock -= item.qty;
        }
      });

      // Simpan transaksi baru
      const newTransaksi = {
        kodeTransaksi,
        tanggal: new Date().toISOString(),
        namaPelanggan: namaPelanggan || "Pelanggan Umum",
        items,
        totalHarga,
        nominalUang,
        kembalian,
      };

      transaksi.push(newTransaksi);
      writeData(transaksiFilePath, transaksi);
      writeData(produkFilePath, produkData); // Update stok di file produk

      return res.status(201).json({ success: true, transaksi: newTransaksi });
    } catch (error) {
      return res.status(500).json({ success: false, message: "Server error" });
    }
  } else if (req.method === "GET") {
    // Ambil semua transaksi
    const transaksi = readData(transaksiFilePath);
    return res.status(200).json({ success: true, transaksi });
  } else {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }
}

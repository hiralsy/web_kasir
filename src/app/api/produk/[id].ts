// pages/api/produk/[id].ts

import { NextResponse } from "next/server";
import { db } from "@/db";
import { produk } from "@/db/schema";
import { eq } from "drizzle-orm";
import path from "path";
import fs from "fs/promises";

export async function PUT(req: Request, { params }: { params: { id: string } }) {
    console.log("Request received for Product ID:", params.id); 
  try {
    // Ambil ProdukID dari params URL
    const ProdukID = Number(params.id); // Ambil id dari URL
    const formData = await req.formData();
    const NamaProduk = formData.get("NamaProduk") as string;
    const Harga = Number(formData.get("Harga"));
    const Stok = Number(formData.get("Stok"));
    const Gambar = formData.get("Gambar") as File | null;

    // Cek apakah data sudah lengkap
    if (!ProdukID || !NamaProduk || isNaN(Harga) || isNaN(Stok)) {
      return NextResponse.json({ error: "Data tidak lengkap" }, { status: 400 });
    }

    // Cek produk yang akan diupdate berdasarkan ProdukID
    const [existingProduct] = await db.select().from(produk).where(eq(produk.ProdukID, ProdukID));
    if (!existingProduct) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    let fileUrl = existingProduct.Gambar;

    // Jika ada gambar baru, proses dan simpan gambar baru
    if (Gambar) {
      const arrayBuffer = await Gambar.arrayBuffer();
      const buffer = new Uint8Array(arrayBuffer);
      const ext = path.extname(Gambar.name);
      const fileName = `${Date.now()}${ext}`;
      const filePath = path.join(process.cwd(), "public/uploads", fileName);
      await fs.writeFile(filePath, buffer);
      fileUrl = `/uploads/${fileName}`;

      // Hapus gambar lama jika ada
      if (existingProduct.Gambar) {
        const oldFileName = existingProduct.Gambar.split("/").pop();
        const oldFilePath = path.join(process.cwd(), "public/uploads", oldFileName!);
        await fs.unlink(oldFilePath).catch(() => null);
      }
    }

    // Update produk di database
    await db.update(produk)
      .set({ NamaProduk, Harga: Harga.toString(), Stok, Gambar: fileUrl })
      .where(eq(produk.ProdukID, ProdukID));

    return NextResponse.json({ message: "Produk berhasil diperbarui", url: fileUrl }, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ error: "Gagal memperbarui produk" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { db } from "@/db";
import { produk } from "@/db/schema";
import { eq } from "drizzle-orm";
import path from "path";
import fs from "fs/promises";
import Image from "next/image";

/**
 * 📌 GET: Ambil semua produk
 */
export async function GET() {
  try {
    const data = await db.select().from(produk);
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    console.error("Error fetching products:", error);
    return NextResponse.json({ error: "Gagal mengambil produk" }, { status: 500 });
  }
}

/**
 * 📌 POST: Tambah produk + Upload gambar
 */
export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const NamaProduk = formData.get("NamaProduk") as string;
    const Harga = Number(formData.get("Harga"));
    const Stok = Number(formData.get("Stok"));
    const Gambar = formData.get("Gambar") as File;

    if (!NamaProduk || !Harga || !Stok || !Gambar) {
      return NextResponse.json({ error: "Semua field harus diisi" }, { status: 400 });
    }

    // Validasi tipe MIME gambar
    const allowedTypes = ['image/jpeg', 'image/png', 'image/jpg'];
    if (!allowedTypes.includes(Gambar.type)) {
      return NextResponse.json({ error: "Format file tidak didukung" }, { status: 400 });
    }

    // Convert File ke Buffer
    const arrayBuffer = await Gambar.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer); // ✅ Convert ke Uint8Array

    // 🔄 Pastikan format .jpg/.jpeg sesuai
    const ext = path.extname(Gambar.name).toLowerCase() === ".jpg" ? ".jpeg" : path.extname(Gambar.name);

    // 📂 Tentukan folder penyimpanan di dalam public/uploads
    const uploadDir = path.join(process.cwd(), "public/uploads");
    await fs.mkdir(uploadDir, { recursive: true });  // Buat folder jika belum ada

    // 🏷️ Simpan file dengan nama unik
    const fileName = `${Date.now()}${ext}`;
    const filePath = path.join(uploadDir, fileName);

    // 💾 Simpan file
    try {
      await fs.writeFile(filePath, buffer);
    } catch (error) {
      console.error("Error saving image:", error);
      return NextResponse.json({ error: "Gagal menyimpan gambar" }, { status: 500 });
    }

    // 🌐 Path API untuk akses gambar
    const fileUrl = `/uploads/${fileName}`;

    // 🔄 Simpan data ke database
    await db.insert(produk).values({
      NamaProduk,
      Harga: Harga.toString(),
      Stok,
      Gambar: fileUrl,
    });

    return NextResponse.json({ message: "Produk berhasil ditambahkan", url: fileUrl }, { status: 201 });
  } catch (error) {
    console.error("Error uploading file:", error);
    return NextResponse.json({ error: "Gagal mengupload file" }, { status: 500 });
  }
}




/**
 * 📌 DELETE: Hapus produk + Gambar
 */
export async function DELETE(req: Request) {
  try {
    const { searchParams } = new URL(req.url);
    const ProdukID = searchParams.get("id");

    if (!ProdukID) {
      return NextResponse.json({ error: "ProdukID diperlukan untuk menghapus" }, { status: 400 });
    }

    // Cek produk yang akan dihapus
    const [existingProduct] = await db.select().from(produk).where(eq(produk.ProdukID, Number(ProdukID)));

    if (!existingProduct) {
      return NextResponse.json({ error: "Produk tidak ditemukan" }, { status: 404 });
    }

    // Hapus file gambar dari storage
    // Hapus gambar jika ada
if (existingProduct.Gambar) {
  const fileName = existingProduct.Gambar.split("/").pop(); // Ambil nama file dari URL
  const filePath = path.join(process.cwd(), "public/uploads", fileName!);  // Sesuaikan dengan lokasi baru
  try {
    await fs.unlink(filePath);  // Hapus file gambar
  } catch (error) {
    console.warn("Gagal menghapus gambar:", error);
  }
}


    // Hapus produk dari database
    await db.delete(produk).where(eq(produk.ProdukID, Number(ProdukID)));

    return NextResponse.json({ message: "Produk berhasil dihapus" }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: "Gagal menghapus produk" }, { status: 500 });
  }
}

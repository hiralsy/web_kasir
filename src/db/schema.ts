import { pgTable, serial, varchar, text, integer, decimal, date } from "drizzle-orm/pg-core";

// Tabel User
export const user = pgTable("user", {
  UserID: serial("UserID").primaryKey(),
  NamaLengkap: varchar("NamaLengkap", { length: 255 }).notNull(),
  Username: varchar("Username", { length: 50 }).unique().notNull(),
  Password: varchar("Password", { length: 50 }).notNull(),
  HakAkses: varchar("HakAkses", { length: 50 }).notNull(),
});

// Tabel Pelanggan
export const pelanggan = pgTable("pelanggan", {
  PelangganID: serial("PelangganID").primaryKey(),
  NamaPelanggan: varchar("NamaPelanggan", { length: 255 }).notNull(),
  Alamat: text("Alamat"),
  NomorTelepon: varchar("NomorTelepon", { length: 15 }),
});

// Tabel Produk
export const produk = pgTable("produk", {
  ProdukID: serial("ProdukID").primaryKey(),
  NamaProduk: varchar("NamaProduk", { length: 255 }).notNull(),
  Harga: decimal("Harga", { precision: 10, scale: 2 }).notNull(),
  Stok: integer("Stok").notNull(),
  Gambar: varchar("Gambar", { length: 255 }), // ➕ Tambahkan kolom gambar
});

// Tabel Penjualan
export const penjualan = pgTable("penjualan", {
  PenjualanID: serial("PenjualanID").primaryKey(),
  TanggalPenjualan: date("TanggalPenjualan").notNull(),
  TotalHarga: decimal("TotalHarga", { precision: 10, scale: 2 }).notNull(),
  PelangganID: integer("PelangganID").notNull().references(() => pelanggan.PelangganID, { onDelete: "cascade" }),
  UserID: integer("UserID").notNull().references(() => user.UserID, { onDelete: "cascade" }),
});

// Tabel Detail Penjualan
export const detailPenjualan = pgTable("detailpenjualan", {
  DetailID: serial("DetailID").primaryKey(),
  PenjualanID: integer("PenjualanID").notNull().references(() => penjualan.PenjualanID, { onDelete: "cascade" }),
  ProdukID: integer("ProdukID").notNull().references(() => produk.ProdukID, { onDelete: "cascade" }),
  JumlahProduk: integer("JumlahProduk").notNull(),
  Subtotal: decimal("Subtotal", { precision: 10, scale: 2 }).notNull(),
});

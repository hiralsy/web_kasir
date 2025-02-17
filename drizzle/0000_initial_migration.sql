CREATE TABLE "detailpenjualan" (
	"DetailID" serial PRIMARY KEY NOT NULL,
	"PenjualanID" integer NOT NULL,
	"ProdukID" integer NOT NULL,
	"JumlahProduk" integer NOT NULL,
	"Subtotal" numeric(10, 2) NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pelanggan" (
	"PelangganID" serial PRIMARY KEY NOT NULL,
	"NamaPelanggan" varchar(255) NOT NULL,
	"Alamat" text,
	"NomorTelepon" varchar(15)
);
--> statement-breakpoint
CREATE TABLE "penjualan" (
	"PenjualanID" serial PRIMARY KEY NOT NULL,
	"TanggalPenjualan" date NOT NULL,
	"TotalHarga" numeric(10, 2) NOT NULL,
	"PelangganID" integer NOT NULL,
	"UserID" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "produk" (
	"ProdukID" serial PRIMARY KEY NOT NULL,
	"NamaProduk" varchar(255) NOT NULL,
	"Harga" numeric(10, 2) NOT NULL,
	"Stok" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"UserID" serial PRIMARY KEY NOT NULL,
	"NamaLengkap" varchar(255) NOT NULL,
	"Username" varchar(50) NOT NULL,
	"Password" varchar(50) NOT NULL,
	"HakAkses" varchar(50) NOT NULL,
	CONSTRAINT "user_Username_unique" UNIQUE("Username")
);
--> statement-breakpoint
ALTER TABLE "detailpenjualan" ADD CONSTRAINT "detailpenjualan_PenjualanID_penjualan_PenjualanID_fk" FOREIGN KEY ("PenjualanID") REFERENCES "public"."penjualan"("PenjualanID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "detailpenjualan" ADD CONSTRAINT "detailpenjualan_ProdukID_produk_ProdukID_fk" FOREIGN KEY ("ProdukID") REFERENCES "public"."produk"("ProdukID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "penjualan" ADD CONSTRAINT "penjualan_PelangganID_pelanggan_PelangganID_fk" FOREIGN KEY ("PelangganID") REFERENCES "public"."pelanggan"("PelangganID") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "penjualan" ADD CONSTRAINT "penjualan_UserID_user_UserID_fk" FOREIGN KEY ("UserID") REFERENCES "public"."user"("UserID") ON DELETE cascade ON UPDATE no action;
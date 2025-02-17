import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema"; // ✅ Import semua schema

const connectionString = process.env.DATABASE_URL || "postgres://username:postgres@localhost:5433/kasir_db";

// ⛔ Fix: Tambahkan { max: 1 } untuk menghindari koneksi berlebih
const sql = postgres(connectionString, { max: 1 }); 

export const db = drizzle(sql, { schema }); // ✅ Pastikan schema dimasukkan

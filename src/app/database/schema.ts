import { sql } from 'drizzle-orm';
import { boolean, integer, pgTable, serial, timestamp, varchar } from 'drizzle-orm/pg-core';

export const token = pgTable('token', {         
    id_token: serial('id_token').primaryKey(),      
    token: varchar('token', {length: 255}),
    employee: integer('employee').references(() => employee.id_employee, {onUpdate: 'cascade', onDelete: 'cascade'}),
    created_at: timestamp('created_at', {withTimezone: true}).default(sql`now()`),
    expired_at: timestamp('expired_at', {withTimezone: true}).default(sql`now() + interval '1 day'`),
})

export const employee = pgTable('employee', {                   // bikin tabel employe 
    id_employee: serial('id_employee').primaryKey(),            // ini kolom kolom nya,
    type: varchar('type', {length: 50}),
    username: varchar('username', {length: 50}),
    password: varchar('password', {length: 255}),
    nama: varchar('nama', {length: 50}),
    phone: varchar('phone', {length: 20}),
    status: boolean('status').default(false),
})

export const transactions = pgTable('transactions', {
    id_transaksi: varchar('id_transaksi', {length: 50}).primaryKey(),
    employee: integer('employee').references(() => employee.id_employee, {onUpdate: 'cascade', onDelete: 'cascade'}),       // employee itu petugas, kalau tanda => itu kayak relasi kalo di sql mh
    tanggal: timestamp('tanggal', {withTimezone: true}).default(sql`now()`),                                               //  relasi itu yang kyak nyambung nyambungin tabel, ada ning tabel di sambung2in garisnya
    total: integer('total').default(0),
})

export const detail_transactions = pgTable('detail_transactions', {
    id_detail: serial('id_detail').primaryKey(),
    id_transaksi: varchar('id_transaksi', {length: 50}).references(() => transactions.id_transaksi),
    produk: varchar('produk', {length: 50}).references(() => products.id_produk, {onUpdate: 'cascade', onDelete: 'cascade'}),
    kuantitas: integer('kuantitas').default(1),
    total: integer('total').default(0),
})

export const products = pgTable('products', {
    id_produk: varchar('id_produk', {length: 50}).primaryKey(),
    nama_produk: varchar('nama_produk', {length: 50}),
    harga: integer('harga').default(0),
    stok: integer('stok').default(0),
    kategori: varchar('kategori', {length: 20}),
    gambar_produk: varchar('gambar_produk', {length: 255}).default('product.png'),
})
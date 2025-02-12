import { Roboto } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "300", "400", "500", "700", "900"],
});

export default function TransaksiBayar() {
    return (
      <div>
        <h1>Halaman Transaksi Bayar</h1>
        <p>Ini adalah halaman pembayaran.</p>
      </div>
    );
  }
  
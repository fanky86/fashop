import Link from "next/link";
import products from "../data/products.json";

export default function Home() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Toko Online Fanky</h1>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-3 rounded shadow hover:shadow-md transition">
            
            {/* Gambar produk tampil persegi (kotak) */}
            <div className="w-full aspect-square mb-2 overflow-hidden rounded">
              <img
                src={p.image}
                alt={p.name}
                className="object-cover w-full h-full"
              />
            </div>

            {/* Info Produk */}
            <h2 className="font-semibold text-sm sm:text-base">{p.name}</h2>
            <p className="text-gray-700 text-sm mb-2">Rp {p.price.toLocaleString()}</p>

            {/* Tombol Lihat Detail */}
            <Link
              href={`/produk/${p.id}`}
              className="block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

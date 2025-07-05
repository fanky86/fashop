import Link from "next/link";
import products from "../data/products.json";

export default function Home() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Toko Online Fanky</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-3 rounded shadow hover:shadow-md transition text-center">
            {/* Gambar produk ukuran 3x4 dibatasi */}
            <div className="w-full max-w-[140px] mx-auto aspect-[3/4] mb-2 overflow-hidden rounded shadow">
              <img
                src={p.image}
                alt={p.name}
                className="object-cover w-full h-full"
              />
            </div>

            <h2 className="font-semibold text-sm sm:text-base line-clamp-2">{p.name}</h2>
            <p className="text-gray-700 text-sm mb-2">Rp {p.price.toLocaleString()}</p>

            <Link
              href={`/produk/${p.id}`}
              className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white text-sm px-2 py-1 rounded"
            >
              Lihat Detail
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

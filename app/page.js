import Link from "next/link";
import products from "../data/products.json";

export default function Home() {
  return (
    <main className="p-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Toko Online Fanky</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-4 rounded shadow">
            <img src={p.image} alt={p.name} className="w-full h-40 object-cover mb-2 rounded" />
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-sm text-gray-500">Rp {p.price.toLocaleString()}</p>
            <Link href={`/produk/${p.id}`} className="block mt-2 text-blue-600">Lihat Detail</Link>
          </div>
        ))}
      </div>
    </main>
  )
}
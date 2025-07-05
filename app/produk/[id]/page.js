import products from "../../../data/products.json";

export default function DetailProduk({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) {
    return (
      <main className="p-4 max-w-md mx-auto">
        <div className="bg-white p-6 rounded shadow">
          <h1 className="text-xl font-bold mb-2">Produk tidak ditemukan</h1>
        </div>
      </main>
    );
  }

  return (
    <main className="p-4 max-w-md md:max-w-2xl mx-auto">
      <div className="bg-white p-6 rounded shadow text-center">
        {/* ✅ GAMBAR FIX - tidak tampil besar */}
        <div className="mx-auto w-full max-w-[160px] aspect-[3/4] overflow-hidden rounded shadow mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4 text-lg text-gray-700">Rp {product.price.toLocaleString()}</p>
        <p className="text-sm text-gray-600">{product.description}</p>

        <button className="mt-6 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded w-full">
          Tambah ke Keranjang
        </button>
      </div>
    </main>
  );
}

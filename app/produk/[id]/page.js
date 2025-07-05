import products from "../../../data/products.json";

export default function DetailProduk({ params }) {
  const product = products.find((p) => p.id.toString() === params.id);
  if (!product) return <div>Produk tidak ditemukan</div>;

  return (
    <main className="p-4 max-w-md md:max-w-4xl mx-auto">
      <div className="bg-white p-6 rounded shadow">
        <img
          src={product.image}
          alt={product.name}
          className="w-full aspect-square object-cover mb-4 rounded"
        />
        <h1 className="text-2xl font-bold mb-2">{product.name}</h1>
        <p className="mb-4 text-lg text-gray-700">
          Rp {product.price.toLocaleString()}
        </p>
        <p className="text-sm text-gray-600">{product.description}</p>
        <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded">
          Tambah ke Keranjang
        </button>
      </div>
    </main>
  );
}

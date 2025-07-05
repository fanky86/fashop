const products = [
  { id: 1, name: "Kemeja Pria", price: 80000 },
  { id: 2, name: "Celana Jeans", price: 120000 },
  { id: 3, name: "Kaos Wanita", price: 65000 }
];

export default function ProductList() {
  return (
    <div className="grid grid-cols-2 gap-4">
      {products.map(p => (
        <div key={p.id} className="border p-2 rounded">
          <h2 className="font-semibold">{p.name}</h2>
          <p>Rp {p.price.toLocaleString()}</p>
          <button className="bg-blue-500 text-white px-2 py-1 mt-2">Tambah ke Keranjang</button>
        </div>
      ))}
    </div>
  );
}

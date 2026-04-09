import products from "../data/products";

const Products = () => {
  return (
    <section id="products" className="py-16 px-8 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">
        Our Products
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((p) => (
          <div
            key={p.id}
            className="bg-white rounded-xl shadow hover:shadow-lg transition p-4"
          >
           <img
            src={p.image}
            alt={p.name}
            className="h-52 w-full object-cover rounded-lg hover:scale-105 transition duration-300"
        />
            <h3 className="mt-4 text-lg font-semibold">{p.name}</h3>

            <p className="text-green-700 font-bold">{p.price}</p>

            <button className="mt-3 w-full bg-green-600 text-white py-2 rounded hover:bg-green-700">
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
const products = [
    { id: '1', name: 'Syltherine', price: 'Rp 2.500.000', discount: '-30%', image: '/syltherine.jpg' },
    { id: '2', name: 'Leviosa', price: 'Rp 2.500.000', image: '/leviosa.jpg' },
    // Add more products here...
  ];
  
  const ProductGrid = () => {
    return (
      <section className="py-12">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center">Our Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-8">
            {products.map((product) => (
              <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold">{product.name}</h3>
                  <p className="text-gray-600">{product.price}</p>
                  {product.discount && <span className="text-red-500">{product.discount}</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default ProductGrid;
  
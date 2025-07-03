export default function BestSellers() {
  return (
    <section className="relative mt-[798px] px-4">
      {/* Heading and button row */}
      <div className="flex justify-between items-center max-w-[1224px] mx-auto mb-8">
        <h2 className="text-[32px] font-semibold leading-[45px] capitalize text-[#0C0C0C] font-[Montserrat]">
          Best Sellers
        </h2>
        <button className="flex items-center justify-center h-[40px] w-[102px] px-4 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800">
          View All
        </button>
      </div>

      {/* Product Grid Placeholder */}
      <div className="max-w-[1224px] h-[546px] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {/* You can replace these with actual <ProductCard /> components */}
        <div className="bg-gray-100 h-72 rounded-lg shadow-md"></div>
        <div className="bg-gray-100 h-72 rounded-lg shadow-md"></div>
        <div className="bg-gray-100 h-72 rounded-lg shadow-md"></div>
        {/* Add more cards as needed */}
      </div>
    </section>
  );
}

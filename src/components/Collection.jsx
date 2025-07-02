export default function Collection() {
  return (
    <section className="relative mt-[1501px] px-4">
      {/* Heading */}
      <h2 className="text-[32px] font-semibold leading-[45px] capitalize text-[#0C0C0C] font-[Montserrat] text-center mb-10">
        Collection
      </h2>

      {/* Two-column layout */}
      <div className="max-w-[1224px] mx-auto flex flex-col md:flex-row gap-4">
        {/* Left Column */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          {/* Top Image */}
          <div className="relative">
            <img src="/assets/2.png" alt="Collection Item" className="w-full h-[518px] object-cover rounded-md" />
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-[#0C0C0C] text-sm font-medium rounded shadow-md">
              Add to Cart
            </button>
          </div>

          {/* Bottom Image */}
          <div className="relative">
            <img src="/assets/3.png" alt="Collection Item" className="w-full h-[837px] object-cover rounded-md" />
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-[#0C0C0C] text-sm font-medium rounded shadow-md">
              Add to Cart
            </button>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2">
          <div className="relative h-full">
            <img src="/assets/1.png" alt="Tall Collection Item" className="w-full h-[1419px] object-cover rounded-md" />
            <button className="absolute bottom-4 right-4 px-4 py-2 bg-white text-[#0C0C0C] text-sm font-medium rounded shadow-md">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Hero() {
  return (
    <section
      className="absolute top-[110px] inset-x-0 h-[600px] bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/1.png')" }}
    >
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-center text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Discover Your Style</h2>
          <button className="mt-4 px-6 py-3 bg-black text-white text-sm rounded-md hover:bg-gray-900">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
}

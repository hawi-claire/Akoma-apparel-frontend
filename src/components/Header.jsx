export default function Header() {
  return (
    <header className="absolute top-0 inset-x-0 h-[110px] bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-full px-6">
        <h1 className="text-xl font-bold">Akoma Apparel</h1>
        <nav className="hidden md:flex gap-6 text-gray-700 font-medium">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <div className="text-black">🛒</div>
      </div>
    </header>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero";
import BestSellers from "./components/BestSellers";
import Collection from "./components/Collection";

function App() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <BestSellers />
      <Collection />
    </div>
  );
}

export default App;

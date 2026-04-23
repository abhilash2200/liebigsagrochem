import ProductList from "./components/ProductList";

export const metadata = {
  title: "Products | Liebigs Agrochem",
  description: "Explore our range of premium agrochemical products including insecticides, fungicides, and growth regulators.",
};

export default function ProductsPage() {
  return (
    <main className="min-h-screen bg-agro-bg pb-20">
      {/* Hero Header */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden bg-agro-green-dark">
        <div className="absolute inset-0 opacity-20">
          {/* Subtle pattern background can be added here */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-agro-green-light to-transparent" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <span className="text-agro-green-light font-bold uppercase tracking-[0.3em] text-xs mb-4 block animate-fade-in">
            Premium Solutions
          </span>
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-agro-green-light">Products</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/70 font-medium leading-relaxed">
            Harnessing science and nature to provide the most effective crop protection and growth enhancement solutions.
          </p>
        </div>
      </section>

      {/* Product Section */}
      <section className="py-12">
        <ProductList />
      </section>
    </main>
  );
}

import ProductList from "@/app/products/components/ProductList";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Product Listing | Liebigs Agrochem",
  description: "Explore our range of premium agrochemical products.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <div className="max-w-7xl mx-auto pt-12 pb-6 px-4">
        <header className="text-center">
          <h1 className="font-poppins font-bold text-3xl text-agro-text tracking-tight capitalize">
            Our Products
          </h1>
          <div className="h-1 w-20 bg-agro-green-dark mx-auto mt-4" />
        </header>
        
        <ProductList />
      </div>
    </main>
  );
}
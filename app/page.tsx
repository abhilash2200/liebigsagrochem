import Header from "@/app/components/Header";
import InformationTabs from "@/app/components/InformationTabs";

export const metadata = {
  title: "Premium Agro Solutions | Liebigs Agrochem",
  description: "Discover our category-wise premium agrochemical products and expert insights.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Content */}
      <div className="max-w-7xl mx-auto pt-16 pb-24 px-4">
        <header className="text-center mb-16">
          <span className="text-agro-green-dark font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Leading Innovation
          </span>
          <h1 className="font-poppins font-bold text-4xl md:text-6xl text-agro-text tracking-tight capitalize mb-6">
            Sustainable <span className="text-agro-green-dark underline decoration-agro-green-light/30 decoration-8 underline-offset-8">Growth</span> Solutions
          </h1>
          <p className="max-w-2xl mx-auto text-gray-500 font-medium text-lg">
            Browse our comprehensive database of products and expert information categorized for your specific agricultural needs.
          </p>
        </header>

        {/* Tabbed Information Section */}
        <section className="relative">
          <InformationTabs />
        </section>
      </div>
    </main>
  );
}
import CategoryInformation from "./components/CategoryInformation";
import Header from "@/app/components/Header";

export const metadata = {
  title: "Information & Resources | Liebigs Agrochem",
  description: "Explore categories and detailed information about Liebigs Agrochem products and services.",
};

export default function InformationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Header */}
      <section className="relative h-[45vh] min-h-[400px] flex items-center justify-center overflow-hidden bg-agro-green-dark">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-agro-green-light/20 blur-[120px] rounded-full animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-agro-green-light/10 blur-[120px] rounded-full animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-agro-green-light font-bold uppercase tracking-[0.2em] text-[10px] mb-6 border border-white/10">
            Knowledge Base
          </span>
          <h1 className="font-poppins font-bold text-5xl md:text-7xl text-white mb-6 tracking-tight leading-tight">
            Information <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-agro-green-light">Hub</span>
          </h1>
          <p className="max-w-2xl mx-auto text-white/80 font-medium text-lg leading-relaxed">
            Discover comprehensive insights, categories, and updates from the world of Liebigs Agrochem. 
            Tailored solutions for sustainable farming.
          </p>
        </div>
      </section>

      {/* Category Wise Data Section */}
      <section className="relative z-20 -mt-16 pb-20">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-[40px] shadow-2xl shadow-black/5 min-h-[600px] border border-gray-100 overflow-hidden">
            <CategoryInformation />
          </div>
        </div>
      </section>
    </main>
  );
}

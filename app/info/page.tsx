import Header from "@/app/components/Header";

export default function InfoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Header for Info */}
      <div className="text-black py-12 pb-6 text-center">
        <h1 className="font-poppins font-bold text-3xl uppercase tracking-wider mb-2">Label / Product Packing Conformity</h1>
        <p className="text-agro-green-light font-medium uppercase tracking-widest text-xs">Required Information Display</p>
      </div>

      <div className="max-w-7xl mx-auto py-4 px-4 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-2">
          {/* Left Column (1-12) */}
          <div className="space-y-2">
            {[
              "1. For G3 Biostimulants – Product code to be prefixed prominently to brand name.",
              "2. Category name of the product as per Biostimulant / FCO notification to be mentioned on the front label.",
              "3. Composition as per FCO notification / Company standard declared.",
              "4. Product Features, Benefits & Advantages.",
              "5. Dosage & Recommended crops.",
              "6. MRP.",
              "7. Net Volume / Weight.",
              "8. Gross weight.",
              "9. MRP.",
              "10. USP.",
              "11. Batch No.",
              "12. Date of Manufacturing."
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 px-4 py-2 rounded-sm hover:border-agro-green-dark/20 transition-colors font-poppins text-sm text-gray-700 leading-tight flex items-start"
              >
                <span className="mr-2 text-agro-green-dark font-bold min-w-8">{index + 1}.</span>
                <span>{item.replace(/^\d+\.\s/, '')}</span>
              </div>
            ))}
          </div>

          {/* Right Column (13-23) */}
          <div className="space-y-2">
            {[
              "13. Expiry Date.",
              "14. Cropex Logo / Marketer Logo.",
              "15. For Organic certified Biostimulants - Approved Logo & IMO logo if applicable.",
              "16. Manufactured by.",
              "17. Marketed By.",
              "18. Customer Care Manager Designation, Contact No & Email ID.",
              "19. Toll free no & Website (if required by Client).",
              "20. Direction for Use / Application method.",
              "21. License No for Manufactures & for Marketer (for private label).",
              "22. Net weight / Volume to be mentioned on the Front label.",
              "23. Advisory / Precautions to be taken before tank mixing / spraying special products (if applicable like Orcon+ etc)."
            ].map((item, index) => (
              <div 
                key={index + 12}
                className="bg-white border border-gray-100 px-4 py-2 rounded-sm hover:border-agro-green-dark/20 transition-colors font-poppins text-sm text-gray-700 leading-tight flex items-start"
              >
                <span className="mr-2 text-agro-green-dark font-bold min-w-8">{index + 13}.</span>
                <span>{item.replace(/^\d+\.\s/, '')}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

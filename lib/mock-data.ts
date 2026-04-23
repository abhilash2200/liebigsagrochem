export interface Product {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
}

export const CATEGORIES = [
  "All Products",
  "Insecticides",
  "Fungicides",
  "Herbicides",
  "Plant Growth Regulators",
  "Soil Conditioners"
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    name: "Liebigs Power Green",
    category: "Growth Regulators",
    image: "https://images.unsplash.com/photo-1592419044706-39796d40f98c?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Enhanced growth formula for cereal crops."
  },
  {
    id: "2",
    name: "Eco-Shield Plus",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1599549335661-789a244249a0?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Organic protection against common fungal diseases."
  },
  {
    id: "3",
    name: "Fast-Track Herb",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1628352081506-83c43123ed6d?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Selective herbicide for broad-leaf weed control."
  },
  {
    id: "4",
    name: "Bugs-Off Alpha",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1615811361523-6bd03d7748e7?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Fast-acting insecticide for vegetable crops."
  },
  {
    id: "5",
    name: "Soil Revive 500",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Premium soil conditioner to restore pH balance."
  },
  {
    id: "6",
    name: "Liebigs Bio-Boost",
    category: "Growth Regulators",
    image: "https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Biological growth enhancer for sustainable farming."
  },
  {
    id: "7",
    name: "Crop-Guard X",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1599549335661-789a244249a0?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Advanced fungicide for fruit orchards."
  },
  {
    id: "8",
    name: "Weed-Terminator",
    category: "Bio Fertilizers",
    image: "https://images.unsplash.com/photo-1558449028-b53a39d100fc?q=80&w=400&h=400&auto=format&fit=crop",
    description: "Total weed control for non-crop areas."
  }
];

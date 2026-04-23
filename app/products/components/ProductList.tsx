"use client";

import { useState, useEffect } from "react";
import ProductCard from "@/app/products/components/ProductCard";

interface Category {
  id: string;
  category: string;
  categorykey: string;
}

interface Product {
  id: number;
  product_name: string;
  image: string;
  category: string;
}

export default function ProductList() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [activeCategory, setActiveCategory] = useState<Category | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [productsLoading, setProductsLoading] = useState(false);

  // Fetch Categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("/api/categories", { method: "POST" });
        const result = await response.json();
        if (result.status && result.data) {
          setCategories(result.data);
          if (result.data.length > 0) {
            setActiveCategory(result.data[0]);
          }
        }
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  // Fetch Products when Category changes
  useEffect(() => {
    if (!activeCategory) return;

    const fetchProducts = async () => {
      setProductsLoading(true);
      try {
        const response = await fetch("/api/products", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categorykey: activeCategory.categorykey }),
        });
        const result = await response.json();
        if (result.status && result.data) {
          setProducts(result.data);
        } else {
          setProducts([]);
        }
      } catch (error) {
        console.error("Error fetching products:", error);
        setProducts([]);
      } finally {
        setProductsLoading(false);
      }
    };

    fetchProducts();
  }, [activeCategory]);

  return (
    <div className="space-y-12">
      {/* Category Tabs */}
      <div className="sticky top-[80px] z-10 bg-white py-2 mb-8">
        <div className="flex md:flex-wrap overflow-x-auto md:overflow-x-visible whitespace-nowrap md:whitespace-normal gap-4 md:gap-6 justify-start md:justify-center max-w-7xl mx-auto px-6 no-scrollbar snap-x snap-mandatory">
          {loading ? (
            <div className="h-8 w-64 bg-gray-100 animate-pulse rounded" />
          ) : (
            categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat)}
                className={`
                  relative px-1 md:px-2 py-3 font-poppins md:text-[12px] text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 flex-shrink-0 md:flex-shrink snap-center
                  ${activeCategory?.id === cat.id 
                    ? "text-agro-green-dark" 
                    : "text-gray-500 hover:text-agro-text hover:cursor-pointer"}
                `}
              >
                {cat.category}
                {activeCategory?.id === cat.id && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-agro-green-dark transition-all duration-300" />
                )}
              </button>
            ))
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="max-w-7xl mx-auto px-4">
        {productsLoading ? (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="aspect-square bg-gray-50 animate-pulse rounded" />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
            {products.map((product, index) => (
              <ProductCard
                key={product.id}
                product={{
                  id: String(product.id),
                  name: product.product_name,
                  image: product.image,
                  category: product.category,
                  description: ""
                }}
                index={index}
              />
            ))}
          </div>
        )}

        {!productsLoading && products.length === 0 && (
          <div className="py-20 text-center">
            <p className="font-poppins text-gray-400 uppercase tracking-widest text-[10px]">
              No products available in this category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

import Image from "next/image";
import { Product } from "@/lib/mock-data";

interface ProductCardProps {
  product: Product;
  index: number;
}

export default function ProductCard({ product, index }: ProductCardProps) {
  return (
    <div 
      className="group relative bg-white border border-gray-100 p-2 transition-all duration-300 hover:shadow-lg flex flex-col"
      style={{ 
        animationDelay: `${index * 50}ms`,
        borderRadius: '4px'
      }}
    >
      <div className="relative aspect-square overflow-hidden bg-gray-50 mb-3 rounded-sm">
        <Image
          src={product.image}
          alt={product.name}
          loading="lazy"
          fill
          className="object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      
      <div className="p-2 text-center">
        <h3 className="font-poppins font-semibold capitalize text-sm text-agro-text leading-tight group-hover:text-agro-green-dark transition-colors">
          {product.name}
        </h3>
      </div>
    </div>
  );
}

"use client";

import { useState, useEffect, useRef } from "react";

interface Category {
  id: number;
  category: string;
  categorykey: string;
}

interface Comment {
  id: number;
  category: string;
  product_description: string;
}

export default function InformationTabs() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingComments, setLoadingComments] = useState(false);
  const tabsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await fetch("/api/categories", { method: "POST" });
        const result = await response.json();
        
        if (result.status && Array.isArray(result.data)) {
          setCategories(result.data);
          if (result.data.length > 0) setSelectedCategory(result.data[0].categorykey);
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
      } finally {
        setLoadingCategories(false);
      }
    };
    fetchCategories();
  }, []);

  useEffect(() => {
    if (!selectedCategory) return;
    const fetchComments = async () => {
      try {
        setLoadingComments(true);
        const response = await fetch("/api/comments-list", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ categorykey: selectedCategory }),
        });
        const result = await response.json();
        
        if (result.status && Array.isArray(result.data)) {
          setComments(result.data);
        } else {
          setComments([]);
        }
      } catch (err) {
        console.error("Error fetching comments:", err);
        setComments([]);
      } finally {
        setLoadingComments(false);
      }
    };
    fetchComments();
  }, [selectedCategory]);

  if (loadingCategories) {
    return (
      <div className="w-full space-y-12 animate-pulse mt-8">
        <div className="flex md:justify-center gap-4 overflow-hidden">
          {[1, 2, 3].map(i => (
            <div key={i} className="h-10 w-36 bg-gray-100 rounded-full shrink-0" />
          ))}
        </div>
        <div className="flex flex-col gap-8 max-w-6xl mx-auto">
          {[1, 2].map(i => (
            <div key={i} className="bg-gray-50/50 p-10 rounded-[32px] border border-gray-100 space-y-6">
              <div className="h-12 w-12 bg-gray-200 rounded-2xl" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded-full" />
                <div className="h-4 w-[90%] bg-gray-200 rounded-full" />
                <div className="h-4 w-[70%] bg-gray-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full mt-8">
      {/* Horizontal Tabs */}
      <div className="relative mb-12">
        <div 
          ref={tabsRef}
          className="flex md:justify-center overflow-x-auto no-scrollbar gap-3 pb-6 border-b border-gray-100 scroll-smooth"
        >
          {categories.map((cat, index) => (
            <button
              key={cat.categorykey || `cat-${index}`}
              onClick={() => setSelectedCategory(cat.categorykey)}
              className={`px-6 py-2.5 rounded-full text-sm font-bold whitespace-nowrap transition-all duration-300 border ${
                selectedCategory === cat.categorykey
                  ? "bg-agro-green-dark text-white border-agro-green-dark shadow-lg shadow-agro-green-dark/20 scale-105"
                  : "bg-white text-gray-500 border-gray-200 hover:border-agro-green-dark/30 hover:text-agro-green-dark"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>
        {/* Subtle Fade gradients for scrolling */}
        <div className="absolute right-0 top-0 bottom-4 w-12 bg-gradient-to-l from-white to-transparent pointer-events-none md:hidden" />
      </div>

      {/* Single Column Content */}
      {loadingComments ? (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {[1, 2].map((i) => (
            <div key={i} className="bg-gray-50/50 p-10 rounded-[20px] border border-gray-100 space-y-6 animate-pulse">
              <div className="h-12 w-12 bg-gray-200 rounded-2xl" />
              <div className="space-y-3">
                <div className="h-4 w-full bg-gray-200 rounded-full" />
                <div className="h-4 w-[90%] bg-gray-200 rounded-full" />
                <div className="h-4 w-[70%] bg-gray-200 rounded-full" />
              </div>
            </div>
          ))}
        </div>
      ) : comments.length > 0 ? (
        <div className="flex flex-col gap-8 max-w-7xl mx-auto">
          {comments.map((comment, index) => (
            <div 
              key={comment.id || index} 
              className="group relative bg-white p-10 rounded-[20px] border border-gray-100 shadow-sm hover:shadow-xl hover:border-agro-green-dark/10 transition-all duration-500"
            >
              <div className="mb-6 h-12 w-12 rounded-2xl bg-agro-green-dark/10 flex items-center justify-center text-agro-green-dark group-hover:scale-110 group-hover:bg-agro-green-dark group-hover:text-white transition-all duration-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
              </div>

              <div 
                className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-600 transition-colors [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_strong]:text-agro-text [&_strong]:font-bold"
                dangerouslySetInnerHTML={{ __html: comment.product_description }}
              />
              
              <div className="mt-6 pt-6 border-t border-gray-50 flex items-center justify-between">
                <span className="text-[10px] font-bold uppercase tracking-widest text-agro-green-dark/60">
                  {comment.category || "Information"}
                </span>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-24 bg-gray-50/50 rounded-[20px] border border-dashed border-gray-200">
          <p className="text-gray-400 font-medium">No details found for this category.</p>
        </div>
      )}
    </div>
  );
}

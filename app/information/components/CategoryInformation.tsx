"use client";

import { useState, useEffect } from "react";

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

export default function CategoryInformation() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [comments, setComments] = useState<Comment[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const [loadingComments, setLoadingComments] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Fetch Categories on mount
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const response = await fetch("/api/categories", {
          method: "POST",
        });
        const result = await response.json();
        
        if (result.status && Array.isArray(result.data)) {
          setCategories(result.data);
          if (result.data.length > 0) {
            setSelectedCategory(result.data[0].categorykey);
          }
        } else {
          setError("Failed to load categories.");
        }
      } catch (err) {
        console.error("Error fetching categories:", err);
        setError("An error occurred while fetching categories.");
      } finally {
        setLoadingCategories(false);
      }
    };

    fetchCategories();
  }, []);

  // Fetch Comments when selectedCategory changes
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
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-12 bg-gray-200 animate-pulse rounded-lg" />
            ))}
          </div>
          <div className="flex-1 space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-32 bg-gray-100 animate-pulse rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12 text-center">
        <p className="text-red-500 font-medium">{error}</p>
        <button 
          onClick={() => window.location.reload()}
          className="mt-4 px-6 py-2 bg-agro-green-dark text-white rounded-full hover:bg-agro-green-light transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row gap-8">
        {/* Categories Sidebar */}
        <aside className="w-full md:w-72">
          <div className="sticky top-24 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-5 border-b border-gray-50 bg-gray-50/50">
              <h3 className="font-bold text-agro-text">Information Categories</h3>
              <p className="text-xs text-gray-500 mt-1">Select a category to view details</p>
            </div>
            <nav className="p-2 space-y-1">
              {categories.map((cat, index) => (
                <button
                  key={cat.categorykey || `sidebar-cat-${index}`}
                  onClick={() => setSelectedCategory(cat.categorykey)}
                  className={`w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    selectedCategory === cat.categorykey
                      ? "bg-agro-green-dark text-white shadow-md shadow-agro-green-dark/20"
                      : "text-gray-600 hover:bg-agro-green-dark/5 hover:text-agro-green-dark"
                  }`}
                >
                  {cat.category}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Content Area */}
        <main className="flex-1">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-agro-text mb-2">
              {categories.find(c => c.categorykey === selectedCategory)?.category || "Details"}
            </h2>
            <div className="h-1 w-12 bg-agro-green-dark rounded-full" />
          </div>

          {loadingComments ? (
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-32 bg-gray-50 animate-pulse rounded-xl border border-gray-100" />
              ))}
            </div>
          ) : comments.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {comments.map((comment, index) => (
                <div 
                  key={comment.id || index} 
                  className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-agro-green-dark/20 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="h-10 w-10 rounded-full bg-agro-green-dark/10 flex items-center justify-center text-agro-green-dark shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    </div>
                    <div className="flex-1">
                      <div 
                        className="text-gray-600 text-sm md:text-base leading-relaxed [&_p]:mb-4 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_li]:mb-1 [&_strong]:text-agro-text [&_strong]:font-bold"
                        dangerouslySetInnerHTML={{ __html: comment.product_description }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border border-dashed border-gray-200">
              <div className="mx-auto w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center text-gray-400 mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path><path d="M8 9h8"></path><path d="M8 13h6"></path></svg>
              </div>
              <p className="text-gray-500 font-medium">No information available for this category yet.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
}

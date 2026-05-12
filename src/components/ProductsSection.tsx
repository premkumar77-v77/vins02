import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { products, Product } from "@/data/products";
import { ChevronDown, ChevronUp, Heart } from "lucide-react";

const ProductCard = ({ p }: { p: Product }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-2xl transition-all group flex flex-col h-full relative">
      <button 
        onClick={() => setIsLiked(!isLiked)}
        className="absolute top-4 right-4 z-20 p-2 rounded-full bg-white/80 backdrop-blur-sm shadow-sm hover:bg-white transition-all"
        aria-label="Like product"
      >
        <Heart size={20} className={isLiked ? "fill-red-500 text-red-500" : "text-muted-foreground"} />
      </button>
      
      <div className="aspect-square overflow-hidden relative">
        <img src={p.img} alt={p.title} loading="lazy" width={640} height={640} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
      </div>
      <div className="p-8 flex flex-col flex-grow">
        <h3 className="font-bold text-xl text-foreground mb-3">{p.title}</h3>
        <p className="text-muted-foreground text-base mb-4 line-clamp-2">{p.desc}</p>
        
        <div className={`overflow-hidden transition-all duration-300 ${isExpanded ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
          <div className="pt-2 border-t border-border mt-2">
            <ul className="text-sm text-muted-foreground space-y-1">
              {p.details.slice(0, 3).map((detail, idx) => (
                <li key={idx} className="line-clamp-1">• {detail}</li>
              ))}
            </ul>
          </div>
        </div>

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 flex items-center gap-1 text-accent-brand hover:text-accent-brand/80 font-bold text-lg transition-colors w-fit"
        >
          {isExpanded ? (
            <>Less <ChevronUp size={20} /></>
          ) : (
            <>More <ChevronDown size={20} /></>
          )}
        </button>
      </div>
    </div>
  );
};

const ProductsSection = () => (
  <section id="products" className="py-20 section-light">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our <span className="text-accent-brand">Products</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">High-quality labeling and packaging solutions for every business need.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {products.map((p) => (
          <ProductCard key={p.slug} p={p} />
        ))}
      </div>
    </div>
  </section>
);

export default ProductsSection;

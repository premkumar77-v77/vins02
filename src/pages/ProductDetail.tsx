import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { products } from "@/data/products";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const ProductDetail = () => {
  const { slug } = useParams();
  const product = products.find((p) => p.slug === slug);

  if (!product) {
    return (
      <>
        <Navbar />
        <div className="pt-16 min-h-[60vh] flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-foreground mb-4">Product Not Found</h1>
            <Link to="/products">
              <Button>Back to Products</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="pt-16">
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4">
            <Link to="/products" className="inline-flex items-center gap-2 text-accent hover:text-accent/80 mb-8 transition-colors">
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Products</span>
            </Link>

            <div className="grid lg:grid-cols-2 gap-12">
              <div className="overflow-hidden rounded-lg border border-border">
                <img src={product.img} alt={product.title} className="w-full h-full object-cover" />
              </div>

              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">{product.title}</h1>
                <p className="text-muted-foreground text-lg mb-8">{product.desc}</p>

                <h2 className="text-xl font-semibold text-foreground mb-4">Product Details</h2>
                <ul className="space-y-3 mb-8">
                  {product.details.map((detail, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ProductDetail;

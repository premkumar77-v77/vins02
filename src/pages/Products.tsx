import Navbar from "@/components/Navbar";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Products = () => (
  <>
    <Navbar />
    <div className="pt-16">
      <ProductsSection />
    </div>
    <Footer />
  </>
);

export default Products;

import multiColorBarcode from "@/assets/roductphoto/Multi-Color-Barcode-Labels.jpg";
import plainBarcode from "@/assets/roductphoto/Plain-Barcode-Label.jpg";
import preprintedBarcode from "@/assets/roductphoto/Preprinted barcode label.webp";
import resinRibbon from "@/assets/roductphoto/resin-ribbon.webp";
import waxRibbon from "@/assets/roductphoto/WAX Ribbonx.webp";
import waxResinRibbon from "@/assets/roductphoto/Wax-Resin-Ribbons.jpg";
import satinLabel from "@/assets/roductphoto/Satin Label.jpg";
import taffetaLabel from "@/assets/roductphoto/Taffeta label.jpg";
import garmentStickers from "@/assets/roductphoto/paper-garment-stickers-1000x1000.webp";
import productTags from "@/assets/product-tags.jpg";
import productBoxes from "@/assets/product-boxes.jpg";

const images = [
  { src: multiColorBarcode, alt: "Multi Color Barcode Label" },
  { src: plainBarcode, alt: "Plain Barcode Label" },
  { src: preprintedBarcode, alt: "Preprinted Barcode Label" },
  { src: resinRibbon, alt: "Resin Ribbon" },
  { src: waxRibbon, alt: "Wax Ribbon" },
  { src: waxResinRibbon, alt: "Wax Resin Ribbon" },
  { src: satinLabel, alt: "Satin Label" },
  { src: taffetaLabel, alt: "Taffeta Label" },
  { src: garmentStickers, alt: "Garment Stickers" },
  { src: productTags, alt: "Product Tags" },
  { src: productBoxes, alt: "Packaging Boxes" },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 section-light">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Product <span className="text-accent-brand">Gallery</span></h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg md:text-xl">Take a closer look at our wide range of products.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
        {images.map((img, idx) => (
          <div key={idx} className="overflow-hidden rounded-2xl aspect-square border border-border shadow-sm hover:shadow-2xl transition-all bg-white group">
            <div className="w-full h-full overflow-hidden">
              <img src={img.src} alt={img.alt} loading="lazy" width={600} height={600} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            </div>
            <div className="p-4 text-center border-t border-border bg-white group-hover:bg-accent transition-colors">
              <p className="text-base font-bold text-foreground group-hover:text-accent-foreground">{img.alt}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;

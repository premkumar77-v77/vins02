import multiColorBarcode from "@/assets/roductphoto/Multi-Color-Barcode-Labels.jpg";
import plainBarcode from "@/assets/roductphoto/Plain-Barcode-Label.jpg";
import preprintedBarcode from "@/assets/roductphoto/Preprinted barcode label.webp";
import resinRibbon from "@/assets/roductphoto/resin-ribbon.webp";
import waxRibbon from "@/assets/roductphoto/WAX Ribbonx.webp";
import waxResinRibbon from "@/assets/roductphoto/Wax-Resin-Ribbons.jpg";
import satinLabel from "@/assets/roductphoto/Satin Label.jpg";
import taffetaLabel from "@/assets/roductphoto/Taffeta label.jpg";
import productTags from "@/assets/product-tags.jpg";
import productStickers from "@/assets/roductphoto/paper-garment-stickers-1000x1000.webp";
import productBoxes from "@/assets/product-boxes.jpg";

export interface Product {
  slug: string;
  title: string;
  desc: string;
  img: string;
  details: string[];
}

export const products: Product[] = [
  {
    slug: "multi-color-barcode",
    title: "Multi Color Barcode Label",
    desc: "Premium multi-color barcode labels for branding and identification. Available in custom designs.",
    img: multiColorBarcode,
    details: [
      "High-quality multi-color printing",
      "Custom sizes and shapes",
      "Durable adhesive for various surfaces",
      "Ideal for retail and product branding",
      "Fading resistant inks",
    ],
  },
  {
    slug: "plain-barcode",
    title: "Plain Barcode Label",
    desc: "Standard white plain barcode labels for thermal transfer and direct thermal printing.",
    img: plainBarcode,
    details: [
      "High-quality paper and synthetic materials",
      "Compatible with all barcode printers",
      "Excellent print clarity",
      "Strong permanent adhesive",
      "Available in various roll sizes",
    ],
  },
  {
    slug: "preprinted-barcode",
    title: "Preprinted Barcode Label",
    desc: "Custom preprinted labels with variable data, logos, and barcodes ready for use.",
    img: preprintedBarcode,
    details: [
      "Variable data printing (sequential numbering)",
      "High-density barcode symbols",
      "Custom logo and text integration",
      "Quality checked for scanability",
      "Weather and chemical resistant options",
    ],
  },
  {
    slug: "resin-ribbon",
    title: "Resin Ribbon",
    desc: "High-performance resin ribbons for durable and long-lasting printing on synthetic labels.",
    img: resinRibbon,
    details: [
      "Maximum scratch and smudge resistance",
      "Excellent resistance to chemicals and heat",
      "High-density black printing",
      "Compatible with Polyester, Vinyl, and Film labels",
      "Available in various widths and lengths",
    ],
  },
  {
    slug: "wax-ribbon",
    title: "Wax Ribbon",
    desc: "Economical and high-quality wax ribbons for standard paper label printing.",
    img: waxRibbon,
    details: [
      "Ideal for standard paper and shipping labels",
      "Clear and crisp barcode printing",
      "Low print head temperature required",
      "Good for general purpose labeling",
      "Cost-effective labeling solution",
    ],
  },
  {
    slug: "wax-resin-ribbon",
    title: "Wax Resin Ribbon",
    desc: "Versatile ribbons offering better durability for coated paper and synthetic labels.",
    img: waxResinRibbon,
    details: [
      "Superior smudge and scratch resistance",
      "Excellent print quality on coated labels",
      "Durable enough for industrial environments",
      "Versatile across different label materials",
      "High-speed printing compatible",
    ],
  },
  {
    slug: "satin-label",
    title: "Satin Label",
    desc: "Soft and premium satin labels for garments, providing a luxurious feel and durable branding.",
    img: satinLabel,
    details: [
      "Ultra-soft finish for skin comfort",
      "High-definition printing of logos and text",
      "Wash-resistant and durable",
      "Available in various widths",
      "Customized colors and designs",
    ],
  },
  {
    slug: "taffeta-label",
    title: "Taffeta Label",
    desc: "Durable and crisp taffeta labels, ideal for care instructions and branding in textiles.",
    img: taffetaLabel,
    details: [
      "Crisp and clear print finish",
      "Excellent durability for industrial washing",
      "Ideal for care labels and wash instructions",
      "Cost-effective garment labeling",
      "High-quality nylon or polyester taffeta",
    ],
  },
  {
    slug: "tags",
    title: "Tags",
    desc: "Hang tags, price tags, and product tags in custom shapes, sizes, and finishes.",
    img: productTags,
    details: [
      "Hang tags with string or pin attachment",
      "Price tags with barcode printing",
      "Product tags in custom shapes",
      "Available in Art Card, Kraft, and specialty papers",
      "Foil stamping and embossing options",
      "Spot UV and matte/gloss lamination",
    ],
  },
  {
    slug: "stickers",
    title: "Stickers",
    desc: "Custom vinyl, paper, and holographic stickers for branding, packaging, and promotions.",
    img: productStickers,
    details: [
      "Custom die-cut vinyl stickers",
      "Paper stickers for packaging",
      "Holographic security stickers",
      "Transparent and metallic stickers",
      "Waterproof and UV-resistant options",
      "Roll and sheet formats available",
    ],
  },
  {
    slug: "packaging-boxes",
    title: "Packaging Boxes",
    desc: "Mono cartons boxes (printed & non-printed), corrugated, duplex, and custom packaging for all needs.",
    img: productBoxes,
    details: [
      "Mono cartons boxes — Printed and non-printed options",
      "Corrugated shipping boxes (3-ply, 5-ply, 7-ply)",
      "Duplex board boxes for retail packaging",
      "Custom printed boxes with full-color graphics",
      "Rigid gift boxes",
      "E-commerce mailer boxes",
      "Food-grade packaging options",
    ],
  },
];

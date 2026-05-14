import { ShieldCheck, Palette, Clock } from "lucide-react";
import vinsPhoto from "@/assets/photo/vins.jpeg";

const points = [
  { icon: ShieldCheck, title: "Quality Assured", desc: "ISO-grade materials and printing processes." },
  { icon: Palette, title: "Fully Customizable", desc: "Any size, shape, color, or design you need." },
  { icon: Clock, title: "On-Time Delivery", desc: "We respect your deadlines, every single time." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-background">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-3">About <span className="text-accent-brand">VINS Enterprises</span></h2>
        <p className="text-accent-brand font-semibold text-xl md:text-2xl mb-8 uppercase tracking-wider">Labels and solutions</p>
        
        <div className="flex flex-col items-center mb-10">
          <div className="w-48 h-64 md:w-56 md:h-72 mb-4 rounded-xl overflow-hidden border-4 border-accent/20 shadow-xl">
            <img 
              src={vinsPhoto} 
              alt="L. Vinothkumar - Proprietor" 
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-2xl font-bold text-foreground">L. Vinothkumar</h3>
          <p className="text-accent-brand font-medium">(proprietor)</p>
        </div>

        <p className="text-muted-foreground max-w-4xl mx-auto text-lg md:text-xl leading-relaxed font-medium">
          With 30 years of experience. Having well experienced and talented staffs.
          Our parent company is AKP Labels, has been in the field over 30 years, building a legacy of trust and excellence.
          VINS Enterprises is a leading manufacturer and supplier of barcode labels, stickers, garment labels, tags, and packaging solutions, delivering premium quality products tailored to your business needs with competitive pricing and timely delivery.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {points.map((p) => (
          <div key={p.title} className="text-center p-6 rounded-lg border border-border hover:shadow-lg transition-shadow">
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-accent/10 flex items-center justify-center">
              <p.icon className="h-7 w-7 text-accent" />
            </div>
            <h3 className="font-semibold text-lg text-foreground mb-2">{p.title}</h3>
            <p className="text-muted-foreground text-sm">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;

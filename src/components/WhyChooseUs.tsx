import { ShieldCheck, Settings, IndianRupee, Truck } from "lucide-react";

const items = [
  { icon: ShieldCheck, title: "Quality Assured", desc: "Rigorous quality checks at every stage of production." },
  { icon: Settings, title: "Customized Solutions", desc: "Tailored products to match your exact specifications." },
  { icon: IndianRupee, title: "Competitive Pricing", desc: "Best prices without compromising on quality." },
  { icon: Truck, title: "Timely Delivery", desc: "On-time delivery across India, every time." },
];

const WhyChooseUs = () => (
  <section id="why-us" className="py-20 section-dark">
    <div className="container mx-auto px-4">
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4">Why Choose <span className="text-accent-brand">VINS?</span></h2>
        <p className="text-primary-foreground/80 max-w-2xl mx-auto text-lg md:text-xl">Trusted by businesses across India for quality, reliability, and innovation.</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {items.map((i) => (
          <div key={i.title} className="text-center p-10 rounded-2xl border border-primary-foreground/10 hover:border-accent/50 hover:bg-primary-foreground/5 transition-all group">
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-accent/20 flex items-center justify-center group-hover:scale-110 transition-transform">
              <i.icon className="h-10 w-10 text-accent" />
            </div>
            <h3 className="font-bold text-xl text-primary-foreground mb-3">{i.title}</h3>
            <p className="text-primary-foreground/70 text-base leading-relaxed">{i.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUs;

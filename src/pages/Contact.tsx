import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, Phone, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="pt-20 min-h-screen bg-background">
        <section className="py-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Contact <span className="text-accent-brand">Us</span></h1>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                Get in touch with VINS Enterprises for all your labeling and packaging needs.
              </p>
            </div>

            <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Company Details</h2>
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <MapPin className="text-accent h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">Branch Address 1</p>
                        <p className="text-muted-foreground">7B, Jeevanandam Street, Ramana Nagar,</p>
                        <p className="text-muted-foreground">Perambur, Chennai - 600 011.</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Phone className="text-accent h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">Phone</p>
                        <p className="text-muted-foreground">+91 99418 93892</p>
                        <p className="text-muted-foreground">+91 99417 04727</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Mail className="text-accent h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">Email</p>
                        <p className="text-muted-foreground">Orders@vinsenterprises.com</p>
                        <p className="text-muted-foreground">Info@vinsenterprises.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center shrink-0">
                        <Clock className="text-accent h-6 w-6" />
                      </div>
                      <div>
                        <p className="font-bold text-lg text-foreground">Business Hours</p>
                        <p className="text-muted-foreground">Monday - Saturday: 9:30 AM - 6:00 PM</p>
                        <p className="text-muted-foreground">Sunday: Closed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Branding Section */}
              <div className="bg-primary p-10 rounded-3xl text-primary-foreground flex flex-col justify-center text-center md:text-left">
                <h2 className="text-3xl font-bold mb-4">VINS ENTERPRISES</h2>
                <p className="text-accent-brand font-semibold text-xl mb-6 uppercase tracking-wider">Labels and solutions</p>
                <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8">
                  Manufacturer and supplier of high-quality barcode labels, stickers, garment labels, tags, and packaging solutions.
                </p>
                <div className="pt-6 border-t border-primary-foreground/10">
                  <p className="text-sm font-mono opacity-60 uppercase tracking-widest">GSTIN: 33ADQPL4730P2Z0</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

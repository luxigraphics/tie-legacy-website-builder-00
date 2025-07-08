
import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section - Full width, original size */}
      <section className="relative w-full">
        <img
          src="/lovable-uploads/740b6791-063e-46d1-8086-ff8484c972a1.png"
          alt="Contact Us Banner"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Contact Information */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-primary mb-4">
              Contact Us
            </h1>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
              Get in touch with our legal experts for property law consultation and documentation services
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {/* Contact Form */}
            <div>
              <Card className="p-4 md:p-6 lg:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  Send us a Message
                </h2>
                <form className="space-y-4 md:space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base resize-vertical"
                      placeholder="Write your message here..."
                    />
                  </div>
                  <Button type="submit" className="w-full py-2 md:py-3 text-sm md:text-base">
                    Send Message
                  </Button>
                </form>
              </Card>
            </div>

            {/* Office Address and Contact Details */}
            <div>
              <Card className="p-4 md:p-6 lg:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-primary mb-4 md:mb-6">
                  Our Contact Details
                </h2>
                <div className="space-y-4 md:space-y-6">
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      Office Address
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                      Chamber no. 4, Tehsil Compound Hapur - 245101, Uttar Pradesh
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      Phone
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <a href="tel:7037455191" className="hover:text-primary transition-colors">7037455191</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      Email
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <a href="mailto:tiewalavakil@gmail.com" className="hover:text-primary transition-colors">tiewalavakil@gmail.com</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      Office Hours
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      Mon - Sat: 10:00 AM - 6:00 PM
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
            Contact us today for expert property legal consultation and documentation services
          </p>
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center">
            <a href="/book-consultant" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="font-semibold px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base">
                Book Consultation
              </Button>
            </a>
            <a href="tel:7037455191" className="w-full sm:w-auto">
              <Button size="lg" className="font-semibold px-4 md:px-6 lg:px-8 py-3 md:py-4 border-white text-white bg-transparent border-2 hover:bg-white hover:text-primary transition-colors w-full sm:w-auto text-sm md:text-base">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Call Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;

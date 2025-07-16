
import { Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Validate required fields
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      setIsSubmitting(false);
      return;
    }

    // Create form data for FormSubmit
    const submitData = new FormData();
    submitData.append('name', formData.name);
    submitData.append('email', formData.email);
    submitData.append('message', formData.message);
    submitData.append('_subject', 'New Contact Form Submission - Tiewalavakil');
    submitData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/a46a17efda441142f34035275ea6230e', {
        method: 'POST',
        body: submitData
      });

      // Show success toast
      toast({
        title: "Thank You!",
        description: "आपका message successfully submit हो गया है! हमारी team आपको जल्दी contact करेगी।",
        duration: 5000,
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: ""
      });
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "कुछ गलत हुआ है। कृपया दोबारा कोशिश करें या direct call करें: 7037455191",
        variant: "destructive",
        duration: 5000,
      });
    }

    setIsSubmitting(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section - Full width, original size */}
      <section className="relative w-full">
        <img
          src="/lovable-uploads/740b6791-063e-46d1-8086-ff8484c972a1.png"
          alt="Contact Us Banner - Tiewalavakil Legal Services"
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
                <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base"
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Your Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm md:text-base font-medium text-gray-700 mb-2"
                    >
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-3 md:px-4 py-2 md:py-3 rounded-md border border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-sm md:text-base resize-vertical"
                      placeholder="Write your message here..."
                      required
                    />
                  </div>
                  <Button 
                    type="submit" 
                    className="w-full py-2 md:py-3 text-sm md:text-base"
                    disabled={isSubmitting}
                  >
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    {isSubmitting ? "Sending..." : "Send Message"}
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
                      <a href="tel:7037455191" className="hover:text-primary transition-colors" aria-label="Call Tiewalavakil at 7037455191">7037455191</a>
                    </p>
                  </div>
                  <div>
                    <h3 className="text-base md:text-lg font-semibold text-primary mb-2">
                      Email
                    </h3>
                    <p className="text-sm md:text-base text-muted-foreground">
                      <a href="mailto:contact@tiewalavakil.in" className="hover:text-primary transition-colors" aria-label="Send email to Tiewalavakil">contact@tiewalavakil.in</a>
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
            <Link to="/book-consultant" className="w-full sm:w-auto">
              <Button size="lg" variant="secondary" className="font-semibold px-4 md:px-6 lg:px-8 py-3 md:py-4 w-full sm:w-auto text-sm md:text-base">
                Book Consultation
              </Button>
            </Link>
            <a href="tel:7037455191" className="w-full sm:w-auto" aria-label="Call Tiewalavakil for immediate assistance">
              <Button size="lg" className="font-semibold px-4 md:px-6 lg:px-8 py-3 md:py-4 border-white text-white bg-transparent border-2 hover:bg-white hover:text-primary transition-colors w-full sm:w-auto text-sm md:text-base">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" aria-hidden="true" />
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

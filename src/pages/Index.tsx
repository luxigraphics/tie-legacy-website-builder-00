import { Phone, MessageCircle, Scale, BookOpen, FileText, Clock, Star, ChevronDown, Award, Users, MapPin, Receipt, Gavel, Laptop, X, Play, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import OfficeGallery from "@/components/OfficeGallery";

const testimonials = [
  {
    name: "Rohit Sharma",
    feedback:
      "Advocate Ajay Shankar Sharma provided excellent legal advice and helped me resolve my property dispute quickly.",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    feedback:
      "Professional and knowledgeable. Highly recommend for any legal consultation related to property matters.",
    rating: 5,
  },
  {
    name: "Suresh Kumar",
    feedback:
      "Very responsive and clear in communication. The consultation was worth every penny.",
    rating: 4,
  },
];

const videoTestimonials = [
  {
    id: 1,
    name: "Rajesh Kumar",
    title: "Property Registration Client",
    thumbnail: "/lovable-uploads/ed62dcfa-e067-48b4-a735-809bf4e22ca3.png",
    videoUrl: "#",
    feedback: "Amazing service! Got my property registered without any hassle."
  },
  {
    id: 2,
    name: "Priya Sharma",
    title: "Legal Consultation Client",
    thumbnail: "/lovable-uploads/57a4ba6d-7415-4972-8289-a35cf3235bc0.png",
    videoUrl: "#",
    feedback: "Expert advice that saved me from a major property dispute."
  },
  {
    id: 3,
    name: "Amit Singh",
    title: "Documentation Service Client",
    thumbnail: "/lovable-uploads/1cc35620-26d7-4431-b074-a1cd1b3bd2b0.png",
    videoUrl: "#",
    feedback: "Professional documentation service with complete transparency."
  }
];

const faqs = [
  {
    question: "Why is a Sale Deed important?",
    answer:
      "A Sale Deed confirms legal ownership of property. Without it, your purchase isn't valid. Our expert बैनामा लेखक (Deed Writer) ensures accurate drafting and registration in Hapur.",
  },
  {
    question: "What is Mutation and when is it needed?",
    answer:
      "Mutation (नामांतरण) updates the owner's name in land or Nagar Palika records. It's necessary after sale, gift, or inheritance for legal recognition.",
  },
  {
    question: "Can I verify documents before buying property?",
    answer:
      "Yes. We provide document verification services in Hapur to check title, registry, mutation, and prevent fraud.",
  },
  {
    question: "Do I need legal advice for property matters?",
    answer:
      "Definitely. Our experienced Advocate and बैनामा लेखक offers clear legal advice for disputes, ownership, and documentation.",
  },
  {
    question: "Can I get legal help online from Hapur?",
    answer:
      "Yes. We offer online property legal help for drafting, consultation, and stamp duty calculation — through WhatsApp or call.",
  },
];

const Index = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);
  const [showContact, setShowContact] = useState(false);
  const { toast } = useToast();

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section id="home" className="py-6 md:py-12 lg:py-16 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-2xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
                Trusted Legal Services for Property Matters
              </h1>
              <p className="text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
                With over 75 years of heritage, we provide expert legal consultation, documentation, and registration services from our Hapur office.
              </p>
              <a href="/book-consultant">
                <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                  <BookOpen className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Book a Consultation
                </Button>
              </a>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative">
                <img 
                  src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                  alt="Advocate Ajay Shankar Sharma - Professional Legal Services" 
                  className="w-full max-w-xs md:max-w-md rounded-xl shadow-2xl border-4 border-white"
                />
                <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 bg-primary text-primary-foreground p-2 md:p-4 rounded-lg shadow-lg">
                  <div className="text-center">
                    <div className="text-lg md:text-2xl font-bold">33+</div>
                    <div className="text-xs md:text-sm">Years Experience</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Content Section */}
      <section className="py-6 md:py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Scale className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Legal Expertise</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Over three generations of legal expertise in property law and consultation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Users className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Client Focused</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Personalized legal solutions tailored to your unique property needs.
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Receipt className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Transparent Pricing</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Clear and upfront consultation fees with no hidden charges.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Legacy Section with Family Photos */}
      <section className="py-6 md:py-8 lg:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-6 md:mb-8 lg:mb-10">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-3 md:mb-4">
              Generations of Legal Tradition
            </h2>
            <p className="text-base md:text-lg lg:text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              Our family has been in the legal service sector. Today, Advocate Ajay Shankar Sharma continues this legacy, 
              combining traditional legal expertise with digital innovation to serve the entire region from Hapur.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 mb-6 md:mb-8 lg:mb-10">
            <div className="text-center">
              <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 mx-auto mb-3 md:mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                  alt="Late Shri Nagendra Dutt Sharma - License No. 1 Holder" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2">Late Shri Nagendra Dutt Sharma</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">License No. 1 Holder</p>
              <p className="text-xs md:text-sm lg:text-base text-muted-foreground">Founder of Legal Heritage</p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 mx-auto mb-3 md:mb-4 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl">
                <img 
                  src="/lovable-uploads/4d373dc0-a905-4b85-aa59-a2dde192f61f.png" 
                  alt="Late Shri Narottam Dutt Sharma - Legal Family Heritage" 
                  className="w-full h-full object-cover object-center scale-110"
                />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2">Late Shri Narottam Dutt Sharma</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">Family Legal Tradition</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-28 md:w-24 md:h-32 lg:w-32 lg:h-40 mx-auto mb-3 md:mb-4 rounded-lg overflow-hidden border-4 border-primary shadow-xl">
                <img 
                  src="/lovable-uploads/a5616b2f-0963-4545-87ba-000cd45c804a.png" 
                  alt="Current Advocate" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-base md:text-lg lg:text-xl font-bold text-primary mb-1 md:mb-2">Advocate Ajay Shankar Sharma</h3>
              <p className="text-sm md:text-base lg:text-lg text-muted-foreground">Current Legal Expert</p>
            </div>
          </div>

          <div className="bg-white rounded-xl p-4 md:p-6 lg:p-8 shadow-lg">
            <div className="text-center">
              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-primary mb-3 md:mb-4">Three Generations of Trust - Serving from Hapur</h3>
              <p className="text-muted-foreground mb-4 md:mb-6 text-base md:text-lg lg:text-xl leading-relaxed">
                The tradition is now carried forward by Advocate Ajay Shankar Sharma from Hapur, 
                fulfilling all your property-related legal needs with the same dedication and expertise.
              </p>
              <div className="flex flex-col md:flex-row justify-center items-center space-y-3 md:space-y-0 md:space-x-8 lg:space-x-12">
                <div className="flex items-center">
                  <Award className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-red-700 mr-2 md:mr-3" />
                  <span className="text-sm md:text-base lg:text-lg font-semibold">License No. 1 Legacy</span>
                </div>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=PQJG%2B28+Hapur%2C+Uttar+Pradesh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center hover:text-primary transition-colors cursor-pointer"
                >
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-primary mr-2 md:mr-3" />
                  <span className="text-sm md:text-base lg:text-lg font-semibold">Hapur Office Location</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Online Consultation with Advocate Photo */}
      <section className="py-6 md:py-8 lg:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center">
            <div className="order-2 md:order-1">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-3 md:mb-4">
                Online Legal Consultation
              </h2>
              <p className="mb-4 md:mb-6 text-base md:text-lg lg:text-xl leading-relaxed">
                Connect with Advocate Ajay Shankar Sharma from the comfort of your home. Choose phone, video, or WhatsApp consultation.
              </p>
              <a href="/book-consultant">
                <Button size="lg" variant="secondary" className="font-semibold px-6 md:px-8 py-3 md:py-4 text-sm md:text-base">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                  Book Your Session
                </Button>
              </a>
            </div>
            <div className="flex justify-center order-1 md:order-2">
              <img 
                src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                alt="Advocate Ajay Shankar Sharma" 
                className="rounded-xl shadow-lg w-48 md:w-64 lg:w-80 border-4 border-white/20"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-6 md:py-8 lg:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Gavel className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Property Registration</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Expert assistance in property registration and documentation.
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <FileText className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Legal Documentation</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Preparation and review of legal documents related to property.
                </p>
              </CardContent>
            </Card>
            <Card className="p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
              <CardContent>
                <Laptop className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 md:mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Online Consultation</h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Convenient online consultation via phone, video, or chat.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Office & Services Gallery */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Office & Services Gallery
          </h2>
          <OfficeGallery />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-xl hover:shadow-2xl transition-shadow duration-300 border-2 border-primary/10">
                <CardContent className="p-6 md:p-8">
                  <div className="flex justify-center mb-4">
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-muted-foreground mb-6 text-lg leading-relaxed italic">"{testimonial.feedback}"</p>
                    <div className="border-t border-primary/20 pt-4">
                      <p className="font-bold text-primary text-lg">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">Satisfied Client</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Client Consultation Sessions
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {videoTestimonials.map((video) => (
              <Card key={video.id} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="relative">
                  <img 
                    src={video.thumbnail} 
                    alt={`${video.name} consultation session`}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <div className="bg-white/90 rounded-full p-4 hover:bg-white transition-colors cursor-pointer">
                      <Play className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                    Live Session
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg text-primary mb-1">{video.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{video.title}</p>
                  <p className="text-muted-foreground text-sm">"{video.feedback}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center p-4 text-left font-semibold text-primary focus:outline-none hover:bg-gray-50 transition-colors"
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform duration-300 ${
                      openFAQ === index ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFAQ === index && (
                  <div className="p-4 text-muted-foreground border-t border-gray-300 bg-gray-50">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Button - Small */}
      <div className="fixed left-2 md:left-4 lg:left-6 bottom-2 md:bottom-4 lg:bottom-6 z-40">
        <Button
          onClick={() => setShowContact(!showContact)}
          className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs md:text-sm px-3 md:px-4 py-2 rounded-lg shadow-lg"
        >
          Contact
        </Button>

        {/* Contact Popup */}
        {showContact && (
          <Card className="absolute bottom-12 md:bottom-16 left-0 w-64 md:w-72 xl:w-80 shadow-2xl border-2 border-primary/30 bg-gradient-to-br from-primary/5 to-blue-50 animate-in slide-in-from-bottom-4">
            <CardContent className="p-3 md:p-4 xl:p-6">
              <div className="flex justify-between items-start mb-3 md:mb-4">
                <h4 className="font-bold text-xs md:text-sm xl:text-base text-primary">Quick Contact</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowContact(false)}
                  className="h-5 w-5 md:h-6 md:w-6 p-0"
                >
                  <X className="w-3 h-3 md:w-4 md:h-4" />
                </Button>
              </div>
              <div className="flex items-center space-x-2 md:space-x-3 xl:space-x-4 mb-3 md:mb-4 xl:mb-5">
                <div className="w-12 h-14 md:w-14 md:h-16 xl:w-16 xl:h-20 rounded-lg overflow-hidden border-2 border-primary shadow-lg">
                  <img 
                    src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                    alt="Advocate Ajay Shankar Sharma" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-xs md:text-sm xl:text-base text-primary">Advocate Ajay Shankar Sharma</h4>
                  <p className="text-xs xl:text-sm text-muted-foreground font-medium">33+ Years Experience</p>
                  <p className="text-xs xl:text-sm text-muted-foreground">Based in Hapur</p>
                </div>
              </div>
              <div className="bg-primary/10 rounded-lg p-2 md:p-3 xl:p-4 mb-3 md:mb-4 xl:mb-5">
                <p className="text-xs xl:text-sm text-primary font-bold mb-1 md:mb-2">🏛️ Legacy</p>
                <p className="text-xs xl:text-sm text-muted-foreground leading-relaxed">Get immediate legal assistance. Expert advice on property matters available now.</p>
              </div>
              <div className="space-y-2 xl:space-y-3">
                <a href="tel:7037455191">
                  <Button size="sm" className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold text-xs xl:text-sm">
                    <Phone className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                    Call Now
                  </Button>
                </a>
                <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                  <Button size="sm" variant="outline" className="w-full border-green-500 text-green-600 hover:bg-green-50 font-semibold text-xs xl:text-sm">
                    <MessageCircle className="w-3 h-3 xl:w-4 xl:h-4 mr-2" />
                    Chat Now
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        )}
      </div>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default Index;

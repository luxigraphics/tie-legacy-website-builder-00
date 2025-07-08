
import { Scale, Award, Users, Phone, CheckCircle, Star, Building, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section - Full width, original size */}
      <section className="relative w-full">
        <img 
          src="/lovable-uploads/091c3a33-46c2-4d71-81a6-51655572e8f1.png"
          alt="About Us Banner"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* About Introduction */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">
              About TiewalaVakil
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Three generations of legal excellence serving property law needs with dedication, 
              expertise, and unwavering commitment to our clients across Hapur and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-8 md:py-12 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">75+</div>
              <div className="text-sm md:text-base">Years of Heritage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">33+</div>
              <div className="text-sm md:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">3</div>
              <div className="text-sm md:text-base">Generations Served</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl lg:text-5xl font-bold mb-2">1000+</div>
              <div className="text-sm md:text-base">Happy Clients</div>
            </div>
          </div>
        </div>
      </section>

      {/* Legacy Timeline with Enhanced Design */}
      <section className="py-8 md:py-12 lg:py-16 bg-gradient-to-b from-amber-50 to-blue-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Legal Heritage Timeline
          </h2>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20 hidden md:block"></div>
            
            <div className="space-y-8 md:space-y-12">
              {/* First Generation */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-red-700">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Late Shri Nagendra Dutt Sharma</h3>
                    <p className="text-lg text-red-700 font-semibold mb-2">License No. 1 Holder</p>
                    <p className="text-muted-foreground">Founded our legal heritage, establishing the foundation of trust and expertise that continues today.</p>
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl bg-white">
                    <img 
                      src="/lovable-uploads/07000678-35ac-4da5-95ff-0e13b8936274.png" 
                      alt="Late Shri Nagendra Dutt Sharma" 
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>

              {/* Second Generation */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="md:w-1/2 md:pr-8"></div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden border-4 border-red-700 shadow-xl bg-white">
                    <img 
                      src="/lovable-uploads/4d373dc0-a905-4b85-aa59-a2dde192f61f.png" 
                      alt="Late Shri Narottam Dutt Sharma" 
                      className="w-full h-full object-cover object-center scale-110"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8 text-center md:text-left mt-4 md:mt-0">
                  <div className="bg-white p-6 rounded-xl shadow-lg border-r-4 border-red-700">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Late Shri Narottam Dutt Sharma</h3>
                    <p className="text-lg text-red-700 font-semibold mb-2">Second Generation</p>
                    <p className="text-muted-foreground">Continued the family tradition of legal excellence, expanding our expertise in property law and client service.</p>
                  </div>
                </div>
              </div>

              {/* Third Generation */}
              <div className="flex flex-col md:flex-row items-center relative">
                <div className="md:w-1/2 md:pr-8 text-center md:text-right mb-4 md:mb-0">
                  <div className="bg-gradient-to-r from-primary/10 to-blue-50 p-6 rounded-xl shadow-lg border-l-4 border-primary">
                    <h3 className="text-xl md:text-2xl font-bold text-primary mb-2">Advocate Ajay Shankar Sharma</h3>
                    <p className="text-lg text-primary font-semibold mb-2">Current Legal Expert</p>
                    <p className="text-muted-foreground">Leading the third generation with 33+ years of experience, combining traditional expertise with modern digital solutions.</p>
                  </div>
                </div>
                <div className="md:absolute md:left-1/2 md:transform md:-translate-x-1/2">
                  <div className="w-20 h-28 md:w-24 md:h-32 rounded-lg overflow-hidden border-4 border-primary shadow-xl bg-white">
                    <img 
                      src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                      alt="Advocate Ajay Shankar Sharma" 
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </div>
                <div className="md:w-1/2 md:pl-8"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Highlight */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose TiewalaVakil?
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our combination of heritage, expertise, and modern approach makes us the trusted choice for property legal services
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Scale className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">75+ Years Heritage</h3>
                <p className="text-muted-foreground">Three generations of legal expertise passed down through our family tradition.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Expert Documentation</h3>
                <p className="text-muted-foreground">Professional बैनामा लेखक services with accurate legal documentation.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Client Focused</h3>
                <p className="text-muted-foreground">Personalized legal solutions tailored to your unique property needs.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Transparent Process</h3>
                <p className="text-muted-foreground">Clear pricing and step-by-step guidance throughout the legal process.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Hapur Based</h3>
                <p className="text-muted-foreground">Local expertise with deep understanding of regional property laws.</p>
              </CardContent>
            </Card>

            <Card className="p-6 hover:shadow-xl transition-shadow duration-300 border-2 hover:border-primary/20">
              <CardContent className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Online Services</h3>
                <p className="text-muted-foreground">Digital consultation and documentation services for modern convenience.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact us today for expert property legal consultation and documentation services
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a href="/book-consultant">
              <Button size="lg" variant="secondary" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full md:w-auto">
                Book Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 border-white text-white bg-transparent border-2 w-full md:w-auto">
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

export default About;

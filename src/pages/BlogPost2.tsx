
import { Calendar, User, Clock, ArrowLeft, Share2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const BlogPost2 = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Blog Post Header */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <a href="/blogs" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Trusted Property Legal Services in Hapur | बैनामा लेखक | Advocate Ajay Shankar Sharma
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-6 md:mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">Advocate Ajay Shankar Sharma</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">December 10, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">8 min read</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">बैनामा लेखक</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">Property Law</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">Hapur Legal Services</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <article className="prose prose-lg max-w-none">
                  <img 
                    src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                    alt="Trusted Property Legal Services in Hapur"
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-8"
                  />
                  
                  <div className="text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 text-muted-foreground">
                    <p className="text-lg md:text-xl font-medium text-primary">
                      Are you looking for reliable, affordable, and legally sound property services in Hapur? Meet Advocate Ajay Shankar Sharma, one of the most trusted and experienced बैनामा लेखक (Deed Writers) in Hapur, offering over 33 years of legal expertise and a family legacy of legal service since the 1950s.
                    </p>
                    
                    <p>
                      At Tiewalavakil, we provide a complete range of legal solutions for property documentation, registration, consultation, and stamp duty matters — both offline and online.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">✅ Why Choose Tiewalavakil in Hapur?</h2>
                    <p>
                      When dealing with land, home, shop, or any real estate transaction, legal errors can cost you years of trouble. That's why clients from across Hapur and nearby areas trust Tiewalavakil for accurate, court-admissible, and government-recognized documentation and legal services.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">What Makes Us Different:</h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✔️</span>
                        <span>Over 33 years of hands-on legal practice</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✔️</span>
                        <span>Licensed बैनामा लेखक in Hapur</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✔️</span>
                        <span>Fast & error-free documentation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✔️</span>
                        <span>Services available online and offline</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✔️</span>
                        <span>Transparent and affordable fees</span>
                      </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">📄 Our Property Legal Services in Hapur</h2>
                    <p>At Tiewalavakil, we cover all major legal needs related to property and personal documentation:</p>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">📜 Document Drafting & Registration</h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Sale Deed (विक्रय पत्र)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Gift Deed (दान पत्र)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Mortgage Deed (बंधक पत्र)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Lease Deed (पट्टा विलेख)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Agreement to Sell (इकरारनामा)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Will & Testament (वसीयतनामा)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Power of Attorney (मुख्तारनामा)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Correction & Cancellation Deeds</span>
                      </li>
                    </ul>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">🏢 Property Registration</h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Full assistance at the Sub-Registrar Office, Hapur</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Stamp Duty calculation & e-stamp management</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Appointment booking and document submission</span>
                      </li>
                    </ul>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">🧾 Property Document Services</h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Property Document Verification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Legal Scrutiny of Title, Registry, Mutation</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Online Drafting via WhatsApp/Email</span>
                      </li>
                    </ul>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">🧑‍⚖️ Specialized Legal Services</h3>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Mutation / Name Transfer (नामांतरण / नाम परिवर्तन)</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Stamp Duty Deficiency Case Resolution</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Legal Consultancy for Property Matters</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Marriage Registration (Court/Interfaith/Special Marriage Act)</span>
                      </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">🔍 SEO-Focused Legal Solutions</h2>
                    <p>Whether someone searches for:</p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>"बैनामा लेखक in Hapur"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>"Sale Deed registration Hapur"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>"Mutation name change Hapur"</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>"Legal property advice Hapur"</span>
                      </li>
                    </ul>
                    
                    <p>
                      Tiewalavakil ranks as the top local expert due to years of credibility, strong client reviews, and optimized legal solutions. We help individuals, families, and businesses complete legally valid registrations, solve ownership issues, draft error-free documents, and avoid future disputes.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">🖊️ Why a Licensed बैनामा लेखक is Important</h2>
                    <p>Today, many fall into the trap of using unlicensed or informal deed writers. This leads to errors in:</p>
                    
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">•</span>
                        <span>Names, address, or property boundaries</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">•</span>
                        <span>Stamp calculation and payment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-red-500 font-bold mr-2">•</span>
                        <span>Legal validity of the document</span>
                      </li>
                    </ul>

                    <p>With Advocate Ajay Shankar Sharma, you get:</p>
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Drafting done per Indian Registration Act and Stamp Act</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Valid documents accepted by court, bank, and authorities</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-green-500 font-bold mr-2">✓</span>
                        <span>Legal review to avoid rejection or litigation</span>
                      </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">📲 Get Legal Help Online or In-Person</h2>
                    <p>Whether you're based in Hapur or living outside the city, you can now access all our services online. We offer:</p>
                    
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>WhatsApp consultations</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Online deed drafting</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Stamp duty calculation help</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>E-registration guidance</span>
                      </li>
                    </ul>

                    <p>From start to finish — we make your legal journey hassle-free.</p>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6 mt-6 md:mt-8">
                      <h4 className="font-bold text-primary mb-2 md:mb-3">📞 Contact Hapur's Most Trusted Deed Writer</h4>
                      <p className="text-primary font-semibold">Tiewalavakil | Advocate Ajay Shankar Sharma</p>
                      <ul className="space-y-1 md:space-y-2 mt-3 text-primary">
                        <li>📍 Location: Near Sub-Registrar Office, Hapur</li>
                        <li>📲 Call/WhatsApp: 7037455191</li>
                        <li>🌐 Website: www.tiewalavakil.in</li>
                      </ul>
                      <p className="text-primary font-medium mt-3">Licensed बैनामा लेखक | Trusted Since 1950s | Court-Admissible Documents</p>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">📢 Final Words</h2>
                    <p>
                      Don't leave your property rights to chance. Whether it's a Sale Deed, Mutation, Will, or Legal Advice, always choose a trusted, licensed, and experienced legal professional. With Tiewalavakil, you're not just completing a legal formality — you're protecting your future.
                    </p>
                  </div>
                </article>

                {/* Share Section */}
                <div className="flex items-center justify-between pt-6 md:pt-8 mt-6 md:mt-8 border-t border-gray-200">
                  <div className="flex items-center space-x-3 md:space-x-4">
                    <span className="text-sm md:text-base font-medium text-muted-foreground">Share this article:</span>
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1">
                <div className="sticky top-4 space-y-6">
                  {/* Author Info */}
                  <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg border">
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                        alt="Advocate Ajay Shankar Sharma" 
                        className="w-28 h-28 md:w-32 md:h-32 rounded-full mx-auto mb-4 md:mb-6 border-4 border-primary shadow-lg"
                      />
                      <h3 className="font-bold text-primary text-lg md:text-xl mb-2">Advocate Ajay Shankar Sharma</h3>
                      <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">33+ Years Legal Experience</p>
                      <p className="text-sm md:text-base text-muted-foreground mb-6 md:mb-8">
                        Expert in Property Law, Documentation, and Legal Consultation
                      </p>
                      <div className="space-y-4">
                        <a href="tel:7037455191">
                          <Button size="lg" className="w-full">
                            <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            Call Now
                          </Button>
                        </a>
                        <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                          <Button size="lg" variant="outline" className="w-full">
                            <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" />
                            WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-primary/5 rounded-lg p-6 md:p-8 border border-primary/20">
                    <h3 className="font-bold text-primary mb-4 md:mb-6 text-lg md:text-xl">Need Legal Help?</h3>
                    <p className="text-base md:text-lg text-muted-foreground mb-4 md:mb-6">
                      Get expert advice on property matters and legal documentation.
                    </p>
                    <a href="/book-consultant">
                      <Button className="w-full font-semibold" size="lg">
                        Book Consultation
                      </Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Contact CTA with improved spacing and contact buttons */}
      <section className="py-6 md:py-8 lg:py-12 xl:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 lg:mb-6">
            Need Legal Consultation?
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
            Have questions about property law or need expert legal advice? Contact us today.
          </p>
          <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center">
            <a href="/contact-us">
              <Button size="lg" variant="secondary" className="font-semibold px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 w-full md:w-auto text-sm md:text-base">
                Contact Us
              </Button>
            </a>
            <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="font-semibold px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border-white text-white bg-transparent border-2 w-full md:w-auto text-sm md:text-base">
                Chat Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BlogPost2;

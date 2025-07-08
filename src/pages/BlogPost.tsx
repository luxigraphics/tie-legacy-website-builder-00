
import { Calendar, User, Clock, ArrowLeft, Share2, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const BlogPost = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Blog Post Header */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4 md:mb-6">
              <a href="/blog" className="inline-flex items-center text-primary hover:text-primary/80 transition-colors">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Blog
              </a>
            </div>
            <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Why Sale Deed is the Most Crucial Legal Document in Property Transactions
            </h1>
            <div className="flex flex-wrap items-center gap-4 md:gap-6 text-muted-foreground mb-6 md:mb-8">
              <div className="flex items-center">
                <User className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">Advocate Ajay Shankar Sharma</span>
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">December 15, 2024</span>
              </div>
              <div className="flex items-center">
                <Clock className="w-4 h-4 mr-2" />
                <span className="text-sm md:text-base">5 min read</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">Property Law</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">Sale Deed</span>
              <span className="px-3 py-1 bg-primary/10 text-primary text-xs md:text-sm rounded-full font-medium">Legal Advice</span>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-3">
                <article className="prose prose-lg max-w-none">
                  <img 
                    src="/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png" 
                    alt="Sale Deed Legal Document"
                    className="w-full h-64 md:h-80 object-cover rounded-xl shadow-lg mb-6 md:mb-8"
                  />
                  
                  <div className="text-base md:text-lg leading-relaxed space-y-4 md:space-y-6 text-muted-foreground">
                    <p className="text-lg md:text-xl font-medium text-primary">
                      In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">What is a Sale Deed?</h2>
                    <p>
                      A Sale Deed is a legal document that transfers ownership of immovable property from the seller to the buyer. It serves as conclusive proof of ownership and is mandatory for registering property transactions under the Registration Act, 1908.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Why is Sale Deed Crucial?</h2>
                    
                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">1. Legal Proof of Ownership</h3>
                    <p>
                      The Sale Deed is the primary document that establishes your legal right over the property. Without a registered sale deed, you cannot claim ownership rights in any court of law.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">2. Protection Against Fraud</h3>
                    <p>
                      A properly executed and registered sale deed protects you from property frauds, duplicate sales, and forged documents. It creates a clear chain of title that can be verified through government records.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">3. Bank Loan Eligibility</h3>
                    <p>
                      Banks and financial institutions require a clear and marketable title backed by a registered sale deed before approving any home loan or mortgage against the property.
                    </p>

                    <h3 className="text-lg md:text-xl font-semibold text-primary mt-4 md:mt-6 mb-2 md:mb-3">4. Future Resale Value</h3>
                    <p>
                      A property with a clear sale deed has better resale value and marketability. Buyers prefer properties with clean documentation and clear titles.
                    </p>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Essential Elements of a Valid Sale Deed</h2>
                    
                    <ul className="space-y-2 md:space-y-3">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Complete details of buyer and seller with proper identification</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Accurate property description including boundaries and measurements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Consideration amount paid and mode of payment</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Clear title and ownership history</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Signatures of parties and witnesses</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">•</span>
                        <span>Registration at the Sub-Registrar's office</span>
                      </li>
                    </ul>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Common Mistakes to Avoid</h2>
                    
                    <div className="bg-red-50 border border-red-200 rounded-lg p-4 md:p-6 mb-4 md:mb-6">
                      <h4 className="font-bold text-red-700 mb-2 md:mb-3">⚠️ Warning Signs</h4>
                      <ul className="space-y-1 md:space-y-2 text-red-700">
                        <li>• Unregistered sale agreements</li>
                        <li>• Missing or incomplete property documents</li>
                        <li>• Unclear boundaries or measurements</li>
                        <li>• Pending legal disputes on the property</li>
                        <li>• Incorrect stamp duty payment</li>
                      </ul>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Expert Legal Consultation</h2>
                    <p>
                      Property transactions involve complex legal procedures and documentation. It's crucial to consult with an experienced property lawyer who can:
                    </p>
                    
                    <ul className="space-y-2 md:space-y-3 mt-3 md:mt-4">
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Verify property documents and title clearance</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Draft and review sale deed agreements</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Ensure proper registration procedures</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary font-bold mr-2">✓</span>
                        <span>Protect your interests throughout the transaction</span>
                      </li>
                    </ul>

                    <div className="bg-primary/5 border border-primary/20 rounded-lg p-4 md:p-6 mt-6 md:mt-8">
                      <h4 className="font-bold text-primary mb-2 md:mb-3">💡 Professional Advice</h4>
                      <p className="text-primary">
                        "Never proceed with a property transaction without proper legal verification. A small investment in legal consultation can save you from major financial losses and legal complications." - Advocate Ajay Shankar Sharma
                      </p>
                    </div>

                    <h2 className="text-xl md:text-2xl font-bold text-primary mt-6 md:mt-8 mb-3 md:mb-4">Conclusion</h2>
                    <p>
                      The Sale Deed is not just a piece of paper—it's your legal shield against property disputes and fraud. Ensure every property transaction is backed by a properly executed, registered sale deed prepared under expert legal guidance.
                    </p>

                    <p className="font-medium text-primary">
                      Remember: A property without a clear sale deed is a liability, not an asset.
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
                  <div className="bg-white rounded-lg p-4 md:p-6 shadow-lg border">
                    <div className="text-center">
                      <img 
                        src="/lovable-uploads/7fcb1cb6-ab59-4fd4-ac3a-873cde116cc8.png" 
                        alt="Advocate Ajay Shankar Sharma" 
                        className="w-20 h-20 md:w-24 md:h-24 rounded-full mx-auto mb-3 md:mb-4 border-4 border-primary shadow-lg"
                      />
                      <h3 className="font-bold text-primary text-base md:text-lg">Advocate Ajay Shankar Sharma</h3>
                      <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">33+ Years Legal Experience</p>
                      <p className="text-xs md:text-sm text-muted-foreground mb-4 md:mb-6">
                        Expert in Property Law, Documentation, and Legal Consultation
                      </p>
                      <div className="space-y-2 md:space-y-3">
                        <a href="tel:7037455191">
                          <Button size="sm" className="w-full">
                            <Phone className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            Call Now
                          </Button>
                        </a>
                        <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer">
                          <Button size="sm" variant="outline" className="w-full">
                            <MessageCircle className="w-3 h-3 md:w-4 md:h-4 mr-2" />
                            WhatsApp
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Quick Contact */}
                  <div className="bg-primary/5 rounded-lg p-4 md:p-6 border border-primary/20">
                    <h3 className="font-bold text-primary mb-3 md:mb-4 text-base md:text-lg">Need Legal Help?</h3>
                    <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4">
                      Get expert advice on property matters and legal documentation.
                    </p>
                    <a href="/book-consultant">
                      <Button className="w-full font-semibold" size="sm">
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
      <Footer />
    </div>
  );
};

export default BlogPost;

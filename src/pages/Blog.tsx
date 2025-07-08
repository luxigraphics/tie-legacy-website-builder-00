
import { Calendar, User, Clock, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Blog = () => {
  const blogs = [
    {
      id: 1,
      title: "Why Sale Deed is the Most Crucial Legal Document in Property Transactions",
      excerpt: "In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property.",
      author: "Advocate Ajay Shankar Sharma",
      date: "December 15, 2024",
      readTime: "5 min read",
      image: "/lovable-uploads/315b4579-da29-4b6d-931b-adccdbf5ccee.png",
      tags: ["Property Law", "Sale Deed", "Legal Advice"],
      slug: "sale-deed-crucial-legal-document"
    },
    {
      id: 2,
      title: "Common Property Documentation Mistakes That Can Cost You Lakhs",
      excerpt: "Property documentation errors are more common than you think. Learn about the most frequent mistakes property buyers make and how proper legal guidance can save you from financial losses.",
      author: "Advocate Ajay Shankar Sharma", 
      date: "December 10, 2024",
      readTime: "4 min read",
      image: "/lovable-uploads/66396184-1e67-4743-938c-cd5ecac431d9.png",
      tags: ["Documentation", "Property Law", "Legal Tips"],
      slug: "property-documentation-mistakes"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Banner Section - Full width, original size */}
      <section className="relative w-full">
        <img 
          src="/lovable-uploads/ebd710f6-4054-42d6-b8df-624848df7e59.png"
          alt="Legal Insights Banner"
          className="w-full h-auto object-contain"
        />
      </section>

      {/* Blog Posts - 2 per row */}
      <section className="py-8 md:py-12 lg:py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-12 max-w-6xl mx-auto">
            {blogs.map((blog) => (
              <Card key={blog.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 flex flex-col">
                <div className="relative overflow-hidden">
                  <img 
                    src={blog.image} 
                    alt={blog.title}
                    className="w-full h-48 md:h-64 object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-4 md:p-6 lg:p-8 flex flex-col justify-between flex-grow">
                  <div>
                    <div className="flex flex-wrap gap-2 mb-3 md:mb-4">
                      {blog.tags.map((tag, index) => (
                        <span key={index} className="px-2 md:px-3 py-1 bg-primary/10 text-primary text-xs rounded-full font-medium">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-primary mb-3 md:mb-4 leading-tight hover:text-primary/80 transition-colors">
                      {blog.title}
                    </h2>
                    
                    <p className="text-muted-foreground mb-4 md:mb-6 leading-relaxed text-sm md:text-base">
                      {blog.excerpt}
                    </p>
                  </div>
                  
                  <div>
                    <div className="flex items-center justify-between text-xs md:text-sm text-muted-foreground mb-3 md:mb-4">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0">
                        <div className="flex items-center">
                          <User className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {blog.author}
                        </div>
                        <div className="flex items-center">
                          <Calendar className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                          {blog.date}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-3 h-3 md:w-4 md:h-4 mr-1" />
                        {blog.readTime}
                      </div>
                    </div>
                    
                    <a href={blog.id === 1 ? "/blog/sale-deed-crucial-legal-document" : "#"}>
                      <Button className="w-full font-semibold group text-sm md:text-base">
                        Read Full Article
                        <ArrowRight className="w-3 h-3 md:w-4 md:h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Contact CTA */}
      <section className="py-6 md:py-8 lg:py-12 xl:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 md:mb-4 lg:mb-6">
            Need Legal Consultation?
          </h2>
          <p className="text-sm md:text-base lg:text-lg mb-4 md:mb-6 lg:mb-8 max-w-2xl mx-auto">
            Have questions about property law or need expert legal advice? Contact us today.
          </p>
          <div className="flex flex-col md:flex-row gap-3 md:gap-4 justify-center">
            <a href="/contact">
              <Button size="lg" variant="secondary" className="font-semibold px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 w-full md:w-auto text-sm md:text-base">
                Contact Us
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" className="font-semibold px-4 md:px-6 lg:px-8 py-2 md:py-3 lg:py-4 border-white text-white bg-transparent border-2 w-full md:w-auto text-sm md:text-base">
                Call: 7037455191
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;

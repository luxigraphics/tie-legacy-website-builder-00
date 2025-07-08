
import { Button } from "@/components/ui/button";

const Newsletter = () => {
  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Stay Updated with Legal Insights
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest updates on property law, legal procedures, and expert advice delivered to your inbox
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="flex-1 px-4 py-3 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button className="px-6 py-3 font-semibold">
            Subscribe
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

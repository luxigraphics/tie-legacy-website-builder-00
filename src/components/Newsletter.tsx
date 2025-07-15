
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-12 md:py-16 bg-muted/30">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
          Stay Updated with Legal Insights
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Get the latest updates on property law, legal procedures, and expert advice delivered to your inbox
        </p>
        <form 
          action="https://formsubmit.co/tiewalavakil@gmail.com" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-lg mx-auto"
        >
          <input type="hidden" name="_subject" value="New Newsletter Subscription - Tiewalavakil" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value={`${window.location.origin}?subscribed=true`} />
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email address" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-4 py-3 h-12 rounded-lg border border-input bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <Button type="submit" className="px-6 h-12 font-semibold sm:w-auto w-full">
            Subscribe
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Newsletter;

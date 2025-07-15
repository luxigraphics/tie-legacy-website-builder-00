
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create form data for FormSubmit
    const formData = new FormData();
    formData.append('email', email);
    formData.append('_subject', 'New Newsletter Subscription - Tiewalavakil');
    formData.append('_captcha', 'false');

    try {
      await fetch('https://formsubmit.co/a46a17efda441142f34035275ea6230e', {
        method: 'POST',
        body: formData
      });

      // Show success toast
      toast({
        title: "Thank You for Subscribing!",
        description: "आपका subscription successful हो गया है। आपको जल्द ही legal insights और updates मिलना शुरू हो जाएंगे।",
        duration: 5000,
      });

      // Reset form
      setEmail("");
    } catch (error) {
      toast({
        title: "Subscription Failed",
        description: "कुछ गलत हुआ है। कृपया दोबारा कोशिश करें।",
        variant: "destructive",
        duration: 5000,
      });
    }
  };

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
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-4 justify-center items-stretch max-w-lg mx-auto"
        >
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

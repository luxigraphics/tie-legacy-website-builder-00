import { Phone, MessageCircle, Calendar, Clock, Video, User, Mail, FileText, CheckCircle, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useState, useEffect } from "react";
import { useToast } from "@/hooks/use-toast";
import { useNavigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

// Declare Razorpay type
declare global {
  interface Window {
    Razorpay: any;
  }
}

const BookConsultant = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    amount: "",
    consultationType: "",
    message: ""
  });
  const [isProcessing, setIsProcessing] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user was redirected back after successful booking
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('booking') === 'success') {
      setShowThankYou(true);
      // Remove the parameter from URL
      window.history.replaceState({}, document.title, window.location.pathname);
    }
  }, []);

  const handlePayment = () => {
    // Validate required fields
    if (!formData.name || !formData.email || !formData.phone || !formData.amount) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields before proceeding with payment.",
        variant: "destructive"
      });
      return;
    }

    if (!formData.amount || isNaN(Number(formData.amount)) || Number(formData.amount) <= 0) {
      toast({
        title: "Invalid Amount",
        description: "Please enter a valid amount in ₹.",
        variant: "destructive"
      });
      return;
    }

    setIsProcessing(true);

    const options = {
      key: 'rzp_test_nx5KNhcSn4ZNXpfuccc4cz7X', // Razorpay API key
      amount: Number(formData.amount) * 100, // Amount in paise
      currency: 'INR',
      name: 'Tiewalavakil Legal Consultancy',
      description: 'Legal Consultation Payment',
      image: '/lovable-uploads/277f1b46-80f1-4bc3-85ff-7189eedb6bea.png',
      handler: function (response: any) {
        // Payment successful
        handlePaymentSuccess(response);
      },
      prefill: {
        name: formData.name,
        email: formData.email,
        contact: formData.phone
      },
      notes: {
        consultation_type: formData.consultationType,
        message: formData.message
      },
      theme: {
        color: '#3B82F6'
      },
      modal: {
        ondismiss: function() {
          setIsProcessing(false);
          toast({
            title: "Payment Cancelled",
            description: "Payment was cancelled by user.",
            variant: "destructive"
          });
        }
      }
    };

    if (window.Razorpay) {
      const rzp = new window.Razorpay(options);
      rzp.open();
    } else {
      setIsProcessing(false);
      toast({
        title: "Payment Gateway Error",
        description: "Razorpay is not loaded. Please refresh the page and try again.",
        variant: "destructive"
      });
    }
  };

  const handlePaymentSuccess = (paymentResponse: any) => {
    // Show success message
    toast({
      title: "Payment Successful!",
      description: `Payment of ₹${formData.amount} completed successfully. Your consultation request has been sent. We will contact you within 30 minutes. Redirecting to home page...`,
    });

    // Reset form
    setFormData({ name: "", email: "", phone: "", amount: "", consultationType: "", message: "" });
    setIsProcessing(false);

    // Redirect to home page after 4 seconds
    setTimeout(() => {
      navigate('/');
    }, 4000);
  };

  const consultationTypes = [
    {
      icon: Phone,
      title: "Phone Consultation",
      description: "Quick legal advice over phone call",
      duration: "15-30 minutes",
      price: "₹500"
    },
    {
      icon: Video,
      title: "Video Consultation",
      description: "Face-to-face consultation via video call",
      duration: "30-45 minutes", 
      price: "₹800"
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Consultation",
      description: "Chat-based legal guidance",
      duration: "Ongoing support",
      price: "₹300"
    },
    {
      icon: FileText,
      title: "Document Review",
      description: "Comprehensive document analysis",
      duration: "2-3 hours",
      price: "₹1500"
    }
  ];

  // Show thank you message if booking was successful
  if (showThankYou) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="py-20 bg-gradient-to-r from-green-50 to-green-100 min-h-screen flex items-center">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto text-center bg-white rounded-lg shadow-2xl p-12">
              <div className="text-green-600 text-8xl mb-6">✓</div>
              <h1 className="text-4xl md:text-5xl font-bold text-green-800 mb-6">
                Thank You!
              </h1>
              <h2 className="text-2xl font-semibold text-green-700 mb-4">
                आपका Consultation Request Submit हो गया है!
              </h2>
              <p className="text-lg text-green-600 mb-6 leading-relaxed">
                हमारी team आपको <strong>30 मिनट के अंदर</strong> contact करेगी। 
                आपकी legal problem का solution जल्द ही मिलेगा।
              </p>
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-8">
                <p className="text-green-800 font-medium">
                  📞 अगर urgent है तो direct call करें: <strong>7037455191</strong>
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  onClick={() => navigate('/')}
                  className="bg-green-600 hover:bg-green-700 px-8 py-3"
                >
                  Go to Homepage
                </Button>
                <Button 
                  onClick={() => setShowThankYou(false)}
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-3"
                >
                  Book Another Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-primary mb-4 md:mb-6 leading-tight">
              Book Your Legal Consultation
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 md:mb-8 leading-relaxed">
              Get expert legal advice from Advocate Ajay Shankar Sharma. Choose your preferred consultation method and complete secure payment.
            </p>
            <div className="flex justify-center">
              <div className="w-40 h-52 md:w-48 md:h-64 rounded-xl overflow-hidden border-4 border-primary shadow-2xl">
                <img 
                  src="/lovable-uploads/a5616b2f-0963-4545-87ba-000cd45c804a.png" 
                  alt="Advocate Ajay Shankar Sharma - Professional Legal Consultant" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultation Types */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Choose Your Consultation Type
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12 md:mb-16">
            {consultationTypes.map((type, index) => (
              <Card key={index} className="text-center p-4 md:p-6 hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                <CardContent className="p-4 md:p-6">
                  <type.icon className="w-10 h-10 md:w-12 md:h-12 text-primary mx-auto mb-3 md:mb-4" aria-hidden="true" />
                  <h3 className="text-lg md:text-xl font-bold text-primary mb-2">{type.title}</h3>
                  <p className="text-muted-foreground mb-3 md:mb-4 text-sm md:text-base">{type.description}</p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center text-xs md:text-sm text-muted-foreground">
                      <Clock className="w-3 h-3 md:w-4 md:h-4 mr-2" aria-hidden="true" />
                      {type.duration}
                    </div>
                    <div className="text-xl md:text-2xl font-bold text-primary">{type.price}</div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Form with FormSubmit */}
      <section className="py-12 md:py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="border-2 border-primary/30">
              <CardContent className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4 md:mb-6 text-center">
                  Book Your Consultation
                </h2>
                <div className="bg-blue-50 p-4 rounded-lg mb-6">
                  <div className="flex items-center text-blue-800 mb-2">
                    <Mail className="w-5 h-5 mr-2" />
                    <span className="font-semibold">Direct Email Submission</span>
                  </div>
                  <p className="text-blue-700 text-sm">
                    Your consultation request will be sent directly to our email. We'll contact you within 30 minutes.
                  </p>
                </div>
                <form 
                  action="https://formsubmit.co/a46a17efda441142f34035275ea6230e" 
                  method="POST" 
                  className="space-y-4 md:space-y-6"
                >
                  <input type="hidden" name="_subject" value="New Consultation Booking - Tiewalavakil" />
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_next" value={`${window.location.origin}?booking=success`} />
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm md:text-base">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        required
                        placeholder="Enter your full name"
                        className="mt-1"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone" className="text-sm md:text-base">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        required
                        placeholder="Enter your phone number"
                        className="mt-1"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email" className="text-sm md:text-base">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="Enter your email address"
                      className="mt-1"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                    <div>
                      <Label htmlFor="consultationType" className="text-sm md:text-base">Consultation Type</Label>
                      <select
                        id="consultationType"
                        name="consultationType"
                        className="w-full p-2 md:p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary focus:border-transparent mt-1 text-sm md:text-base"
                      >
                        <option value="">Select consultation type</option>
                        <option value="phone">Phone Consultation - ₹500</option>
                        <option value="video">Video Consultation - ₹800</option>
                        <option value="whatsapp">WhatsApp Consultation - ₹300</option>
                        <option value="document">Document Review - ₹1500</option>
                        <option value="custom">Custom Amount</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="amount" className="text-sm md:text-base">Preferred Amount (₹)</Label>
                      <Input
                        id="amount"
                        name="amount"
                        type="number"
                        placeholder="Enter amount in ₹"
                        min="1"
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm md:text-base">Describe Your Legal Issue</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Please describe your legal issue in detail..."
                      rows={4}
                      className="mt-1"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full text-base md:text-lg font-semibold py-3 md:py-4"
                  >
                    <Mail className="w-4 h-4 md:w-5 md:h-5 mr-2" aria-hidden="true" />
                    Send Consultation Request
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Why Book With Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <CheckCircle className="w-10 h-10 md:w-12 md:h-12 text-green-500 mx-auto mb-3 md:mb-4" aria-hidden="true" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Immediate Response</h3>
                <p className="text-muted-foreground text-sm md:text-base">Get response within 30 minutes of booking your consultation request.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <User className="w-10 h-10 md:w-12 md:h-12 text-blue-500 mx-auto mb-3 md:mb-4" aria-hidden="true" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Expert Guidance</h3>
                <p className="text-muted-foreground text-sm md:text-base">33+ years of experience in property law and legal consultation.</p>
              </CardContent>
            </Card>

            <Card className="text-center p-4 md:p-6 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-4 md:p-6">
                <Clock className="w-10 h-10 md:w-12 md:h-12 text-orange-500 mx-auto mb-3 md:mb-4" aria-hidden="true" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-2">Flexible Timing</h3>
                <p className="text-muted-foreground text-sm md:text-base">Schedule consultations at your convenience, including evenings and weekends.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Immediate Contact Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Need Immediate Legal Help?
          </h2>
          <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto">
            Don't wait! Call us directly for urgent legal matters. Advocate Ajay Shankar Sharma is available for immediate consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
            <a href="tel:7037455191" aria-label="Call Tiewalavakil at 7037455191">
              <Button size="lg" variant="secondary" className="bg-white text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <Phone className="w-4 h-4 md:w-5 md:h-5 mr-2" aria-hidden="true" />
                Call Now: 7037455191
              </Button>
            </a>
            <a href="https://wa.me/917037455191" target="_blank" rel="noopener noreferrer" aria-label="Contact Tiewalavakil on WhatsApp">
              <Button size="lg" variant="secondary" className="bg-white text-primary font-semibold px-6 md:px-8 py-3 md:py-4 text-base md:text-lg w-full sm:w-auto">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 mr-2" aria-hidden="true" />
                WhatsApp Now
              </Button>
            </a>
          </div>
        </div>
      </section>

      <Newsletter />
      <Footer />
    </div>
  );
};

export default BookConsultant;

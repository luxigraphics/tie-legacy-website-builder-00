
import { Scale, Award, Users, Phone, FileText, Home, Shield, Clock, CheckCircle, Star, Heart, Building, Gavel } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";

const Services = () => {
  const mainServices = [
    {
      id: 1,
      title: "विक्रय पत्र (Sale Deed)",
      description: "We help you prepare and register a legally valid Sale Deed for transferring property ownership in Hapur.",
      icon: FileText,
      details: [
        "Professionally drafted Sale Deeds with accurate property and party details",
        "Stamp duty and registration fee calculation",
        "Complete support at the Sub-Registrar Office",
        "Ensures legal ownership transfer and title clarity"
      ]
    },
    {
      id: 2,
      title: "दान पत्र (Gift Deed)",
      description: "Transfer property to your loved ones through a legally valid Gift Deed.",
      icon: Heart,
      details: [
        "Drafting of Gift Deeds for property without exchange of money",
        "Guidance on stamp duty exemptions (if applicable)",
        "Verification of relationship between donor and donee",
        "Registered under the local Sub-Registrar authority in Hapur"
      ]
    },
    {
      id: 3,
      title: "बंधक पत्र (Mortgage Deed)",
      description: "Secure your loan or credit using your property with a well-drafted Mortgage Deed.",
      icon: Shield,
      details: [
        "Detailed mortgage agreements for lenders and borrowers",
        "Inclusion of interest rate, repayment terms, and conditions",
        "Legal protection against default or disputes",
        "Registration support for mortgage documentation in Hapur"
      ]
    },
    {
      id: 4,
      title: "इकरारनामा (Agreement to Sale)",
      description: "An Agreement to Sale defines the intent and conditions before executing the final Sale Deed.",
      icon: Scale,
      details: [
        "Drafting agreements with or without immediate possession",
        "Clearly defined payment terms, possession timelines, and penalties",
        "Legal verification of property ownership",
        "Optional registration for extra legal security"
      ]
    },
    {
      id: 5,
      title: "विनिमय विलेख (Exchange Deed)",
      description: "Exchange of property must be documented properly to avoid disputes.",
      icon: Users,
      details: [
        "Drafting of Exchange Deeds between parties swapping properties",
        "Assessment of fair value of properties",
        "Stamp duty calculations specific to exchange transactions",
        "Legal support for registration in Hapur"
      ]
    },
    {
      id: 6,
      title: "पट्टा विलेख (Lease Deed)",
      description: "Whether for residential, commercial, or agricultural use—leasing needs clear documentation.",
      icon: Building,
      details: [
        "Lease Deeds customized for monthly/annual rentals",
        "Terms including security, rent escalation, and renewal clauses",
        "Drafts for shops, houses, land, and warehouses",
        "Notarization and optional registration support"
      ]
    },
    {
      id: 7,
      title: "वसीयतनामा (Will)",
      description: "A Will ensures your assets are distributed as per your wishes.",
      icon: Award,
      details: [
        "Legally valid Will drafting under Indian succession laws",
        "Guidance on executors, legal heirs, and distribution",
        "Secrecy and confidentiality guaranteed",
        "Assistance in registration and safe custody"
      ]
    },
    {
      id: 8,
      title: "मुख्तयारनामा (Power of Attorney)",
      description: "POAs are essential when you need someone else to act legally on your behalf.",
      icon: Gavel,
      details: [
        "General and Special POA drafting",
        "Includes rights for property, finance, or legal representation",
        "Suitable for NRIs, elderly citizens, or business owners",
        "Proper registration in Hapur for enforceability"
      ]
    }
  ];

  const additionalServices = [
    {
      title: "गोदनामा (Adoption Deed)",
      description: "Make your adoption legally valid and recognized with an official deed.",
      features: [
        "Drafting of Adoption Deeds as per Indian adoption laws",
        "Guidance on supporting documents and age conditions",
        "Confidential handling and legal clarity",
        "Suitable for court or legal presentation"
      ]
    },
    {
      title: "ट्रस्ट डीड (Trust Deed)",
      description: "Set up your charitable or private family trust with legal documentation.",
      features: [
        "Drafting of Trust Deeds including trustees, beneficiaries, and objectives",
        "Includes rules for managing funds and property",
        "Legal compliance with trust laws in India",
        "Trust registration and advisory support"
      ]
    },
    {
      title: "कैंसिलेशन (Cancellation Deed)",
      description: "Cancel an already registered deed if it's no longer valid or required.",
      features: [
        "Cancellation of Sale, Gift, or Lease Deeds",
        "Requires mutual consent and legal documentation",
        "Drafting of legal grounds for cancellation",
        "Registration support in the concerned office"
      ]
    },
    {
      title: "करेक्शन डीड (Correction Deed)",
      description: "Fix spelling mistakes or clerical errors in your registered property document.",
      features: [
        "Drafting Correction Deeds for minor changes",
        "Examples: name spelling, area, property number corrections",
        "Affidavit and supporting paperwork",
        "Helps maintain accuracy without legal complications"
      ]
    },
    {
      title: "शादी रजिस्ट्रेशन (Marriage Registration)",
      description: "Make your marriage legally valid with a government-issued certificate.",
      features: [
        "Marriage registration under Hindu/Special Marriage Acts",
        "Affidavit and document preparation",
        "Appointment booking and submission at Marriage Registrar",
        "Certificate delivery with legal acceptance"
      ]
    }
  ];

  const expertServices = [
    {
      title: "Property Document Verification",
      description: "We verify ownership, legal title, encumbrance, and past transactions of any property in Hapur to ensure your investment is risk-free."
    },
    {
      title: "Property Document Drafting",
      description: "Custom drafting of property documents like sale agreements, affidavits, and POAs by legal experts familiar with Hapur property laws."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-gradient-to-r from-blue-50 to-blue-100">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
            Tiewalavakil – Trusted Legal Document Services in Hapur
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-4xl mx-auto mb-6">
            Tiewalavakil provides reliable, affordable, and professional legal documentation and registration services in Hapur. We specialize in property-related deeds, family documentation, and legal advisory, all tailored to local requirements and legal standards. Our team of experienced legal professionals ensures that your documents are drafted with clarity and registered on time.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/book-consultant">
              <Button size="lg" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                Book Free Consultation
              </Button>
            </a>
            <a href="tel:7037455191">
              <Button size="lg" variant="outline" className="font-semibold px-6 md:px-8 py-3 md:py-4 w-full sm:w-auto">
                <Phone className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Call: 7037455191
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Our Core Legal Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
            {mainServices.map((service) => (
              <Card key={service.id} className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                <service.icon className="w-10 h-10 text-primary mb-4" />
                <h3 className="text-lg md:text-xl font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-sm md:text-base text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2">
                  {service.details.map((detail, index) => (
                    <li key={index} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-8 md:py-12 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Additional Legal Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-4 md:p-6 hover:shadow-lg transition-shadow h-full flex flex-col">
                <h3 className="text-lg font-bold text-primary mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 flex-grow">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="text-sm text-muted-foreground flex items-start">
                      <CheckCircle className="w-4 h-4 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Services */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-primary mb-8 md:mb-12">
            Expert Legal Services
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {expertServices.map((service, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
                  <h3 className="text-xl font-bold text-primary">{service.title}</h3>
                </div>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Newsletter />

      {/* Contact Section */}
      <section className="py-8 md:py-12 lg:py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            Ready to Get Legal Assistance?
          </h2>
          <p className="text-base md:text-lg mb-6 md:mb-8 max-w-2xl mx-auto">
            Contact Advocate Ajay Shankar Sharma today for expert property legal consultation and documentation services
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

export default Services;

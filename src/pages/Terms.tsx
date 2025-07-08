
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 md:mb-6">
              Terms & Conditions
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground">
              Please read these terms and conditions carefully before using our services
            </p>
          </div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-12 md:py-16 lg:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto prose prose-lg max-w-none">
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">1. Acceptance of Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  By accessing and using our consultancy services, you accept and agree to be bound by the terms and provision of this agreement.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">2. Services Description</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Our consultancy provides professional advisory services including but not limited to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Business strategy consulting</li>
                  <li>AI and technology implementation</li>
                  <li>Digital transformation guidance</li>
                  <li>Process optimization</li>
                  <li>Custom software solutions</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">3. Client Responsibilities</h2>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Clients are responsible for:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Providing accurate and complete information</li>
                  <li>Timely payment of fees as agreed</li>
                  <li>Cooperating with our team during project execution</li>
                  <li>Maintaining confidentiality of proprietary information</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">4. Payment Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Payment terms will be specified in individual service agreements. Generally, we require 50% upfront payment for projects exceeding $5,000, with the remainder due upon completion. Late payments may incur additional charges.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">5. Intellectual Property</h2>
                <p className="text-muted-foreground leading-relaxed">
                  All materials, methodologies, and intellectual property developed specifically for a client become the property of the client upon full payment. Pre-existing company IP and general methodologies remain our property.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">6. Confidentiality</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We maintain strict confidentiality regarding all client information and business details. We expect the same level of confidentiality from our clients regarding our proprietary methods and information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">7. Limitation of Liability</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Our liability is limited to the amount paid for services. We are not liable for indirect, consequential, or punitive damages arising from our services or recommendations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">8. Termination</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Either party may terminate services with 30 days written notice. Upon termination, all outstanding fees become immediately due, and each party must return or destroy confidential information.
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">9. Governing Law</h2>
                <p className="text-muted-foreground leading-relaxed">
                  These terms are governed by the laws of [Your State/Country]. Any disputes will be resolved through binding arbitration in [Your City].
                </p>
              </div>

              <div>
                <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">10. Changes to Terms</h2>
                <p className="text-muted-foreground leading-relaxed">
                  We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on our website. Continued use of our services constitutes acceptance of modified terms.
                </p>
              </div>

              <div className="bg-muted/30 p-6 rounded-lg">
                <p className="text-sm text-muted-foreground">
                  <strong>Last Updated:</strong> December 2024
                </p>
                <p className="text-sm text-muted-foreground mt-2">
                  If you have questions about these terms, please contact us at legal@consultancy.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Terms;

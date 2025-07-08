import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Shield, FileText, RotateCcw, Phone, MessageCircle, ArrowLeft } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Privacy = () => {
  const [activeTab, setActiveTab] = useState("privacy");

  const renderContent = () => {
    switch (activeTab) {
      case "privacy":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <Shield className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Privacy Policy – Tiewalavakil</h2>
            </div>
            
            <p className="text-sm text-muted-foreground mb-6">Effective Date: January 2024</p>
            
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Tiewalavakil, we respect your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, share, and safeguard your data when you use our website or legal services.
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-primary mb-3">1. 📄 Information We Collect</h3>
                <p className="text-muted-foreground mb-3">We may collect the following types of information:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li><strong>Personal Information:</strong> Name, mobile number, email, address, and ID proofs.</li>
                  <li><strong>Property Details:</strong> Land records, ownership documents, sale deed, etc.</li>
                  <li><strong>Service Usage Info:</strong> Pages you visit, forms you submit, and documents uploaded.</li>
                  <li><strong>Communication Details:</strong> When you call, email, or chat with us.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">2. 🔍 How We Use Your Information</h3>
                <p className="text-muted-foreground mb-3">We use your information to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Provide legal advice, document verification, and registration services.</li>
                  <li>Prepare or draft your legal documents as requested.</li>
                  <li>Schedule appointments with government offices.</li>
                  <li>Send updates and communicate regarding your case.</li>
                  <li>Improve our website and services.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">3. 🔐 Data Security</h3>
                <p className="text-muted-foreground">
                  We take all necessary steps to protect your data. Your information is stored securely and only shared with trusted legal partners or government platforms when required for service delivery. We do not sell or rent your personal information to anyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">4. 📤 Sharing Your Information</h3>
                <p className="text-muted-foreground mb-3">We may share your information with:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Sub-registrar offices or government bodies (only if required).</li>
                  <li>Advocates or legal professionals working on your case.</li>
                  <li>Our trusted support staff under confidentiality.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">5. 🍪 Cookies</h3>
                <p className="text-muted-foreground">
                  Our website uses cookies to improve user experience. Cookies help us understand which pages are most visited and how we can improve our services. You can disable cookies through your browser settings anytime.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">6. ✅ Your Rights</h3>
                <p className="text-muted-foreground mb-3">You have the right to:</p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                  <li>Request access to the data we hold about you.</li>
                  <li>Ask us to update or correct incorrect information.</li>
                  <li>Ask us to delete your data (except where legally required to keep it).</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">7. 📞 Contact Us</h3>
                <p className="text-muted-foreground mb-3">
                  If you have any questions about this Privacy Policy or want to update/remove your data, you can contact us at:
                </p>
                <div className="bg-muted/50 p-4 rounded-lg">
                  <p className="font-semibold">Advocate Ajay Shankar Sharma</p>
                  <p>Tiewalavakil – Hapur Office</p>
                  <p>📧 Email: tiewalavakil@gmail.com</p>
                  <p>📞 Phone: 7037455191</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">8. 🔄 Policy Updates</h3>
                <p className="text-muted-foreground">
                  We may update this Privacy Policy from time to time. Changes will be posted on this page with the updated date. We suggest checking this page regularly to stay informed.
                </p>
              </div>
            </div>
          </div>
        );

      case "disclaimer":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <FileText className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Legal Disclaimer</h2>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-primary">No Attorney-Client Relationship</h3>
              <p className="text-muted-foreground leading-relaxed">
                Viewing this website or contacting us does not create an attorney-client relationship. An attorney-client relationship is established only after a formal consultation and mutual agreement.
              </p>

              <h3 className="text-xl font-bold text-primary">Legal Advice Disclaimer</h3>
              <p className="text-muted-foreground leading-relaxed">
                The content on this website should not be considered as legal advice for any specific case. Each legal matter is unique and requires individual assessment. Always consult with a qualified legal professional for advice specific to your situation.
              </p>

              <h3 className="text-xl font-bold text-primary">Accuracy of Information</h3>
              <p className="text-muted-foreground leading-relaxed">
                While we strive to keep the information up-to-date and accurate, we make no representations or warranties about the completeness, accuracy, reliability, suitability, or availability of the information contained on this website.
              </p>

              <h3 className="text-xl font-bold text-primary">Limitation of Liability</h3>
              <p className="text-muted-foreground leading-relaxed">
                TiewalaVakil and Advocate Ajay Shankar Sharma shall not be liable for any losses or damages arising from the use of information on this website or any actions taken based on such information.
              </p>
            </div>
          </div>
        );

      case "return":
        return (
          <div className="space-y-6">
            <div className="flex items-center space-x-3 mb-6">
              <RotateCcw className="w-8 h-8 text-primary" />
              <h2 className="text-3xl font-bold text-primary">Return Policy - Sale Deed Importance</h2>
            </div>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-primary mb-4">Why Sale Deed is the Most Crucial Legal Document in Property Transactions – Explained by Hapur's Trusted Legal Expert</h3>
                <p className="text-muted-foreground leading-relaxed">
                  In the Indian real estate market, property frauds and legal disputes are more common than ever. Whether you're buying a plot, flat, or commercial shop — the Sale Deed is the most important legal document that ensures you are the lawful owner of the property. At Tiewalavakil, Hapur, we've seen dozens of cases where people assumed they owned a property just because they paid money — but had no valid Sale Deed to prove it.
                </p>
                <p className="text-muted-foreground leading-relaxed mt-4">
                  Let's understand why this single document can either secure your ownership — or cost you everything.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📜 What is a Sale Deed?</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A Sale Deed (विक्रय पत्र) is a legal document that officially transfers ownership of a property from the seller to the buyer. It is executed after full payment has been made and is registered at the Sub-Registrar Office. Without a registered Sale Deed, your transaction holds no legal value — even if other documents exist.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🚨 Common Misconceptions</h3>
                <p className="text-muted-foreground leading-relaxed mb-3">
                  Many property buyers in smaller cities like Hapur, Pilkhuwa, and nearby areas often think that documents like Power of Attorney (POA), Agreement to Sell, or affidavits are enough to claim ownership. But according to Supreme Court rulings, only a registered Sale Deed is considered conclusive proof of ownership.
                </p>
                <p className="font-semibold text-primary">
                  Only a Registered Sale Deed gives you complete legal ownership of the property.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">✅ Why You Must Get a Sale Deed Registered</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong>Legal Ownership Guarantee:</strong> The Sale Deed is the only document that confirms legal ownership.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong>Protects Against Future Disputes:</strong> Without it, someone else may claim the property later, especially in disputed land.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong>Essential for Mutation & Loan Processing:</strong> You can't update municipal records (mutation) or apply for a loan without it.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2"></div>
                    <div>
                      <strong>Accepted in All Courts:</strong> It is admissible in court as the final evidence of your ownership.
                    </div>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">📌 Real Case from Hapur – Why One Buyer Lost Their Property</h3>
                <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                  <p className="text-muted-foreground leading-relaxed">
                    A client from Hapur came to us after paying ₹12 lakhs for a residential plot. He had an unregistered "Agreement to Sell" and a notarized affidavit, but the seller disappeared. Since there was no registered Sale Deed, the buyer could not claim ownership, mutation was denied, and he lost his hard-earned money.
                  </p>
                  <p className="text-muted-foreground leading-relaxed mt-3">
                    Had he visited us earlier, we would have ensured the Sale Deed was properly executed and registered — protecting his rights legally.
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-primary mb-3">🖋️ Conclusion: Don't Buy Property Without a Sale Deed</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Whether you are buying property in Hapur, Pilkhuwa, Simbhaoli, or anywhere in Uttar Pradesh, always ensure your Sale Deed is custom-drafted, legally verified, and registered by a professional. This small legal step protects your big investment for a lifetime.
                </p>
              </div>

              <div className="bg-primary/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-primary mb-3">📞 Contact Hapur's Most Trusted Legal Expert</h3>
                <p className="font-semibold">Tiewalavakil – Advocate Ajay Shankar Sharma</p>
                <p className="text-muted-foreground">📍 Sub-Registrar Office Road, Near Tehsil, Hapur</p>
                <p className="text-muted-foreground">📲 Call/WhatsApp: 7037455191</p>
                <p className="text-muted-foreground">🌐 Website: www.tiewalavakil.in</p>
                <p className="text-sm text-muted-foreground mt-3 font-medium">
                  Tiewalavakil – Legal Services You Can Trust Since 1950s<br/>
                  Trusted Legal Partner for Property Law in Hapur.
                </p>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Button
              onClick={() => setActiveTab("privacy")}
              variant={activeTab === "privacy" ? "default" : "outline"}
              className="font-semibold"
            >
              <Shield className="w-4 h-4 mr-2" />
              Privacy Policy
            </Button>
            <Button
              onClick={() => setActiveTab("disclaimer")}
              variant={activeTab === "disclaimer" ? "default" : "outline"}
              className="font-semibold"
            >
              <FileText className="w-4 h-4 mr-2" />
              Disclaimer
            </Button>
            <Button
              onClick={() => setActiveTab("return")}
              variant={activeTab === "return" ? "default" : "outline"}
              className="font-semibold"
            >
              <RotateCcw className="w-4 h-4 mr-2" />
              Return Policy
            </Button>
          </div>

          {/* Content */}
          <Card className="shadow-lg">
            <CardContent className="p-8 md:p-12">
              {renderContent()}
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact CTA */}
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

export default Privacy;

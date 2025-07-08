
import { useState, useEffect } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

const DisclaimerPopup = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    // Check if user has already seen the disclaimer
    const hasSeenDisclaimer = localStorage.getItem('hasSeenDisclaimer');
    if (!hasSeenDisclaimer) {
      setShowDisclaimer(true);
    }
  }, []);

  const handleAgree = () => {
    localStorage.setItem('hasSeenDisclaimer', 'true');
    setShowDisclaimer(false);
  };

  return (
    <AlertDialog open={showDisclaimer} onOpenChange={setShowDisclaimer}>
      <AlertDialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <AlertDialogHeader>
          <AlertDialogTitle className="text-xl font-bold text-center">
            Legal Disclaimer
          </AlertDialogTitle>
          <AlertDialogDescription className="text-sm text-left space-y-4">
            <div>
              <h3 className="font-semibold text-base mb-2">No Attorney-Client Relationship</h3>
              <p>
                Viewing this website or contacting us does not create an attorney-client relationship. 
                An attorney-client relationship is established only after a formal consultation and mutual agreement.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-base mb-2">Legal Advice Disclaimer</h3>
              <p>
                The content on this website should not be considered as legal advice for any specific case. 
                Each legal matter is unique and requires individual assessment. Always consult with a qualified 
                legal professional for advice specific to your situation.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-base mb-2">Accuracy of Information</h3>
              <p>
                While we strive to keep the information up-to-date and accurate, we make no representations 
                or warranties about the completeness, accuracy, reliability, suitability, or availability 
                of the information contained on this website.
              </p>
            </div>
            
            <div>
              <h3 className="font-semibold text-base mb-2">Limitation of Liability</h3>
              <p>
                TiewalaVakil and Advocate Ajay Shankar Sharma shall not be liable for any losses or damages 
                arising from the use of information on this website or any actions taken based on such information.
              </p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogAction onClick={handleAgree} className="w-full">
            I Agree
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default DisclaimerPopup;

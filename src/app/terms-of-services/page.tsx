import { MainNavigation } from '@/components/main-nav';

const TermsOfServices = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <MainNavigation />
      <div>
        <div className="container mx-auto p-6 max-w-4xl [&>h3]:ml-4 [&>ul]:ml-8">
          <h1 className="text-4xl font-bold mb-4">Terms of Conditions</h1>
          <p className="text-base mb-4">
            <strong className="font-bold">Last Updated:</strong> March 05, 2025
          </p>
          <h2 className="text-3xl font-semibold mb-3">1. Acceptance of Terms</h2>
          <p className="text-base mb-4">
            By accessing or using Codeation&apos;s services, you agree to these Terms of Conditions. If you do not agree
            with these terms, do not use our service.
          </p>
          <h2 className="text-3xl font-semibold mb-3">2. Service Description</h2>
          <h3 className="text-2xl font-semibold mb-2">2.1 WhatsApp Messaging Management</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Automated message sending</li>
            <li className="mb-2">Customer communication workflows</li>
            <li className="mb-2">Message template creation and management</li>
            <li className="mb-2">Delivery and read receipt tracking</li>
            <li className="mb-2">Multi-user conversation management</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">2.2 Platform Integration Features</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">WhatsApp Business API connection</li>
            <li className="mb-2">CRM system integration</li>
            <li className="mb-2">Customer data synchronization</li>
            <li className="mb-2">Conversation routing</li>
            <li className="mb-2">Automated response systems</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">2.2 Eligibility</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Users must be at least 13 years old</li>
            <li className="mb-2">Legal residents of supported jurisdictions</li>
            <li className="mb-2">Capable of entering a binding agreement</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">3. User Account</h2>
          <h3 className="text-2xl font-semibold mb-2">3.1 Account Creation</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Accurate information required</li>
            <li className="mb-2">One account per user</li>
            <li className="mb-2">Account is non-transferable</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">3.2 Account Responsibilities</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Maintain account confidentiality</li>
            <li className="mb-2">Protect login credentials</li>
            <li className="mb-2">Assume responsibility for all account activities</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">4. User Conduct</h2>
          <p className="text-base mb-4">Users agree NOT to:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Violate any laws or regulations</li>
            <li className="mb-2">Infringe on intellectual property rights</li>
            <li className="mb-2">Engage in harassment or harmful behavior</li>
            <li className="mb-2">Attempt unauthorized access</li>
            <li className="mb-2">Use the service for illegal purposes</li>
            <li className="mb-2">Distribute malicious content</li>
            <li className="mb-2">Impersonate other users</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">5. Intellectual Property</h2>
          <h3 className="text-2xl font-semibold mb-2">5.1 Ownership</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Service content owned by Codeation</li>
            <li className="mb-2">Users granted limited, non-exclusive license</li>
            <li className="mb-2">No right to reproduce, distribute, or create derivative works</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">5.2 User-Generated Content</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Users retain ownership of their content</li>
            <li className="mb-2">Grant service a worldwide, royalty-free license to use</li>
            <li className="mb-2">Right to remove inappropriate content</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">6. Privacy</h2>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Data handled according to our Privacy Policy</li>
            <li className="mb-2">User consent required for data processing</li>
            <li className="mb-2">Compliance with applicable data protection laws</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">7. Limitation of Liability</h2>
          <h3 className="text-2xl font-semibold mb-2">7.1 Disclaimer</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Service provided &quot;as is&quot;</li>
            <li className="mb-2">No guarantee of uninterrupted or error-free service</li>
            <li className="mb-2">Not liable for indirect, incidental, or consequential damages</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">7.2 Compensation Limits</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Maximum liability limited to service fees</li>
            <li className="mb-2">No compensation for lost profits or opportunities</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">8. Termination</h2>
          <h3 className="text-2xl font-semibold mb-2">8.1 User Termination</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Can terminate account at any time</li>
            <li className="mb-2">Immediate effect upon request</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">8.2 Company Termination Rights</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">
              May terminate accounts for:
              <ul className="list-disc pl-6 mb-4">
                <li className="mb-2">Violation of terms</li>
                <li className="mb-2">Suspicious activity</li>
                <li className="mb-2">Legal requirements</li>
              </ul>
            </li>
            <li className="mb-2">Discretionary termination without prior notice</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">9. Modifications</h2>
          <h3 className="text-2xl font-semibold mb-2">9.1 Service Changes</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Right to modify service features</li>
            <li className="mb-2">Periodic updates and improvements</li>
            <li className="mb-2">May discontinue services</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">9.2 Terms Updates</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Can update terms at any time</li>
            <li className="mb-2">Continued use implies acceptance of new terms</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">10. Dispute Resolution</h2>
          <h3 className="text-2xl font-semibold mb-2">10.1 Governing Law</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Disputes governed by [Your Jurisdiction] laws</li>
            <li className="mb-2">Exclusive jurisdiction in [Specific Court/Jurisdiction]</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">10.2 Arbitration</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Disputes resolved through binding arbitration</li>
            <li className="mb-2">Conducted under [Arbitration Rules]</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">11. Miscellaneous</h2>
          <h3 className="text-2xl font-semibold mb-2">11.1 Entire Agreement</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">These terms constitute the entire agreement</li>
            <li className="mb-2">Supersedes prior agreements</li>
          </ul>
          <h3 className="text-2xl font-semibold mb-2">11.2 Severability</h3>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">If any provision is invalid, remaining provisions remain in effect</li>
          </ul>
          <h2 className="text-3xl font-semibold mb-3">12. Contact Information</h2>
          <p className="text-base mb-4">For questions about these terms:</p>
          <ul className="list-disc pl-6 mb-4">
            <li className="mb-2">Email: legal@codeation.io</li>
            <li className="mb-2">Address: #1884 Professor Colony, Sirhind, Punjab, India, 140406</li>
          </ul>
          <hr />
          <p className="text-base mb-4">
            <strong className="font-bold">
              By using our service, you acknowledge that you have read, understood, and agree to these Terms of
              Conditions.
            </strong>
          </p>
          <p className="text-base mb-4">
            <strong className="font-bold">Effective Date:</strong> March 4, 2025
          </p>
        </div>
      </div>
    </main>
  );
};

export default TermsOfServices;

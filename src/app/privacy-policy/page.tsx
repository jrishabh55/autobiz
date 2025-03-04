import { MainNavigation } from '@/components/main-nav';

const PrivacyPolicy = () => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <MainNavigation />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-4">Comprehensive Privacy Policy</h1>
        <p className="text-base mb-4">
          <strong className="font-bold">Last Updated:</strong> 2025-03-04
        </p>
        <h2 className="text-3xl font-semibold mb-3">1. Introduction</h2>
        <p className="text-base mb-4">
          Welcome to Codeation. We are committed to protecting your privacy and ensuring the security of your personal
          information. This Privacy Policy describes how we collect, use, disclose, and safeguard your information when
          you use our services, including our application integrated with Facebook and other platforms.
        </p>
        <h2 className="text-3xl font-semibold mb-3">2. Scope of Compliance</h2>
        <h3 className="text-2xl font-semibold mb-2">2.1 Definitions of Covered Individuals</h3>
        <h4>California Residents</h4>
        <p className="text-base mb-4">
          For California residents, this policy provides additional rights under the CCPA/CPRA, including:
        </p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Right to know what personal information is collected</li>
          <li className="mb-2">Right to delete personal information</li>
          <li className="mb-2">Right to opt-out of sale or sharing of personal information</li>
          <li className="mb-2">Right to non-discrimination for exercising privacy rights</li>
        </ul>
        <h4>European Union Residents</h4>
        <p className="text-base mb-4">For EU residents, this policy ensures compliance with GDPR, providing:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Lawful basis for data processing</li>
          <li className="mb-2">Transparency in data collection</li>
          <li className="mb-2">Right to access, rectify, and erase personal data</li>
          <li className="mb-2">Right to data portability</li>
          <li className="mb-2">Right to restrict or object to processing</li>
        </ul>
        <h4>International Residents</h4>
        <p className="text-base mb-4">
          We provide baseline privacy protections for users globally, respecting international privacy standards.
        </p>
        <h2 className="text-3xl font-semibold mb-3">3. Information We Collect</h2>
        <h3 className="text-2xl font-semibold mb-2">3.1 Types of Information</h3>
        <p className="text-base mb-4">We may collect the following types of information:</p>
        <ol>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Personal Identification Information</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Name</li>
              <li className="mb-2">Email address</li>
              <li className="mb-2">Phone number</li>
              <li className="mb-2">Profile picture</li>
              <li className="mb-2">User ID</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Facebook-Sourced Information</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">Public profile information</li>
              <li className="mb-2">Email address</li>
              <li className="mb-2">Other permissions explicitly granted during Facebook Login</li>
            </ul>
          </li>
          <li className="mb-2">
            <p className="text-base mb-4">
              <strong className="font-bold">Technical and Usage Information</strong>
            </p>
            <ul className="list-disc pl-6 mb-4">
              <li className="mb-2">IP address</li>
              <li className="mb-2">Device information</li>
              <li className="mb-2">Browser type</li>
              <li className="mb-2">Operating system</li>
              <li className="mb-2">Usage patterns</li>
              <li className="mb-2">Cookies and tracking technologies</li>
            </ul>
          </li>
        </ol>
        <h3 className="text-2xl font-semibold mb-2">3.2 Information Collection Methods</h3>
        <h4>Direct Collection</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Information you provide directly</li>
          <li className="mb-2">Account registration</li>
          <li className="mb-2">Contact forms</li>
          <li className="mb-2">Customer support interactions</li>
        </ul>
        <h4>Automatic Collection</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Cookies and tracking technologies</li>
          <li className="mb-2">IP address</li>
          <li className="mb-2">Device information</li>
          <li className="mb-2">Usage data</li>
          <li className="mb-2">Browser type</li>
          <li className="mb-2">Browsing history</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">4. Purposes of Data Processing</h2>
        <h3 className="text-2xl font-semibold mb-2">4.1 Lawful Bases (GDPR Requirement)</h3>
        <p className="text-base mb-4">We process personal data based on:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Explicit consent</li>
          <li className="mb-2">Contractual necessity</li>
          <li className="mb-2">Legal obligation</li>
          <li className="mb-2">Vital interests</li>
          <li className="mb-2">Legitimate interests</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">4.2 Specific Processing Purposes</h3>
        <ol>
          <li className="mb-2">Service provision and improvement</li>
          <li className="mb-2">Customer support</li>
          <li className="mb-2">Marketing communications (with consent)</li>
          <li className="mb-2">Fraud prevention</li>
          <li className="mb-2">Legal compliance</li>
          <li className="mb-2">Business operations</li>
        </ol>
        <h2 className="text-3xl font-semibold mb-3">5. Facebook Integration Specifics</h2>
        <h3 className="text-2xl font-semibold mb-2">5.1 Facebook Login</h3>
        <h4>Permissions</h4>
        <p className="text-base mb-4">We request the following Facebook permissions:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Public Profile</li>
          <li className="mb-2">Email Address</li>
          <li className="mb-2">[List any additional specific permissions]</li>
        </ul>
        <h4>Usage Guidelines</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">We adhere strictly to Facebook&apos;s Platform Policies</li>
          <li className="mb-2">User consent is obtained for each permission</li>
          <li className="mb-2">Minimal data access principle applied</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">5.2 WhatsApp Business Integration</h3>
        <h4>WhatsApp Business Management</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">API usage limited to specified business functions</li>
          <li className="mb-2">Explicit user consent required</li>
          <li className="mb-2">Compliance with WhatsApp Business guidelines</li>
        </ul>
        <h4>WhatsApp Business Messaging</h4>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Messages sent only with user&apos;s prior approval</li>
          <li className="mb-2">Adherence to messaging best practices</li>
          <li className="mb-2">Respect for user communication preferences</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">5.3 Business Asset User Profile Access</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Access granted only for necessary business functions</li>
          <li className="mb-2">Transparent about the purpose of profile access</li>
          <li className="mb-2">User can revoke access at any time</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">6. Data Sharing and Disclosure</h2>
        <h3 className="text-2xl font-semibold mb-2">6.1 Third-Party Sharing</h3>
        <p className="text-base mb-4">We may share your information with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Service providers</li>
          <li className="mb-2">Legal and regulatory authorities</li>
          <li className="mb-2">Business partners (with consent)</li>
          <li className="mb-2">Potential business transaction partners</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">6.2 Data Transfer</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Secure data transmission</li>
          <li className="mb-2">Encryption during transit and at rest</li>
          <li className="mb-2">Compliance with international data protection standards</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">7. User Rights and Controls</h2>
        <h3 className="text-2xl font-semibold mb-2">7.1 Global User Rights</h3>
        <p className="text-base mb-4">Users can:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Access their personal information</li>
          <li className="mb-2">Request data correction</li>
          <li className="mb-2">Request data deletion</li>
          <li className="mb-2">Opt-out of marketing communications</li>
          <li className="mb-2">Withdraw app permissions</li>
          <li className="mb-2">Export personal data</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">7.2 Facebook-Specific Controls</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Revoke app access through Facebook settings</li>
          <li className="mb-2">Manage permission scope</li>
          <li className="mb-2">Control data sharing preferences</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">8. Data Retention</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Personal data retained only while necessary</li>
          <li className="mb-2">Maximum retention period: [Specify, e.g., 2 years]</li>
          <li className="mb-2">Automatic and manual deletion options</li>
          <li className="mb-2">Compliance with legal data preservation requirements</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">9. Security Measures</h2>
        <h3 className="text-2xl font-semibold mb-2">9.1 Technical Safeguards</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Advanced encryption (AES-256)</li>
          <li className="mb-2">Regular security audits</li>
          <li className="mb-2">Access control mechanisms</li>
          <li className="mb-2">Incident response plan</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">9.2 Organizational Protections</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Employee privacy training</li>
          <li className="mb-2">Strict data access protocols</li>
          <li className="mb-2">Vendor security assessments</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">10. Children&apos;s Privacy</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Service not intended for children under 13</li>
          <li className="mb-2">No intentional data collection from minors</li>
          <li className="mb-2">Immediate deletion of any discovered minor data</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">11. Cookies and Tracking</h2>
        <h3 className="text-2xl font-semibold mb-2">11.1 Cookie Policy</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Types of cookies used</li>
          <li className="mb-2">Purpose of cookies</li>
          <li className="mb-2">User consent mechanisms</li>
          <li className="mb-2">Option to disable cookies</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">12. International User Considerations</h2>
        <p className="text-base mb-4">Compliance with:</p>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">General Data Protection Regulation (GDPR)</li>
          <li className="mb-2">California Consumer Privacy Act (CCPA)</li>
          <li className="mb-2">California Privacy Rights Act (CPRA)</li>
          <li className="mb-2">Brazil&apos;s General Data Protection Law (LGPD)</li>
          <li className="mb-2">Other applicable international regulations</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">13. API Usage Transparency</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">All API calls logged and monitored</li>
          <li className="mb-2">Minimal necessary data access</li>
          <li className="mb-2">User-consented interactions only</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">14. Updates to Privacy Policy</h2>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Periodic policy reviews</li>
          <li className="mb-2">Notification of material changes</li>
          <li className="mb-2">User consent for significant modifications</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">15. Contact Information</h2>
        <h3 className="text-2xl font-semibold mb-2">Privacy and Compliance Inquiries</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Email: privacy@codeation.io</li>
          <li className="mb-2">Postal Address: #1884 Professor Colony, Sirhind, Punjab, India, 140406</li>
          <li className="mb-2">Data Protection Officer: Rishabh Jain</li>
        </ul>
        <h3 className="text-2xl font-semibold mb-2">Facebook and Platform Support</h3>
        <ul className="list-disc pl-6 mb-4">
          <li className="mb-2">Facebook Page: https://www.facebook.com/codeation.io</li>
          <li className="mb-2">Support Email: support@codeation.io</li>
        </ul>
        <h2 className="text-3xl font-semibold mb-3">16. Legal Disclaimer</h2>
        <p className="text-base mb-4">
          This privacy policy is subject to Facebook&apos;s Platform Policy, Terms of Service, and applicable local
          laws. Users should review Facebook&apos;s privacy guidelines in conjunction with our policy.
        </p>
        <hr />
        <p className="text-base mb-4">
          <strong className="font-bold">
            By using our service, you acknowledge that you have read, understood, and agree to the terms of this Privacy
            Policy.
          </strong>
        </p>
        <p className="text-base mb-4">
          <strong className="font-bold">Effective Date:</strong> March 4, 2025
        </p>
      </div>
    </main>
  );
};

export default PrivacyPolicy;

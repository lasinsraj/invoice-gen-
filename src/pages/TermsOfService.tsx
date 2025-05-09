
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const TermsOfService = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Terms of Service | Invoice Generator</title>
        <meta name="description" content="Terms of Service for using the Invoice Generator tool." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">Terms of Service</h1>
            <p className="text-gray-700">
              Last Updated: May 9, 2025
            </p>
          </div>
        </section>
        
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing and using Invoice Generator ("Service"), you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these terms, please do not use our Service.
              </p>
              
              <h2>2. Description of Service</h2>
              <p>
                Invoice Generator provides users with tools to create, customize, and download invoices. The Service is provided "as is" and "as available" without warranties of any kind.
              </p>
              
              <h2>3. Use of the Service</h2>
              <p>You agree that you will:</p>
              <ul>
                <li>Provide accurate information when using our Service</li>
                <li>Use the Service for lawful purposes only</li>
                <li>Not attempt to interfere with the proper working of the Service</li>
                <li>Not attempt to access areas of our systems that are not intentionally made available to you</li>
              </ul>
              
              <h2>4. Intellectual Property</h2>
              <p>
                The Service and its original content, features, and functionality are owned by Invoice Generator and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
              </p>
              <p>
                You retain all rights to the content you create with our Service, such as your invoices and business information.
              </p>
              
              <h2>5. User-Generated Content</h2>
              <p>
                The invoices and information you create using our Service are your property. However, you grant us a license to use, store, and process this information for the purpose of providing the Service to you.
              </p>
              
              <h2>6. Limitation of Liability</h2>
              <p>
                In no event shall Invoice Generator, its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
              </p>
              <ol type="a">
                <li>Your use of or inability to use the Service</li>
                <li>Any unauthorized access to or use of our servers and/or any personal information stored therein</li>
                <li>Any interruption or cessation of transmission to or from the Service</li>
                <li>Any bugs, viruses, trojan horses, or the like that may be transmitted to or through the Service</li>
                <li>Any errors or omissions in any content or for any loss or damage incurred as a result of the use of any content posted, transmitted, or otherwise made available through the Service</li>
              </ol>
              
              <h2>7. Changes to Terms</h2>
              <p>
                We reserve the right to modify or replace these Terms at any time. It is your responsibility to review these Terms periodically for changes. Your continued use of the Service following the posting of any changes constitutes acceptance of those changes.
              </p>
              
              <h2>8. Termination</h2>
              <p>
                We may terminate or suspend your access to the Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
              </p>
              
              <h2>9. Governing Law</h2>
              <p>
                These Terms shall be governed and construed in accordance with the laws, without regard to its conflict of law provisions.
              </p>
              
              <h2>10. Contact Us</h2>
              <p>
                If you have any questions about these Terms, please contact us at support@invoicegenerator.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TermsOfService;

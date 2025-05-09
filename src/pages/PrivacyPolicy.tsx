
import React from 'react';
import { Helmet } from 'react-helmet-async';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>Privacy Policy | Invoice Generator</title>
        <meta name="description" content="Our privacy policy regarding the use of the Invoice Generator tool." />
      </Helmet>
      
      <Header />
      
      <main className="flex-grow">
        <section className="bg-invoice-light py-12 px-4">
          <div className="container mx-auto max-w-4xl">
            <h1 className="text-4xl font-bold text-invoice-dark mb-6">Privacy Policy</h1>
            <p className="text-gray-700">
              Last Updated: May 9, 2025
            </p>
          </div>
        </section>
        
        <section className="py-8 px-4">
          <div className="container mx-auto max-w-4xl">
            <div className="prose prose-lg max-w-none">
              <h2>Introduction</h2>
              <p>
                Invoice Generator ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our Invoice Generator service ("Service").
              </p>
              <p>
                Please read this Privacy Policy carefully. By using our Service, you agree to the collection and use of information in accordance with this policy.
              </p>
              
              <h2>Information We Collect</h2>
              <h3>Invoice Data</h3>
              <p>
                When you use our Service to create invoices, we temporarily process the information you enter, such as business details, client information, invoice amounts, and other content you include in your invoices.
              </p>
              
              <h3>Usage Data</h3>
              <p>
                We may collect information on how the Service is accessed and used ("Usage Data"). This may include information such as your computer's Internet Protocol address (IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers, and other diagnostic data.
              </p>
              
              <h2>Use of Data</h2>
              <p>Invoice Generator uses the collected data for various purposes:</p>
              <ul>
                <li>To provide and maintain our Service</li>
                <li>To notify you about changes to our Service</li>
                <li>To allow you to participate in interactive features of our Service when you choose to do so</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information so that we can improve our Service</li>
                <li>To monitor the usage of our Service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
              
              <h2>Data Security</h2>
              <p>
                The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security.
              </p>
              <p>
                Invoice data you enter is processed in your browser and is not stored on our servers unless you explicitly save it. If you download your invoice, the data is stored locally on your device.
              </p>
              
              <h2>Analytics</h2>
              <p>
                We may use third-party Service Providers to monitor and analyze the use of our Service.
              </p>
              
              <h2>Cookies</h2>
              <p>
                We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. Cookies are files with a small amount of data which may include an anonymous unique identifier.
              </p>
              <p>
                You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
              </p>
              
              <h2>Changes to This Privacy Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last Updated" date.
              </p>
              <p>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
              </p>
              
              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us at support@invoicegenerator.com.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;

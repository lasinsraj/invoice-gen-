
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-10 py-8 no-print">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 text-invoice-primary">Invoice Generator</h3>
            <p className="text-gray-600">
              Free invoice generator for small businesses and freelancers. Create professional invoices in seconds.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-600 hover:text-invoice-primary">Home</Link></li>
              <li><Link to="/invoice" className="text-gray-600 hover:text-invoice-primary">Create Invoice</Link></li>
              <li><Link to="/about" className="text-gray-600 hover:text-invoice-primary">About</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-invoice-primary">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Invoice Solutions</h3>
            <ul className="space-y-2">
              <li><Link to="/free-invoice-generator" className="text-gray-600 hover:text-invoice-primary">Free Invoice Generator</Link></li>
              <li><Link to="/invoice-maker" className="text-gray-600 hover:text-invoice-primary">Invoice Maker</Link></li>
              <li><Link to="/small-business-invoice" className="text-gray-600 hover:text-invoice-primary">Small Business Invoice</Link></li>
              <li><Link to="/freelancer-invoice-template" className="text-gray-600 hover:text-invoice-primary">Freelancer Template</Link></li>
              <li><Link to="/online-billing-software" className="text-gray-600 hover:text-invoice-primary">Online Billing Software</Link></li>
              <li><Link to="/invoice-management-system" className="text-gray-600 hover:text-invoice-primary">Invoice Management</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/invoicing-tips" className="text-gray-600 hover:text-invoice-primary">Invoicing Tips</Link></li>
              <li><Link to="/templates" className="text-gray-600 hover:text-invoice-primary">Invoice Templates</Link></li>
              <li><Link to="/faqs" className="text-gray-600 hover:text-invoice-primary">FAQs</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-invoice-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-invoice-primary">Terms of Service</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Invoice Generator - Free invoice software for small business. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-invoice-primary">
              <span className="sr-only">Facebook</span>
              Facebook
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-invoice-primary">
              <span className="sr-only">Twitter</span>
              Twitter
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-invoice-primary">
              <span className="sr-only">LinkedIn</span>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

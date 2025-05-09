
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
              Create professional invoices in seconds. No sign-up required.
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
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li><Link to="/invoicing-tips" className="text-gray-600 hover:text-invoice-primary">Invoicing Tips</Link></li>
              <li><Link to="/templates" className="text-gray-600 hover:text-invoice-primary">Templates</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-600 hover:text-invoice-primary">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="text-gray-600 hover:text-invoice-primary">Terms of Service</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p className="text-gray-600 mb-2">Have questions? Get in touch.</p>
            <Link to="/contact" className="text-invoice-primary hover:underline">
              Contact Us
            </Link>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Invoice Generator. All rights reserved.
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

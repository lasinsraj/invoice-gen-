
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-invoice-light py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-invoice-dark mb-4">
              Free Invoice Generator for Small Businesses
            </h1>
            <p className="text-xl text-gray-700 mb-6">
              Create professional invoices instantly with our free invoicing software. No account required. The perfect online billing solution for freelancers and small businesses.
            </p>
            <div className="space-y-4">
              <div className="flex flex-wrap gap-4">
                <Button 
                  size="lg"
                  onClick={() => navigate('/invoice')}
                >
                  Create Invoice Now
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => navigate('/about')}
                >
                  Learn More
                </Button>
              </div>
              <p className="text-gray-600 text-sm">
                Join thousands of freelancers and small businesses using our invoice management system
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="rounded-lg shadow-xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=80" 
                alt="Invoice Software for Small Business" 
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

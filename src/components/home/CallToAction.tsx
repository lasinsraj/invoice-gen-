
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const CallToAction = () => {
  const navigate = useNavigate();
  
  return (
    <section className="bg-invoice-primary text-white py-16 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to create your first professional invoice?</h2>
        <p className="text-xl mb-8">It's free, easy, and takes less than a minute!</p>
        <Button 
          size="lg" 
          variant="secondary" 
          className="bg-white text-invoice-primary hover:bg-gray-100"
          onClick={() => navigate('/invoice')}
        >
          Get Started Now
        </Button>
      </div>
    </section>
  );
};

export default CallToAction;

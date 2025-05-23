
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuGroup,
} from '@/components/ui/dropdown-menu';

const Header: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <header className="bg-white shadow-sm py-4 mb-8 sticky top-0 z-10 no-print">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-invoice-primary">
            Invoice Generator
          </Link>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-gray-700 hover:text-invoice-primary">
            Home
          </Link>
          <Link to="/invoice" className="text-gray-700 hover:text-invoice-primary">
            Create Invoice
          </Link>
          
          {/* Solutions Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="text-gray-700 hover:text-invoice-primary focus:outline-none">
              Solutions
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56">
              <DropdownMenuGroup>
                <DropdownMenuItem asChild>
                  <Link to="/free-invoice-generator" className="w-full">Free Invoice Generator</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/invoice-maker" className="w-full">Invoice Maker</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/small-business-invoice" className="w-full">Small Business Invoice</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/freelancer-invoice-template" className="w-full">Freelancer Invoice Template</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/online-billing-software" className="w-full">Online Billing Software</Link>
                </DropdownMenuItem>
                <DropdownMenuItem asChild>
                  <Link to="/invoice-management-system" className="w-full">Invoice Management System</Link>
                </DropdownMenuItem>
              </DropdownMenuGroup>
            </DropdownMenuContent>
          </DropdownMenu>
          
          <Link to="/about" className="text-gray-700 hover:text-invoice-primary">
            About
          </Link>
          <Link to="/contact" className="text-gray-700 hover:text-invoice-primary">
            Contact
          </Link>
          <Button variant="default" onClick={() => navigate('/invoice')}>Get Started</Button>
        </div>
        
        <div className="md:hidden">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem asChild>
                <Link to="/" className="w-full">Home</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/invoice" className="w-full">Create Invoice</Link>
              </DropdownMenuItem>
              
              <DropdownMenuSub>
                <DropdownMenuSubTrigger>Solutions</DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  <DropdownMenuItem asChild>
                    <Link to="/free-invoice-generator" className="w-full">Free Invoice Generator</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/invoice-maker" className="w-full">Invoice Maker</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/small-business-invoice" className="w-full">Small Business Invoice</Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link to="/freelancer-invoice-template" className="w-full">Freelancer Template</Link>
                  </DropdownMenuItem>
                </DropdownMenuSubContent>
              </DropdownMenuSub>
              
              <DropdownMenuItem asChild>
                <Link to="/about" className="w-full">About</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/contact" className="w-full">Contact</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </header>
  );
};

export default Header;

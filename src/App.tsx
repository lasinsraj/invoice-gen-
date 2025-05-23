
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import InvoiceBuilder from "./pages/InvoiceBuilder";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";
import InvoicingTips from "./pages/InvoicingTips";
import Templates from "./pages/Templates";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import FAQsPage from "./pages/FAQsPage";

// SEO Landing Pages
import SmallBusinessInvoice from "./pages/seo/SmallBusinessInvoice";
import FreelancerInvoiceTemplate from "./pages/seo/FreelancerInvoiceTemplate";
import OnlineBillingSoftware from "./pages/seo/OnlineBillingSoftware";
import InvoiceManagementSystem from "./pages/seo/InvoiceManagementSystem";
import FreeInvoiceGenerator from "./pages/seo/FreeInvoiceGenerator";
import InvoiceMaker from "./pages/seo/InvoiceMaker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/invoice" element={<InvoiceBuilder />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/invoicing-tips" element={<InvoicingTips />} />
            <Route path="/templates" element={<Templates />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/faqs" element={<FAQsPage />} />
            
            {/* SEO Landing Pages */}
            <Route path="/small-business-invoice" element={<SmallBusinessInvoice />} />
            <Route path="/freelancer-invoice-template" element={<FreelancerInvoiceTemplate />} />
            <Route path="/online-billing-software" element={<OnlineBillingSoftware />} />
            <Route path="/invoice-management-system" element={<InvoiceManagementSystem />} />
            <Route path="/free-invoice-generator" element={<FreeInvoiceGenerator />} />
            <Route path="/invoice-maker" element={<InvoiceMaker />} />
            
            {/* Redirect */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;

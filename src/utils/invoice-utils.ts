import { InvoiceData, InvoiceItem } from "@/types/invoice";
import { v4 as uuidv4 } from "uuid";
import { jsPDF } from "jspdf";
import 'jspdf-autotable';

// Helper to create a new empty item
export const createEmptyItem = (): InvoiceItem => ({
  id: uuidv4(),
  description: "",
  quantity: 1,
  rate: 0,
  amount: 0
});

// Calculate subtotal from items
export const calculateSubtotal = (items: InvoiceItem[]): number => {
  return items.reduce((sum, item) => sum + item.amount, 0);
};

// Calculate tax amount
export const calculateTax = (subtotal: number, taxRate: number): number => {
  return subtotal * (taxRate / 100);
};

// Calculate discount amount
export const calculateDiscount = (subtotal: number, discountRate: number): number => {
  return subtotal * (discountRate / 100);
};

// Calculate total
export const calculateTotal = (subtotal: number, tax: number, discount: number): number => {
  return subtotal + tax - discount;
};

// Format currency based on currency code
export function formatCurrency(amount: number, currencyCode: string = 'USD'): string {
  try {
    return new Intl.NumberFormat('en-US', { 
      style: 'currency', 
      currency: currencyCode,
      maximumFractionDigits: 2 
    }).format(amount);
  } catch (error) {
    console.error(`Error formatting currency: ${error}`);
    return `${currencyCode} ${amount.toFixed(2)}`;
  }
}

// Format date
export const formatDate = (dateString: string): string => {
  if (!dateString) return "";
  const date = new Date(dateString);
  return new Intl.DateTimeFormat('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }).format(date);
};

// Helper function to truncate and format large numbers for PDF
const formatLargeNumber = (num: number, currencyCode: string = "USD"): string => {
  if (num >= 1000000) {
    // For amounts ≥ 1 million, format as X.XX million
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: currencyCode,
      maximumFractionDigits: 2,
      notation: 'compact',
      compactDisplay: 'short',
    }).format(num);
  } else {
    return formatCurrency(num, currencyCode);
  }
};

// Generate PDF
export const generatePDF = (invoice: InvoiceData): void => {
  const doc = new jsPDF();
  
  // Add company info
  doc.setFontSize(18);
  doc.setTextColor(0, 102, 204);
  doc.text("INVOICE", 14, 20);
  
  doc.setFontSize(10);
  doc.setTextColor(100, 100, 100);
  doc.text(`From:`, 14, 30);
  doc.setTextColor(0, 0, 0);
  doc.text(invoice.billFrom.name || "Your Company", 14, 35);
  doc.text(invoice.billFrom.address || "Your Address", 14, 40);
  doc.text(invoice.billFrom.email || "your.email@example.com", 14, 45);
  doc.text(invoice.billFrom.phone || "Your Phone", 14, 50);
  
  // Bill To section
  doc.setTextColor(100, 100, 100);
  doc.text(`Bill To:`, 130, 30);
  doc.setTextColor(0, 0, 0);
  doc.text(invoice.billTo.name || "Client Name", 130, 35);
  doc.text(invoice.billTo.address || "Client Address", 130, 40);
  doc.text(invoice.billTo.email || "client.email@example.com", 130, 45);
  doc.text(invoice.billTo.phone || "Client Phone", 130, 50);
  
  // Invoice details
  doc.setTextColor(100, 100, 100);
  doc.text(`Invoice Number:`, 14, 65);
  doc.text(`Issue Date:`, 14, 70);
  doc.text(`Due Date:`, 14, 75);
  
  doc.setTextColor(0, 0, 0);
  doc.text(invoice.invoiceNumber || "#INV-0001", 60, 65);
  doc.text(formatDate(invoice.issueDate), 60, 70);
  doc.text(formatDate(invoice.dueDate), 60, 75);
  
  // Items table with better formatting for large amounts
  const tableColumn = ["Description", "Quantity", "Rate", "Amount"];
  const tableRows = invoice.items.map(item => [
    item.description,
    item.quantity.toString(),
    formatCurrency(item.rate, invoice.currency),
    // Format amount properly to prevent overflow
    formatLargeNumber(item.amount, invoice.currency),
  ]);
  
  // @ts-ignore
  doc.autoTable({
    startY: 85,
    head: [tableColumn],
    body: tableRows,
    headStyles: {
      fillColor: [0, 102, 204],
    },
    columnStyles: {
      3: { halign: 'right' }, // Right align the Amount column
    },
    margin: { right: 10 }, // Add a bit more margin on the right
  });
  
  // Get the final y position after the table
  // @ts-ignore
  const finalY = doc.lastAutoTable.finalY + 10;
  
  // Adjust summary section positioning to avoid overlap
  const summaryX = 120; // Move left a bit to allow more space for numbers
  let currentY = finalY;
  
  doc.setTextColor(100, 100, 100);
  doc.text("Subtotal:", summaryX, currentY);
  currentY += 5;
  
  if (invoice.taxRate > 0) {
    doc.text(`Tax (${invoice.taxRate}%):`, summaryX, currentY);
    currentY += 5;
  }
  
  if (invoice.discountRate > 0) {
    doc.text(`Discount (${invoice.discountRate}%):`, summaryX, currentY);
    currentY += 5;
  }
  
  doc.setFontSize(12);
  doc.text("Total:", summaryX, currentY + 5);
  
  // Right-aligned values with proper formatting for large numbers
  doc.setTextColor(0, 0, 0);
  doc.setFontSize(10);
  // Adjust right alignment position and use compact formatting for large numbers
  doc.text(formatLargeNumber(invoice.subtotal, invoice.currency), 195, finalY, { align: "right" });
  
  currentY = finalY + 5;
  if (invoice.taxRate > 0) {
    doc.text(formatLargeNumber(invoice.tax, invoice.currency), 195, currentY, { align: "right" });
    currentY += 5;
  }
  
  if (invoice.discountRate > 0) {
    doc.text(formatLargeNumber(invoice.discount, invoice.currency), 195, currentY, { align: "right" });
    currentY += 5;
  }
  
  doc.setFontSize(12);
  doc.setTextColor(0, 102, 204);
  doc.text(formatLargeNumber(invoice.total, invoice.currency), 195, currentY + 5, { align: "right" });
  
  // Notes and terms
  if (invoice.notes) {
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.text("Notes:", 14, currentY + 20);
    doc.setTextColor(0, 0, 0);
    doc.text(invoice.notes, 14, currentY + 25);
  }
  
  if (invoice.terms) {
    doc.setTextColor(100, 100, 100);
    doc.text("Terms:", 14, currentY + 35);
    doc.setTextColor(0, 0, 0);
    doc.text(invoice.terms, 14, currentY + 40);
  }
  
  // Save the PDF
  doc.save(`invoice-${invoice.invoiceNumber || 'new'}.pdf`);
};

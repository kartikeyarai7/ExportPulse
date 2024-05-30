// src/api.js
import axios from 'axios';

// Function to create a new invoice
export const createInvoice = async invoiceData => {
  try {
    const response = await axios.post('/api/invoices', invoiceData);
    return response.data;
  } catch (error) {
    console.error('Error creating invoice:', error);
    throw error;
  }
};

// Function to get all invoices
export const getAllInvoices = async () => {
  try {
    const response = await axios.get('/api/invoices');
    return response.data;
  } catch (error) {
    console.error('Error fetching invoices:', error);
    throw error;
  }
};

// Function to get a specific invoice by ID
export const getInvoiceById = async id => {
  try {
    const response = await axios.get(`/api/invoices/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching invoice with ID ${id}:`, error);
    throw error;
  }
};

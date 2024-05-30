require('dotenv').config(); // Load environment variables

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const app = express();
const cors = require('cors');

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB using environment variable
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(error => console.error('Error connecting to MongoDB:', error));

// Define Invoice schema and model
const invoiceElSchema = new mongoose.Schema({
  buyerName: String,
  selectedSegment: String,
  selectedSizes: String,
  selectedWeight: Number,
  flatWidth: String,
  selectedPrice: Number,
  selectedValve: String,
  selectedValvePrice: Number,
  submissionDate: Date,
  total: Number
});

const invoiceSchema = new mongoose.Schema({
  invoices: [invoiceElSchema]
});

const Invoice = mongoose.model('Invoice', invoiceSchema);

// Routes
// Add a new invoice
app.post('/api/invoices', async (req, res) => {
  const invoiceData = req.body;
  try {
    const invoices = req.body;

    // Create a new Invoice document
    const newInvoice = new Invoice({ invoices });

    // Save the document to the database
    await newInvoice.save();
    res.status(201).json(newInvoice);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// Get all invoices
app.get('/api/invoices', async (req, res) => {
  try {
    const invoices = await Invoice.find();
    res.status(200).json(invoices);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Get a specific invoice by ID
app.get('/api/invoices/:id', async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) {
      return res.status(404).json({ message: 'Invoice not found' });
    }
    res.status(200).json(invoice);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Serve build files from the dist folder in the frontend directory
const staticPath = path.join(__dirname, '../vite-project/dist');
app.use(express.static(staticPath));

// For any other route, serve index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(staticPath, 'index.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

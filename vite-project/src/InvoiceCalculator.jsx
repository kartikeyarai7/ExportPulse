import React, { useState, useEffect } from 'react';
import { Form, Table, Button, Container, Image } from 'react-bootstrap';
import html2pdf from 'html2pdf.js';
import { createInvoice, getAllInvoices } from './api';
import { Notyf } from 'notyf';
import 'notyf/notyf.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import data from './data';
import qrc from './qrc.png';
import valveData from './valvedata';

const InvoiceCalculator = () => {
  const [selectedSizes, setSelectedSizes] = useState('');
  const [selectedValve, setSelectedValve] = useState('');
  const [selectedValvePrice, setSelectedValvePrice] = useState('');
  const [selectedSegment, setSelectedSegment] = useState('');
  const [selectedWeight, setSelectedWeight] = useState('');
  const [flatWidth, setFlatWidth] = useState('');
  const [selectedPrice, setSelectedPrice] = useState('');
  const [buyerName, setBuyerName] = useState('');
  const [total, setTotal] = useState(0);
  const [invoiceData, setInvoiceData] = useState([]);
  const [clickedGen, setClickedGen] = useState(false);
  const sizes = data;
  const notyf = new Notyf();
  const segments = ['2/3 Wheeler', 'Two Wheeler E‐Rickshaw Range', 'Passenger Car Bias', 'Passenger Car Radial Range', 'Indus', 'Light', 'Agric', 'Heavy'];

  useEffect(() => {
    if (clickedGen) {
      generatePdf();
      setClickedGen(false); // Reset clickedGen after generating the PDF
    }
  }, [clickedGen]);

  const handleSizeChange = e => {
    const newSize = e.target.value;
    const selectedSizeObject = sizes.find(item => item.size === newSize);
    if (selectedSizeObject) {
      setSelectedSizes(selectedSizeObject.size);
      setSelectedWeight(selectedSizeObject.weight);
      setFlatWidth(selectedSizeObject.flatWidth);
    } else {
      setSelectedSizes('');
      setSelectedWeight('');
    }
  };

  const fetchInvoices = async () => {
    try {
      const data = await getAllInvoices();
      setInvoices(data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  const handleCreateInvoice = async e => {
    e.preventDefault();
    try {
      const res = await createInvoice(invoiceData);
      if (res) {
        notyf.success('Added To Database');
        setClickedGen(true);
      }
    } catch (error) {
      console.error('Error creating invoice:', error);
    }
  };

  const handleValveChange = e => {
    setSelectedValve(e.target.value);
    const selectedValve = valveData.find(item => item.size === e.target.value);
    setSelectedValvePrice(selectedValve.price);
  };

  const handleWeightChange = e => {
    setSelectedWeight(e.target.value);
  };

  const handleSegmentChange = e => {
    setSelectedSegment(e.target.value);
  };

  const handlePriceChange = e => {
    setSelectedPrice(e.target.value);
  };

  const handleFlatWidthChange = e => {
    setFlatWidth(e.target.value);
  };

  const handleNameChange = e => {
    setBuyerName(e.target.value);
  };

  const handleCalculateTotal = () => {
    const valvePrice = 5;
    const calculatedTotal = selectedWeight * selectedPrice + valvePrice;
    setTotal(calculatedTotal);
  };

  let invoiceEl = {
    buyerName,
    selectedSegment,
    selectedSizes,
    selectedWeight,
    flatWidth,
    selectedPrice,
    selectedValve,
    selectedValvePrice,
    submissionDate: new Date(),
    total
  };

  const addToInvoiceHandler = () => {
    setInvoiceData(prev => [...prev, invoiceEl]);
  };

  const generatePdf = () => {
    const contentToExport = document.getElementById('contentToExport');

    const options = {
      margin: 10,
      filename: 'Quotation.pdf',
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(contentToExport).set(options).save();
  };

  return (
    <>
      <Container className='d-flex justify-content-center align-items-center mb-4 mt-5' style={{ width: '100%' }}>
        <div style={{ width: '100%', maxWidth: '600px' }}>
          <Form>
            <Form.Group controlId='buyerSelect' className='m-1'>
              <Form.Label>Buyer Name</Form.Label>
              <Form.Control as='input' onChange={handleNameChange} type='text'></Form.Control>
            </Form.Group>
            <Form.Group controlId='segmentSelect' className='m-1'>
              <Form.Label>Select Segment</Form.Label>
              <Form.Control as='select' onChange={handleSegmentChange}>
                <option value=''>Select Segment</option>
                {segments.map((item, index) => (
                  <option key={index} value={item}>
                    {item}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='sizeSelect' className=' m-1'>
              <Form.Label>Select Size</Form.Label>
              <Form.Control as='select' onChange={handleSizeChange}>
                <option value=''>Select Size</option>
                {sizes.map((item, index) => (
                  <option key={index} value={item.size}>
                    {item.size} ({item.type})
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <Form.Group controlId='weightSelect' className='m-1'>
              <Form.Label>Weight (Kg)</Form.Label>
              <Form.Control as='input' onChange={handleWeightChange} type='text' value={selectedWeight}></Form.Control>
            </Form.Group>
            <Form.Group controlId='priceSelect' className='m-1'>
              <Form.Label>Price (per Kg)</Form.Label>
              <Form.Control as='input' onChange={handlePriceChange} type='text'></Form.Control>
            </Form.Group>
            <Form.Group controlId='flatWidthSelect' className='m-1'>
              <Form.Label>Flat Width (mm)</Form.Label>
              <Form.Control as='input' onChange={handleFlatWidthChange} type='text' value={flatWidth}></Form.Control>
            </Form.Group>
            <Form.Group controlId='valveSelect' className='m-1'>
              <Form.Label>Select Valve</Form.Label>
              <Form.Control as='select' onChange={handleValveChange}>
                <option value=''>Select Valve</option>
                {valveData.map((valve, index) => (
                  <option key={index} value={valve.size}>
                    {valve.size} ({valve.price})
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
            <div className='d-grid gap-2 mb-5 mt-4'>
              <Button variant='danger' onClick={addToInvoiceHandler}>
                Add
              </Button>
            </div>
          </Form>
        </div>
      </Container>
      <Container className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
        {invoiceData.length > 0 && (
          <div id='contentToExport'>
            {clickedGen && (
              <>
                <Container className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
                  <Image src={logo} alt='Logo' fluid style={{ maxWidth: '300px', marginBottom: '20px', marginTop: '20px' }} />
                </Container>
                <p>Price Quotation : {invoiceData[0].buyerName}</p>
                <p>Issued by: Maxride Tyres</p>
                <div>
                  <p>Date: {new Date().toISOString().substring(0, 10)}</p>
                </div>
              </>
            )}
            <Table bordered hover className='mb-5'>
              <thead>
                <tr>
                  <th className='bg-black text-white'>#</th>
                  <th className='bg-black text-white'>Segment</th>
                  <th className='bg-black text-white'>Size</th>
                  <th className='bg-black text-white'>Weight (Kg)</th>
                  <th className='bg-black text-white'>Valve</th>
                  <th className='bg-black text-white'>Flat Width (mm)</th>
                  <th className='bg-black text-white'>Total (INR)</th>
                </tr>
              </thead>
              <tbody>
                {invoiceData.map((invoice, index) => (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{invoice.selectedSegment}</td>
                    <td>{invoice.selectedSizes}</td>
                    <td>{invoice.selectedWeight}</td>
                    <td>{invoice.selectedValve}</td>
                    <td>{invoice.flatWidth}</td>
                    <td>{Number(invoice.selectedValvePrice) + Number(invoice.selectedWeight) * Number(invoice.selectedPrice)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            {clickedGen && (
              <>
                <p>Thank you for choosing Maxride Tyres!</p>
                <p>
                  <Image src={qrc} alt='QR Code' fluid style={{ maxWidth: '100px' }} />
                </p>
                <small>(Scan For Details)</small>
              </>
            )}
          </div>
        )}
      </Container>
      {invoiceData.length > 0 && (
        <div className='w-75 mx-auto'>
          <div className='d-grid gap-2 mb-5 mt-4 mx-5'>
            <Button variant='danger' onClick={handleCreateInvoice}>
              Generate Quotation
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default InvoiceCalculator;

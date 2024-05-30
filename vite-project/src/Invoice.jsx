import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import logo from './logo.png';
import html2pdf from 'html2pdf.js';
import qrc from './qrc.png';
import { Form, Table, Button, Container, Image } from 'react-bootstrap';

import { getInvoiceById } from './api';
import NavbarComp from './Navbar';

const Invoice = () => {
  const { id } = useParams();
  const [data, setData] = useState();
  const [clickedGen, setClickedGen] = useState(true);

  useEffect(() => {
    if (id) {
      dataHandler(id);
    }
  }, [id]);

  async function dataHandler(id) {
    const res = await getInvoiceById(id);

    setData(res);
  }

  const handleCreateInvoice = () => {
    generatePdf();
  };

  const generatePdf = () => {
    const contentToExport = document.getElementById('contentToExport');
    const dateToday = new Date().toISOString().substring(0, 10);

    const options = {
      margin: 10,
      filename: `Quotation-${data.invoices[0].buyerName}-${dateToday}.pdf`,
      image: { type: 'jpeg', quality: 1 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
    };

    html2pdf().from(contentToExport).set(options).save();
  };

  return (
    <>
      <NavbarComp />
      {data && data.invoices && data.invoices.length > 0 && (
        <>
          <Container className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
            {data && data.invoices && data.invoices.length > 0 && (
              <div id='contentToExport'>
                {clickedGen && (
                  <>
                    <Container className='d-flex justify-content-center align-items-center' style={{ width: '100%' }}>
                      <Image src={logo} alt='Logo' fluid style={{ maxWidth: '300px', marginBottom: '20px', marginTop: '20px' }} />
                    </Container>
                    <p>Price Quotation : {data && data.invoices.length > 0 && data.invoices[0].buyerName}</p>
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
                    {data.invoices.map((invoice, index) => (
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
          <div className='w-75 mx-auto'>
            <div className='d-grid gap-2 mb-5 mt-4 mx-5'>
              <Button variant='danger' onClick={handleCreateInvoice}>
                Print PDF
              </Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Invoice;

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import NavbarComp from './Navbar';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const History = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getAllInvoices();
  }, []);

  const getAllInvoices = async () => {
    try {
      const response = await axios.get('/api/invoices');
      console.log(response);
      if (response.data && response.data.length > 0) {
        setData(response.data);
      }
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching invoices:', error);
    }
  };

  return (
    <>
      <NavbarComp />
      <div className='text-center mt-5 mb-3 fw-bold'>History</div>
      <div className='p-3 m-3'>
        <Table bordered hover>
          <thead>
            <tr className='text-center'>
              <th>Serial Number</th>
              <th>Date</th>
              <th>Buyer Name</th>
              <th>Selected Segment</th>
              <th>Selected Sizes</th>
              <th>Selected Weight</th>
              <th>Flat Width</th>
            </tr>
          </thead>
          <tbody>
            {data &&
              data.length > 0 &&
              data.map((item, count) => (
                <React.Fragment key={item._id}>
                  {item.invoices.map((invoice, index) => (
                    <tr key={`${item._id}-${index}`} className='text-center'>
                      <td>
                        <Link to={`/invoice/${item._id}`}>{count + 1}</Link>
                      </td>
                      <td>{invoice.submissionDate.substring(0, 10)}</td>
                      <td>{invoice.buyerName}</td>
                      <td>{invoice.selectedSegment}</td>
                      <td>{invoice.selectedSizes}</td>
                      <td>{invoice.selectedWeight}</td>
                      <td>{invoice.flatWidth}</td>
                    </tr>
                  ))}
                  <tr>
                    <td colSpan='7' style={{ backgroundColor: '#f8f9fa' }}></td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </Table>
      </div>
    </>
  );
};

export default History;

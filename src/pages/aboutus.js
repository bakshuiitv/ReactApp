import React, { useState } from 'react';

const suppliers = ['ANB Pack', 'XYZ Supplier']; // sample suppliers

const initialProducts = [
  {
    id: 1,
    name: 'Lllll Rrrrr',
    quantity: '',
    currentQty: '',
    unit: 'Units (25 kg)',
    lotNo: '',
    expDate: '',
  },
  {
    id: 2,
    name: 'Anbbb Bbbb',
    quantity: '',
    currentQty: '0',
    unit: 'Units (50 kg)',
    lotNo: '',
    expDate: '',
  },
  {
    id: 3,
    name: 'Potato',
    quantity: '',
    currentQty: '0',
    unit: 'Bag (25 kg/Bag)',
    lotNo: '',
    expDate: '',
  },
];


const Aboutus = () => {

    const [documentDate, setDocumentDate] = useState('');
    const [supplier, setSupplier] = useState(suppliers[0]);
    const [products, setProducts] = useState(initialProducts);
  
    const handleChange = (index, field, value) => {
      const updated = [...products];
      updated[index][field] = value;
      setProducts(updated);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Submitted data:', { documentDate, supplier, products });
      alert('Form submitted. Check console for data.');
     
    };
  
    const handleReset = () => {
      setDocumentDate('');
      setSupplier(suppliers[0]);
      setProducts(initialProducts.map((p) => ({ ...p, quantity: '', lotNo: '', expDate: '' })));
    };
  
    return (
      <form onSubmit={handleSubmit} style={{ paddingTop: '220px' }}>
        <h2>Receive Form</h2>
  
        <div style={{ marginBottom: '20px' }}>
          <label>Document Date: </label>
          <input
            type="date"
            value={documentDate}
            onChange={(e) => setDocumentDate(e.target.value)}
            required
          />
        </div>
  
        <div style={{ marginBottom: '20px' }}>
          <label>Select Supplier: </label>
          <select value={supplier} onChange={(e) => setSupplier(e.target.value)}>
            {suppliers.map((s, i) => (
              <option key={i} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
  
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Current Quantity</th>
              <th>Unit of Measurement</th>
              <th>Receive Quantity</th>
              <th>Lot No</th>
              <th>Exp Date (DD/MM/YYYY)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((prod, idx) => (
              <tr key={prod.id}>
                <td>{prod.name}</td>
                <td>{prod.currentQty}</td>
                <td>{prod.unit}</td>
                <td>
                  <input
                    type="number"
                    value={prod.quantity}
                    onChange={(e) => handleChange(idx, 'quantity', e.target.value)}
                    placeholder="Quantity"
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={prod.lotNo}
                    onChange={(e) => handleChange(idx, 'lotNo', e.target.value)}
                    placeholder="Lot No XX/YYYY"
                  />
                </td>
                <td>
                  <input
                    type="date"
                    value={prod.expDate}
                    onChange={(e) => handleChange(idx, 'expDate', e.target.value)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
  
        <div style={{ marginTop: '20px' }}>
          <button type="submit" style={{ padding: '10px 20px', marginRight: '10px' }}>
            Submit
          </button>
          <button type="button" onClick={handleReset} style={{ padding: '10px 20px', background: 'orange' }}>
            Reset
          </button>
        </div>
       
      </form>
      
    );
   
};

export default Aboutus;

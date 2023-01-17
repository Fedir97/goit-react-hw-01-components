import React from 'react';
import PropTypes from 'prop-types';
import  './TransactionHistory.module.css';

const randomColor = () => {
    const color =
      'rgba(' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      Math.round(Math.random() * 255) +
      ',' +
      0.2 +
      ')';
  
    return color;
  };
  
  export const TransactionHistory = ({ items }) => {
    return (
      <table>
        <thead>
          <tr style={{ backgroundColor: randomColor() }}>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
  
        <tbody>
          {items.map(({ id, type, amount, currency }) => {
            return (
              <tr key={id} style={{ backgroundColor: randomColor() }}>
                <td>{type}</td>
                <td>{amount}</td>
                <td>{currency}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  };
  
  TransactionHistory.propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  };


export default TransactionHistory;
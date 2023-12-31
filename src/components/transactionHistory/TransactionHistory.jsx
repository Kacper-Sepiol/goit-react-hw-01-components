import PropTypes from 'prop-types';
import transactionHistoryCss from './transactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={transactionHistoryCss.transactionHistory}>
    <thead>
      <tr>
        <th style={{ width: '0' }}>Type</th>
        <th style={{ width: '0px' }}>Amount</th>
        <th style={{ width: '0px' }}>Currency</th>
      </tr>
    </thead>
    <tbody>
      {items.map(transaction => (
        <tr key={transaction.id}>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};

export default TransactionHistory;

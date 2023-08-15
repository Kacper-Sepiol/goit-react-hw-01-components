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
    {items.map(transaction => (
      <tbody>
        <tr>
          <td>{transaction.type}</td>
          <td>{transaction.amount}</td>
          <td>{transaction.currency}</td>
        </tr>
      </tbody>
    ))}
  </table>
);

export default TransactionHistory;

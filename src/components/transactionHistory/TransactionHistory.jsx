import transactions from '../transactions.json';

const TransactionHistory = ({ id, type, amount, currency }) => (
  <table class="transaction-history">
    <thead>
      <tr>
        <th>{transactions.type}</th>
        <th>{transactions.amount}</th>
        <th>{transactions.currency}</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Invoice</td>
        <td>125</td>
        <td>USD</td>
      </tr>
      <tr>
        <td>Withdrawal</td>
        <td>85</td>
        <td>USD</td>
      </tr>
    </tbody>
  </table>
);

export default TransactionHistory;

import transactions from '../transactions.json';

const TransactionHistory = ({ items }) => (
  <table class="transaction-history">
    {transactions.map(transaction => (
      <div>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        </tbody>
      </div>
    ))}
  </table>
);

export default TransactionHistory;

import Profile from './profile/Profile';
import user from '../components/user.json';
import Statistics from './statistics/Statistics';
import data from './data.json';
import friends from './friends.json';
import FriendList from '../components/friendList/FriendList';
import TransactionHistory from '../components/transactionHistory/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      ></Profile>
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} isOnline="true"></FriendList>
      <TransactionHistory items={transactions} />;
    </div>
  );
};

export default App;

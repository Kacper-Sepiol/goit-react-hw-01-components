import Profile from './profile/Profile';
import user from '../components/user.json';
import Statistics from './statistics/Statistics';
import data from './data.json';
import friends from './friends.json';
import FriendList from '../components/friendList/FriendList';

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

      <FriendList friends={friends}></FriendList>
    </div>
  );
};

export default App;

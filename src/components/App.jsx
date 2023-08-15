import Profile from './profile/Profile';
import user from '../components/user.json';
import Statistics from './statistics/Statistics';
import data from './data.json';

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
    </div>
  );
};

export default App;

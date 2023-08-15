import Profile from './profile/Profile';
import user from '../components/user.json';

const App = () => {
  return (
    <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    ></Profile>
  );
};

export default App;

import friendss from './friends.json';

const FriendList = ({ friends }) => (
  <ul class="friend-list">
    {friends.map(friend => (
      <li></li>
    ))}
  </ul>
);

export default FriendList;

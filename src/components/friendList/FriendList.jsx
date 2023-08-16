import PropTypes from 'prop-types';
import friendListCss from './friendList.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={friendListCss.item}>
    <span className={friendListCss.status}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul className={friendListCss.friendList}>
    {friends.map(friend => (
      <FriendListItem
        key={friend.id}
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      ></FriendListItem>
    ))}
  </ul>
);

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};

export default FriendList;

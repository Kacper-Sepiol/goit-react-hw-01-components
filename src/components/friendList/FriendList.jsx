import friends from '../friends.json';
import friendListCss from './friendList.module.css';
import itemCss from './item.module.css';
import statusCss from './status.module.css';

const FriendListItem = ({ avatar, name, isOnline, id }) => (
  <li className={itemCss.item} key={id}>
    <span className={statusCss.status}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul className={friendListCss.friendList}>
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
        id={friend.id}
      ></FriendListItem>
    ))}
  </ul>
);

export default FriendList;

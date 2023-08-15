import friends from '../friends.json';
import friendListCss from './friendList.module.css';
import itemCss from './item.module.css';
import statusCss from './status.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => (
  <li className={itemCss.item}>
    <span className={statusCss.status}>{isOnline}</span>
    <img className="avatar" src={avatar} alt="User avatar" width="48" />
    <p className="name">{name}</p>
  </li>
);

const FriendList = ({ friends }) => (
  <ul class={friendListCss.friendList}>
    {friends.map(friend => (
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      ></FriendListItem>
    ))}
  </ul>
);

export default FriendList;

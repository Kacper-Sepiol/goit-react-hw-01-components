import friends from '../friends.json';

const FriendList = ({ friends }) => <ul class="friend-list">
    {friends.map(friend => ())}
</ul>;

export default FriendList;

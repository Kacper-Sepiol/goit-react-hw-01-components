import PropTypes from 'prop-types';
import profileCss from './profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={profileCss.profile}>
    <div className="description">
      <img src={avatar} alt="User avatar" className={profileCss.avatar} />
      <p className={profileCss.name}>{username}</p>
      <p className={profileCss.tag}>{tag}</p>
      <p className={profileCss.location}>{location}</p>
    </div>

    <ul className={profileCss.stats}>
      <li>
        <span className={profileCss.label}>Followers:</span>
        <span className={profileCss.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={profileCss.label}>Views:</span>
        <span className={profileCss.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={profileCss.label}>Likes:</span>
        <span className={profileCss.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.object,
};

export default Profile;

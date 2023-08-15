import profileCss from './profile.module.css';
import avatarCss from './avatar.module.css';
import nameCss from './name.module.css';
import tagCss from './tag.module.css';
import locationCss from './location.module.css';
import statsCss from './stats.module.css';
import labelCss from './label.module.css';
import quantityCss from './quantity.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => (
  <div className={profileCss.profile}>
    <div className="description">
      <img src={avatar} alt="User avatar" className={avatarCss.avatar} />
      <p className={nameCss.name}>{username}</p>
      <p className={tagCss.tag}>{tag}</p>
      <p className={locationCss.location}>{location}</p>
    </div>

    <ul className={statsCss.stats}>
      <li>
        <span className={labelCss.label}>Followers:</span>
        <span className={quantityCss.quantity}>{stats.followers}</span>
      </li>
      <li>
        <span className={labelCss.label}>Views:</span>
        <span className={quantityCss.quantity}>{stats.views}</span>
      </li>
      <li>
        <span className={labelCss.label}>Likes:</span>
        <span className={quantityCss.quantity}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);

export default Profile;

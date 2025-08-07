import React from 'react'
import css from "../Profile/Profile.module.css"


const Profile = ({
  username,
  tag,
  location,
  avatar ,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
  <div>
    <img
      src={avatar}
      alt="User avatar"
    />
    <p>{username}</p>
    <p>@{tag}</p>
    <p>{location}</p>
  </div>

  <ul>
    <li>
      <span>Followers</span>
      <span>{followers}</span>
    </li>
    <li>
      <span>Views</span>
      <span>{views}</span>
    </li>
    <li>
      <span>Likes</span>
      <span>{likes}</span>
    </li>
  </ul>
</div>

  )
}

export default Profile
import React from 'react'
import Friends from './Friends'
import css from "../FriendList/Friend.module.css"

const FriendList = ({ friends }) => {
  return (
    <div className={css.friendlist}>
     <ul>
      {friends.map(friend => (
        <li key={friend.id}>
          <Friends
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
    </div>
  )
}

export default FriendList
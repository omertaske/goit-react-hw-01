import React from 'react'
import css from "../FriendList/Friend.module.css"

const Friends = ({ avatar , name ,  isOnline  }) => {
  return (
    <div className={css.Friends}>
  <img src={avatar} alt="Avatar" width="48" />
  <p>{name}</p>


  <p className={isOnline ? css.online : css.ofline}>

{isOnline ? "Online" : "Offline"}


  </p>
</div>

  )
}

export default Friends
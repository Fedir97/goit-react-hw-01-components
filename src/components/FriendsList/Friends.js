import React from 'react';
import PropTypes from 'prop-types';
import styles from './Friends.module.css';


function FriendsList ({friends}){
    return(
<ul  class={styles.friend_list}>
          {friends.map(({ avatar, isOnline, name, id }) => {
            return (
                <li key={id} class={styles.item}>
             <span className={`${styles.status} ${styles[isOnline]}`}>
              {isOnline}
            </span>
                <img class={styles.avatar} src={avatar} alt="User avatar" width="48" />
                <p class={styles.name}>{name}</p>
              </li>
            );
          })}
        </ul>
    )
}


FriendsList.propTypes ={
    avatar:PropTypes.string.isRequired,
    name:PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
    id:PropTypes.number.isRequired,
}
export default FriendsList;
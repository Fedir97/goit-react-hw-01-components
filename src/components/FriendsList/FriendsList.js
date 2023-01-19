import React from 'react';
import PropTypes from 'prop-types';
import FriendListItem from './FrendListItem';
import styles from './FriendsList.module.css';

const FriendsList = ({ friends }) => {
  return (
    <ul className={styles.friendList}>
      {friends.map(item => (
        <FriendListItem
          avatar={item.avatar}
          name={item.name}
          isOnline={item.isOnline}
          key={item.id}
        />
      ))}
    </ul>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default FriendsList;

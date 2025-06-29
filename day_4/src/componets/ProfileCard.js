import React from 'react';
import PropTypes from 'prop-types';
import './ProfileCard.css'; // Optional: for styling

const ProfileCard = ({ name, bio, image }) => {
  return (
    <div className="profile-card">
      <img src={image} className="profile-image" />
      <h2 className="profile-name">{name}</h2>
      <p className="profile-bio">{bio}</p>
    </div>
  );
};

export default ProfileCard;
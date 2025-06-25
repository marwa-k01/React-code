import React from 'react';

const UserProfile = () => {
  const userName = "John Doe";
  const userAge = 30;
  const userLocation = "New York";


  return (
    <div className='UserProfile'>
      <h1>User Profile</h1>
      <p>Name: {userName}</p>
      <p>Age: {userAge}</p>
      <p>Location: {userLocation}</p>
    </div>
  );

};

export default UserProfile;
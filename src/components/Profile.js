import React from 'react';
import PropTypes from 'prop-types';

const Profile = ({ user= {} }) => (
  <div>
    <h2>{user.name}</h2>
    <p>
      <a href={`mailto:${user.email}`}>
        {user.email}
      </a>
    </p>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired
  }).isRequired,
};

export default Profile;
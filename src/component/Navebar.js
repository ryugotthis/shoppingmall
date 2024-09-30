import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';

const Navebar = () => {
  return (
    <div>
      <div className="log-in">
        <FontAwesomeIcon icon={faUser} style={{ color: '#656667' }} />
        <div>Log In</div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Navebar;

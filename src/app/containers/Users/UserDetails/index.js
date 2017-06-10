import React from 'react';
import PropTypes from 'prop-types';
import { Route, NavLink } from 'react-router-dom';
import MDSpinner from "react-md-spinner";
import TrendingFlat from 'material-ui/svg-icons/action/trending-flat';
import './style.css';

const iconStyles = {
  height: '48px',
  width: '48px',
  transform: 'rotate(180deg)',
  cursor: 'pointer'
};

export const UserDetails = ({ userData }) => {
  return (
    <div className="user-details-screen">
      {
        userData
          ? <div className="user-details-container">
          { console.log(userData) }
              <img
                className="user-details-photo"
                src={userData.picture.large}
                alt="User"
              />

              <table className="user-details-table">
                <tbody>
                  <tr>
                    <th>First name</th>
                    <td>{ userData.name.first }</td>
                  </tr>
                  <tr>
                    <th>Last name</th>
                    <td>{ userData.name.last }</td>
                  </tr>
                  <tr>
                    <th>Email</th>
                    <td>{ userData.email }</td>
                  </tr>
                  <tr>
                    <th>Phone number</th>
                    <td>{ userData.phone }</td>
                  </tr>
                </tbody>
              </table>

              <NavLink to={`/users`}>
                <TrendingFlat hoverColor="grey" style={iconStyles}/>
              </NavLink>

            </div>
          : <MDSpinner/>
      }
    </div>
  )
};

UserDetails.propTypes = {
  userData: PropTypes.object,
};

export default UserDetails;

/*
<img
  className="user-details-photo"
  src={userData.picture.large}
  alt="User"
/>
{ console.log(userData) }
<span>{ userData.location.city }</span>
*/
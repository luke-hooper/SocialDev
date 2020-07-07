import React from "react";
import moment from "moment";
import Moment from "react-moment";
import PropTypes from "prop-types";

const ProfileExperience = ({
  experience: { company, title, location, current, to, from, description }
}) => (
  <div>
    <h3 className='text-dark'>{company}</h3>
    <p>
      <Moment format='DD/MM/YYYY'>{from}</Moment> -{" "}
      {!to ? "now" : <Moment format='DD/MM/YYYY'>{to}</Moment>}
    </p>
    <p>
      <strong>Position: </strong>
      {title}
    </p>
    <p>
      <strong>Description: </strong>
      {description}
    </p>
  </div>
);

ProfileExperience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default ProfileExperience;

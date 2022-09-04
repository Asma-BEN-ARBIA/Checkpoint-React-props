import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = (props) => {
  const handleName = () => {
    alert(props.fullName);
  };
  return (
    <div>
      <h3>Picture:</h3>
      <img height="100" src={props.children[0].props.src} />
      <h3>FullName:</h3> <p> {props.fullName}</p>
      <h3>Profession:</h3>
      <p> {props.Profession}</p>
      <h3>bio:</h3> <p> {props.bio}</p>
    </div>
  );
};
ProfileComponent.defaultProps = {
  fullName: "Default Fullname",
  bio: "Default Bio",
  profession: "Default Profession",
};
ProfileComponent.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string,
};
export default ProfileComponent;

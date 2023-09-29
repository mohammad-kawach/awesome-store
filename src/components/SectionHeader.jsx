// import React from "react";
import PropTypes from "prop-types";

const SectionHeader = (props) => {
  return (
    <div className="section-header text-center">
      <h1 className="my-3">{props.headerText}</h1>
      <div className="underline"></div>
    </div>
  );
};

SectionHeader.propTypes = {
  headerText: PropTypes.string.isRequired,
};

export default SectionHeader;
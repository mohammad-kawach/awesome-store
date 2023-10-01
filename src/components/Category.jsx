// import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Category = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex">
      <Card className="px-2 mb-3 flex-fill">
        <Card.Img
          variant="top"
          src={props.image}
          className="pt-1 rounded rounded-3"
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="uppercase">{props.title}</Card.Title>
          <Card.Text>{props.caption}</Card.Text>
          <div className="mt-auto">
            <Link to={`/categories/${props.title}`}>
              <Button variant="primary">Explore</Button>
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

Category.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  caption: PropTypes.string,
};

export default Category;

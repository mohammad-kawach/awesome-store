import { Button, Card } from "react-bootstrap";
import PropTypes from "prop-types";

const ProductCard = (props) => {
  return (
    <div className="col-sm-12 col-md-6 col-lg-3 d-flex product-card">
      <p className="product-price">{props.price} $</p>
      <Card className="px-2 mb-3 flex-fill">
        <Card.Img
          variant="top"
          src={props.image}
          className="pt-1 rounded rounded-3"
          style={{ height: "300px" }}
        />
        <Card.Body className="d-flex flex-column">
          <Card.Title className="uppercase">{props.title}</Card.Title>
          <div className="product-info text-center mt-auto">
            <div className="product-rate">{props.rate} out of 5</div>
            <div className="mt-3 d-flex justify-content-between">
              <Button variant="primary">Explore</Button>
              <Button variant="secondary">Add To Card</Button>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

ProductCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
  description: PropTypes.string,
  price: PropTypes.number,
  rate: PropTypes.number,
};

export default ProductCard;

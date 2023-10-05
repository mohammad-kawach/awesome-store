// import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { addAmountToCard } from "../features/card/cardSlice";

const ProductCountModal = (props) => {
  const dispatch = useDispatch();

  const handleAddToCard = () => {
    if (props.cardQuantity > 0 && props.cardQuantity <= props.max) {
      dispatch(
        addAmountToCard({ item: props.product, quantity: props.cardQuantity })
      );
    } else {
      alert("Invalid quantity");
    }
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    props.setCardQuantity(value);
  };

  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="uppercase">Add to card</Modal.Title>
      </Modal.Header>
      <div className="info m-3">
        <h3>Please type in the quantity:</h3>
        <input  
          className="quantity-input"
          type="text"
          pattern="[0-9]*"
          inputMode="numeric"
          min={0}
          max={props.max}
          value={props.cardQuantity}
          onChange={handleQuantityChange}
          style={{ appearance: "textfield" }}
        />
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            props.handleClose();
            handleAddToCard();
          }}
        >
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

ProductCountModal.propTypes = {
  handleClose: PropTypes.func,
  setCardQuantity: PropTypes.func,
  cardQuantity: PropTypes.number,
  max: PropTypes.number,
  show: PropTypes.bool,
  product: PropTypes.object,
};

export default ProductCountModal;

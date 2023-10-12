// import React from "react";
import { Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { setCardEmpty } from "../features/card/cardSlice";

const CheckCartModal = (props) => {
  const dispatch = useDispatch();

  const handleResetCard = () => {
    dispatch(setCardEmpty());
  };
  
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title className="uppercase">Add to card</Modal.Title>
      </Modal.Header>
      <div className="info m-3">
        <h3>Please type in the quantity:</h3>
        {/* <p>{props.max} in stock</p> */}
        your total products price is {props.overall}
      </div>
      <Modal.Footer>
        <Button variant="secondary" onClick={props.handleClose}>
          Close
        </Button>
        <Button
          onClick={() => {
            props.handleClose();
            props.setPayment(true);
            handleResetCard();
          }}
          variant="success"
        >
          Purchase
        </Button>
        {/* <Button
          variant="primary"
          onClick={() => {
            props.handleClose();
            handleAddToCard();
          }}
        >
          Add
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};

CheckCartModal.propTypes = {
  handleClose: PropTypes.func,
  setPayment: PropTypes.func,
  show: PropTypes.bool,
  overall: PropTypes.number,
};

export default CheckCartModal;

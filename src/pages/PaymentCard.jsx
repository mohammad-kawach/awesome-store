import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionHeader from "../components/SectionHeader";
import { setCardEmpty } from "../features/card/cardSlice";
import { Table } from "react-bootstrap";

const PaymentCard = () => {
  const cardInfo = useSelector((state) => state.card.data);
  const dispatch = useDispatch();
  const [overall, setOverall] = useState(0);

  useEffect(() => {
    // Calculate the overall price when the cardInfo changes
    let totalPrice = 0;
    cardInfo.forEach((product) => {
      totalPrice += product.quantity * product.price;
    });
    setOverall(totalPrice);
  }, [cardInfo]);

  const handleResetCard = () => {
    dispatch(setCardEmpty());
  };

  return (
    <div className="container my-5">
      <SectionHeader headerText="Card" />
      {cardInfo.length !== 0 ? (
        <>
          <Table striped>
            <thead>
              <tr>
                <th>Product</th>
                <th>Count</th>
                <th>Price per item</th>
                <th>Total price</th>
              </tr>
            </thead>
            <tbody>
              {cardInfo.map((product) => (
                <tr key={product.id}>
                  <td>{product.title}</td>
                  <td>{product.quantity}</td>
                  <td>{product.price}$</td>
                  <td>{product.quantity * product.price}$</td>
                </tr>
              ))}
              <tr>
                <td colSpan={3} className="result">
                  Result:
                </td>
                <td className="overall-price">{overall}$</td>
              </tr>
            </tbody>
          </Table>
          <div className="card-btns">
            <button className="btn btn-danger" onClick={handleResetCard}>
              Reset Card
            </button>
            <button className="btn btn-primary">Confirm payment</button>
          </div>
        </>
      ) : (
        <div className="alert alert-info my-4">Card is empty</div>
      )}
    </div>
  );
};

export default PaymentCard;

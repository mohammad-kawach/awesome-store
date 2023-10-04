// import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SectionHeader from "../components/SectionHeader";
import { setCardEmpty } from "../features/card/cardSlice";
// import CardTable from "../components/CardTable";
import { Table } from "react-bootstrap";

const PaymnetCard = () => {
  const cardInfo = useSelector((state) => state.card.data);
  const dispatch = useDispatch();

  const handleResetCard = () => {
    dispatch(setCardEmpty());
  };

  return (
    <div className="container my-5">
      <SectionHeader headerText="Card" />
      <Table striped>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {cardInfo.lenght !== 0 ? (
            cardInfo.map((product) => (
              <>
                {/* <div key={product.id}>{product.title}</div> */}
                <tr>
                  <td>{product.id}</td>
                  <td>{product.title}</td>
                  <td>{product.price}</td>
                  <td>@mdo</td>
                </tr>
              </>
            ))
          ) : (
            <h1>null</h1>
          )}
        </tbody>
      </Table>

      <button className="btn btn-danger" onClick={handleResetCard}>
        Reset Card
      </button>
    </div>
  );
};

export default PaymnetCard;

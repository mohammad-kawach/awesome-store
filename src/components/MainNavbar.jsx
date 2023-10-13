import { faSnowflake } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchedProducts } from "../features/searchedProduct/searchedProductsSlice";

function MainNavbar() {
  // const [searchedProducts, setSearchedProducts] = useState("");

  // const handleSearchInputChange = (event) => {
  //   setSearchedProducts(event.target.value);
  // };

  const searchedProducts = useSelector((state) => state.searchedProducts);
  const dispatch = useDispatch();

  const handleSearchInputChange = (event) => {
    dispatch(setSearchedProducts(event.target.value));
  };

  return (
    <Navbar
      bg="dark"
      data-bs-theme="dark"
      expand="lg"
      className="bg-body-tertiary"
    >
      <Container fluid>
        <Navbar.Brand href="#">
          <FontAwesomeIcon icon={faSnowflake} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Link to="/" className="nav-link">
              Home
            </Link>
            <Link to="/all-products" className="nav-link">
              All Products
            </Link>
            <Link to="/card" className="nav-link">
              Card
            </Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchedProducts}
              onChange={handleSearchInputChange}
            />
            <Button variant="outline-success" disabled={!searchedProducts}>
              <Link to="/search" className="nav-link">
                Search
              </Link>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default MainNavbar;

import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/fetchData";
import { useEffect, useState } from "react";
import WaveLoader from "../components/WaveLoader";
import NotFound from "../components/NotFound";
import SectionHeader from "../components/SectionHeader";
// import ProductCard from "../components/ProductCard";
import { Card, Container, Image } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCard } from "../features/card/cardSlice";

const Product = () => {
  const { productId } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const data = await fetchProductById(productId);
      setProduct(data);
      setLoading(false);
      console.log("data : ", data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setLoading(false);
    }
  };

  const handleAddToCard = () => {
    if (product) {
      dispatch(addToCard(product));
    }
  };

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <>
      {loading ? <WaveLoader /> : null}
      {!loading && product === null ? (
        <div className="text-center">
          <NotFound />
        </div>
      ) : null}
      {!loading && product !== null ? (
        <Container className="my-5">
          <SectionHeader headerText={product.title} />
          <Card className="product-card">
            <Image
              className="product-image"
              src={product.image}
              alt={product.title}
              fluid
              style={{ height: "200px", width: "200px", margin: "0 auto" }}
            />
            <Card.Body>
              <Card.Title className="text-center my-3 title">
                {product.title}
              </Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <div className="product-details">
                <Card.Text className="price">Price: ${product.price}</Card.Text>
                <div>category : {product.category}</div>
                <div>rate : {product.rating.rate}</div>
                <div>count : {product.rating.count}</div>
                {/* Render other product details */}
              </div>
              <div className="product-cart-control">
                <button
                  className="btn btn-primary my-3"
                  onClick={handleAddToCard}
                  // disabled={productInCard.quantity === product.quantity ? "disabled" : null}
                >
                  Add to cart
                </button>
                <button
                  className="btn btn-danger my-3"
                  disabled="disabled"
                  // onClick={handleAddToCard}
                  // disabled={productInCard.quantity === product.quantity ? "disabled" : null}
                >
                  Remove from cart
                </button>
              </div>
            </Card.Body>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export default Product;

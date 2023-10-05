import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/fetchData";
import { useEffect, useState } from "react";
import WaveLoader from "../components/WaveLoader";
import NotFound from "../components/NotFound";
import SectionHeader from "../components/SectionHeader";
import { useSelector } from "react-redux";
import { Button } from "react-bootstrap";
import ProductCountModal from "../components/ProductCountModal";

const Product = () => {
  const { productId } = useParams();
  const cardProducts = useSelector((state) => state.card.data);
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  const [cardQuantity, setCardQuantity] = useState(0);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

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

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Card : ", cardProducts);
  }, [cardProducts]);

  return (
    <>
      {loading ? <WaveLoader /> : null}
      {!loading && product === null ? (
        <div className="text-center">
          <NotFound />
        </div>
      ) : null}
      {!loading && product !== null && product ? (
        <div className="container my-5">
          <SectionHeader headerText={product.title} />
          <div className="product">
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              {/* <h2 className="product-title">{product.title}</h2> */}
              <p className="product-description mx-2 my-5">
                {product.description}
              </p>
              <div className="product-info">
                <p className="product-price">Price: ${product.price}</p>
                <p className="product-category">Category: {product.category}</p>
                <p className="product-rating">
                  Rating: {product.rating.rate} ({product.rating.count} reviews)
                </p>
                {/* Render other product details */}
              </div>
              <div className="product-cart-control">
                {/* <button
                  className="btn btn-primary my-3"
                  onClick={handleAddToCard}
                >
                  Add to cart
                </button> */}
                <Button variant="primary" onClick={handleShow}>
                  Launch demo modal
                </Button>
                <button className="btn btn-danger my-3" disabled="disabled">
                  Remove from cart
                </button>
              </div>
            </div>
          </div>

          <ProductCountModal
            cardQuantity={cardQuantity}
            setCardQuantity={setCardQuantity}
            show={show}
            handleClose={handleClose}
            max={product.rating.count}
            product={product}
          />
        </div>
      ) : null}
    </>
  );
};

export default Product;

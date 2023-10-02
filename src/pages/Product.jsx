import { useParams } from "react-router-dom";
import { fetchProductById } from "../utils/fetchData";
import { useEffect, useState } from "react";
import WaveLoader from "../components/WaveLoader";
import NotFound from "../components/NotFound";
import SectionHeader from "../components/SectionHeader";
// import ProductCard from "../components/ProductCard";
import { Card, Container, Image } from "react-bootstrap";

const Product = () => {
  const { productId } = useParams();
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

  useEffect(() => {
    // Fetch data when the component mounts
    fetchData();
  }, []);

  return (
    <>
      {loading ? <WaveLoader /> : null}
      {!loading && product === "" ? (
        <div className="text-center">
          <NotFound />
        </div>
      ) : null}
      {!loading && product !== null ? (
        <Container className="m-5">
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
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Card.Text>Price: ${product.price}</Card.Text>
              {/* Render other product details */}
            </Card.Body>
          </Card>
        </Container>
      ) : null}
    </>
  );
};

export default Product;

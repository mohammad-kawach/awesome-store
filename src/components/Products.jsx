import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProductsAsync } from "../features/products/productsSlice";
import ProductCard from "./ProductCard";
import WaveLoader from "./WaveLoader";

const Products = () => {
  const allProducts = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  console.log(allProducts, status);

  return (
    <>
      {status === "loading" ? <WaveLoader /> : null}
      {status === "failed" ? (
        <div className="alert alert-danger">Failed To Fetch Data</div>
      ) : null}
      {status === "succeeded" ? (
        <div className="row mt-5">
          {allProducts.map((product) => (
            <ProductCard
              key={product.id}
              id={product.id}
              title={product.title}
              price={product.price}
              description={product.description}
              category={product.category}
              image={product.image}
              rate={product.rating.rate}
              count={product.rating.count}
            />
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Products;

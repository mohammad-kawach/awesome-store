import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import WaveLoader from "../components/WaveLoader";
import { fetchProductsAsync } from "../features/products/productsSlice";
import SectionHeader from "../components/SectionHeader";
import NotFound from "../components/NotFound";

const SearchedProducts = () => {
  const searchedProducts = useSelector((state) => state.searchedProducts);
  const navigate = useNavigate();

  const allProducts = useSelector((state) => state.products.data);
  const status = useSelector((state) => state.products.status);
  const dispatch = useDispatch();

  useEffect(() => {
    /* to prevent accessing this page by force */
    if (searchedProducts === "" || searchedProducts === null) {
      console.log("it is empty");
      navigate("/");
    }
  }, []);

  useEffect(() => {
    dispatch(fetchProductsAsync());
  }, [dispatch]);

  console.log(allProducts, status);

  const filteredProducts = allProducts.filter((product) =>
    product.title.toLowerCase().includes(searchedProducts.toLowerCase())
  );

  return (
    <div className="container">
      {status === "loading" ? <WaveLoader /> : null}
      {status === "failed" ? (
        <div className="alert alert-danger">Failed To Fetch Data</div>
      ) : null}
      {status === "succeeded" ? (
        <>
          <SectionHeader headerText={searchedProducts} />
          <div className="row mt-5">
            {filteredProducts.length ? (
              filteredProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  title={product.title}
                  price={product.price}
                  description={product.description}
                  category={product.category}
                  image={product.image}
                />
              ))
            ) : (
              <div className="text-center">
                <NotFound />
              </div>
            )}
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SearchedProducts;

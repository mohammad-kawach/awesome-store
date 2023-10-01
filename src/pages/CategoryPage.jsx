import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../features/category/categorySlice";
import { useParams } from "react-router-dom";
import SectionHeader from "../components/SectionHeader";
import PageNotFound from "./PageNotFound";
import { fetchProductsByCategory } from "../utils/fetchData";
import WaveLoader from "../components/WaveLoader";
import ProductCard from "../components/ProductCard";

const CategoryPage = () => {
  const { categoryName } = useParams();

  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(fetchCategoriesAsync());
      const fetchedProducts = await fetchProductsByCategory(categoryName);
      setProducts(fetchedProducts);
    };

    fetchData();
  }, [dispatch, categoryName]);

  return (
    <div>
      {status === "succeeded" ? (
        <>
          {categories.includes(categoryName) ? (
            <div className="container">
              <SectionHeader headerText={categoryName} />
              <div className="row">
                {products.map((product) => (
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
            </div>
          ) : (
            <PageNotFound />
          )}
        </>
      ) : (
        <WaveLoader />
      )}
    </div>
  );
};

export default CategoryPage;

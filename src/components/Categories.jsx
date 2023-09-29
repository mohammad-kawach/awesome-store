import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchCategoriesAsync } from "../features/category/categorySlice";
import WaveLoader from "./WaveLoader";
import Category from "./Category";

const Categories = () => {
  const categories = useSelector((state) => state.categories.data);
  const status = useSelector((state) => state.categories.status);
  // const error = useSelector((state) => state.categories.error);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCategoriesAsync());
  }, [dispatch]);

  const images = [
    "https://picsum.photos/id/1/200/200",
    "https://picsum.photos/id/26/200/200",
    "https://picsum.photos/id/338/200/200",
    "https://picsum.photos/id/399/200/200",
  ];
  
  const captions = [
    "Some awesome Electronics",
    "Some awesome jewelery",
    "Some awesome Men's Clothing",
    "Some awesome Women's Clothing",
  ];

  return (
    <div>
      {status === "loading" ? <WaveLoader /> : null}
      {status === "failed" ? (
        <div className="alert alert-danger">Failed To Fetch Data</div>
      ) : null}
      {status === "succeeded" ? (
        <div className="row">
          {categories.map((category, key) => (
            <Category key={category} title={category} image={images[key]} caption={captions[key]} />
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default Categories;

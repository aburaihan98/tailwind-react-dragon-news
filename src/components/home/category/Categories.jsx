import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Category from "./Category";
import CategoryCard from "./CategoryCard";

export default function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((response) => response.json())
      .then((data) => setCategories(data?.data?.news_category))
      .catch((error) => toast.error(error.message));
  }, []);

  return (
    <>
      <h2 className="font-semibold text-xl text-dark2 mb-5">
        All Category ({categories.length})
      </h2>
      {categories &&
        categories?.map((category) => (
          <Category key={category} category={category} />
        ))}
      <CategoryCard />
    </>
  );
}

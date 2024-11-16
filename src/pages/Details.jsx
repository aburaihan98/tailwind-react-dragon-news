import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../components/home/header/Header";
import LoginWith from "../components/home/loginwith/LoginWith";

export default function Details() {
  const { data } = useLoaderData();
  const news = data[0];
  const { title, details, image_url, category_id } = news || {};

  return (
    <div className="w-11/12 m-auto">
      <Header />
      <main className="grid grid-cols-12 gap-3">
        <div className="mb-24 col-span-9">
          <h2 className="font-semibold text-xl text-dark2 mb-5">Dragon News</h2>
          <div className="border rounded-md p-[30px]">
            <div className="mb-5">
              <img className="rounded-md" src={image_url} alt="image" />
            </div>
            <p className="font-bold text-2xl text-dark2 mb-2">{title}</p>
            <p className="text-dark3 mb-8">{details}</p>
            <Link to={`/category/${category_id}`}>
              <button className="flex items-center gap-2 py-[9px] px-[26px] bg-[#D72050] text-white font-medium text-xl">
                <FaArrowLeft />
                All news in this category
              </button>
            </Link>
          </div>
        </div>
        <div className="col-span-3">
          <LoginWith />
        </div>
      </main>
    </div>
  );
}

import { useLoaderData } from "react-router-dom";
import DragonNewsHomeCard from "./DragonNewsHomeCard";

export default function DragonNewsHome() {
  const { data: news } = useLoaderData();

  return (
    <>
      <h2 className="font-semibold text-xl text-dark2 mb-5">
        Dragon News Home
      </h2>
      {news.map((singleNews) => (
        <DragonNewsHomeCard key={singleNews?._id} singleNews={singleNews} />
      ))}
    </>
  );
}

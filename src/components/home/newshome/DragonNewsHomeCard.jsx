import {
  faBookmark,
  faEye,
  faShareNodes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

export default function DragonNewsHomeCard({ singleNews }) {
  const {
    _id,
    author: { name, img, published_date },
    title,
    thumbnail_url,
    details,
    rating: { number },
    total_view,
  } = singleNews;

  return (
    <div className="border rounded-[5px] mb-5">
      <button className="py-[18px] px-[20px]  w-full  rounded-t-[5px] bg-dark7 text-dark2 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <div className="w-10 h-10">
            <img
              className="w-full h-full rounded-full"
              src={img}
              alt="Demo user image"
            />
          </div>
          <div className="text-start">
            <h3 className="font-semibold text-dark2">{name}</h3>
            <p className="text-dark3 ">{published_date}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <FontAwesomeIcon icon={faBookmark} />
          <FontAwesomeIcon icon={faShareNodes} />
        </div>
      </button>
      <div className="px-5 pt-[14px]">
        <p className="font-bold text-xl text-dark2 mb-5">{title}</p>
        <div className="mb-8">
          <img className="w-full" src={thumbnail_url} alt="thumbnail img" />
        </div>
        <p className="text-[#706F6F] pb-5   border-b">
          {details.slice(1, 150)}
          <Link to={`newsDetails/${_id}`}>
            <span className="font-semibold text-[#F75B5F] ml-2">Read More</span>
          </Link>
        </p>
        <div className="py-5 flex justify-between items-center">
          <div className="flex justify-center items-center gap-2.5">
            <ReactStars
              count={5}
              size={24}
              value={number}
              isHalf={true}
              emptyIcon={<i className="far fa-star"></i>}
              halfIcon={<i className="fa fa-star-half-alt"></i>}
              fullIcon={<i className="fa fa-star"></i>}
              activeColor="#ffd700"
            />
            <p className="font-medium text-dark3">{number}</p>
          </div>
          <div className="font-medium text-dark3 flex items-center gap-2.5">
            <FontAwesomeIcon icon={faEye} />
            <p>{total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

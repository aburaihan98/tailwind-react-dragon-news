import { faCalendar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "../../../assets/images/swimming.png";

export default function CategoryCard() {
  return (
    <div className="mt-[30px]">
      <div className="mb-5">
        <img className="w-full" src={Image} alt="" />
      </div>
      <h2 className="font-semibold text-xl text-dark2 mb-5">
        Bayern Slams Authorities Over Flight Delay to Club World Cup
      </h2>
      <div className="flex items-center">
        <p className="font-medium text-dark2 mr-5">Sports</p>
        <FontAwesomeIcon className="mr-[13px] text-dark4" icon={faCalendar} />
        <p className="font-medium text-dark4">Jan 4, 2022</p>
      </div>
    </div>
  );
}

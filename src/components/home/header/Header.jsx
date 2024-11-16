import moment from "moment";
import Logo from "../../../assets/images/logo.png";

export default function Header() {
  return (
    <>
      <div className="pt-12 pb-7 text-center">
        <div className=" mb-5">
          <img className="m-auto" src={Logo} alt="Logo" />
        </div>
        <p className="text-lg mb-2.5 text-dark3">
          Journalism Without Fear or Favour
        </p>
        <p className="font-medium text-xl text-dark3">
          <span className="text-[#403F3F]">{moment().format("dddd")}</span>,{" "}
          {moment().format("MMMM Do YYYY")}
        </p>
      </div>
    </>
  );
}

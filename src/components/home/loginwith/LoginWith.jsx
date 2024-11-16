import { useContext } from "react";
import { FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io5";
import { toast } from "react-toastify";
import Bg from "../../../assets/images/bg.png";
import Class from "../../../assets/images/class.png";
import Playground from "../../../assets/images/playground.png";
import Swimming from "../../../assets/images/swimming.png";
import { AuthContext } from "../../../provider/AuthProvider";

export default function LoginWith() {
  const { loginWithGoogle, loginWithGithub, loginWithTwitter } =
    useContext(AuthContext);

  // google
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then(() => {
        toast.success(" Your login successful by Google");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // github
  const handleGithubLogin = () => {
    loginWithGithub()
      .then(() => {
        toast.success("Your login successful by github");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  // twitter
  const handleTwitterLogin = () => {
    loginWithTwitter()
      .then(() => {
        toast.success(" Your login successful by twitter");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  return (
    <>
      <div className="p-4">
        <h2 className="font-semibold text-xl text-dark2 mb-5">Login with</h2>
        <button
          onClick={handleGoogleLogin}
          className="w-full p-3 border border-[#547ac7] rounded-md flex items-center justify-center gap-2 text-[#547ac7] font-semibold text-xl mb-2"
        >
          <FaGoogle />
          Login with Google
        </button>
        <button
          onClick={handleGithubLogin}
          className="w-full p-3 border border-[#735357] rounded-md flex items-center justify-center gap-2 text-[#735357] font-semibold text-xl"
        >
          <FaGithub />
          Login with GitHub
        </button>
        <h3 className="font-semibold text-xl text-dark2 mt-[30px] mb-5">
          Find Us On
        </h3>
        <div className="border rounded-md">
          <button className="w-full p-4 flex  items-center gap-2.5 border-b cursor-not-allowed opacity-50">
            <div className="w-[30px] h-[30px] rounded-full bg-dark7 flex justify-center items-center">
              <IoLogoFacebook />
            </div>
            <p className="font-medium text-dark3">Facebook</p>
          </button>
          <button
            onClick={handleTwitterLogin}
            className="w-full p-4 flex  items-center gap-2.5 border-b"
          >
            <div className="w-[30px] h-[30px] rounded-full bg-dark7 flex justify-center items-center">
              <FaTwitter />
            </div>
            <p className="font-medium text-dark3">Twitter</p>
          </button>
          <button className="w-full p-4 flex  items-center gap-2.5 ">
            <div className="w-[30px] h-[30px] rounded-full bg-dark7 flex justify-center items-center">
              <FaInstagram />
            </div>
            <p className="font-medium text-dark3 cursor-not-allowed opacity-50">
              Instagram
            </p>
          </button>
        </div>
      </div>
      <div className=" py-4 bg-dark7">
        <h3 className="font-semibold text-xl text-dark2  px-4">Q-Zone</h3>
        <div className="mx-1 mt-5 border border-dashed">
          <img className="w-full" src={Swimming} alt="Swimming" />
        </div>
        <div className="mx-1 mt-5 border border-dashed">
          <img className="w-full" src={Class} alt="Class" />
        </div>
        <div className="mx-1 mt-5 border border-dashed">
          <img className="w-full" src={Playground} alt="Playground" />
        </div>
      </div>
      <div className="mt-5 mb-8">
        <img className="m-auto" src={Bg} alt="bg" />
      </div>
    </>
  );
}

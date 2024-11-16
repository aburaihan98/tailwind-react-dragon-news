import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../components/home/header/NavBar";
import { AuthContext } from "../provider/AuthProvider";

export default function Login() {
  const { loginUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const email = formData.get("email");
    const password = formData.get("password");

    loginUser(email, password)
      .then(() => {
        navigate(location.state ? location.state : "/");
        toast.success("Your login successful");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-dark7">
      <div className="w-11/12 m-auto">
        <NavBar />
        <div className="bg-dark5  pb-[185px]">
          <div className="py-[76px] px-[73px] w-[752px] m-auto bg-white mt-[134px]">
            <h2 className="font-semibold text-[35px] text-dark2 pb-12 mb-12 border-b">
              Login your account
            </h2>
            <form onSubmit={handleSubmit} className="mb-[30px]">
              <div className="flex flex-col gap-4 mb-6">
                <label className="font-semibold text-xl text-dark2" htmlFor="">
                  Email address
                </label>
                <input
                  className="p-5 bg-dark7 rounded-md text-dark4"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="flex flex-col gap-4 mb-[30px]">
                <label className="font-semibold text-xl text-dark2" htmlFor="">
                  Password
                </label>
                <input
                  className="p-5 bg-dark7 rounded-md text-dark4"
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                />
              </div>
              <button
                type="submit"
                className="w-full font-semibold text-xl p-[18px] rounded-md bg-dark2 text-white"
              >
                Login
              </button>
            </form>
            <p className="font-semibold text-[#706F6F] text-center">
              Dont’t Have An Account ?{" "}
              <Link to="/register" className="text-[#FF8C47]">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

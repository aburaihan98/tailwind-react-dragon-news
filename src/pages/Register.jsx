import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import NavBar from "../components/home/header/NavBar";
import { AuthContext } from "../provider/AuthProvider";

export default function Register() {
  const { createNewUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const name = formData.get("name");
    const photo = formData.get("photo");
    const email = formData.get("email");
    const password = formData.get("password");

    createNewUser(email, password)
      .then(() => {
        toast.success("Your register successful");
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            toast.success("Update your profile successful");
          })
          .catch((error) => toast.error(error.message));
        navigate("/login");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="bg-dark7">
      <div className="w-11/12 m-auto">
        <NavBar />
        <div className="bg-dark5  pb-[185px]">
          <div className="py-[76px] px-[73px] w-[752px] m-auto bg-white mt-[88px]">
            <h2 className="font-semibold text-[35px] text-dark2 pb-12 mb-12 border-b">
              Register your account
            </h2>
            <form onSubmit={handleSubmit} className="mb-[30px]">
              <div className="flex flex-col gap-4 mb-6">
                <label className="font-semibold text-xl text-dark2" htmlFor="">
                  Your Name
                </label>
                <input
                  className="p-5 bg-dark7 rounded-md text-dark4"
                  type="name"
                  name="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="flex flex-col gap-4 mb-[30px]">
                <label className="font-semibold text-xl text-dark2" htmlFor="">
                  Photo URL
                </label>
                <input
                  className="p-5 bg-dark7 rounded-md text-dark4"
                  type="text"
                  name="photo"
                  placeholder="Enter your Photo URL"
                />
              </div>
              <div className="flex flex-col gap-4 mb-[30px]">
                <label className="font-semibold text-xl text-dark2" htmlFor="">
                  Email
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
              <div className="mb-[30px]">
                <label className="flex items-center">
                  <input type="checkbox" className="w-6 h-6 mr-2.5" />
                  <span className="text-[#706F6F] mr-1">Accept</span>
                  <span className="font-semibold text-[#706F6F] ">
                    Terms & Conditions
                  </span>
                </label>
              </div>
              <button
                type="submit"
                className="w-full font-semibold text-xl p-[18px] rounded-md bg-dark2 text-white"
              >
                Register
              </button>
            </form>
            <p className="font-semibold text-[#706F6F] text-center">
              Allready Have An Account ?{" "}
              <Link to="/login" className="text-[#FF8C47]">
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

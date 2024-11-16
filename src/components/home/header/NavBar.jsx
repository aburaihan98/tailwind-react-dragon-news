import { useContext } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import UserImage from "../../../assets/images/user.png";
import { AuthContext } from "../../../provider/AuthProvider";

export default function NavBar() {
  const { user, userLogout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    userLogout()
      .then(() => {
        navigate("/");
        toast.success("Logout successful");
      })
      .catch((error) => toast.error(error.message));
  };

  return (
    <div className="pt-5 flex items-center justify-between">
      <div>
        <h3 className=" font-semibold text-xl ">{user?.displayName}</h3>
      </div>
      <ul className="text-lg text-dark3 text-center flex items-center justify-center gap-4">
        <NavLink to="/">
          <li>Home</li>
        </NavLink>
        <NavLink className="cursor-not-allowed opacity-50">
          <li>About</li>
        </NavLink>
        <NavLink className="cursor-not-allowed opacity-50">
          <li>Career</li>
        </NavLink>
      </ul>
      <div className="flex items-center gap-[9px]">
        <div className="bg-dark7 w-10 h-10">
          <img
            className="w-full h-full rounded-full"
            src={user?.photoURL ? user?.photoURL : UserImage}
            alt="User image"
          />
        </div>
        {user ? (
          <button
            onClick={handleLogout}
            className="py-[11px] px-[42px] bg-dark2 font-semibold text-xl text-white"
          >
            Logout
          </button>
        ) : (
          <Link to="/login">
            <button className="py-[11px] px-[42px] bg-dark2 font-semibold text-xl text-white">
              Login
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}

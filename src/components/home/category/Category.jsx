import { NavLink } from "react-router-dom";

export default function Category({ category }) {
  return (
    <>
      <NavLink
        to={`/category/${category?.category_id}`}
        className={({ isActive }) =>
          isActive
            ? "py-[17px] bg-dark6 font-semibold text-xl text-dark4 rounded-md"
            : "py-[17px] font-medium text-xl text-dark4 "
        }
      >
        <button className="py-[17px] pl-[50px] w-full rounded-[5px] text-start hover:bg-dark6">
          {category.category_name}
        </button>
      </NavLink>
    </>
  );
}

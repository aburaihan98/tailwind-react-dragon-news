import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <div className="font-poppins">
      <Outlet />
    </div>
  );
}

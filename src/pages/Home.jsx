import { Outlet } from "react-router-dom";
import Categories from "../components/home/category/Categories";
import Header from "../components/home/header/Header";
import LatestNews from "../components/home/header/LatestNews";
import NavBar from "../components/home/header/NavBar";
import LoginWith from "../components/home/loginwith/LoginWith";

export default function Home() {
  return (
    <div className="w-11/12 m-auto mb-24">
      <Header />
      <LatestNews />
      <NavBar />
      <div className="grid grid-cols-12 gap-6 mt-[76px]">
        <aside className="col-span-3">
          <Categories />
        </aside>
        <section className="col-span-6">
          <Outlet />
        </section>
        <aside className="col-span-3">
          <LoginWith />
        </aside>
      </div>
    </div>
  );
}

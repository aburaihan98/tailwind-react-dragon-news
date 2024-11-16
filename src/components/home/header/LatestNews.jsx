import React from "react";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

export default function LatestNews() {
  return (
    <div className="p-4 bg-dark7 text-dark2 flex items-center gap-5">
      <button className="py-[9px] px-6 font-medium text-xl bg-[#D72050] text-white">
        Latest
      </button>
      <Marquee
        speed={100}
        pauseOnHover={true}
        className="font-semibold text-xl space-x-10"
      >
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
        <Link to="/">
          Match Highlights: Germany vs Spain — as it happened !
        </Link>
      </Marquee>
    </div>
  );
}

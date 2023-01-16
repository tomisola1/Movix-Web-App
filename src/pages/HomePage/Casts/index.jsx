import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import CastCard from "../../../components/CastCard/CastCard";
import PageLayout from "../../../components/PageLayout";
import "./style.css";

const Casts = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);
  const { cast } = useSelector((state) => state.movie);
  return (
    <PageLayout>
      <div className="">
        <h2>Featured Casts</h2>

        <div className="movies">
          {cast.map((cast, idx) => (
            <CastCard key={idx} cast={cast} />
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Casts;

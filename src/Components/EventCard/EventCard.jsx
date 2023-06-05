import React from "react";
import { Helmet } from "react-helmet-async";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";

const EventCard = ({ event }) => {
  const { img, title, _id } = event || {};
  return (
    <SkeletonTheme baseColor="#202020" highlightColor="#444">
      <Link to={`/bookEvent/${_id}`}>
        <div  className="card h-96 bg-base-100 shadow-xl">
          <figure>
            <img className="h-80" src={img || <Skeleton
                            
                            height="100px"
                            containerClassName="avatar-skeleton"
                        />} alt="Shoes" />
          </figure>
          <div className="card-body px-5">
            <h2 className="text-center text-xl font-semibold">{title || <Skeleton />}</h2>

            
          </div>
        </div>
      </Link>
      </SkeletonTheme>

  );
};

export default EventCard;

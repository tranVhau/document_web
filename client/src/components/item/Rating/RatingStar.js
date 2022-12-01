import React from "react";
import ReactStars from "react-rating-stars-component";

const options = {
  size: 30,
  count: 5,
  color: "gray",
  activeColor: "yellow",
  value: 1,
  a11y: true,
  isHalf: true,
  emptyIcon: <i className="far fa-star" />,
  halfIcon: <i className="fa fa-star-half-alt" />,
  filledIcon: <i className="fa fa-star" />,
  onChange: (newValue) => {
    // console.log(`Example 2: new value is ${newValue}`);
  },
};

function RatingStat() {
  return (
    <div className={""}>
      <ReactStars {...options} />
    </div>
  );
}

export default RatingStat;

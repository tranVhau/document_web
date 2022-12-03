import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { Rating } from "../../../store/actions/documentAction";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { unwrapResult } from "@reduxjs/toolkit";
import { ToastContainer, toast } from "react-toastify";
import classes from "./Rating.module.css";

function RatingStar() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [ratingPoint, setRatingPoint] = useState(5);
  const options = {
    size: 30,
    count: 5,
    color: "gray",
    activeColor: "yellow",
    value: 5,
    a11y: true,
    isHalf: false,
    emptyIcon: <i className="far fa-star" />,
    // halfIcon: <i className="fa fa-star-half-alt" />,
    filledIcon: <i className="fa fa-star" />,
    onChange: (newValue) => {
      setRatingPoint(newValue);
    },
  };
  // console.log(useParams());
  const ratingHandler = async (e) => {
    // e.preventDefault();
    try {
      unwrapResult(await dispatch(Rating({ id: id, point: ratingPoint })));
      toast("Thank You For Your Feedback!", {
        type: "success",
      });
    } catch (error) {
      toast("You Need to Login First! ", {
        type: "error",
      });
    }
    // console.log(ratingPoint);
  };
  return (
    <div className={classes.rating__field}>
      <ReactStars {...options} />
      <button className={classes.submit__btn} onClick={ratingHandler}>
        Submit
      </button>
      <ToastContainer position="top-right" newestOnTop />
    </div>
  );
}

export default RatingStar;

import React from "react";

import classes from "./StatisticCard.module.css";

function StatisticCard(props) {
  return (
    <div className={classes.card}>
      <div className={classes.card_inner}>
        <p className={classes.text_primary}>{props.title}</p>
      </div>
      <span className={`${classes.text_primary} ${classes.font_weight_bold}`}>
        {props.value}
      </span>
    </div>
  );
}

export default StatisticCard;

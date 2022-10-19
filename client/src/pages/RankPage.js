import React from "react";

import HorizonItem from "../components/item/HorizonItem";

import classes from "../components/item/HorizonItem.module.css";

function RankPage() {
  return (
    <div className={classes.container}>
      <div className={classes.tag_name}>
        <h1>Popular</h1>
      </div>
      <HorizonItem />
      <HorizonItem />
      <HorizonItem />
      <HorizonItem />
      <HorizonItem />
      <HorizonItem />
    </div>
  );
}

export default RankPage;

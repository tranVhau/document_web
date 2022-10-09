import React from "react";

function OptionFilterItem(props) {
  return (
    <option select="" value="">
      {props.item.name}
    </option>
  );
}

export default OptionFilterItem;

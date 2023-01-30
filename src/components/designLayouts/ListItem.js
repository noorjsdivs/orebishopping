import React from "react";

const ListItem = ({ itemName, className }) => {
  return <li className={className}>{itemName}</li>;
};

export default ListItem;

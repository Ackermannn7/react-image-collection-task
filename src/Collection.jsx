import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
export const Collection = (props) => {
  return (
    <div className="collection">
      <Link key={props.id} to={`/collection/${props.id}`}>
        <img className="collection__big" src={props.images[0]} alt="Item" />
        <div className="collection__bottom">
          <img className="collection__mini" src={props.images[1]} alt="Item" />
          <img className="collection__mini" src={props.images[2]} alt="Item" />
          <img className="collection__mini" src={props.images[3]} alt="Item" />
        </div>
        <h4>{props.name}</h4>
      </Link>
    </div>
  );
};

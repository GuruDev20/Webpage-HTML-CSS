import React from "react";
import "./PlaceList.css";
import PlaceItem from "./PlaceItem";
import Card from "../../shared/components/UIElements/Card";
const PlaceList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No Places Found Maybe Create one?</h2>
          <button>Share Place </button>
        </Card>
      </div>
    );
  }
  return (
    <li className="place-list">
      {props.item.map((places) => (
        <PlaceItem
          key={places.id}
          id={places.id}
          image={places.imageUrl}
          title={places.title}
          description={places.description}
          address={places.address}
          creatorId={places.creatorId}
          coordinates={places.location}
        />
      ))}
    </li>
  );
};
export default PlaceList;

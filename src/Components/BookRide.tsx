import React from "react";
import { Button } from "@innovaccer/design-system";
import { Link } from "react-router-dom";
import Getlocation from "Data/location/GeoCode";

const BookRide = (params: any) => {
  const pickup: any = Getlocation(params.pickup);
  const drop: any = Getlocation(params.drop);
  if (pickup.loading === false && drop.loading === false) {
    const p_latitude = parseFloat(pickup.data.places[0].latitude);
    const p_longitude = parseFloat(pickup.data.places[0].longitude);
    const d_latitude = parseFloat(drop.data.data[0].latitude);
    const d_longitude = parseFloat(drop.data.data[0].longitude);
    let url = `https://m.uber.com/?client_id=<CLIENT_ID>&action=setPickup&pickup[latitude]=${p_latitude}&pickup[longitude]=${p_longitude}&pickup[nickname]=${encodeURI(
      pickup.data.places[0]["place name"]
    )}&pickup[formatted_address]=${encodeURI(
      pickup.data.places[0]["place name"]
    )}&dropoff[latitude]=${d_latitude}&dropoff[longitude]=${d_longitude}
    &dropoff[nickname]=${encodeURI(
      drop.data.data[0].label
    )}&dropoff[formatted_address]=${encodeURI(
      drop.data.data[0].label
    )}&product_id=a1111c8c-c720-46c3-8534-2fcdd730040d&link_text=View%20team%20roster&partner_deeplink=partner%3A%2F%2Fteam%2F9383`;
    return (
      <div className="mt-8">
        <Link
          to={{ pathname: url }}
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <Button icon="directions_car" largeIcon={true}>
            Book a Ride
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="mt-8">
        <Button icon="directions_car" largeIcon={true}>
          Loading...
        </Button>
      </div>
    );
  }
};

export default BookRide;

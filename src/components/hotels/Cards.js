import React from "react";
import "./hotels.styles.css";
import { faMapMarker, faBed } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Equivalencias de los precios
function Cards(props) {
  function prices(currency) {
    if (currency === 1) {
      return (
        <div className="price">
          $ <span>$ $ $</span>
        </div>
      );
    }
    if (currency === 2) {
      return (
        <div className="price">
          $ $ <span>$ $</span>
        </div>
      );
    }
    if (currency === 3) {
      return (
        <div className="price">
          $ $ $ <span>$</span>
        </div>
      );
    }
    if (currency === 4) {
      return (
        <div className="price">
          $ $ $ $ <span></span>
        </div>
      );
    }
  }
  const showPrice = prices(props.price);

  return (
    <div>
      <div className="hotelCard">
        <img className="hotelimg" src={props.photo} alt="areco" />
        <div className="description">
          <h3 className="HotelName">{props.name}</h3>
          <h3 className="HotelDescription">{props.description}</h3>
          <div className="location">
            <FontAwesomeIcon className="place" icon={faMapMarker} />
            {props.city}, {props.country}
          </div>
          <div className="Otros">
            <div className="Rooms">
              <FontAwesomeIcon className="beds" icon={faBed} />
              {props.rooms} Habitaciones
            </div>
            {showPrice}
          </div>
        </div>
      </div>
      <button className="book">Reservar</button>
    </div>
  );
}

export { Cards };

import React from "react";
import { useState } from "react";
import Header from "./components/header/Header";
import { Hotels } from "./components/hotels/Hotels";
import { Filter } from "./components/filter/Filters";
import { hotelsData } from "./data";
import "./styles.css";

// States para los paises, precios

export default function App() {
  const [country, setCountry] = useState("Todos los paises");
  const [price, setPrice] = useState("Cualquier precio");
  const [rooms, setRooms] = useState("Cualquier tamaño");
  const [availabilityFrom, setAvailabilityFrom] = useState("");
  const [availabilityTo, setAvailabilityTo] = useState("");

  // Handlers
  const handlerCountry = (e) => {
    setCountry(e.target.value);
  };

  const handlerPrice = (e) => {
    setPrice(e.target.value);
  };

  const handlerRooms = (e) => {
    setRooms(e.target.value);
  };

  const handlerCheckIn = (e) => {
    setAvailabilityFrom(e.target.value);
  };

  const handlerCheckOut = (e) => {
    setAvailabilityTo(e.target.value);
  };

  const handlerReset = () => {
    setAvailabilityFrom("");
    setAvailabilityTo("");
    setCountry("Todos los paises");
    setPrice("Cualquier Precio");
    setRooms("Cualquier Tamano");
  };

  //Filtros
  const generalFilter = () => {
    // Cambio de fechas a Unix:
    const checkInUnix =
      new Date(availabilityFrom).getTime() + 18000000 + 86400000;
    const checkOutUnix = new Date(availabilityTo).getTime() + 18000000;
    const today = new Date().getTime() + 18000000;
    const resetDates = () => {
      setAvailabilityFrom("");
      setAvailabilityTo("");
    };

    // Funcion de alerta de error en el check out:
    function errorCheckOut() {
      if (checkOutUnix < checkInUnix) {
        alert("La fecha de Check Out es anterior a la fecha de Check In");
        setAvailabilityTo("");
      }
    }
    errorCheckOut();

    // Funcion de alerta de error en el check in:
    function errorCheckIn() {
      if (checkInUnix < today) {
        alert("La fecha de Check In indicada está en el pasado");
        setAvailabilityFrom("");
      }
    }
    errorCheckIn();

    // Funciones de filtros encadenados:
    const filterGroup = hotelsData
      .filter(function (hotel) {
        if (country !== "Todos los paises") {
          return hotel.country === country;
        }
        return hotel;
      })
      .filter(function (hotel) {
        if (price !== "Cualquier Precio") {
          if (price === "$") {
            return hotel.price === 1;
          }
          if (price === "$$") {
            return hotel.price === 2;
          }
          if (price === "$$$") {
            return hotel.price === 3;
          }
          if (price === "$$$$") {
            return hotel.price === 4;
          }
        }
        return hotel;
      })
      .filter(function (hotel) {
        if (rooms !== "Cualquier tamaño") {
          if (rooms === "Hotel Pequeño") {
            return hotel.rooms <= 10;
          }
          if (rooms === "Hotel Mediano") {
            return hotel.rooms > 10 && hotel.rooms <= 20;
          }
          if (rooms === "Hotel Grande") {
            return hotel.rooms > 20;
          }
        }
        return hotel;
      })
      .filter(function (hotel) {
        if (availabilityFrom !== "" && availabilityTo !== "") {
          return (
            hotel.availabilityFrom <= checkInUnix &&
            hotel.availabilityTo > checkOutUnix
          );
        }
        return hotel;
      });
    return filterGroup;
  };

  const filtered = generalFilter();

  return (
    <div className="App">
      <Header
        valueCheckIn={availabilityFrom}
        valueCheckOut={availabilityTo}
        valueCountry={country}
        valuePrice={price}
        valueRooms={rooms}
      />
      <Filter
        onChangeCheckIn={handlerCheckIn}
        valueCheckIn={availabilityFrom}
        onChangeCheckOut={handlerCheckOut}
        valueCheckOut={availabilityTo}
        onChangeCountry={handlerCountry}
        valueCountry={country}
        onChangePrice={handlerPrice}
        valuePrice={price}
        onChangeRooms={handlerRooms}
        valueRooms={rooms}
        onClickReset={handlerReset}
      />
      <Hotels hotelsFiltered={filtered} />
    </div>
  );
}

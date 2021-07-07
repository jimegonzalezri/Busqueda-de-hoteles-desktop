import React from "react";
import "./header.styles.css";

function Header({
  valueCheckIn,
  valueCheckOut,
  valueCountry,
  valuePrice,
  valueRooms
}) {
  // Redefinicion de filtros

  // Fecha checkin y checkout a strings
  const monthCheckIn = new Date(valueCheckIn).getMonth();
  const monthCheckOut = new Date(valueCheckOut).getMonth();

  const monthName = (m) => {
    switch (m) {
      case 0:
        return "Enero";
      case 1:
        return "Febrero";
      case 2:
        return "Marzo";
      case 3:
        return "Abril";
      case 4:
        return "Mayo";
      case 5:
        return "Junio";
      case 6:
        return "Julio";
      case 7:
        return "Agosto";
      case 8:
        return "Septiembre";
      case 9:
        return "Octubre";
      case 10:
        return "Noviembre";
      case 11:
        return "Diciembre";
      default:
        return null;
    }
  };

  // Paises
  const hotelCountry = (country) => {
    switch (country) {
      case "Argentina":
        return "Argentina";
      case "Brasil":
        return "Brasil";
      case "Chile":
        return "Chile";
      case "Uruguay":
        return "Uruguay";
      default:
        return null;
    }
  };

  // Precios de $ a strings
  const prices = (prices) => {
    switch (prices) {
      case "$":
        return "económico";
      case "$$":
        return "estandar";
      case "$$$":
        return "superior";
      case "$$$$":
        return "lujo";
      default:
        return null;
    }
  };

  // Tamaño de hoteles
  const hotelSizes = (sizes) => {
    switch (sizes) {
      case "Hotel Pequeño":
        return "pequeño";
      case "Hotel Mediano":
        return "mediano";
      case "Hotel Grande":
        return "grande";
      default:
        return null;
    }
  };

  // Renombre de variables para actualizacion en tiempo real en header
  const dayCheckIn = new Date(valueCheckIn).getDate() + 1;
  const dayCheckOut = new Date(valueCheckOut).getDate() + 1;
  const monthCheckInName = monthName(monthCheckIn);
  const monthCheckOutName = monthName(monthCheckOut);
  const yearCheckIn = new Date(valueCheckIn).getFullYear();
  const yearCheckOut = new Date(valueCheckOut).getFullYear();
  const hotelSizeRenamed = hotelSizes(valueRooms);
  const hotelPriceRenamed = prices(valuePrice);
  const hotelCountryRenamed = hotelCountry(valueCountry);

  return (
    <header className="Header">
      <h1 className="Header_Title">Hoteles</h1>
      <p className="Header_filter_text">
        Resultados de busqueda de hoteles
        {hotelPriceRenamed && `tipo ${hotelPriceRenamed}`}
        {""}
        {hotelCountryRenamed && ` en ${hotelCountryRenamed}`}
        {""}
        {hotelSizeRenamed && ` de tipo ${hotelSizeRenamed}`}
        {""}
        {dayCheckIn ? ` desde el ${dayCheckIn}` : null}{" "}
        {monthCheckInName && `de ${monthCheckInName}`}{" "}
        {yearCheckIn ? `del ${yearCheckIn}` : null}{" "}
        {dayCheckOut ? `hasta el ${dayCheckOut}` : null}{" "}
        {monthCheckOutName && `de ${monthCheckOutName}`}{" "}
        {yearCheckOut ? `del ${yearCheckOut}` : null}{" "}
      </p>
    </header>
  );
}
export default Header;

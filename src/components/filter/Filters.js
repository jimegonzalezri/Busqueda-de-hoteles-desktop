import React from "react";
import "./filter.styles.css";

function Filter({
  onChangeCheckIn,
  valueCheckIn,
  onChangeCheckOut,
  valueCheckOut,
  onChangeCountry,
  valueCountry,
  onChangePrice,
  valuePrice,
  onChangeRooms,
  valueRooms,
  onClickReset
}) {
  return (
    <div className="AllFilters">
      <input onChange={onChangeCheckIn} value={valueCheckIn} type="date" />
      <input onChange={onChangeCheckOut} value={valueCheckOut} type="date" />
      <select onChange={onChangeCountry} value={valueCountry}>
        <option value="Todos los paises">Todos los países</option>
        <option value="Argentina">Argentina</option>
        <option value="Brasil">Brasil</option>
        <option value="Chile">Chile</option>
        <option value="Uruguay">Uruguay</option>
      </select>
      <select onChange={onChangePrice} value={valuePrice}>
        <option value="Cualquier Precio">Cualquier Precio</option>
        <option value="$">$</option>
        <option value="$$">$$</option>
        <option value="$$$">$$$</option>
        <option value="$$$$">$$$$</option>
      </select>
      <select onChange={onChangeRooms} value={valueRooms}>
        <option value="Cualquier Tamaño">Cualquier Tamaño</option>
        <option value="Hotel Pequeño">Hotel Pequeño</option>
        <option value="Hotel Mediano">Hotel Mediano</option>
        <option value="Hotel Grande">Hotel Grande</option>
      </select>
      <button className="reset" onClick={onClickReset}>
        Reset
      </button>
    </div>
  );
}
export { Filter };

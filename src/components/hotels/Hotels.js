import { Cards } from "./Cards";

function Hotels({ hotelsFiltered }) {
  return (
    <div className="App">
      {hotelsFiltered.length > 0
        ? hotelsFiltered.map((hotel) => {
            return (
              <Cards
                key={hotel.slug}
                photo={hotel.photo}
                name={hotel.name}
                description={hotel.description}
                availabilityFrom={hotel.availabilityFrom}
                availabilityTo={hotel.availabilityTo}
                rooms={hotel.rooms}
                city={hotel.city}
                country={hotel.country}
                price={hotel.price}
              />
            );
          })
        : "Ups! no hay resultados"}
    </div>
  );
}

export { Hotels };

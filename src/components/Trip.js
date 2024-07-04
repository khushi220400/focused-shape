import "./TripsStyles.css";
import TripData from "./TripData";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>Start your journey</p>
      <div className="tripcard">
        <TripData
          image="https://th.bing.com/th/id/OIP.g542xv4xAJmCCDbMu3UGkgHaGC?w=186&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          heading="India"
          text="To explore India’s Golden Triangle from Delhi, you’d need to handle all the logistics, including trains, hotels, cabs, tickets, and local guides. Leave all the planning to someone else on this private tour, which includes a driver-guide, tickets, and transport by private air-conditioned vehicle. Tour must-visit sights such as the Taj Mahal, Agra Fort, and Amber Fort."
        />
        <TripData
          image="https://cdn.getyourguide.com/img/tour/2014705c1a078b00.jpeg/97.jpg"
          heading="USA"
          text="Ascend to the 86th floor for panoramic views across 6 states from the highest 360-degree open-air viewpoint in New York City. Go even higher with the 102nd floor combo ticket."
        />
        <TripData
          image="https://cdn.getyourguide.com/img/tour/6334e85995f2c.jpeg/174.jpg"
          heading="Egypt"
          text="Take this special opportunity to visit the Great Temple of Abu Simbel with or without a guide. Discover one of the most magnificent monuments in Egypt with included hotel pickup from Aswan."
        />
      </div>
    </div>
  );
}
export default Trip;

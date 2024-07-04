import DestinationData from "./DestinationData";
import "./DestinationStyles.css";

const Destination = () => {
  return (
    <div className="destination">
      <h1>Popular Destination</h1>
      <p>Tours give you opportunity to explore the outside world</p>
      <DestinationData
        className="first-des"
        heading="Statue of Liberty , USA"
        text=" Discover two NYC icons on a guided tour to see the Statue of Liberty
            and Ellis Island. Ride the ferry and learn about immigrant life,
            what to see in the museums, how to get the best pictures, and more."
        image1="https://th.bing.com/th/id/OIP.IZC429It3azreUbk7awhZgAAAA?rs=1&pid=ImgDetMain"
        image2="https://th.bing.com/th/id/OIP.Ju_Qnq6o9C6-7qaaKJlaYQHaNK?rs=1&pid=ImgDetMain"
      />
      <DestinationData
        className="first-des-reverse"
        heading="Vatican Museum , Italy"
        text=" Immerse yourself in some of the world most historic artworks on a guided tour of the Vatican Museums and Sistine Chapel. Visit the Gallery of the Maps, marvel at the frescoes in the Sistine Chapel, and more."
        image1="https://th.bing.com/th/id/OIP.a9MHcFjfV3bqoW2_JUqIDgHaE6?w=275&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
        image2="https://th.bing.com/th/id/OIP.Ipp20q1jKSskO7sMvtyWpQHaFj?w=243&h=182&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      />
    </div>
  );
};
export default Destination;

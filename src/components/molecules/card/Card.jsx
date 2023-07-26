/* eslint-disable react/prop-types */
import "./Card.scss";

const Card = (props) => {
  let ticketText;

  if (props.openSpots === 0) {
    ticketText = "Sold out";
  } else if (props.location === "Online") {
    ticketText = "Online";
  }

  return (
    <div className="card">
      <div className="card--img__container">
        {ticketText && (
          <p className="card--ticket">
            {ticketText}
          </p>
        )}
        <img src={`/assets/${props.coverImg}`} alt="runner photo" />
      </div>
      <div className="card--rating">
        <img src="/assets/Star.svg" alt="star" />
        <p>
          {props.stats.rating}({props.stats.reviewCount})
        </p>
        <img src="/assets/Ellipse.svg" alt="ellipse" />
        <span>{props.location}</span>
      </div>
      <div className="card--description">
        <p>{props.title}</p>
        <p>
          <span>From ${props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;

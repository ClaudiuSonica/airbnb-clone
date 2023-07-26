/* eslint-disable react/prop-types */
import "./Card.scss";

const Card = (props) => {
  return (
    <div className="card">
      <div className="card--img__container">
        {props.ticket && <p className="card--ticket">{props.ticket}</p>}
        <img src={`/assets/${props.img}`} alt="runner photo" />
      </div>
      <div className="card--rating">
        <img src="/assets/Star.svg" alt="star" />
        <p>
          {props.rating}
          ({props.reviewCount})
        </p>
        <img src="/assets/Ellipse.svg" alt="ellipse" />
        <span>{props.country}</span>
      </div>
      <div className="card--description">
        <p>{props.title}</p>
        <p>
          <span>From {props.price}</span> / person
        </p>
      </div>
    </div>
  );
};

export default Card;

import "./Card.scss";

const Card = () => {
  return (
    <div className="card">
      <div className="card--img__container">
        <p className="card--ticket">Sold out</p>
        <img src="src/assets/runner.png" alt="runner photo" />
      </div>
      <div className="card--rating">
        <img src="src/assets/Star.svg" alt="star" />
        <p>5.0(6)</p>
        <img src="src/assets/Ellipse.svg" alt="ellipse" />
        <span>USA</span>
      </div>
      <div className="card--description">
        <p>Life lessons with Katie Zaferes</p>
        <p><span>From $136</span> / person</p>
      </div>
    </div>
  );
};

export default Card;

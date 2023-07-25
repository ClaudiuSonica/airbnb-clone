import './PhotoGrid.scss';

const PhotoGrid = () => {
  return (
    <div className="hero">
      <div className="hero--row">
        <img src="public/assets/cooking.png" alt="cooking photo" />
      </div>
      <div className="hero--row">
        <img src="public/assets/cook.png" alt="cook img" />
        <img src="public/assets/dancer.png" alt="dancer" />
      </div>
      <div className="hero--row row--down">
        <img src="public/assets/food.png" alt="food" />
        <img src="public/assets/guitar.png" alt="guitar" />
      </div>
      <div className="hero--row">
        <img src="public/assets/music.png" alt="concert" />
        <img src="public/assets/swimmer.png" alt="swimmer" />
      </div>
      <div className="hero--row row--down">
        <img src="public/assets/yoga.png" alt="yoga" />
        <img src="public/assets/artist.png" alt="artist" />
      </div>
    </div>
  );
};

export default PhotoGrid;

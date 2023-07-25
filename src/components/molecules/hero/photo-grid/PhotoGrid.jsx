import './PhotoGrid.scss';

const PhotoGrid = () => {
  return (
    <div className="hero">
      <div className="hero--row">
        <img src="/assets/cooking.png" alt="cooking photo" />
      </div>
      <div className="hero--row">
        <img src="/assets/cook.png" alt="cook img" />
        <img src="/assets/dancer.png" alt="dancer" />
      </div>
      <div className="hero--row row--down">
        <img src="/assets/food.png" alt="food" />
        <img src="/assets/guitar.png" alt="guitar" />
      </div>
      <div className="hero--row">
        <img src="/assets/music.png" alt="concert" />
        <img src="/assets/swimmer.png" alt="swimmer" />
      </div>
      <div className="hero--row row--down">
        <img src="/assets/yoga.png" alt="yoga" />
        <img src="/assets/artist.png" alt="artist" />
      </div>
    </div>
  );
};

export default PhotoGrid;

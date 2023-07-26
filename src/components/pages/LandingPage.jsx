import Navbar from "../atoms/navbar/Navbar";
import Card from "../molecules/card/Card";
import PhotoGrid from "../molecules/hero/photo-grid/PhotoGrid";
import Text from "../molecules/hero/text/Text";
import './LandingPage.scss';

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Text />
      <div className="cta">
        <Card
          img="runner.png"
          ticket="Sold out"
          rating="5.0"
          reviewCount={6}
          country="USA"
          title="Life lessons with Katie Zaferes"
          price={136}
        />
        <Card
          img="wedding.png"
          ticket="Online"
          rating="5.0"
          reviewCount={30}
          country="USA"
          title="Learn wedding photography"
          price={125}
        />
        <Card
          img="bike.png"
          ticket=""
          rating="4.8"
          reviewCount={2}
          country="USA"
          title="Group Mountain Biking"
          price={50}
        />
      </div>
    </div>
  )
}

export default LandingPage;
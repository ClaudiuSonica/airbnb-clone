import Navbar from "../atoms/navbar/Navbar";
import Card from "../molecules/card/Card";
import PhotoGrid from "../molecules/hero/photo-grid/PhotoGrid";
import Text from "../molecules/hero/text/Text";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Text />
      <Card />
    </div>
  )
}

export default LandingPage;
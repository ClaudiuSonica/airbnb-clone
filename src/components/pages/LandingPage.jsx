import Navbar from "../atoms/navbar/Navbar";
import PhotoGrid from "../molecules/hero/photo-grid/PhotoGrid";
import Text from "../molecules/hero/text/Text";

const LandingPage = () => {
  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Text />
    </div>
  )
}

export default LandingPage;
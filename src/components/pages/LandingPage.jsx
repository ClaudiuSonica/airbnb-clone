import Navbar from "../atoms/navbar/Navbar";
import Card from "../molecules/card/Card";
import PhotoGrid from "../molecules/hero/photo-grid/PhotoGrid";
import Text from "../molecules/hero/text/Text";
import './LandingPage.scss';
import data from '../../data'

const LandingPage = () => {

  const cards = data.map(info => {
    return (
      <Card
        key={info.id}
        {...info}
      />
    )
  })

  return (
    <div>
      <Navbar />
      <PhotoGrid />
      <Text />
      <div className="cta">
        {cards}
      </div>
    </div>
  )
}

export default LandingPage;
import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetsSlider = props => {
  const {planetsList} = props
  const settings = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }
  return (
    // eslint-disable-next-line react/no-unknown-property
    <div testid="planets" className="slider-container">
      <h1 className="appHeading">PLANETS</h1>
      <Slider {...settings}>
        {planetsList.map(each => (
          <PlanetItem each={each} key={each.id} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetsSlider

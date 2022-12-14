import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const BasicSlider = ({ children, settings }) => {
  const basicSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: false,
    swipeToSlide: true,
    swipe: true,
    ...settings,
  };
  return <Slider {...basicSettings}>{children}</Slider>;
};

export default BasicSlider;
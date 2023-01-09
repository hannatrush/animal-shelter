import clsx from "clsx";

import './slider.scss';

const Arrow = ({onClick, classNames, customStyle}) => {
    return (
        <button 
        onClick={onClick}
        className={clsx('arrow-button', classNames)}
        style={customStyle}>
            <svg height="512px" id="Layer_1" version="1.1" viewBox="0 0 512 512" width="50px"><path d="M189.3,128.4L89,233.4c-6,5.8-9,13.7-9,22.4c0,8.7,3,16.5,9,22.4l100.3,105.4c11.9,12.5,31.3,12.5,43.2,0  c11.9-12.5,11.9-32.7,0-45.2L184.4,288h217c16.9,0,30.6-14.3,30.6-32c0-17.7-13.7-32-30.6-32h-217l48.2-50.4  c11.9-12.5,11.9-32.7,0-45.2C220.6,115.9,201.3,115.9,189.3,128.4z"/></svg>
        </button>
    )
}

export const petSlider = () => {
    return {
        slidesToShow: 3,
        nextArrow: <Arrow classNames='arrow-rotate' customStyle={{ top: '38%', right: '-95px' }} />,
        prevArrow: <Arrow customStyle={{ top: '38%', left: '-95px' }} />,
        autoplay: true,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow: 2,
                nextArrow: <Arrow classNames='arrow-rotate' customStyle={{ top: '38%', right: '-95px' }} />,
                prevArrow: <Arrow customStyle={{ top: '38%', left: '-95px' }} />,
                autoplay: true,
              },
            },
            {
              breakpoint: 950,
              settings: {
                slidesToShow: 2,
                arrows: false,
                autoplay: true,
              },
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                arrows: false,
                autoplay: true,
              },
            },
          ],
    };
}
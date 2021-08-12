import React from 'react';
import Slider from 'react-slick';
import { PinnedSliderContainer } from './PinnedSlider.styled';

require('slick-carousel/slick/slick.css');
require('slick-carousel/slick/slick-theme.css');

export interface IProps {
  listImgSrc: string[];
}

export function PinnedSlider(props: IProps) {
  const sliderSetting = {
    dots: true,
    arrows: true,
    slidesToShow: 1,
    speed: 500,
  };
  return (
    <PinnedSliderContainer className="my-4">
      <Slider className="w-64 m-auto sm:m-0" {...sliderSetting}>
        {props.listImgSrc.map((imgSrc, index) => {
          return (
            <div key={index}>
              <div className="flex flex-col justify-center">
                <img
                  src={imgSrc}
                  style={{
                    objectFit: 'contain',
                  }}
                />
              </div>
            </div>
          );
        })}
      </Slider>
    </PinnedSliderContainer>
  );
}

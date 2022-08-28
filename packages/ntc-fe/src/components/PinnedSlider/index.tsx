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
            <div className="h-80" key={index}>
              <div
                style={{
                  // background: '#9986ef',
                  background: '#4BF24B',
                }}
                className="h-full flex flex-col items-center justify-center"
              >
                <img
                  src={imgSrc}
                  className="max-h-80"
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

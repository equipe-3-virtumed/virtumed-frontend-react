import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { compan } from './data';
import * as img from '../../assets/index';
import { useState } from 'react';
import * as S from "./styles"

function  CarouselClients() {
  const [defaultImage, setDefaultImage] = useState<{} | any>({});
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const handleErrorImage = (data: any) => {
    setDefaultImage((prev: any) => ({
      ...prev,
      [data.target.alt]: data.target.alt,
      linkDefault: img.DownIcon,
    }));
  };

  return (
    <S.container>
      <Slider {...settings}>
        {compan.map((item) => (
          <S.card>
            <S.cardTop>
              <img
                src={
                  defaultImage[item.title] === item.title
                    ? defaultImage.linkDefault
                    : item.linkImg
                }
                alt={item.title}
                onError={handleErrorImage}
              />
            </S.cardTop>
          </S.card>
        ))}
      </Slider>
    </S.container>
  );
}

export default  CarouselClients;

import SliderItem from "@/app/components/slide-item";
import { useEffect, useRef } from "react";

const { default: Script } = require("next/script");

function SliderMaxWidth() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      spaceBetween: 30,
      slidesPerView: 3.3,
      paginationClickable: true,
      breakpoints: {
        901: {
          slidesPerView: 3.3,
        },
        900: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2.3,
        },
        767: {
          slidesPerView: 2.3,
        },
        600: {
          slidesPerView: 1.5,
        },
        460: {
          slidesPerView: 1.2,
        },
        310: {
          slidesPerView: 1,
        }
      },
      injectStyles: [
        `
          .swiper-pagination-bullet{
            width: 10px;
            height: 10px;
            background: var(--linear-gradient);
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);
  return (
    <>
      <swiper-container class="mySwiper" ref={swiperRef} init='false'>

        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/1.jpg' />
        <SliderItem title='asdasd' people='3,4,5 persoas' location='asdnaksn daks' wsp='#' tel='#' image='/test/2.jpg' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/3.jpg' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/4.jpg' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/5.jpg' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/6.jpg' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/7.webp' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' wsp='#' tel='#' image='/test/8.webp' />
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default SliderMaxWidth
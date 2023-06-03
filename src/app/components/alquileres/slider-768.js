import SliderItem from "@/app/components/slide-item";
import { useEffect, useRef } from "react";

const { default: Script } = require("next/script");

function Slider768() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      pagination: true,
      spaceBetween: 30,
      slidesPerView: 2.3,
      paginationClickable: true,
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
      <swiper-container class="mySwiper" ref={swiperRef} init='false' >

        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
        <SliderItem title='hola' people='3,4,5 persoas' location='asdnaksn daksnk' />
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default Slider768
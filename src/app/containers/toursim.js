import GradientSection from "../components/gradient-section"
import { useEffect, useRef } from "react";
import Script from "next/script";
import SlideTourism from "../components/slide-tourism";

function Tourism() {
  const swiperRef = useRef(null);
  useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      pagination: true,
      spaceBetween: 10,
      slidesPerView: 4,
      breakpoints: {
        1250: {
          slidesPerView: 4,
        },
        1024: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 2,
        },
        600: {
          slidesPerView: 1.5,
        },
        475: {
          slidesPerView: 1.2,
        },
        320: {
          slidesPerView: 1,
        }
      },
      paginationClickable: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background: var(--linear-gradient);
            padding: 4px 12px;
            border-radius: 100%;
            color: white;
          }
          .swiper-button-prev {
            left: 0;
          }
          .swiper-button-next {
            right: 0;
          }
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 20px;
          }
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
    <section className='tourism'>
      <GradientSection title='Atracciones turísticas en Balneario Reta 2023' subtitle='Conoce y visita los mejores lugares para recorrer en Reta y sus cercanías!' url='#' />
      <div className='tourism-carousel'>
        <swiper-container class="mySwiper" ref={swiperRef} init="false">
          <SlideTourism title="Palmera's Center" location='1km' image='/svg/palmeras.svg' url='#' />
          <SlideTourism title='La Usina - Puente Viejo' location='37km' image='/svg/usina.svg' url='#' littledown='littledown' />
          <SlideTourism title='Cascada Cifuentes' location='51km' image='/svg/cifuentes.svg' url='#' />
          <SlideTourism title='Cueva del Tigre' location='63km' image='/svg/cueva-del-tigre.svg' url='#' littledown='littledown' />
          <SlideTourism title='Cascada del Águila' location='63km' image='/svg/cueva-del-tigre.svg' url='#' />
          <SlideTourism title='Cascada del Águila' location='63km' image='/svg/cueva-del-tigre.svg' url='#' littledown='littledown' />
          <SlideTourism title='Cascada del Águila' location='63km' image='/svg/cueva-del-tigre.svg' url='#' />
        </swiper-container>

      </div>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </section>
  )
}

export default Tourism
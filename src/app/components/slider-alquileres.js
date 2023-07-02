import { useEffect, useRef } from "react";
import SliderItem from "../components/slide-item";

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

        <SliderItem url='/alojamientos/marsu' title='Cabañas Marsu' people='3,4,5 personas' location='Calle 38 entre 15 y 17' wsp='https://api.whatsapp.com/send?phone=541159967359&text=Hola!%20Lo%20contacto%20para%20consultar%20por%20su%20publicacion%20en%20Marsu.%20Quisiera%20saber:%20' tel='#' image='/alquileres/marsu/cabañasmarsu9.jpg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
        <SliderItem url='#' title='Próximamente' people='3,4,5 personas' location='Próximamente' wsp='#' tel='#' image='/svg/soon.svg' />
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default SliderMaxWidth
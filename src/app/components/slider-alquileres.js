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
          slidesPerView: 3.6,
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

        <SliderItem url='/alojamientos/lacasadelarroyo' title='La casa del Arroyo' people='4 personas' location='Calle 13 y 8' wsp='https://api.whatsapp.com/send?phone=5491163047159&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lacasadelarroyo%0A%0AQuisiera%20saber:%20' tel='01163047159' image='/alquileres/lacasadelarroyo/lacasadelarroyo1.jpg' />

        <SliderItem url='/alojamientos/marsu' title='Cabañas Marsu' people='3,4,5 personas' location='Calle 38 entre 15 y 17' wsp='https://api.whatsapp.com/send?phone=541159967359&text=Hola!%20Lo%20contacto%20para%20consultar%20por%20su%20publicacion%20en%20https://www.balnearioretaoficial.com.ar/alojamientos/marsu.%20Quisiera%20saber:%20' tel='01159967359' image='/alquileres/marsu/cabañasmarsu9.jpg' />

        <SliderItem url='/alojamientos/lacasitadeines' title='La casita rosada de Ines' people='4 personas' location='Calle 54 esquina 29 (frente a la plaza)' wsp='https://api.whatsapp.com/send?phone=541122361254&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lacasitadeines%0A%0AQuisiera%20saber:%20' tel='tel:01122361254' image='/alquileres/lacasitadeines/casitadeines1.jpg' />

        <SliderItem url='/alojamientos/mabi' title='Cabañas Mabi' people='4 personas' location='Calle 40 entre 19 a 21' wsp='https://api.whatsapp.com/send?phone=5401144347646&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/mabi%0A%0AQuisiera%20saber:%20' tel='tel:01144347646' image='/alquileres/mabi/mabi13.jpg' />

        <SliderItem url='/alojamientos/complejoluan' title='Complejo Luan' people='4 personas' location='Calle 42 y 15' wsp='https://api.whatsapp.com/send?phone=5491134778212&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/complejoluan%0A%0AQuisiera%20saber:%20' tel='tel:01134778212' image='/alquileres/luan/luan6.jpg' />

        <SliderItem url='/alojamientos/charly' title='Propiedades Charly' people='5 personas' location='Calle 15 entre 40 y 38' wsp='https://api.whatsapp.com/send?phone=5491522463350&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/charly%0A%0AQuisiera%20saber:%20' tel='tel:01522463350' image='/alquileres/charly/charly11.webp' />

        <SliderItem url='/alojamientos/lamarea' title='Cabañas La Marea' people='2 a 5 personas' location='Calle 31 y 40' wsp='https://api.whatsapp.com/send?phone=5492983563857&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lamarea%0A%0AQuisiera%20saber:%20' tel='tel:02983563857' image='/alquileres/lamarea/lamarea.webp' />

        <SliderItem url='/alojamientos/lalomada' title='Cabañas La Lomada' people='6 personas' location='Calle 25 entre 44 y 46' wsp='https://api.whatsapp.com/send?phone=5492983616856&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lalomada%0A%0AQuisiera%20saber:%20' tel='tel:02983616856' image='/alquileres/lalomada/lalomada6.jpg' />
      </swiper-container>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}


export default SliderMaxWidth
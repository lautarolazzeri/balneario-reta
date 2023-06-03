import Image from "next/image";
import SliderMaxWidth from "../components/alquileres/slider-max";
import Slider900 from "../components/alquileres/slider-900";
import Slider768 from "../components/alquileres/slider-768";
import SliderMinWidth from "../components/alquileres/slider-min";

const { default: Link } = require("next/link");


function Alojamientos() {
  return (
    <section className='alquileres'>
      <div className='alquileres-top'>
        <div className='text-alquileres'>
          <h1>Alquileres en Balneario Reta</h1>
          <p>Conoce las mejores opciones de alquiler para tu estadía en Reta</p>
        </div>
        <Link href='#'>
          <div className='button-alquileres'>
            <p>Ver todos</p>
            <div className='arrow-container'>
              <Image src='/svg/arrow.svg' width={20} height={20} />
            </div>
          </div>
        </Link>
      </div>
      <div className='alquileres-container'>

        {/* <SliderMaxWidth /> */}
        <div className='desktop'> <SliderMaxWidth /></div>
        <div className='slider900'> <Slider900 /></div>
        <div className='slider768'> <Slider768 /></div>
        <div className='mobile'> <SliderMinWidth /></div>

      </div>
    </section>
  )
}

export default Alojamientos;
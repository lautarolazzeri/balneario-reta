import Image from "next/image";
import SliderMaxWidth from "../components/alquileres/slider-alquileres";
import Slider900 from "../components/alquileres/slider-900";
import Slider768 from "../components/alquileres/slider-768";
import SliderMinWidth from "../components/alquileres/slider-min";
import GradientSection from "../components/gradient-section";

const { default: Link } = require("next/link");


function Alojamientos() {
  return (
    <section className='alquileres'>
      <GradientSection title='Alquileres en Balneario Reta' subtitle='Conoce las mejores opciones de alquiler para tu estadía en Reta' url='#' />
      <div className='alquileres-container'>
        <SliderMaxWidth />
      </div>
    </section>
  )
}

export default Alojamientos;
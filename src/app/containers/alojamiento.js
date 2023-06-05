import SliderMaxWidth from "../components/slider-alquileres";
import GradientSection from "../components/gradient-section";



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
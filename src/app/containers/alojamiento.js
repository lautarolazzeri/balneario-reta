import SliderMaxWidth from "../components/slider-alquileres";
import GradientSection from "../components/gradient-section";



function Alojamientos() {
  return (
    <section className='alquileres' id="alojamientos">
      <GradientSection title='Encuentra Alquileres en Reta, Tres Arroyos' subtitle='Conoce las mejores opciones de alojamientos para tu estadía' url='/alojamientos' />
      <div className='alquileres-container'>
        <SliderMaxWidth />
      </div>
    </section>
  )
}
export default Alojamientos;
import Image from 'next/image'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Link from 'next/link'
import Script from 'next/script'
import SliderMaxWidth from './components/alquileres/slider-max'
import SliderMinWidth from './components/alquileres/slider-min'
import Slider900 from './components/alquileres/slider-900'
import Slider768 from './components/alquileres/slider-768'
import Alojamientos from './containers/alojamiento'
import Information from './containers/information'
import GradientSection from './components/gradient-section'


export default function Home() {

  return (
    <>
      <Header />
      <Cards />
      <Alojamientos />
      <Information />

      <section className='tourism'>
        <GradientSection title='Atracciones turísticas en Balneario Reta 2023' subtitle='Conoce y visita los mejores lugares para recorrer en Reta y sus cercanías!' url='#' />
        <div className='tourism-carousel'>
          
        </div>
      </section>









      <br />
      <br />
      <br />
      <br />
      <br />      <br />
      <br />
      <br />
      <br />
      <br />      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}

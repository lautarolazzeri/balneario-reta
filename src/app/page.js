import Image from 'next/image'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Link from 'next/link'
import Script from 'next/script'
import SliderMaxWidth from './containers/alquileres/slider-max'
import SliderMinWidth from './containers/alquileres/slider-min'
import Slider900 from './containers/alquileres/slider-900'
import Slider768 from './containers/alquileres/slider-768'


export default function Home() {

  return (
    <>
      <Header />
      <Cards />
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

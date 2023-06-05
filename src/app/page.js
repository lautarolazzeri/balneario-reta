'use client'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Alojamientos from './containers/alojamiento'
import Information from './containers/information'
import { register } from "swiper/element/bundle";
import Tourism from './containers/toursim'
import GradientSection from './components/gradient-section'
import Link from 'next/link'

register();
export default function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Alojamientos />
      <Information />
      <Tourism />

      <div className='grid-info'>
        <div className='text-alquileres'>
          <h1>Balneario Reta - Tu lugar en el mundo</h1>
        </div>
        <div className='grid'>
          <div className='grid-item'>
            <div>
              <h3>
                Sobre Balneario Reta
              </h3>
              <p>
                Balneario Reta es un hermoso destino turístico ubicado en la costa atlántica de Argentina, famoso por sus playas de arena blanca y mar turquesa. Disfruta de su flora y fauna autóctona, deportes acuáticos y relajantes paseos por la playa.
              </p>
            </div>
            <Link href='#'>
              <button>
                Leer más
              </button>
            </Link>
          </div>
          <div className='grid-item'>
            <h3>
              Historia y cultura
            </h3>
            <p>
              Reta lleva este nombre en homenaje a Martín Reta, quien fué su principal impulsor en la década del 20. Balneario Reta quedó fundado oficialmente el 28 de noviembre de 1929, según lo dispuesto por el entonces gobernador de la provincia de Buenos Aires, Dr. Vergara
            </p>
            <Link href='#'>
              <button>
                Leer más
              </button>
            </Link>
          </div>
          <div className='grid-item'>
            <h3>
              Playas y actividades locales
            </h3>
            <p>
              La costa, se encuentra en estado virgen, original y reparada por la bahía de los vientos más frecuentes. Sus 30 kilómetros de extensión, están limitados por el Caracolero (Cementerio de Caracoles), formación rocosa ubicada a 15 Km. de la Villa por el Este, y la desembocadura del Río Quequén Salado por el Oeste a 15 Km.
            </p>
            <Link href='#'>
              <button>
                Leer más
              </button>
            </Link>
          </div>
          <div className='grid-item'>
            <h3>
              Eventos y festivales
            </h3>
            <p>
              Balneario Reta ofrece una gran variedad de eventos y festivales a lo largo del año. Desde ferias gastronómicas hasta competencias deportivas, hay algo para todos los gustos. Descubre la emoción de los eventos y festivales de Balneario Reta mientras disfrutas de su hermoso paisaje.
            </p>
            <Link href='#'>
              <button>
                Leer más
              </button>
            </Link>
          </div>
        </div>
      </div>






      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />

    </>
  )
}

'use client'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Alojamientos from './containers/alojamiento'
import { register } from "swiper/element/bundle";
import Tourism from './containers/toursim'
import GridInfo from './containers/grid-info'
import InfoAndImage from './containers/info-and-image'
import InforAndImageInverse from './containers/info-and-image-inverse'
import Services from './containers/servicios'
import Imagenes from './containers/imagenes'
import CtaSection from './containers/cta-section'

register();
export default function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Alojamientos />
      <InfoAndImage />
      <Tourism />
      <GridInfo />
      <InforAndImageInverse />
      <Services />
      <Imagenes />
      <CtaSection />
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

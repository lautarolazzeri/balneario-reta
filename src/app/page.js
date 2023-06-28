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
import Footer from './containers/footer'
import Script from 'next/script'

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
      <Footer />


      <Script async src='https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673' crossorigin="anonymous">
      </Script>
    </>
  )
}

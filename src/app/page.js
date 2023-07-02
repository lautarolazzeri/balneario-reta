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
import { Analytics } from '@vercel/analytics/react';

register();
export default function Home() {
  return (
    <>
      <Analytics />
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

      {/* <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3105.173446325951!2d-60.33435758477578!3d-38.897148804577235!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x958dbdeafc48d67b%3A0xcb81609d812ca6c3!2sCaba%C3%B1as%20Marsu!5e0!3m2!1ses-419!2sar!4v1618007388745!5m2!1ses-419!2sar"
        width="800" height="600" allowfullscreen="yes" loading="lazy"></iframe> */}

    </>
  )
}

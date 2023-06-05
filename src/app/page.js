'use client'
import '../../styles/globals.css'
import Header from './containers/header'
import Cards from './containers/cards'
import Alojamientos from './containers/alojamiento'
import Information from './containers/information'
import { register } from "swiper/element/bundle";
import Tourism from './containers/toursim'
import GridInfo from './containers/grid-info'

register();
export default function Home() {
  return (
    <>
      <Header />
      <Cards />
      <Alojamientos />
      <Information />
      <Tourism />
      <GridInfo />






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

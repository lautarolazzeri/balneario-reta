import Script from "next/script";
import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import Image from "next/image";
import SingleEvent from "../src/app/components/single-event";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";

export default function Eventos() {
  return (
    <>
      <OtherNav />
      <div className="events">
        <div className="top-tourism-page">
          <h1>Eventos y Festivales en Reta y alrededores</h1>
          <p>Balneario Reta es el escenario perfecto para una agenda repleta de emocionantes eventos y vibrantes festivales. Desde celebraciones culturales hasta competiciones deportivas, la diversión nunca se detiene. Sumérgete en la energía de los eventos y festivales de Balneario Reta mientras te maravillas con su espectacular entorno natural.</p>
          <Image src="/favicon.ico" width={60} height={60} placeholder="/svg/blur.svg" />
        </div>


        <div className="events-container">

          <SingleEvent image='/eventos/trigo.jpg' title='54º Fiesta Provincial del Trigo' date='8 al 12 de Marzo' place='Predio de la Fiesta Provincial del Trigo, en av. Ituzaingó y Matheu.' description='Mesa Redonda Agropecuaria, muestra industrial, concurso de panes caseros y concurso de vidrieras de comercios. El último día, almuerzo oficial y desfile de instituciones y maquinarias. Además, se entregarán diversos reconocimientos, entre los que se encuentran la Espiga de Oro, el Agricultor Pionero, el Peón Rural, la Maestra Rural, y premios para los ganadores del concurso de las Muestras de Trigo. En el Centro Cultural La Estación, se podrá visitar la exposición estática de colectividades y el salón Mariquita Sand Pequeños Formatos. Sobre el escenario mayor se presentarán César “Banana” Pueyrredón, Kapanga, Banda XXI, Los Nocheros, La Delio Valdez, Los Aymareños y artistas locales. Entrada arancelada. Organiza la Comisión de la Fiesta Provincial del Trigo y la Municipalidad de Tres Arroyos.' />




        </div>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
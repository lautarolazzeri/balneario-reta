import Script from "next/script";
import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import Image from "next/image";
import SingleEvent from "../src/app/components/single-event";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import Head from "next/head";

export default function Eventos() {
  return (
    <>
      <Head>
        <title>Eventos en Reta y cercanías</title>
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Descubre los próximos eventos a realizar en Reta y sus cercanías" />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />

        <meta http-equiv="content-language" content="AR" />

        <meta name="title" content="Balneario Reta Oficial - Descubre los próximos eventos a realizar en Reta y sus cercanías" />
        <meta name="description" content="Página oficial de Reta, tu aliado turistico. Descubre los mejores eventos y festivales para visitar en las cercanias de Balneario Reta" />
        <meta name="keywords" content="balneario reta, tres arroyos, festivales, eventos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos,Cabañas Marsu, Alojamientos Turismo Información, alquileres en reta, servicios, Reta contacto, imagenes, cabañas, mapa, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="balneario reta oficial - Descubre los próximos eventos a realizar en Reta y sus cercanías" />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta property="og:locale" content="AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioretaoficial.com.ar" />
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />

        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioretaoficial.com.ar", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>





      </Head>
      <OtherNav />
      <div className="events">
        <div className="top-tourism-page">
          <h1>Eventos y Festivales en Reta y alrededores</h1>
          <p>Reta es el escenario perfecto para una agenda repleta de emocionantes eventos y vibrantes festivales. Desde celebraciones culturales hasta competiciones deportivas, la diversión nunca se detiene. Sumérgete en la energía de los eventos y festivales mientras te maravillas con su espectacular entorno natural.</p>
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
import Head from "next/head";
import Link from "next/link";
import OtherNav from "../src/app/containers/others-navbar";
import Script from "next/script";
import '../styles/globals.css'
import Point from "../src/app/components/pointofinterest";

export default function PointOfInterest() {
  return (
    <>
      <Head>
        <title>Página Oficial de Reta  - Puntos de interés</title>
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Encuentra facilmente los puntos de interés de Reta!" />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales, puntos de interés, y imágenes." />
        <meta name="twitter:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />
        <meta http-equiv="content-language" content="AR" />

        <meta name="title" content="Mira las mejores imagenes de Balneario Reta" />
        <meta name="description" content="Explora una galeria de imagenes de Reta, desde fotos de la playa, hasta fotos del campo, todo en un solo lugar!" />
        <meta name="keywords" content="balneario reta, tres arroyos, festivales, eventos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos, Alojamientos, Turismo Información, alquileres en reta, servicios, Reta contacto, imagenes, cabañas, mapa, playas, costa Buenos Aire, balneario reta imagenes" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="Balneario reta Oficial - Mira las mejores imagenes de Balneario Reta!" />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Mira las mejores imagenes de Reta compartidas por los usuarios!" />
        <meta property="og:locale" content="AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioretaoficial.com.ar" />
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />

        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioretaoficial.com.ar", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>


      </Head>
      <OtherNav />
      <div className="tourism-page" >
        <div className="top-tourism-page">
          <h1>Descubre los puntos de interés de Reta</h1>
          <p>Aquí encontrarás todos los puntos de interés que se encuentren en Reta, para facilitarte su acceso mediante Google Maps, y llegar a destino lo mas rápido y fácil posible.</p>
        </div>
      </div>
      <div className="grid-points">


        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />
        <Point title='Barco Hundido' url='#' image='/turismo/barcohundido.jpg' />


      </div>
    </>
  )
}
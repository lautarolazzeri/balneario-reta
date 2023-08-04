import { useState } from "react";

import PhotoAlbum from "react-photo-album";

import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../styles/globals.css'
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import photos from "../src/app/components/photos";
import OtherNav from "../src/app/containers/others-navbar";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import Script from "next/script";
import Link from "next/link";
import Head from "next/head";


export default function ImagenesPage() {
  const [index, setIndex] = useState(-1);
  return (
    <>
      <Head>
        <title>Página Oficial de Reta  - Imagenes de Reta</title>
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Mira las mejores imagenes de Balneario Reta!" />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
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
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />


        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioretaoficial.com.ar", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>


      </Head>
      <OtherNav />
      <div className="tourism-page" >
        <div className="top-tourism-page">
          <h1>Las mejores imágenes de Reta</h1>
          <p>Sumérgete en la belleza de este destino turístico a través de las mejores imágenes que capturan su encanto. Desde las impresionantes playas bañadas por el sol hasta los magníficos atardeceres. Explora la galería de imágenes que te transportará a este paraíso costero en todo su esplendor. Si deseas enviarnos tu foto, con gusto la evaluaremos para incluirla en esta sección, escribenos <Link href='#contacto'>Aquí</Link></p>
        </div>
      </div>


      <div className="photo-album">
        <PhotoAlbum photos={photos} layout="rows" targetRowHeight={200} onClick={({ index }) => setIndex(index)} spacing={10} />

        <Lightbox
          slides={photos}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
          plugins={[Slideshow, Thumbnails]}
        />

        <CtaSection />
        <Footer />
      </div>

    </>
  );
}

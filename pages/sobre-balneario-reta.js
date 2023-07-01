
import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import Image from "next/image";
import Footer from "../src/app/containers/footer";
import CtaSection from "../src/app/containers/cta-section";
import Script from "next/script";
import Head from "next/head";

export default function SobreBalnearioReta() {

  return (
    <>
      <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>


        <title>Balneario Reta Oficial - Información</title>
        <meta name="google" content="nositelinkssearchbox" />
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Conoce toda la información de Reta, cultura, actividades locales y más!" />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta%20(51).webp" />

        <meta name="title" content="Balneario Reta Oficial - Conoce toda la información de Reta, cultura, actividades locales y más!" />
        <meta name="description" content="Página oficial de Balneario Reta, tu guía turistica de Reta. Cabañas en alquiler, atracciones turísticas, información de reta, eventos y muchas imágenes" />
        <meta name="keywords" content="balneario reta, tres arroyos, festivales, eventos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos,Cabañas Marsu, Alojamientos Turismo Información, alquileres en reta, servicios, Reta contacto, imagenes, cabañas, mapa, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="balneario reta oficial - Conoce toda la información de Reta, cultura, actividades locales y más!" />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta property="og:locale" content="es_AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioreta.vercel.app" />
        <meta property="og:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />









      </Head>
      <OtherNav />
      <article className="below-nav">
        <div className="info-reta" >
          <h1>Sobre Balneario Reta - Un poco sobre la historia del pueblo</h1>
          <p>Desde sus orígenes hasta la actualidad, conoce los acontecimientos que han dado forma a Balneario Reta y sumérgete en su autenticidad. Explora un destino lleno de historia y encanto en cada rincón.</p>
        </div>
        <div className="history-content">
          <p>
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32 <br />
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.
          </p>
          <Image placeholder="/svg/blur.svg" src='/svg/retamuseo.svg' alt="Museo de Reta" height={800} width={1200} />
          <p>
            Al contrario del pensamiento popular, el texto de Lorem Ipsum no es simplemente texto aleatorio. Tiene sus raices en una pieza cl´sica de la literatura del Latin, que data del año 45 antes de Cristo, haciendo que este adquiera mas de 2000 años de antiguedad. Richard McClintock, un profesor de Latin de la Universidad de Hampden-Sydney en Virginia, encontró una de las palabras más oscuras de la lengua del latín, "consecteur", en un pasaje de Lorem Ipsum, y al seguir leyendo distintos textos del latín, descubrió la fuente indudable. Lorem Ipsum viene de las secciones 1.10.32 y 1.10.33 de "de Finnibus Bonorum et Malorum" (Los Extremos del Bien y El Mal) por Cicero, escrito en el año 45 antes de Cristo. Este libro es un tratado de teoría de éticas, muy popular durante el Renacimiento. La primera linea del Lorem Ipsum, "Lorem ipsum dolor sit amet..", viene de una linea en la sección 1.10.32 <br />
            El trozo de texto estándar de Lorem Ipsum usado desde el año 1500 es reproducido debajo para aquellos interesados. Las secciones 1.10.32 y 1.10.33 de "de Finibus Bonorum et Malorum" por Cicero son también reproducidas en su forma original exacta, acompañadas por versiones en Inglés de la traducción realizada en 1914 por H. Rackham.</p>
        </div>
        <CtaSection />
        <Footer />

      </article>

    </>
  )
}
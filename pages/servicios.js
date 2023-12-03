import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import ServiceItem from "../src/app/components/service-item";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import Script from "next/script";
import Head from "next/head";
import { Analytics } from '@vercel/analytics/react';

export default function ServicesPage() {


  return (
    <>
      <Head>

        <title>Los mejores servicios de Reta</title>
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Conoce los mejores servicios. Locales, gastronomia, mercados, etc. a solo un click " />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />

        <meta name="title" content="Conoce los mejores servicios: Negocios, Gastronomia, Mercados, a solo un click" />
        <meta name="description" content="Página oficial de Balneario Reta, tu guía turistica. Conoce los mejores servicios de Reta. Locales, Alojamientos, gastronomia, mercados, etc. a solo un click" />
        <meta name="keywords" content="balneario reta, tres arroyos, festivales, eventos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos,Cabañas Marsu, Alojamientos Turismo Información, alquileres en reta, servicios, Reta contacto, imagenes, cabañas, mapa, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />
        <meta http-equiv="content-language" content="AR" />

        <meta property="og:title" content="balneario reta oficial - Conoce los mejores servicios. Locales, gastronomia, mercados, etc. a solo un click" />
        <meta property="og:description" content="Página oficial de Reta, tu guía turistica de Reta. Conoce los mejores servicios de Reta. Locales, Alojamientos, gastronomia, mercados, etc. a solo un click" />
        <meta property="og:locale" content="AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioretaoficial.com.ar" />
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />



        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioretaoficial.com.ar", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>



      </Head>
      <Analytics />
      <OtherNav />
      <div className="services-section">
        <h1>Servicios de Reta {currentYear}</h1>
        <p className="intro-service">
          Disfruta de una experiencia inigualable en estas playas con los mejores servicios disponibles en {currentYear}. Desde alojamientos de calidad hasta deliciosas opciones gastronómicas y emocionantes actividades acuáticas, encuentra todo lo que necesitas para una estadía perfecta. Descubre los servicios destacados que hacen de Balneario Reta el destino ideal para tu escapada.
        </p>

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='https://goo.gl/maps/8TKTsZ7gVV3qQH229' serviceImage='/alquileres/marsu/cabañasmarsu9.jpg' />

        <ServiceItem title='La casita rosada de Ines' direction='Calle 54 esquina 29' info='La casita rosada de Ines es un alojamiento para 4 personas ubicada en frente de la plaza principal de Reta, a 2 cuadras de la playa, y a dos cuadras del centro.  ' urldirection='https://goo.gl/maps/5w8a1XRAoMqaV7B19' serviceImage='/alquileres/lacasitadeines/casitadeines1.jpg' />

        <ServiceItem title='Cabañas Mabi' direction='Calle 40 entre 19 y 21' urldirection='https://goo.gl/maps/8LsFu8Cepu3Njbu57' serviceImage='/alquileres/mabi/mabi13.jpg'
          info='Cabañas Mabi es un complejo de 3 cabañas muy bien ubicadas, a 3 cuadras de la playa y a 500 metros del centro comercial. Cada cabaña cuenta con baño completo, cocina comedor, heladera con freezer, microondas, vajilla completa, cocina completa, termo tanque de recuperación rápida, cochera cubierta y más...'
        />

        <ServiceItem title='Complejo Luan' direction='Calle 42 y 15' info='Somos un emprendimiento que cuenta con un complejo de unidades funcionales , el cual se caracteriza por ser un lugar familiar y acogedor,con todas las comodidades y servicios necesarios para disfrutar de unas merecidas vacaciones.
        Con una excelente ubicación a tan solo una cuadra de la playa, atención personalizada por parte de sus dueños, quienes se esmeran por brindar a sus huéspedes una agradable estadía.' urldirection='https://goo.gl/maps/Afk5vzz69j4AbhTp8' serviceImage='/alquileres/luan/luan6.jpg' />

        <ServiceItem title='Propiedades Charly' direction='Calle 15 entre 40 y 38' info='Propiedades Charly es un complejo de 3 cabañas para 5 personas cada una, ubicadas a tan solo 1 cuadra de la playa, cada cabaña esta totalmente equipada para pasar la mejor estadía posible, atendida por sus dueños.' urldirection='https://maps.app.goo.gl/hmTQckvYCtKQRuzX9' serviceImage='/alquileres/charly/charly11.webp' />

        <ServiceItem title='Cabañas la Marea' direction='Calle 31 y 40 - Reta' info='Contamos con distintas cabañas con distintas caracteristicas de 2 a 5 personas. Conoce las características de Loft La marea Suites, Cabañas Jazmin y Lavanda, Cabañas Retama y Acacias, Cabaña Doña Margarita, Doña Elsa y Don Pablo, haciendo click aquí.' urldirection='https://maps.app.goo.gl/mrN98toLvVvP4vq5A' serviceImage='/alquileres/lamarea/lamarea.webp' />


        <ServiceItem title='Cabañas la Lomada' direction='Calle 25 entre 44 y 46' info='Casa para 6 personas, Ubicada a una cuadra del centro y a cuatro de la playa (balneario principal). La casa cuenta con patio arbolado, galería amplia/cochera, lavadero, vajilla completa, aire acondicionado frio/calor, wiFi fibra óptica, etc. Mira todas las comodidades de La Lomada Aquí. ' urldirection='https://maps.app.goo.gl/WnbpiVH2vQ34NXtbA' serviceImage='/alquileres/lalomada/lalomada6.jpg' />



      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
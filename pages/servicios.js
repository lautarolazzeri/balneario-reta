import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import ServiceItem from "../src/app/components/service-item";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import Script from "next/script";
import Head from "next/head";

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
        <meta name="twitter:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta%20(51).webp" />

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
        <meta property="og:url" content="https://balnearioreta.vercel.app" />
        <meta property="og:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />



        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioreta.vercel.app", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>



      </Head>
      <OtherNav />
      <div className="services-section">
        <h1>Servicios de Reta {currentYear}</h1>
        <p className="intro-service">
          Disfruta de una experiencia inigualable en estas playas con los mejores servicios disponibles en {currentYear}. Desde alojamientos de calidad hasta deliciosas opciones gastronómicas y emocionantes actividades acuáticas, encuentra todo lo que necesitas para una estadía perfecta. Descubre los servicios destacados que hacen de Balneario Reta el destino ideal para tu escapada.
        </p>

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='https://goo.gl/maps/8TKTsZ7gVV3qQH229' serviceImage='/alquileres/marsu/cabañasmarsu9.jpg' />

        <ServiceItem title='La casita rosada de Ines' direction='Calle 54 esquina 29' info='La casita rosada de Ines es un alojamiento para 4 personas ubicada en frente de la plaza principal de Reta, a 2 cuadras de la playa, y a dos cuadras del centro.  ' urldirection='https://goo.gl/maps/5w8a1XRAoMqaV7B19' serviceImage='/alquileres/lacasitadeines/casitadeines1.jpg' />

        <ServiceItem title='Próximamente' direction='Próximamente' info='Entendemos que el tiempo es valioso, por lo que estamos trabajando incansablemente para entregarles contenido original y de calidad. Nuestro objetivo es proporcionarles soluciones a sus necesidades, respuestas a sus preguntas y una experiencia gratificante mientras navegan por nuestro sitio.' urldirection='#' serviceImage='/svg/soon.svg' />

        <ServiceItem title='Próximamente' direction='Próximamente' info='Apreciamos su paciencia mientras mejoramos continuamente nuestra página web. Estamos seguros de que pronto podrán disfrutar de un contenido completo y enriquecedor que satisfará sus expectativas.' urldirection='#' serviceImage='/svg/soon.svg' />

        <ServiceItem title='Próximamente' direction='Próximamente' info='Mientras tanto, les invitamos a explorar otras secciones de nuestro sitio web, donde encontrarán información relevante sobre Baleario Reta, Su historia y mucho mas.' urldirection='#' serviceImage='/svg/soon.svg' />

        <ServiceItem title='Próximamente' direction='Próximamente' info='Gracias por visitarnos y por su comprensión. Estamos emocionados de compartir con ustedes nuestro contenido definitivo muy pronto.' urldirection='#' serviceImage='/svg/soon.svg' />

      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
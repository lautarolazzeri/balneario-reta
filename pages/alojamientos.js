import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import AlojamientoItem from "../src/app/components/alojamiento-item";
import Head from "next/head";
import Script from "next/script";
export default function AlojamientosReta() {
  return (
    <>
      <Head>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
      </Head>
      <OtherNav />
      <div className="services-section">
        <h1>Las mejores cabañas en alquiler en Balneario Reta {currentYear}</h1>
        <p className="intro-service">
          Descubre tu hogar lejos de casa en Balneario Reta. Disfruta de una estancia inigualable en nuestras cabañas de ensueño, rodeadas de naturaleza y a pocos pasos de las playas más hermosas. Vive la tranquilidad y comodidad en tu escapada perfecta en Balneario Reta, ¡reserva ahora!.
        </p>
        <AlojamientoItem itemFollow='/alojamientos/marsu' itemImage='/alquileres/marsu/cabañasmarsu9.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='https://api.whatsapp.com/send?phone=541159967359&text=Hola!%20Lo%20contacto%20para%20consultar%20por%20su%20publicación%20en%20Marsu.%20Quisiera%20saber:%20' phone='tel://+541559967359' correo='mailto:lazzerihouse@hotmail.com' />

        <AlojamientoItem itemFollow='/alojamientos/' itemImage='/svg/soon.svg' title='Proximamente' direction='Proximamente' info='Sabemos lo importante que es para ustedes encontrar contenido relevante y útil, por lo que estamos trabajando diligentemente para ofrecerles artículos detallados, guías informativas y recursos prácticos relacionados con nuestros servicios.' whatsapp='#' phone='#' correo='#' />

        <AlojamientoItem itemFollow='/alojamientos/' itemImage='/svg/soon.svg' title='Proximamente' direction='Proximamente' info='Entendemos que el tiempo es valioso, por lo que estamos trabajando incansablemente para entregarles contenido original y de calidad. Nuestro objetivo es proporcionarles soluciones a sus necesidades, respuestas a sus preguntas y una experiencia gratificante mientras navegan por nuestro sitio.' whatsapp='#' phone='#' correo='#' />

        <AlojamientoItem itemFollow='/alojamientos/' itemImage='/svg/soon.svg' title='Proximamente' direction='Proximamente' info='Apreciamos su paciencia mientras mejoramos continuamente nuestra página web. Estamos seguros de que pronto podrán disfrutar de un contenido completo y enriquecedor que satisfará sus expectativas.' whatsapp='#' phone='#' correo='#' />

        <AlojamientoItem itemFollow='/alojamientos/' itemImage='/svg/soon.svg' title='Proximamente' direction='Proximamente' info='Mientras tanto, les invitamos a explorar otras secciones de nuestro sitio web, donde encontrarán información relevante sobre Baleario Reta, Su historia y mucho mas.' whatsapp='#' phone='#' correo='#' />

        <AlojamientoItem itemFollow='/alojamientos/' itemImage='/svg/soon.svg' title='Proximamente' direction='Proximamente' info='Gracias por visitarnos y por su comprensión. Estamos emocionados de compartir con ustedes nuestro contenido definitivo muy pronto.' whatsapp='/' phone='/' correo='/' />


      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
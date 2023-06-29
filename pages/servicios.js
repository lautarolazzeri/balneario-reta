import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import ServiceItem from "../src/app/components/service-item";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import Script from "next/script";

export default function ServicesPage() {


  return (
    <>
      <OtherNav />
      <div className="services-section">
        <h1>Los mejores servicios que ofrece en Balneario Reta {currentYear}</h1>
        <p className="intro-service">
          Propiedades de alquiler temporario de distintas categorías, temporarios, amoblados, de turismo, de excelente nivel con amenites o económicos y baratos. Consulte precios y valores directamente con los anunciantes para la temporada Otoño Invierno 2023.
        </p>

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='https://www.google.com/maps/place/Caba%C3%B1as+Marsu/@-38.8982451,-60.3329051,17z/data=!4m16!1m9!4m8!1m6!1m1!2scaba%C3%B1as+marsu!2m2!1d-62.2743921!2d-38.7196068!4e1!1m0!3m5!1s0x958dbdeafc48d67b:0xcb81609d812ca6c3!8m2!3d-38.8972765!4d-60.3319502!16s%2Fg%2F11h3bj4kmz?entry=ttu' serviceImage='/alquileres/marsu/cabañasmarsu9.jpg' />

        <ServiceItem title='Próximamente' direction='Próximamente' info='Sabemos lo importante que es para ustedes encontrar contenido relevante y útil, por lo que estamos trabajando diligentemente para ofrecerles artículos detallados, guías informativas y recursos prácticos relacionados con nuestros servicios.' urldirection='#' serviceImage='/svg/soon.svg' />

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
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

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='https://www.google.com/maps/dir//caba%C3%B1as+marsu/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x958dbdeafc48d67b:0xcb81609d812ca6c3?sa=X&ved=2ahUKEwix5bvm1sr_AhXsqZUCHWOHBQUQ9Rd6BAhZEAQ' morepics='#' serviceImage='/test/2.jpg' />

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='#' morepics='#' serviceImage='/test/3.jpg' />

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='#' morepics='#' serviceImage='/test/4.jpg' />

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='#' morepics='#' serviceImage='/test/5.jpg' />

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='#' morepics='#' serviceImage='/test/6.jpg' />

        <ServiceItem title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' urldirection='#' morepics='#' serviceImage='/test/2.jpg' />

      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
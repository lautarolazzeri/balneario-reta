import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import AlojamientoItem from "../src/app/components/alojamiento-item";
import Script from "next/script";
export default function AlojamientosReta() {
  return (
    <>
      <OtherNav />
      <div className="services-section">
        <h1>Las mejores cabañas en alquiler en Balneario Reta {currentYear}</h1>
        <p className="intro-service">
          Propiedades de alquiler temporario de distintas categorías, temporarios, amoblados, de turismo, de excelente nivel con amenites o económicos y baratos. Consulte precios y valores directamente con los anunciantes para la temporada Otoño Invierno {currentYear}.
        </p>
        <AlojamientoItem itemFollow='/alquileres/marsureta' itemImage='/test/2.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />
        <AlojamientoItem itemFollow='/' itemImage='/test/3.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />
        <AlojamientoItem itemFollow='/' itemImage='/test/4.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />
        <AlojamientoItem itemFollow='/' itemImage='/test/5.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />
        <AlojamientoItem itemFollow='/' itemImage='/test/6.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />

        <AlojamientoItem itemFollow='/' itemImage='/test/7.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='/' phone='/' correo='/' />



      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
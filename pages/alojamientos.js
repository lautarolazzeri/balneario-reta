import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import AlojamientoItem from "../src/app/components/alojamiento-item";
import Head from "next/head";
import Script from "next/script";
import { Analytics } from '@vercel/analytics/react';

export default function AlojamientosReta() {
  return (
    <>
      <Head>
        <title>Alojamientos en Balneario Reta - Cabañas en Reta</title>
        <meta name="google" content="notranslate" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Descubre los mejores alojamientos en Reta" />
        <meta name="twitter:description" content="Descubre la página web de Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />

        <meta name="title" content="Balneario Reta Oficial - Descubre los mejores alojamientos en alquiler" />
        <meta name="description" content="Encuentra los mejores alojamientos de Balneario Reta, consulta directamente con sus dueños de los alojamientos y haz tu reserva de forma sencilla!" />
        <meta name="keywords" content="balneario reta, tres arroyos, cabañas en reta, reta, alojamientos, Información, alquileres en reta, balneario reta alquileres, cabañas, mapa, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="7 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="balneario reta oficial - alojamiento, servicios, información y más..." />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta property="og:locale" content="AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioretaoficial.com.ar" />
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />

        <meta http-equiv="content-language" content="AR" />



        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioretaoficial.com.ar", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>

      </Head>
      <Analytics />
      <OtherNav />
      <div className="services-section">
        <h1>Encuentra los mejores alojamientos en alquileres de Balneario Reta</h1>
        <p className="intro-service">
          Descubre tu hogar lejos de casa en Balneario Reta. Reserva tu alojamiento / alquiler en Reta y disfruta de una estancia inigualable en nuestras cabañas de ensueño, rodeadas de naturaleza y a pocos pasos de las playas más hermosas. Vive la tranquilidad y comodidad en tu escapada perfecta en Balneario Reta, <b>¡Reserva tu alojamiento en Balneario Reta!</b>.
        </p>
        <AlojamientoItem itemFollow='/alojamientos/lacasadelarroyo' itemImage='/alquileres/lacasadelarroyo/lacasadelarroyo1.jpg' title='La Casa Del Arroyo' direction='Calle 13 y 8' info='Como su nombre lo indica, la casa del arroyo está en una ubicación privilegiada y soñada para todo el que desea la tranquilidad total, con el ruido relajante de las cascadas al dormir, es el lugar ideal para pasar tus vacaciones.' whatsapp='https://api.whatsapp.com/send?phone=5491163047159&text=Hola!%20Lo%20contacto%20para%20consultar%20por%20su%20publicacion%20en%20lacasadelarroyo.%20Quisiera%20saber:%20' phone='tel:01163047159' correo='/error' />

        <AlojamientoItem itemFollow='/alojamientos/marsu' itemImage='/alquileres/marsu/cabañasmarsu9.jpg' title='Cabañas Marsu' direction='Calle 38 entre 15 y 17' info='Cabañas Marsu es la opción perfecta para disfrutar de unas vacaciones inolvidables. Ubicadas a solo dos cuadras del mar, ofrecen una comodidad excepcional y cuentan con un parque equipado con juegos para toda la familia.' whatsapp='https://api.whatsapp.com/send?phone=541159967359&text=Hola!%20Lo%20contacto%20para%20consultar%20por%20su%20publicacion%20en%20Marsu.%20Quisiera%20saber:%20' phone='tel:1559967359' correo='mailto:lazzerihouse@hotmail.com' />

        <AlojamientoItem itemFollow='/alojamientos/lacasitadeines' itemImage='/alquileres/lacasitadeines/casitadeines1.jpg' title='La casita rosada de Ines' direction='54 esquina 29' info='La casita rosada de Ines es un alojamiento para 4 personas ubicada en frente de la plaza principal de Reta, a 2 cuadras de la playa, y a dos cuadras del centro.' whatsapp='https://api.whatsapp.com/send?phone=541122361254&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lacasitadeines%0A%0AQuisiera%20saber:%20' phone='tel:01122361254' correo='/error' />

        <AlojamientoItem itemFollow='/alojamientos/mabi' itemImage='/alquileres/mabi/mabi13.jpg' title='Cabañas Mabi' direction='Calle 40 entre 19 y 21' info='Cabañas Mabi es un complejo de 3 cabañas muy bien ubicadas, a 3 cuadras de la playa y a 500 metros del centro comercial. Cada cabaña cuenta con baño completo, cocina comedor, heladera con freezer, microondas, vajilla completa, cocina completa, termo tanque de recuperación rápida, cochera cubierta y más...' whatsapp='https://api.whatsapp.com/send?phone=541144347646&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/mabi%0A%0AQuisiera%20saber:%20' phone='tel:01144347646' correo='/error' />

        <AlojamientoItem itemFollow='/alojamientos/complejoluan' itemImage='/alquileres/luan/luan6.jpg' title='Complejo Luan' direction='Calle 42 y 15' info='Somos un emprendimiento que cuenta con un complejo de unidades funcionales , el cual se caracteriza por ser un lugar familiar y acogedor,con todas las comodidades y servicios necesarios para disfrutar de unas merecidas vacaciones.
        Con una excelente ubicación a tan solo una cuadra de la playa, atención personalizada por parte de sus dueños , quienes se esmeran por brindar a sus huéspedes una agradable estadía.' whatsapp='https://api.whatsapp.com/send?phone=5491134778212&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/complejoluan%0A%0AQuisiera%20saber:%20' phone='tel:01134778212' correo='mailto:complejoluan@gmail.com' />

        <AlojamientoItem itemFollow='/alojamientos/charly' itemImage='/alquileres/charly/charly11.webp' title='Propiedades Charly' direction='Calle 15 entre 40 y 38' info='Ideal ubicación a una cuadra de la playa, 3 cabañas para 5 personas cada una. Cada cabaña cuenta con baño completo, cocina comedor, heladera con freezer, microondas, termo tanque de recuperación rápida, cochera cubierta y más...' whatsapp='https://api.whatsapp.com/send?phone=5491522463350&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/charly%0A%0AQuisiera%20saber:%20' phone='tel:01144347646' correo='/error' />

        <AlojamientoItem itemFollow='/alojamientos/lamarea' itemImage='/alquileres/lamarea/lamarea.webp' title='Cabañas La Marea' direction='Calle 31 y 40' info='Cabañas LA MAREA le brinda la oportunidad de disfrutar de sus vacaciones en un ambiente de total confort y trato cordial. Es un emprendimiento familiar, atendido por sus dueños, lo que garantiza un trato personalizado, durante todo el año. Es nuestro objetivo brindarle todo lo necesario para que sus vacaciones sean lo más placenteras posible.' whatsapp='https://api.whatsapp.com/send?phone=5492983563857&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lamarea%0A%0AQuisiera%20saber:%20' phone='tel:02983563857' correo='mailto:lamarea_reta@yahoo.com.ar' />

        <AlojamientoItem itemFollow='/alojamientos/lalomada' itemImage='/alquileres/lalomada/lalomada6.jpg' title='Cabañas La Lomada' direction='Calle 25 entre 44 y 46' info='Casa para 6 personas.
        Ubicada a una cuadra del centro y a cuatro de la playa (balneario principal). Contamos con: Patio arbolado, galería amplia/cochera, lavadero, chulengo/parrilla, vajilla completa, heladera c/frizer, microondas, etc. Mirá todas las comodidades entrando aquí!' whatsapp='https://api.whatsapp.com/send?phone=5492983616856&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/lalomada%0A%0AQuisiera%20saber:%20' phone='tel:02983616856' correo='/error' />


      </div>

      <div className='else'>
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}
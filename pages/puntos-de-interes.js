import Head from "next/head";
import Link from "next/link";
import OtherNav from "../src/app/containers/others-navbar";
import Script from "next/script";
import '../styles/globals.css'
import Point from "../src/app/components/pointofinterest";
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";

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
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <meta property="og:title" content="Balneario reta Oficial - Mira las mejores imagenes de Balneario Reta!" />
        <meta property="og:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Mira las mejores imagenes de Reta compartidas por los usuarios!" />
        <meta property="og:locale" content="AR" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioretaoficial.com.ar" />
        <meta property="og:image" content="https://balnearioretaoficial.com.ar/reta-img/imagen-reta%20(51).webp" />
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


        <Point title='Entrada de Reta (Arco)' url='https://goo.gl/maps/82oVNiQoDxmBRnUC6' image='/reta-img/imagen-reta (15).webp' />
        <Point title='Túnel submedanal' url='https://goo.gl/maps/EnYzquQdqvkbr79XA' image='/reta-img/imagen-reta (12).webp' />
        <Point title='Mirador de la Albúfera' url='https://goo.gl/maps/X2oo6n2c2v6aoo4v8' image='/pointofinterest/mirador.jpg' />
        <Point title='Anfiteatro' url='https://goo.gl/maps/Y8t7D3GKmtTP8VTU9' image='/pointofinterest/anfiteatro.jpg' />
        <Point title='Camping' url='https://goo.gl/maps/ZQy9QkLbumkskvyRA' image='/pointofinterest/camping.jpg' />
        <Point title='Bajada a la playa con vehículo' url='https://goo.gl/maps/2wUFvZwqyPFDW3wC9' image='/pointofinterest/bajadaautos.jpg' />
        <Point title='Centro Comercial y Cultural Palmera´s Center' url='https://goo.gl/maps/pbxXWYctf6cvZTah6' image='/pointofinterest/palmeras.jpg' />
        <Point title='Centro de Salud Municipal' url='https://goo.gl/maps/RuhMV32SbpfaXnN87' image='/pointofinterest/centrosalud.jpg' />
        <Point title='Delegación municipal' url='https://goo.gl/maps/9Sqpz3pdP6rn22tA8' image='/pointofinterest/delegacion.jpg' />
        <Point title='Plaza principal' url='https://goo.gl/maps/8QcoMjJoY31iTCzy5' image='/pointofinterest/plaza.jpg' />
        <Point title='Comisaría' url='https://goo.gl/maps/i3qq4LYCFzQh1XpS9' image='/pointofinterest/comisaria.jpg' />
        <Point title='Bomberos' url='https://goo.gl/maps/z1fdqgQqhA3ms7WA8' image='/pointofinterest/bomberos.jpg' />
        <Point title='Museo y Fototeca de Reta' url='https://goo.gl/maps/UUz4PCgJt8a2JHLv6' image='/svg/as.svg' />
        {/* <Point title='Oficina de turismo' url='https://goo.gl/maps/P3iA52r5CXhhX3sB9' image='/svg/soon.svg' /> */}
        <Point title='Cascada del arroyo "El Gaucho"' url='https://goo.gl/maps/LyyE3iVEAyCcTA5S9' image='/pointofinterest/cascada.jpg' />
        <Point title='Puente del arroyo' url='https://goo.gl/maps/ndUTn1oZTASZDkex7' image='/pointofinterest/puente.jpg' />
        <Point title='Albúfera Playa' url='https://goo.gl/maps/yK3amKGpdQkoZDJu6' image='/reta-img/imagen-reta (45).webp' />
        <Point title='Reserva Natural' url='https://goo.gl/maps/QYxSdynRNxQvcswN8' image='/pointofinterest/reserva.jpg' />
        <Point title='Copetonas' url='https://goo.gl/maps/QMcFaZrAtmbqNYd88' image='/pointofinterest/copetonas.jpg' />
        <Point title='Iglesia Catolica Apostolica - Agustinos Recoletos-' url='https://goo.gl/maps/nTDCXB6Q2z98RQqPA' image='/pointofinterest/iglesia.jpg' />
        {/* <Point title='Farmacia' url='https://goo.gl/maps/2xgFeej9ZjbydZN17' image='/svg/soon.svg' /> */}


      </div>

      <CtaSection />
      <Footer />
    </>
  )
}
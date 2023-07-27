import OtherNav from "../src/app/containers/others-navbar";
import '../styles/globals.css'
import CtaSection from "../src/app/containers/cta-section";
import Footer from "../src/app/containers/footer";
import { currentYear } from "../src/app/constants/constants";
import Image from "next/image";
import Script from "next/script";
import TourismItem from "../src/app/components/tourism-item";
import Head from "next/head";
import { Html } from "next/document";

export default function Turismo() {
  return (
    <>

      <Head>
        <title>Lugares turisticos en Reta y cercanias</title>
        <meta name="google" content="notranslate" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@BalnearioRetaOficial" />
        <meta name="twitter:title" content="Balneario Reta Oficial - Conoce los mejores lugares para visitar en Balnerio Reta y alrededores" />
        <meta name="twitter:description" content="Descubre la página web de Balneario Reta, tu guía completa para conocer todo sobre Reta. Explora alojamientos, atracciones turísticas, información interesante, eventos, festivales y muchas imágenes." />
        <meta name="twitter:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta%20(51).webp" />

        <meta name="title" content="Lugares turísticos en Reta y alrededores" />
        <meta name="description" content="Página oficial de Balneario Reta, tu guía turistica de Reta. Visita los lugares turisticos que tiene para ofrecer Balneario Reta y sus alrededores, consulta los lugares en google maps" />
        <meta name="keywords" content="balneario reta, tres arroyos, festivales, eventos, cabañas en reta, turismo reta, imagenes de reta, reta, alojamientos,Cabañas Marsu, Alojamientos Turismo Información, alquileres en reta, servicios, Reta contacto, imagenes, cabañas, mapa, playas, costa Buenos Aires" />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="Spanish" />
        <meta name="revisit-after" content="15 days" />
        <meta name="author" content="Lautaro Sebastián Lazzeri" />

        <meta property="og:title" content="balneario reta oficial - Conoce los mejores lugares para visitar en Balnerio Reta y alrededores" />
        <meta property="og:description" content="Página oficial de Balneario Reta, tu guía turistica de Reta. Visita los lugares turisticos que tiene para ofrecer Balneario Reta y sus alrededores, consulta los lugares en google maps" />
        <meta property="og:locale" content="es" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://balnearioreta.vercel.app" />
        <meta property="og:image" content="https://balnearioreta.vercel.app/reta-img/imagen-reta (51).webp" />
        <meta property="og:site_name" content="Balneario Reta Oficial" />
        <meta http-equiv="content-language" content="AR" />



        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>
        <Script type="application/ld+json">{{ "@context": "http://schema.org", "@type": "Organization", "name": "Balneario Reta Oficial", "url": "https://balnearioreta.vercel.app", "address": "", "sameAs": ["https://www.facebook.com/balnearioretaoficial", "https://www.instagram.com/balnearioreta_oficial"] }}</Script>

      </Head>
        <OtherNav />
        <div className="tourism-page" >
          <div className="top-tourism-page">
          <h1>Lugares turisticos en reta y alrededores - actividades y lugares {currentYear}</h1>
          <p>Embárcate en una aventura inolvidable en Reta y descubre las atracciones turísticas más populares. Desde sus playas doradas hasta sus impresionantes paisajes naturales, sumérgete en la belleza y diversión que ofrece este balneario. Planifica tu visita y disfruta de experiencias inolvidables en este destino de ensueño en {currentYear}.</p>
          </div>

        <TourismItem title='Palmera´s Center Reta' description=' Traído por bueyes desde Estados Unidos en la década de 1940, el carromato fue utilizado como vivienda familiar y de la misma época son las palmeras, los siempre verde y los eucaliptos. En el recorrido se puede ver también un aljibe construido en la misma época y el pilar de luz de 1975, cuando llegaban las primeras conexiones eléctricas al pueblo. Además, dentro de las instalaciones del carromato se encuentra en funcionamiento el Museo y Fototeca de Reta. En cada placa recordatoria reza la leyenda "Preservar nuestro pasado es construir nuestro futuro." El paseo Palmera´s center cuenta con una oferta comercial que incluye artesanias, telares, restaurant y bar, inmobiliaria Isabel Codonio y espacio de Ajedrez.' id='palmeras' image='/svg/as.svg' url='https://goo.gl/maps/WWqGWP9qqHeTgNJY6' />

        <TourismItem title='La Usina - Puente Viejo' description='
        La Usina es una antigua central hidroeléctrica que data de principios del siglo XX. Construida con una arquitectura imponente y de estilo industrial, esta usina fue uno de los pilares del progreso en la región, brindando energía eléctrica para el desarrollo de la comunidad circundante. Hoy en día, sus estructuras y maquinaria han sido preservadas, ofreciendo a los visitantes una visión fascinante de la ingeniería y la historia local.

        El Puente Viejo, cercano a la usina, es otra joya histórica que complementa la experiencia turística. Este puente de aspecto romántico, construido en hierro forjado, es testigo silente del paso del tiempo y de las historias que han acontecido a su alrededor.

        El encanto de este destino no se detiene en su patrimonio y naturaleza, sino que también se refleja en su rica experiencia cultural y gastronómica. Descubre el legado de las tradiciones locales, enraizadas en festividades, música y artesanía, que se conservan con cariño y que los lugareños están orgullosos de compartir con los visitantes.



        ' image='/la-usina.jpg' url='https://goo.gl/maps/BedhuRVcucjSq9G2A' />

        <TourismItem title='Cascadas Cifuentes' description='
        Su nombre hace alusión al propietario de estas tierras, aunque también es conocida como Cascada de Aldaya. Se trata del salto de agua más alto de la Provincia de Buenos Aires, llegando a alcanzar los 8 metros de altura. Ubicada en el curso inferior del Río Quequén Salado, entre los partidos de Coronel Dorrego y Tres Arroyos en cercanía del mar, es uno de los accidentes geográficos más imponentes de este importante curso de agua.

        Se puede acceder mediante la ruta Nacional N°3 Km. 532 descendiendo por camino rural, se recorren 4 kilómetros y luego se debe bajar caminando hasta llegar a la cascada. Se trata de un entorno rocoso rodeado por una zona de bosques. El entorno invita a practicar actividades deportivas y recreativas como: natación, kayak, trekking y diferentes actividades acuáticas.

        Además, cuenta con una bajada con playa desde donde se puede apreciar la cascada y especies autóctonas del lugar. Es habitual el avistaje de una gran variedad de aves tales como loros, gansos y patos. Tal entorno, es ideal para compartir un lindo momento al aire libre y configura una buena propuesta durante cualquier momento del año.
        ' image='/cifuentes.webp' url='https://goo.gl/maps/yqKD327ykmvv8yK98' />

        <TourismItem title='Cueva del Tigre' description='Este paraje, antiguamente fue utilizado como vado natural por las carretas, arreos y viajeros para atravesar el Rio Quequén Salado.
        A pocos metros de este paso, es posible observar varias cuevas y cascadas.
        En una de ellas, se refugió allá por el año 1860 Félix Pacheco, un cuatrero conocido como “El Tigre del Quequén”, que según la creencia popular, aprovechaba la proximidad con este paso para asaltar a los viajeros que lo atravesaban. En 1875, fue capturado por el comisario Luis Aldaz conocido como “Gorra Colorada”.' image='/cuevadeltigre.jpg' url='https://g.co/kgs/DcCBBg' />

        <TourismItem title='Molino La Rosa' description='
        Dicho molino se ubicó sobre una de las márgenes del río Quequen Salado, a 1000 metros  al sur del paso natural  con el mismo nombre, en el partido de Coronel Dorrego.

        Su emplazamiento fue muy adecuado, porque utilizaba  como fuerza motriz el agua que corría por ese cauce, tomándola a través de un canal construido a tal efecto y vinculado con la turbina. Dicho canal era de más de 900 metros por 3  de ancho, con varios puentecillos y compuertas que lo comunicaban con el río.  Sobre el cauce del Quequen Salado se levantaron 2 pequeñas represas para poder manejar el nivel del río. Todo el material utilizado en la construcción del complejo harinero fue realizado con elementos del lugar, como la preparación de ladrillos, cal, arena  y principalmente piedra, trayéndose únicamente, por tren,  el  hierro y madera.

        El establecimiento fue montado con todos los adelantos de la actividad molinera de aquella época, con aparatos mecánicos y automáticos de avanzada, para comenzar elaborando unas 90 bolsas de harina por día. Cilindros de porcelana, turbinas, dinamos, un imán de gran potencia que limpiaba al trigo de toda impureza de alambres, clavos etc.

        Hoy recorriendo las ruinas de este complejo harinero podemos observar todavía en pie las dos torres de dichos molinos distantes entre si de 130 metros y construidos totalmente con las piedras del lugar, tipo pirca,  con la salvedad que posee  entre ellas mezcla; los canales, algunas paredes de las instalaciones, corrales, compuertas, puentes,  y en el cauce del río restos de las dos represas.

        ' image='/molinolarosa.jpg' url='https://goo.gl/maps/JhQeupCrs2oaDxip7' />

        <TourismItem title='Cascada La Escondida' description='
        Salto de agua que se encuentra en cercanías a la localidad de Irene. Tiene la particularidad de tener una forma escalonada y posee una altura de aproximadamente 4 metros.

        ' image='/cascadalaescondida.jpg' url='https://maps.app.goo.gl/4hLHRqu6GL4hqgyx5' />

        <CtaSection />
        <Footer />
      </div>
      <Script src="https://cdn.jsdelivr.net/npm/swiper@9/swiper-element-bundle.min.js"></Script>
    </>
  )
}
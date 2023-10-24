import CtaSection from "../../src/app/containers/cta-section";
import Footer from "../../src/app/containers/footer";
import OtherNav from "../../src/app/containers/others-navbar";
import PhotoAlbum from "react-photo-album";
import '../../styles/globals.css'
import { breakpoints } from "../../src/app/constants/constants";
import Link from "next/link";
import Head from "next/head";
import Script from "next/script";



export default function Charly() {

  const charlycasa1 = [
    { url: "/alquileres/charly/charly1.webp", width: 800, height: 1000 },
    { url: "/alquileres/charly/charly2.webp", width: 700, height: 800 },
    { url: "/alquileres/charly/charly3.webp", width: 800, height: 1000 },
    { url: "/alquileres/charly/charly15.webp", width: 1300, height: 1000 },
    { url: "/alquileres/charly/charly12.webp", width: 1300, height: 1000 },
  ]

  const charlycasa2 = [
    { url: "/alquileres/charly/charly4.webp", width: 1300, height: 1000 },
    { url: "/alquileres/charly/charly7.webp", width: 1000, height: 1000 },
    { url: "/alquileres/charly/charly8.webp", width: 1400, height: 1000 },
    { url: "/alquileres/charly/charly9.webp", width: 1100, height: 1000 },
    { url: "/alquileres/charly/charly12.webp", width: 1400, height: 1000 },
  ]

  const charlycasa3 = [
    { url: "/alquileres/charly/charly11.webp", width: 1400, height: 1000 },
    { url: "/alquileres/charly/charly6.webp", width: 800, height: 1000 },
    { url: "/alquileres/charly/charly13.webp", width: 1400, height: 1100 },
    { url: "/alquileres/charly/charly14.webp", width: 1400, height: 1000 },
    { url: "/alquileres/charly/cocina3.webp", width: 800, height: 1000 },
    { url: "/alquileres/charly/living.webp", width: 1300, height: 1000 },
    { url: "/alquileres/charly/pieza.webp", width: 1300, height: 1000 },

  ]

  const imgcharlycasa1 = charlycasa1.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: photo.url,
      width,
      height,
      alt: "Cabañas en reta - Propiedades Charly",
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.url,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  const imgcharlycasa2 = charlycasa2.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: photo.url,
      width,
      height,
      alt: "Cabañas en reta - Propiedades Charly",
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.url,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  const imgcharlycasa3 = charlycasa3.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: photo.url,
      width,
      height,
      alt: "Cabañas en reta - Propiedades Charly",
      srcSet: breakpoints.map((breakpoint) => {
        const height = Math.round((photo.height / photo.width) * breakpoint);
        return {
          src: photo.url,
          width: breakpoint,
          height,
        };
      }),
    };
  });

  return (
    <>
      <Head>
        <title>Propiedades Charly</title>
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7215423654996673"
          crossorigin="anonymous"></Script>

      </Head>
      <OtherNav />
      <div className="single-place">
        <Link href="/alojamientos">Volver atrás</Link>
        <h3>Propiedades Charly</h3>
        <p className="direction-place">Calle 15 entre 40 y 38</p>
        <h6>Ideal ubicación a una cuadra de la playa, 3 cabañas para 5 personas cada una</h6>
        <ul>
          <li> Amplio parque arbolado de 480 m2 con juego de mes y sillas. </li>
          <li> Disponemos de dos casas para <strong>5 personas</strong> cada una con cocina y amplio comedor.</li>
          <li> Con termotanque.</li>
          <li> Dormitorio principal con cama matrimonial y otro con comodidad para 3 personas.</li>
          <li> Ambos con Placards.</li>
          <li> Baño completo.</li>
          <li> Todas las casas cuentan con WIFI, DTV y microondas.</li>
          <li> Equipado con disyuntor automático de corriente ideal para la seguridad de sus hijos.</li>
          <li> Parque para estacionar el auto con cochera cubierta para protegerlo.</li>
          <li> Parrilla y pileta individual.</li>
        </ul>

        <p className="direction-place">¿Cómo contactarte con Propiedades Charly?</p>
        <div className="contact-place">
          <p><b>Teléfono:</b>1522463350</p>
          <div className="buttons-alojamiento">
            <Link target="_blank" href='https://api.whatsapp.com/send?phone=5491522463350&text=Hola!%20Lo%20contacto%20para%20consultar%20por:%20https://www.balnearioretaoficial.com.ar/alojamientos/charly%0A%0AQuisiera%20saber:%20'>
              <div className="wsp-alojamiento">
                <svg fill="#ffffff" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <title>whatsapp</title> <path d="M26.576 5.363c-2.69-2.69-6.406-4.354-10.511-4.354-8.209 0-14.865 6.655-14.865 14.865 0 2.732 0.737 5.291 2.022 7.491l-0.038-0.070-2.109 7.702 7.879-2.067c2.051 1.139 4.498 1.809 7.102 1.809h0.006c8.209-0.003 14.862-6.659 14.862-14.868 0-4.103-1.662-7.817-4.349-10.507l0 0zM16.062 28.228h-0.005c-0 0-0.001 0-0.001 0-2.319 0-4.489-0.64-6.342-1.753l0.056 0.031-0.451-0.267-4.675 1.227 1.247-4.559-0.294-0.467c-1.185-1.862-1.889-4.131-1.889-6.565 0-6.822 5.531-12.353 12.353-12.353s12.353 5.531 12.353 12.353c0 6.822-5.53 12.353-12.353 12.353h-0zM22.838 18.977c-0.371-0.186-2.197-1.083-2.537-1.208-0.341-0.124-0.589-0.185-0.837 0.187-0.246 0.371-0.958 1.207-1.175 1.455-0.216 0.249-0.434 0.279-0.805 0.094-1.15-0.466-2.138-1.087-2.997-1.852l0.010 0.009c-0.799-0.74-1.484-1.587-2.037-2.521l-0.028-0.052c-0.216-0.371-0.023-0.572 0.162-0.757 0.167-0.166 0.372-0.434 0.557-0.65 0.146-0.179 0.271-0.384 0.366-0.604l0.006-0.017c0.043-0.087 0.068-0.188 0.068-0.296 0-0.131-0.037-0.253-0.101-0.357l0.002 0.003c-0.094-0.186-0.836-2.014-1.145-2.758-0.302-0.724-0.609-0.625-0.836-0.637-0.216-0.010-0.464-0.012-0.712-0.012-0.395 0.010-0.746 0.188-0.988 0.463l-0.001 0.002c-0.802 0.761-1.3 1.834-1.3 3.023 0 0.026 0 0.053 0.001 0.079l-0-0.004c0.131 1.467 0.681 2.784 1.527 3.857l-0.012-0.015c1.604 2.379 3.742 4.282 6.251 5.564l0.094 0.043c0.548 0.248 1.25 0.513 1.968 0.74l0.149 0.041c0.442 0.14 0.951 0.221 1.479 0.221 0.303 0 0.601-0.027 0.889-0.078l-0.031 0.004c1.069-0.223 1.956-0.868 2.497-1.749l0.009-0.017c0.165-0.366 0.261-0.793 0.261-1.242 0-0.185-0.016-0.366-0.047-0.542l0.003 0.019c-0.092-0.155-0.34-0.247-0.712-0.434z"></path> </g></svg>
              </div></Link>
            <Link target="_blank" href='tel:01522463350'>
              <div className="phone-alojamiento">
                <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M3 5.5C3 14.0604 9.93959 21 18.5 21C18.8862 21 19.2691 20.9859 19.6483 20.9581C20.0834 20.9262 20.3009 20.9103 20.499 20.7963C20.663 20.7019 20.8185 20.5345 20.9007 20.364C21 20.1582 21 19.9181 21 19.438V16.6207C21 16.2169 21 16.015 20.9335 15.842C20.8749 15.6891 20.7795 15.553 20.6559 15.4456C20.516 15.324 20.3262 15.255 19.9468 15.117L16.74 13.9509C16.2985 13.7904 16.0777 13.7101 15.8683 13.7237C15.6836 13.7357 15.5059 13.7988 15.3549 13.9058C15.1837 14.0271 15.0629 14.2285 14.8212 14.6314L14 16C11.3501 14.7999 9.2019 12.6489 8 10L9.36863 9.17882C9.77145 8.93713 9.97286 8.81628 10.0942 8.64506C10.2012 8.49408 10.2643 8.31637 10.2763 8.1317C10.2899 7.92227 10.2096 7.70153 10.0491 7.26005L8.88299 4.05321C8.745 3.67376 8.67601 3.48403 8.55442 3.3441C8.44701 3.22049 8.31089 3.12515 8.15802 3.06645C7.98496 3 7.78308 3 7.37932 3H4.56201C4.08188 3 3.84181 3 3.63598 3.09925C3.4655 3.18146 3.29814 3.33701 3.2037 3.50103C3.08968 3.69907 3.07375 3.91662 3.04189 4.35173C3.01413 4.73086 3 5.11378 3 5.5Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
              </div></Link>
          </div>
        </div>
        <p>Casa 1</p>
        <br />
        <PhotoAlbum layout="rows" photos={imgcharlycasa1} spacing={8} padding={0} targetRowHeight={400} />
        <br />

        <p>Casa 2</p>
        <br />
        <PhotoAlbum layout="rows" photos={imgcharlycasa2} spacing={8} padding={0} targetRowHeight={400} />
        <br />

        <p>Casa 3</p>
        <br />
        <PhotoAlbum layout="rows" photos={imgcharlycasa3} spacing={8} padding={0} targetRowHeight={400} />


      </div>

      <div className="else">
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}

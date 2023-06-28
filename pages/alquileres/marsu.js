import CtaSection from "../../src/app/containers/cta-section";
import Footer from "../../src/app/containers/footer";
import OtherNav from "../../src/app/containers/others-navbar";
import { useState } from "react";
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import '../../styles/globals.css'
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { breakpoints } from "../../src/app/constants/constants";



export default function Marsu() {
  const [index, setIndex] = useState(-1);


  const marsuimages = [
    { url: "/alquileres/marsu/cabañasmarsu1.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu3.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu4.jpg", width: 800, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu5.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu6.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu7.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu8.jpg", width: 1300, height: 1000 },
    { url: "/alquileres/marsu/cabañasmarsu9.jpg", width: 1400, height: 1000 },
  ]

  const marsupic = marsuimages.map((photo) => {
    const width = breakpoints[0];
    const height = (photo.height / photo.width) * width;

    return {
      src: photo.url,
      width,
      height,
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
      <OtherNav />
      <div className="single-place">
        <h3>Cabañas Marsu</h3>

        <h6>Cabañas para 4 personas</h6>
        <ul>
          <li>DirecTV.</li>
          <li>TV 32".</li>
          <li>Cochera cubierta.</li>
          <li>Sillas mesas y reposeras de jardín.</li>
          <li>Zona de parrilla y disco de arado.</li>
          <li>Heladera.</li>
          <li>Vajilla completa.</li>
          <li>Cocina 4 hornallas c/ horno.</li>
          <li>Termo alta recuperación.</li>
          <li>Horno microondas.</li>
          <li>Dormitorio con cama matrimonial en planta alta.</li>
          <li>Dos camas 1 plaza (marinera).</li>
          <li>Ventilador.</li>
          <li>Luz emergencia.</li>
          <li>Se aceptan mascotas bajo responsabilidad de sus dueños.</li>
          <li>Espacio para trailer, cuatri, etc.</li>
          <li>Gran parque con juegos para los chicos.</li>
          <li>A 200 metros de la playa.</li>
        </ul>

        <h6>Cabañas para 5 personas</h6>
        <ul>
          <li>Ídem descripción anterior</li>
          <li>Dormitorio con cama matrimonial</li>
          <li>Dos camas 1 plaza (marinera)</li>
          <li>Una cama 1 plaza</li>
        </ul>

        <h6>Cabañas para 6 personas</h6>
        <ul>
          <li>Ídem descripción anterior</li>
          <li>Dormitorio con cama matrimonial en planta baja</li>
          <li>Dormitorio con 4 camas (marineras) en planta alta</li>
        </ul>

        <PhotoAlbum layout="rows" photos={marsupic} spacing={8} padding={0} targetRowHeight={400} />

      </div>

      <div className="else">
        <CtaSection />
        <Footer />
      </div>
    </>
  )
}

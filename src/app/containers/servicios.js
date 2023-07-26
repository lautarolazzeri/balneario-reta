import Link from "next/link";
import ItemService from "../components/item-service";

function Services() {
  return (
    <div className="services" id="servicios">
      <div className="services-top text-alquileres">
        <p>Servicios</p>
        <h1>Los mejores Servicios en Balneario Reta</h1>
        <h3>En este sitio encontrarás los mejores servicios para tu día a día en tu estadía
          en estas playas, para que puedas disfrutar de tus vacaciones al máximo.
        </h3>
      </div>
      <div className="grid-services">
        <ItemService image="/svg/services/artesanias.svg" title="Artesanías" />
        <ItemService image="/svg/services/gastronomia.svg" title="Gastronomía" />
        <ItemService image="/svg/services/entretenimiento.svg" title="Entretenimiento" />
        <ItemService image="/svg/services/excursiones.svg" title="Excursiones" />
        <ItemService image="/alquileres/marsu/cabañasmarsu1.jpg" title="Alojamiento" />
        <ItemService image="/svg/services/actividades.svg" title="Actividades" />
        <ItemService image="/svg/services/supermercados.svg" title="Supermercados" />
        <ItemService image="/svg/services/locales.svg" title="Locales / Comercios" />
      </div>
      <a href='/servicios'>
        <button className="button-services">Ver todos</button>
      </a>
    </div>
  );
}

export default Services;
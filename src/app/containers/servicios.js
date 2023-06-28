import Link from "next/link";
import ItemService from "../components/item-service";

function Services() {
  return (
    <div className="services" id="servicios">
      <div className="services-top text-alquileres">
        <p>Servicios</p>
        <h1>Los mejores Servicios en Balneario Reta</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
      </div>
      <div className="grid-services">
        <ItemService image="/svg/services/artesanias.svg" title="Artesanías" />
        <ItemService image="/svg/services/gastronomia.svg" title="Gastronomía" />
        <ItemService image="/svg/services/entretenimiento.svg" title="Entretenimiento" />
        <ItemService image="/svg/services/excursiones.svg" title="Excursiones" />
        <ItemService image="/svg/services/artesanias.svg" title="Alojamiento" />
        <ItemService image="/svg/services/actividades.svg" title="Actividades" />
        <ItemService image="/svg/services/supermercados.svg" title="Supermercados" />
        <ItemService image="/svg/services/locales.svg" title="Locales / Comercios" />
      </div>
      <Link href='/services'>
        <button className="button-services">Ver todos</button>
      </Link>
    </div>
  );
}

export default Services;
import Image from "next/image";
import Link from "next/link";

function Services() {
  return (
    <div className="services">
      <div className="services-top text-alquileres">
        <p>Servicios</p>
        <h1>Los mejores Servicios en Balneario Reta</h1>
        <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore</h3>
      </div>
      <div className="grid-services">
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/artesanias.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Artesanías</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/gastronomia.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Gastronomía</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/entretenimiento.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Entretenimiento</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/excursiones.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Excursiones</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/artesanias.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Alojamiento</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/actividades.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Actividades</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/supermercados.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Supermercados</p>
          </div>
        </Link>
        <Link href="/servicios">
          <div className="services-item">
            <div className="item-serv-image">
              <Image src="/svg/services/locales.svg" alt="artesanias" width={220} height={140} />
            </div>
            <p>Locales / Comercios</p>
          </div>
        </Link>
      </div>
      <Link href="/servicios">
        <button className="button-services">Ver todos</button>
      </Link>
    </div>
  );
}

export default Services;
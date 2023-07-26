import Image from "next/image";
import Navbar from "./index-navbar";

function Header() {

  return <header>
    <Navbar />
    <Image className='header-image' src="/reta-img/playa-de-reta (1).jpg" alt="Amanecer en Reta" width={1500} height={790} />
    <Image className='header-image mobileimg' src="/reta-img/imagen-reta (51).webp" alt="amanecer en Reta" width={2048} height={1339} />

    <div className='overlay-header'></div>
    <div className='header-text'>
      <h2 className="headtitle">Página oficial de Reta</h2>
      <p>Encuentra los mejores alojamientos, destinos turísticos, Información importante, los mejores servicios de Reta, y espectaculares imagenes de estas playas soñadas.</p>
      <a href='#cards'><button> Explora </button></a>
    </div>
  </header>

}

export default Header;
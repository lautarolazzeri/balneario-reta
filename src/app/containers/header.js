import Image from "next/image";
import Navbar from "./index-navbar";

function Header() {

  return <header>
    <Navbar />
    <Image className='header-image' src="/reta-img/imagen-reta (51).webp" alt="atardecer en Reta" width={2048} height={1339} />
    <div className='overlay-header'></div>
    <div className='header-text'>
      <h1>Balneario Reta</h1>
      <h2>Encuentra los mejores alojamientos, destinos turísticos, Información importante, los mejores servicios de Reta, y espectaculares imagenes de estas playas soñadas.</h2>
      <a href='#cards'><button> Explora </button></a>
    </div>
  </header>

}

export default Header;
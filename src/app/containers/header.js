import Image from "next/image";
import Navbar from "./navbar";

function Header() {

  return <header>
    <Navbar />
    <Image className='header-image' src="https://getpaidstock.com/tmp/[GetPaidStock.com]-647a0c5c7fa64.jpg" alt="Logo" width={1500} height={790} />
    <div className='overlay-header'></div>
    <div className='header-text'>
      <h1>Balneario Reta</h1>
      <h2>Encuentra los mejores alojamientos, destinos turísticos, Información importante, los mejores servicios de Reta, y espectaculares imagenes de estas playas soñadas.</h2>
      <a href='#'><button> Explora </button></a>
    </div>
  </header>

}

export default Header;
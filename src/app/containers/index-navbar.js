import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/sidebar";

function Navbar() {
  return (
    <>
      <div>
        <div className="cont-navbar">
          <div className="logo">
            <Image src="/favicon.ico" width={60} height={60} />
          </div>
          <div className="menu-items">
            <p className="items-navbar"> <Link href='/'>Inicio</Link> </p>
            <p className="items-navbar"> <Link href='/sobre-balneario-reta'>Alojamientos</Link> </p>
            <p className="items-navbar"> <Link href='/servicios-en-reta'>Turismo</Link> </p>
            <p className="items-navbar"> <Link href='/#info'>Información</Link> </p>
            <p className="items-navbar"> <Link href='/#services'>Servicios</Link> </p>
            <p className="items-navbar"> <Link href='/#images'>Imágenes de Reta</Link> </p>
            <p className="items-navbar"> <Link href='/alojamiento-en-reta'>Contacto</Link> </p>
          </div>
        </div>

        <div>
          <Sidebar />
        </div>
      </div>

    </>
  )
}
export default Navbar;
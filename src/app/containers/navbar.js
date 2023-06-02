import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/sidebar";

function Nav() {
  return (
    <>
      <div>
        <div className="cont-navbar">
          <div className="logo">
            <Image src="/favicon.ico" width={60} height={60} />
          </div>
          <div className="menu-items">
            <p className="items-navbar"> <Link href='./'>Inicio</Link> </p>
            <p className="items-navbar"> <Link href='#'>Alojamientos</Link> </p>
            <p className="items-navbar"> <Link href='#'>Turismo</Link> </p>
            <p className="items-navbar"> <Link href='#'>Información</Link> </p>
            <p className="items-navbar"> <Link href='#'>Servicios</Link> </p>
            <p className="items-navbar"> <Link href='#'>Imágenes de Reta</Link> </p>
            <p className="items-navbar"> <Link href='#'>Contacto</Link> </p>
          </div>
        </div>

        <div>
          <Sidebar />
        </div>
      </div>

    </>
  )
}
export default Nav;
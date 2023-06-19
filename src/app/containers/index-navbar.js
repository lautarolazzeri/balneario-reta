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
            <p className="items-navbar"> <Link href='#alojamientos'>Alojamientos</Link> </p>
            <p className="items-navbar"> <Link href='#turismo'>Turismo</Link> </p>
            <p className="items-navbar"> <Link href='#informacion'>Información</Link> </p>
            <p className="items-navbar"> <Link href='#servicios'>Servicios</Link> </p>
            <p className="items-navbar"> <Link href='#imagenes'>Imágenes de Reta</Link> </p>
            <p className="items-navbar"> <Link href='#contacto'>Contacto</Link> </p>
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
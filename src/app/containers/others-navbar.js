import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/sidebar";

function OtherNav() {
  return (
    <>
      <div >
        <div className="cont-navbar">
          <div className="logo">
            <Image src="/logo.png" alt="Logo Balneario reta" width={100} height={100} />
          </div>
          <div className="menu-items">
            <p className="difcolor"> <Link href='/'>Inicio</Link> </p>
            <p className="difcolor"> <Link href='/alojamientos'>Alojamientos</Link> </p>
            <p className="difcolor"> <Link href='/turismo'>Turismo</Link> </p>
            <p className="difcolor"> <Link href='/informacion'>Información</Link> </p>
            <p className="difcolor"> <Link href='/servicios'>Servicios</Link> </p>
            <p className="difcolor"> <Link href='/imagenes'>Imágenes de Reta</Link> </p>
            <p className="difcolor"> <Link href='#contacto'>Contacto</Link> </p>
          </div>
        </div>

        <div>
          <Sidebar />
        </div>
      </div >

    </>
  )
}
export default OtherNav;
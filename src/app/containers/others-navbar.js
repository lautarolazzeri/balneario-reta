import Image from "next/image";
import Link from "next/link";
import Sidebar from "../components/sidebar";

function OtherNav() {
  return (
    <>
      <div >
        <div className="cont-navbar">
          <div className="logo">
            <Image src="/favicon.ico" width={60} height={60} />
          </div>
          <div className="menu-items">
            <p className="difcolor"> <Link href='/'>Inicio</Link> </p>
            <p className="difcolor"> <Link href='/#alojamientos'>Alojamientos</Link> </p>
            <p className="difcolor"> <Link href='/#tourism'>Turismo</Link> </p>
            <p className="difcolor"> <Link href='/#info'>Información</Link> </p>
            <p className="difcolor"> <Link href='/#services'>Servicios</Link> </p>
            <p className="difcolor"> <Link href='/#images'>Imágenes de Reta</Link> </p>
            <p className="difcolor"> <Link href='/#contacto'>Contacto</Link> </p>
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
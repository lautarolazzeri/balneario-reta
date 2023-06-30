import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-logo">
          <Link href='/alojamientos'><p>Alojamientos</p></Link>
          <Link href='/turismo'> <p>Turismo</p></Link>
          <Link href='/sobre-balneario-reta'><p>Información</p></Link>
        </div>
        <div className="logo-footer">
          <Image src="/logo.jpg" alt="logo" width={80} height={80} />
        </div>
        <div className="right-logo">
          <Link href='/servicios'><p>Servicios</p></Link>
          <Link href='/imagenes-de-reta'><p>Imágenes de Reta</p></Link>
          <Link href='/#contacto'><p>Contacto</p></Link>
        </div>
      </div>
        <hr />
      <div className="footer-bottom">
        <div className="icons">
          <Link href='https://www.facebook.com/balnearioretaoficial'> <Image src="/svg/facebook.svg" alt="facebook" width={50} height={50} /></Link>
          <Link href='https://www.instagram.com/balnearioreta_oficial'> <Image src="/svg/instagram.svg" alt="instagram" width={30} height={30} /></Link>
        </div>
        <div className="copy">
          <p>© D&D by Lautaro Lazzeri</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
import Image from "next/image"

function Footer() {
  return (
    <footer className="footer">
      <div className="top-footer">
        <div className="left-logo">
          <p>Alojamientos</p>
          <p>Turismo</p>
          <p>Información</p>
        </div>
        <div className="logo-footer">
          <Image src="/favicon.ico" alt="logo" width={200} height={200} />
        </div>
        <div className="right-logo">
          <p>Servicios</p>
          <p>Imágenes de Reta</p>
          <p>Contacto</p>
        </div>
      </div>
        <hr />
      <div className="footer-bottom">
        <div className="icons">
          <Image src="/test/icon.svg" alt="facebook" width={30} height={30} />
          <Image src="/test/icon.svg" alt="instagram" width={30} height={30} />
        </div>
        <div className="copy">
          <p>© D&D by Lautaro Lazzeri</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
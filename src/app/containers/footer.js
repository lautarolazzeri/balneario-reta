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
        <div className="logo">
          <Image src="/favicon.ico" alt="logo" width={200} height={200} />
        </div>
        <div className="right-logo">
          <p>Servicios</p>
          <p>Imágenes de Reta</p>
          <p>Contacto</p>
        </div>
        <hr />
      </div>
      <div className="footer-icons ">

      </div>
    </footer>
  )
}

export default Footer
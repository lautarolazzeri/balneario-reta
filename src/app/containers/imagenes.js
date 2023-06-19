import Image from "next/image"
import Link from "next/link"

function Imagenes() {
  return (
    <div className="images" id="imagenes">
      <div className="text-alquileres">
        <h1 className="">Imágenes de Balneario Reta</h1>
      </div>
      <div className="grid-images">
        <Image src="/svg/reta/1.svg" width={300} height={300} />
        <Image src="/svg/reta/2.svg" width={300} height={300} />
        <Image src="/svg/reta/3.svg" width={300} height={300} />
        <Image src="/svg/reta/4.svg" width={300} height={300} />
        <Image src="/svg/reta/5.svg" width={300} height={300} />
        <Image src="/svg/reta/6.svg" width={300} height={300} />
        <Image src="/svg/reta/7.svg" width={300} height={300} />
        <Image src="/svg/reta/8.svg" width={300} height={300} />
        <Image src="/svg/reta/9.svg" width={300} height={300} />
        <Image src="/svg/reta/10.svg" width={300} height={300} />
        <Image src="/svg/reta/11.svg" width={300} height={300} />
        <Image src="/svg/reta/12.svg" width={300} height={300} />
      </div>
      <div className="cta-images">
        <h3>Ver todas las imágenes de Balneario Reta</h3>
        <Link href="#">
          <button>
            <p>Ver todas</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Imagenes
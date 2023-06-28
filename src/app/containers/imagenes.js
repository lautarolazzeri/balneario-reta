import Image from "next/image"
import Link from "next/link"

function Imagenes() {
  return (
    <div className="images" id="imagenes">
      <div className="text-alquileres">
        <h1 className="">Imágenes de Balneario Reta</h1>
      </div>
      <div className="grid-images">
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (1).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (53).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (52).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (62).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (65).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (42).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (56).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (67).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (70).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (59).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (57).webp" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (47).webp" width={300} height={300} />
      </div>
      <div className="cta-images">
        <h3>Ver todas las imágenes de Balneario Reta</h3>
        <Link href={{
          pathname: '/imagenes-de-reta',
        }} as='/imagenes-de-reta'>
          <button>
            <p>Ver todas</p>
          </button>
        </Link>
      </div>
    </div>
  )
}
export default Imagenes
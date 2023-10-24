import Image from "next/image"
import Link from "next/link"

function Imagenes() {
  return (
    <div className="images" id="imagenes">
      <div className="text-alquileres">
        <h1 className="">Imágenes de Balneario Reta</h1>
      </div>
      <div className="grid-images">
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (24).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (53).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (52).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (62).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (65).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (15).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (56).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (67).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (70).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (59).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (57).webp" alt="imagen de Reta" width={300} height={300} />
        <Image placeholder="/svg/blur.svg" src="/reta-img/imagen-reta (47).webp" alt="imagen de Reta" width={300} height={300} />
      </div>
      <div className="cta-images">
        <h3>Ver todas las imágenes de Balneario Reta</h3>
        <a href='/imagenes-de-reta'>
          <button>
            <p>Ver todas</p>
          </button>
        </a>
      </div>
    </div>
  )
}
export default Imagenes
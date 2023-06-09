import Image from "next/image"
import GradientSection from "../components/gradient-section"

function Imagenes() {
  return (
    <div className="images">
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
    </div>
  )
}
export default Imagenes
import Image from "next/image"
import Link from "next/link"

function GradientSection(props) {
  const { title, subtitle, url } = props;
  return (
    <div className='alquileres-top'>
      <div className='text-alquileres'>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      <Link href={url} as={url}>
        <div className='button-alquileres'>
          <p>Ver todos</p>
          <div className='arrow-container'>
            <Image src='/svg/arrow.svg' width={20} height={20} />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default GradientSection
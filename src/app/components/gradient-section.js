import Image from "next/image"

function GradientSection(props) {
  return (
    <div className='alquileres-top'>
      <div className='text-alquileres'>
        <h1>{props.title}</h1>
        <p>{props.subtitle}</p>
      </div>
      <Link href={props.url}>
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
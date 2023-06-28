import Image from "next/image"
import Link from "next/link"

function SliderItem(props) {
  const { title, people, location, wsp, tel, image } = props;
  return (
    <swiper-slide>
      <div className='alquileres-card'>
        <div className='alquileres-card-image'>
          <Image placeholder="/svg/blur.svg" src={image} width={300} height={200} />
        </div>
        <div className='alquileres-card-text'>
          <h3>{title}</h3>
          <p className='cant-personas'>{people}</p>
          <p className='direction'>{location}</p>
          <div className='contact'>
            <Link href={wsp}>
              <div className='whatsapp-contact'>
                <Image placeholder="/svg/blur.svg" src='/svg/whatsapp.svg' width={20} height={20} />
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link href={tel}>
              <div className='phone-contact'>
                <Image placeholder="/svg/blur.svg" src='/svg/phone.svg' width={20} height={20} />
                <p>Llamar</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </swiper-slide>
  )
}

export default SliderItem
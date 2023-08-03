import Image from "next/image"
import Link from "next/link"

function SliderItem(props) {
  const { title, people, location, wsp, tel, image, url } = props;
  return (
    <swiper-slide>
      <div className='alquileres-card'>
        <div className='alquileres-card-image'>
          <Link target="_blank" href={url}><Image placeholder="/svg/blur.svg" alt={title} src={image} width={300} height={200} /></Link>
        </div>
        <div className='alquileres-card-text'>
          <Link target="_blank" href={url}><h3>{title}</h3></Link>
          <p className='cant-personas'>{people}</p>
          <p className='direction'>{location}</p>
          <div className='contact'>
            <Link target="_blank" href={wsp}>
              <div className='whatsapp-contact'>
                <Image placeholder="/svg/blur.svg" alt='Whatsapp logo' src='/svg/whatsapp.svg' width={20} height={20} />
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link target="_blank" href={tel}>
              <div className='phone-contact'>
                <Image placeholder="/svg/blur.svg" src='/svg/blackphone.svg' alt="Phone logo" width={20} height={20} />
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
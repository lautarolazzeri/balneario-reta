import Image from "next/image"
import Link from "next/link"

function SliderItem(props) {
  return (
    <swiper-slide>
      <div className='alquileres-card'>
        <div className='alquileres-card-image'>
          <Image src='/a.jpg' width={300} height={200} />
        </div>
        <div className='alquileres-card-text'>
          <h3>{props.title}</h3>
          <p className='cant-personas'>{props.people}</p>
          <p className='direction'>{props.location}</p>
          <div className='contact'>
            <Link href='#'>
              <div className='whatsapp-contact'>
                <Image src='/svg/whatsapp.svg' width={20} height={20} />
                <p>Whatsapp</p>
              </div>
            </Link>
            <Link href='#'>
              <div className='phone-contact'>
                <Image src='/svg/phone.svg' width={20} height={20} />
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
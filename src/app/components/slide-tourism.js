import Image from "next/image"
import Link from "next/link"

function SlideTourism(props) {
  return (
    <swiper-slide>
      <div className='tourism-card littledown first'>
        <Link href={props.url}>
          <div className='tourism-card-image'>
            <Image src={props.image} width={300} height={200} />
          </div>
          <div className='tourism-card-text'>
            <h3>{props.title}</h3>
            <p className='cant-personas'>{props.location}</p>
          </div>
        </Link>
      </div>
    </swiper-slide>
  )
}


export default SlideTourism
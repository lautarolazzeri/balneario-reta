import Image from "next/image"
import Link from "next/link"

function SlideTourism(props) {
  const { title, location, url, image, littledown } = props;
  return (
    <swiper-slide>
      <div className='tourism-card'>
        <div className={littledown}></div>
        <Link href={url}>
          <div className='tourism-card-image'>
            <Image src={image} width={300} height={200} />
          </div>
          <div className='tourism-card-text'>
            <h3>{title}</h3>
            <p className='cant-personas'>{location}</p>
          </div>
        </Link>
      </div>
    </swiper-slide>
  )
}


export default SlideTourism
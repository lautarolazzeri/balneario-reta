import Image from "next/image";
import Link from "next/link";


export default function Point(props) {
  const { image, title, url } = props;
  return (
    <div className="point">
      <div className="point-image">
        <Image src={image} width={300} height={200} alt={title + 'Reta'} />
      </div>
      <div className="point-description">
        <h3>{title}</h3>
        <Link href={url}>
          <button>Ver en Google Maps</button>
        </Link>
      </div>
    </div>
  )
}
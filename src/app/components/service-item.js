import Image from "next/image";
import Link from "next/link";

export default function ServiceItem(props) {
  const { serviceImage, title, direction, info, urldirection, morepics } = props;
  return (
    <div className="service">
      <div className="image-service">
        <Image placeholder="/svg/blur.svg" src={serviceImage} alt={title} width={630} height={420} />
      </div>
      <div className="info-service">
        <h3>{title}</h3>
        <p className="direction">{direction}</p>
        <p className="texto-service">{info}</p>
        <Link href={urldirection}>
          <button>
            <div className="button-text">
              <Image placeholder="/svg/blur.svg" src="/svg/location.svg" alt="Location-logo" width={20} height={20} />
              <p>Como llegar a {title}</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}
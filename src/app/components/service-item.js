import Image from "next/image";
import Link from "next/link";

export default function ServiceItem(props) {
  const { serviceImage, title, direction, info, urldirection, morepics } = props;
  return (
    <div className="service">
      <div className="image-service">
        <Image src={serviceImage} width={630} height={420} />
      </div>
      <div className="info-service">
        <h3>{title}</h3>
        <p className="direction">{direction}</p>
        <p className="texto-service">{info}</p>
        <Link href={urldirection}>
          <button>
            <div className="button-text">
              <Image src="/svg/location.svg" width={20} height={20} />
              <p>Como llegar a {title}</p>
            </div>
          </button>
        </Link>
        <Link href={morepics}>
          <button>
            <div className="button-text-2">
              <Image src="/svg/camara.svg" width={20} height={20} />
              <p>Ver más fotos</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}
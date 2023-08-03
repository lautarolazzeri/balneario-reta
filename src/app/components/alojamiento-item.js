import Image from "next/image";
import Link from "next/link";

export default function AlojamientoItem(props) {
  const { itemFollow, itemImage, title, direction, info, whatsapp, phone, correo } = props;
  return (
    <div className="service">
      <div className="image-service">
        <Link target="_blank" href={itemFollow}> <Image src={itemImage} alt={'cabañas de ' + title} width={630} height={420} /></Link>
      </div>
      <div className="info-service">
        <Link target="_blank" href={itemFollow}><h3>{title}</h3></Link>
        <p className="direction">{direction}</p>
        <p className="texto-service">{info}</p>
        <Link target="_blank" href={whatsapp}>
          <button>
            <div className="button-text-2 whatsapp">
              <Image src="/svg/whatsapp.svg" alt="Whatsapp-Logo" width={20} height={20} />
              <p>Whatsapp</p>
            </div>
          </button>
        </Link>
        <Link target="_blank" href={phone}>
          <button>
            <div className="button-text-2 phone">
              <Image src="/svg/phone.svg" alt="Phone-Logo" width={20} height={20} />
              <p>Teléfono</p>
            </div>
          </button>
        </Link>
        <Link target="_blank" href={correo}>
          <button>
            <div className="button-text-2 correo">
              <Image src="/svg/correo.svg" alt="Correo-Logo" width={20} height={20} />
              <p>Correo</p>
            </div>
          </button>
        </Link>
      </div>
    </div>
  )
}
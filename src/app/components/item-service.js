import Image from "next/image";
import Link from "next/link";

function ItemService(props) {
  const { image, title } = props;
  return (
    <Link href="/servicios">
      <div className="services-item">
        <div className="item-serv-image">
          <Image placeholder="/svg/blur.svg" src={image} alt={title + ' de reta'} width={220} height={140} />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default ItemService
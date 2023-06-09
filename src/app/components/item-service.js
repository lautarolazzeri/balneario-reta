import Image from "next/image";
import Link from "next/link";

function ItemService(props) {
  const { image, title } = props;
  return (
    <Link href="#">
      <div className="services-item">
        <div className="item-serv-image">
          <Image src={image} alt="artesanias" width={220} height={140} />
        </div>
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default ItemService
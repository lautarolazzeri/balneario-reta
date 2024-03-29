import Image from "next/image";
import Link from "next/link";

export default function TourismItem(props) {
  const { title, description, image, url, id } = props;
  return (
    <div className="item-tourism-page" id={id}>
      <Link href={url} > <h3>{title}</h3></Link>
      <p>{description}</p>
      <Link href={url} target="_blank"> <Image placeholder="/svg/blur.svg" src={image} alt={'imagen de ' + title} width={1273} height={832} /></Link>
      <Link href={url} target="_blank">
        <p>Como llegar a {title}</p>
      </Link>
    </div>
  )
}
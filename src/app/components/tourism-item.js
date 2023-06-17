import Image from "next/image";
import Link from "next/link";

export default function TourismItem(props) {
  const { title, description, image, url } = props;
  return (
    <div className="item-tourism-page">
      <Link href={url} > <h3>{title}</h3></Link>
      <p>{description}</p>
      <Link href={url}> <Image src={image} width={1273} height={832} /></Link>
    </div>
  )
}
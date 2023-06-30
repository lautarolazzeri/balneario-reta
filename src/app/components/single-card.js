import Image from "next/image";
import Link from "next/link";

function SingleCard(props) {
  const { title, text, image, url } = props;
  return (
    <div className='card'>
      <Link href={url}>
        <Image placeholder="/svg/blur.svg" src={image} alt={'logo ' + title} width={80} height={80} />
      <h3>{title}</h3>
      <p>{text}</p>
      </Link>
    </div>
  )
}

export default SingleCard;
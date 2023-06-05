import Image from "next/image";

function SingleCard(props) {
  const { title, text, image } = props;
  return (
    <div className='card'>
      <Image src={image} width={80} height={80} />
      <h3>{title}</h3>
      <p>{text}</p>
    </div>
  )
}

export default SingleCard;
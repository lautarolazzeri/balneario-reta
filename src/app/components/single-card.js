import Image from "next/image";

function SingleCard(props) {
  return (
    <div className='card'>
      <Image src={props.image} width={80} height={80} />
      <h3>{props.title}</h3>
      <p>{props.text}</p>
    </div>
  )
}

export default SingleCard;
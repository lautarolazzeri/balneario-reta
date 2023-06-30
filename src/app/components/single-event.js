import Image from "next/image";

export default function SingleEvent(props) {
  const { title, date, place, description, image } = props;
  return (
    <div className="event">
      <div className="event-img">
        <Image src={image} width={700} alt={title} height={600} placeholder='/svg/blur.svg' />
      </div>
      <div className="event-info">
        <h2>{title}</h2>
        <h6>Fecha: {date}</h6>
        <h6>Lugar: {place}</h6>
        <p> <span>Descripción: </span> {description}</p>
      </div>
    </div>
  )
}
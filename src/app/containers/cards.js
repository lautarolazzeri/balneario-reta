import SingleCard from "../components/single-card";

function Cards() {
  return <div className='cards'>
    <SingleCard image='./svg/alojamientos.svg' title='Alojamientos' text='Encuentra los mejores alquileres en Reta' />
    <SingleCard image='./svg/turismo.svg' title='Turismo' text='Lugares para visitar cerca de Balneario Reta' />
    <SingleCard image='./svg/info.svg' title='Información' text='Encuentra la información mas actualizada de Reta' />
    <SingleCard image='./svg/services.svg' title='Servicios' text='Los mejores servicios de Reta se encuentran aquí' />
    <SingleCard image='./svg/images.svg' title='Imágenes de Reta' text='Las mejores fotos de Balneario Reta' />
  </div>
}

export default Cards;
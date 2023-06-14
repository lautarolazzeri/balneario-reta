import SingleCard from "../components/single-card";

function Cards() {
  return <div className='cards'>
    <SingleCard image='./svg/alojamientos.svg' title='Alojamientos' text='Encuentra los mejores alquileres en Reta' url='/#alojamientos' />
    <SingleCard image='./svg/turismo.svg' title='Turismo' text='Lugares para visitar cerca de Balneario Reta' url='/#tourism' />
    <SingleCard image='./svg/info.svg' title='Información' text='Encuentra la información mas actualizada de Reta' url='/#info' />
    <SingleCard image='./svg/services.svg' title='Servicios' text='Los mejores servicios de Reta se encuentran aquí' url='/#services' />
    <SingleCard image='./svg/images.svg' title='Imágenes de Reta' text='Las mejores fotos de Balneario Reta' url='/#images' />
  </div>
}

export default Cards;
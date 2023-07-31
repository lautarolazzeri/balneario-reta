import SingleCard from "../components/single-card";

function Cards() {
  return <div className='cards' id="cards">
    <SingleCard image='./svg/alojamientos.svg' title='Alojamientos' text='Encuentra los mejores alquileres al mejor precio' url='/#alojamientos' />
    <SingleCard image='./svg/turismo.svg' title='Turismo' text='Lugares turisticos para visitar en Reta y alrededores' url='/#turismo' />
    <SingleCard image='./svg/info.svg' title='Información' text='Encuentra la información mas actualizada de Reta' url='/#informacion' />
    <SingleCard image='./svg/services.svg' title='Servicios' text='Los mejores servicios de Reta se encuentran aquí' url='/#servicios' />
    <SingleCard image='./svg/images.svg' title='Imágenes de Reta' text='Las mejores fotos de Balneario Reta, Miralas aquí!' url='/#imagenes' />
    <SingleCard image='./svg/pointofinterest.svg' title='Puntos de interés' text='Ubicaciones rápidas de diferentes lugares de Reta' url='/puntos-de-interes' />
  </div>
}

export default Cards;
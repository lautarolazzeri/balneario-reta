import GridInfoItem from "../components/grid-info-item"

function GridInfo() {
  return (
    <div className='grid-info'>
      <div className='text-alquileres'>
        <h1>Balneario Reta - Tu lugar en el mundo</h1>
      </div>
      <div className='grid'>
        <GridInfoItem title='Sobre Balneario Reta' description='Balneario Reta es un hermoso destino turístico ubicado en la costa atlántica de Argentina, famoso por sus playas de arena blanca y mar turquesa. Disfruta de su flora y fauna autóctona, deportes acuáticos y relajantes paseos por la playa.' url='#' />

        <GridInfoItem title='Historia y cultura' description='Reta lleva este nombre en homenaje a Martín Reta, quien fué su principal impulsor en la década del 20. Balneario Reta quedó fundado oficialmente el 28 de noviembre de 1929, según lo dispuesto por el entonces gobernador de la provincia de Buenos Aires, Dr. Vergara' url='#' />

        <GridInfoItem title='Playas y actividades locales' description='La costa, se encuentra en estado virgen, original y reparada por la bahía de los vientos más frecuentes. Sus 30 kilómetros de extensión, están limitados por el Caracolero (Cementerio de Caracoles), formación rocosa ubicada a 15 Km. de la Villa por el Este, y la desembocadura del Río Quequén Salado por el Oeste a 15 Km.' url='#' />

        <GridInfoItem title='Eventos y festivales' description='Balneario Reta ofrece una gran variedad de eventos y festivales a lo largo del año. Desde ferias gastronómicas hasta competencias deportivas, hay algo para todos los gustos. Descubre la emoción de los eventos y festivales de Balneario Reta mientras disfrutas de su hermoso paisaje.' url='#' />
      </div>
    </div>
  )
}

export default GridInfo
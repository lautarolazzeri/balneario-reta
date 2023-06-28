import Link from "next/link";

function GridInfoItem(props) {
  const { title, description, url } = props;

  return (
    <div className='grid-item'>
      <div>
        <h3>
          {title}
        </h3>
        <p>
          {description}
        </p>
      </div>
      <Link href={{
        pathname: { url }
      }} as={url}>
        <button>
          Leer más
        </button>
      </Link>
    </div>
  );
}

export default GridInfoItem;
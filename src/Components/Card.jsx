

const Card = ({pokemon}) => {
  return (
    <>
      <h4>{pokemon.name}</h4>
      <p>{pokemon.url}</p>
    </>
  );
}

export default Card
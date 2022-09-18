import './index.css'

const PlanetItem = props => {
  const {each} = props
  const {name, imageUrl, description} = each

  return (
    <div className="planetItemsContainer">
      <img className="planetImg" src={imageUrl} alt={`planet ${name}`} />
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  )
}

export default PlanetItem

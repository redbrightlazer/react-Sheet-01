import "./cards.css";
function Card({ name, surname, occupation, image }) {
  return (
    <>
      <div className="card">
        <img src={image} alt={`${name} ${surname}`} className="pic" />
        <h2 className="name">
          {name} {surname}
        </h2>
        <p className="occ">Occupation: {occupation}</p>
      </div>
    </>
  );
}
export default Card;

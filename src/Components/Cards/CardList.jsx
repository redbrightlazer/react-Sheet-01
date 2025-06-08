import Card from "./card";
import "./cards.css";
function CardL() {
  return (
    <>
      <div className="grid">
        <Card
          {...{
            name: "roman",
            surname: "khan",
            occupation: "developer",
            image:
              "https://live.staticflickr.com/99/286514815_428287e05c_b.jpg",
          }}
        />
        <Card
          {...{
            name: "john",
            surname: "doe",
            occupation: "designer",
            image: "https://picsum.photos/200/300",
          }}
        />
      </div>
    </>
  );
}
export default CardL;

import HornedBeast from "./HornedBeast";
import data from "../assets/beast-data.json";

export default function Gallery() {
  return (
    <div>
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
          />
        );
      })}
    </div>
  );
}

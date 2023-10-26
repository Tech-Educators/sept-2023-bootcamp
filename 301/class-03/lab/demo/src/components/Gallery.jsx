import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowModal }) {
  return (
    <div>
      {data.map((beast) => {
        return (
          <HornedBeast
            key={beast._id}
            title={beast.title}
            imageUrl={beast.imageUrl}
            description={beast.description}
            handleShowModal={handleShowModal}
          />
        );
      })}
    </div>
  );
}

import HornedBeast from "./HornedBeast";

export default function Gallery({ data, handleShowModal, horns }) {
  // const filteredHorns = data.filter(function (beast) {
  //   return beast.horns == horns || horns === "";
  // });

  // instead of mapping through data in the return, we map through filteredHorns
  // filteredHorns is our original data array, but filtered so that only the objects whose "horns" property matches our horns state variable
  // the || horns === "" means that we will get ALL the beasts when none of the options are selected, because it will return true for every single item in the array
  const filteredHorns = data.filter(
    (beast) => beast.horns == horns || horns === ""
  );

  return (
    <div>
      {filteredHorns.map((beast) => {
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

import { useState } from "react";

export default function HornedBeast({
  title,
  imageUrl,
  description,
  handleShowModal,
}) {
  // const [stateVariable, mutationFunction] = useState(initialValue)
  const [likes, setLikes] = useState(0);

  function handleClick() {
    setLikes(likes + 1);
  }

  return (
    <div>
      <h2>{title}</h2>
      <img
        src={imageUrl}
        onClick={() => handleShowModal({ title, imageUrl })}
      />
      <p>{description}</p>
      <p onClick={handleClick}>❤️🐰👻 {likes}</p>
    </div>
  );
}

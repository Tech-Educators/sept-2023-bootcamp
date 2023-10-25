export default function Modal({ handleShowModal }) {
  return (
    <div className="modal">
      <h2>Modal</h2>
      <button onClick={handleShowModal}>Close</button>
    </div>
  );
}

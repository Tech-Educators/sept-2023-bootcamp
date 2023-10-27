import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import data from "./assets/beast-data.json";
import { useState } from "react";
import SelectedBeast from "./components/SelectedBeast";

function App() {
  const [showModal, setShowModal] = useState(false);
  const [shownBeast, setShownBeast] = useState({});
  const [horns, setHorns] = useState("");

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  function handleFilter(event) {
    setHorns(event.target.value);
  }

  return (
    <div>
      <Header />
      <select onChange={handleFilter}>
        <option value="">All</option>
        <option value="2">2</option>
        <option value="100">100</option>
      </select>
      <Gallery data={data} handleShowModal={handleShowModal} horns={horns} />
      <Footer />
      {showModal && (
        <SelectedBeast
          shownBeast={shownBeast}
          handleShowModal={handleShowModal}
        />
      )}
    </div>
  );
}

export default App;

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

  function handleShowModal(beast) {
    setShowModal(!showModal);
    setShownBeast(beast);
  }

  return (
    <div>
      <Header />
      <Gallery data={data} handleShowModal={handleShowModal} />
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

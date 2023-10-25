import "./App.css";
import Header from "./components/Header";
import Parent from "./components/Parent";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <div>
      <Header theme={theme} />
      <Parent theme={theme} setTheme={setTheme} />
    </div>
  );
}

export default App;

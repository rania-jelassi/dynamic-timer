import React from "react";
import "./App.css";
import DynamicTime from "./components/timer/DynamicTime";

const Tm = 8521500000;
function App() {
  return (
    <div className="App">
      <DynamicTime value={Tm} />
    </div>
  );
}
export default App;

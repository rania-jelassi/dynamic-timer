import React from "react";
import "./DynamicTime.css";

function DynamicTime({ value }) {
  if (value > 86400000) {
    value = 86400000;
  }
  let y = value / 1000;
  let HH = Math.floor(y / 3600);
  let mm = Math.floor((y % 3600) / 60);
  let ss = Math.floor((y % 3600) % 60);

  return (
    <div>
      <div className="time">
        <span> {String(HH).padStart(2, "0")}: </span>
        <span> {String(mm).padStart(2, "0")}: </span>
        <span> {String(ss).padStart(2, "0")} </span>
        {/* <span> {String(jj).padStart(2, "0")} </span> */}
      </div>
      <p className="Hms">
        Hour &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Minute
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Second{" "}
      </p>
    </div>
  );
}

export default DynamicTime;

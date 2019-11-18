import React from "react";

function DynamicTime({ value }) {
  let y = value / 1000;
  let ss = y % 60;
  let mm = Math.floor(y / 60);
  let HH = mm / 60;
  //   if (mm >= 60) {
  //     return (mm = Math.floor(mm % 60) && HH);
  //   } else {
  //     return (HH = 0);
  //   }
  return (
    <div>
      <span> {HH} </span>
      <span> {mm} </span>
      <span> {ss} </span>
    </div>
  );
}

export default DynamicTime;

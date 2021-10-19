import React from "react";
import "../styles/Loader.css";

export default function Loader() {
  return (
    <div className="text-center py-5">
      <div className="lds-circle">
        <div></div>
      </div>
    </div>
  );
}

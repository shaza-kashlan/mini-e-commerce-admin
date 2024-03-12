import { useState } from "react";
import React from "react";
import { RainbowSpinner } from "react-spinners-kit";

export const Loading = () => {
  return (
    <>
      <div className="spinnerContainer">
        <div className="spinner">
          <RainbowSpinner size={100} color="purple" />
        </div>
        <h2>Loading...</h2>
      </div>
    </>
  );
};

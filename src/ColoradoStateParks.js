import React from "react";
import howManyParks from "./parks/howManyParks";
import {elevation, trees,wildlife} from "./parks/RockyMountain";


function ColoradoStateParks() {
  howManyParks() // => "42 parks!"
  console.log(trees);
  wildlife()
  elevation()

  return <h1>Colorado State Parks!</h1>;
}
export default ColoradoStateParks;
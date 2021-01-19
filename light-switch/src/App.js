import React, {useState} from "react";
import './App.css';

import White from './Components/White.js'
import Yellow from './Components/Yellow.js'

const white = "https://image.flaticon.com/icons/png/512/32/32177.png";
const yellow =
  "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png";

export default function App() {

  const [lightOn, setLightOn] = useState(true);

  return (
    <div onClick={() => setLightOn(!lightOn)} className="App">
      {lightOn === false ? (
        <White 
          white={white}
        />
      ) : (
        <Yellow 
          yellow={yellow}
        />
      )}
    </div>
  );
}

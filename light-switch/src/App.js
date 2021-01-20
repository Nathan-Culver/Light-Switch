import React, {useState, useEffect} from "react";
import './App.css';

import White from './Components/White.js'
import Yellow from './Components/Yellow.js'

export default function App() {

  const [data, setData] = useState({
    white: "https://image.flaticon.com/icons/png/512/32/32177.png",
    yellow: "https://i.pinimg.com/originals/92/94/ba/9294badee7b8f3d93fa9bc6c874641b2.png",
    switch: false,
  });

  const lightHandler = () => {
    setData(() => {
      return { ...data, switch: !data.switch };
    })
  }

  return (
    <div onClick={lightHandler} className="App">
      {data.switch === false ? (
        <White 
          white={data.white}
        />
      ) : (
        <Yellow 
          yellow={data.yellow}
        />
      )}
    </div>
  );
}

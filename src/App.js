
import React, { useState } from "react"
import Questions from "./Questions"

import Axios from "axios";
function App() {
  const [data, setData] = useState([])
  const [indexQuestion, setIndexQuestion] = useState(0)

  const url = `https://einbuergengstestbackend.herokuapp.com/RandomQuestion`;

  const teststarten = async () => {

    const result = await Axios.get(url);
    console.log("result=", result);
    setData(result.data)


  };
  const TestEnde = () => {

  }
  const BackQuestion = () => {

  }
  const nextQuestion = () => {

  }
  return (


    <div className="App">
      <h1>Test App!</h1>
      <button id="teststarten" onClick={teststarten}>Test starten</button>
      {data.length > 0 && <Questions lenghthQuestion={data.length}
        QusetionIndex={indexQuestion}
      />}


      <div className="containerButton">
        <button className="BackQuestion" onClick={BackQuestion}>Back</button>
        <button className="TestEnde" onClick={TestEnde}>Test beenden</button>
        <button className="nextQuestion" onClick={nextQuestion}>Next</button>
      </div>
    </div>


  );
}

export default App;



import Questions from "./Questions"
import React, {useEffect, useState} from "react"

import {useHistory} from 'react-router-dom'
import Axios from "axios";
const Test = () => {
    const history = useHistory();
    const [data, setData] = useState([])
    const [indexQuestion, setIndexQuestion] = useState(0)
    const [correctAnswersCount,setCorrectAnswersCount] = useState(0)
    const url = `https://einbuergengstestbackend.herokuapp.com/RandomQuestion`;
    useEffect(() => {
        teststarten()
    }, [])
    const teststarten = async () => {
        const result = await Axios.get(url);
        console.log("result=", result);
        setData(result.data)
    };
    const TestEnde = () => {
    }
    const BackQuestion = () => {
        if (indexQuestion !== 0) {
            setIndexQuestion(indexQuestion - 1)
        }
    }
    const nextQuestion = () => {
        if (indexQuestion < data.length - 1) {
            setIndexQuestion(indexQuestion + 1)
        } else history.push("/result",{correctAnswersCount})
    }
    const plusCorrectAnswerCount = ()=>{
        setCorrectAnswersCount(correctAnswersCount+1)
    }
    return (
        <div className="start">
            <h1>Test App!</h1>
            <p>correct ans count : {correctAnswersCount}</p>
            {data.length > 0 && <Questions addToCount={plusCorrectAnswerCount} questionData={data[indexQuestion]} lenghthQuestion={data.length}
                                          QusetionIndex={indexQuestion}
            />}
            <div className="containerButton">
                <button className="BackQuestion" onClick={BackQuestion}>Back</button>
                <button className="TestEnde" onClick={TestEnde}>Test beenden</button>
                <button className="nextQuestion" onClick={nextQuestion}>Next</button>
            </div>
        </div>
    )
}
export default Test
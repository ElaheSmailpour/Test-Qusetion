
import "./questions.css"

import {useEffect, useState} from "react";
const Questions = ({lenghthQuestion,addToCount, QusetionIndex, questionData}) => {
    // questionData = {
    //     question : "",
    //     answer : ["fdsfsd","sdfsdfds"],
    //         correct : ""
    // }
    const [showAnswer, setShowAnswer] = useState(false);
    const [clickedAnswer, setClickedAnswer] = useState();
    const handleSelectAnswer = (answerIndex) => {
        setShowAnswer(true);
        setClickedAnswer(answerIndex);
        if(answerIndex===questionData.correct)
            addToCount()
    }
    useEffect(() => {
        setShowAnswer(false);
        setClickedAnswer();
    }, [QusetionIndex])
    const generateCorrectOnInCorrect = (index) => {
        if (showAnswer) {
            if (index === clickedAnswer) {
                if (index === questionData.correct)
                    return "correct"
                else
                    return "incorrect"
            }
            // if (index===clickedAnswer && index === questionData.correct )
            //     return "correct"
            // else if(index===clickedAnswer)
            //     return "inCorrect"
        }
        //{showAnswer && (index===questionData.correct ? "correct":"inCorrect")}
    }
    const generateOption = (index, item) => {
        return <li className={"myAnswer"}
                   onClick={() => handleSelectAnswer(index)}>{index + 1} : {item} {generateCorrectOnInCorrect(index)}</li>
    }
    return (
        <div className="Questions">
            <h1 className="count">Count: {QusetionIndex + 1} /{lenghthQuestion}</h1>
            <p className="text">{questionData.question}</p>
            <ul>
                {questionData.answer.map((item, index) => generateOption(index, item))}
            </ul>
            {questionData.image &&
            <div className="imageTestDiv">
                <img src={"http://localhost:5000/images/" + questionData.image}
                     alt="pic"/>
            </div>
            }
        </div>
    )
};
export default Questions
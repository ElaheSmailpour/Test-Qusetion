import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom'
const Result = () => {
    const location = useLocation();
    useEffect(() => {
        console.log("state:",location.state.correctAnswersCount)
    }, [location])
    return (
        <div>
            <h1>result</h1>
            <p>you answer {location.state.correctAnswersCount} correct</p>
        </div>
    );
};
export default Result;

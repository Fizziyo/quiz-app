import { useState,  useCallback } from "react";
import QUESTIONS from "../../../questions";
import Question from "../Question/Question";
import Summary from "../Summary/Summary";

function Quiz(){
const[userAnswers,setuserAnswers]=useState([]);

const activeQuestionIndex  = userAnswers.length;
const quizIsComplete= activeQuestionIndex===QUESTIONS.length;


const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer){
    setuserAnswers((prevUserAns)=>{
    return [...prevUserAns,selectedAnswer]
});
},
[])

const handleSkipAnswer = useCallback(() => handleSelectAnswer(null),[handleSelectAnswer])



if(quizIsComplete){
    return <Summary userAnswers={userAnswers}/>
}

return <div id="quiz">
<Question
 key={activeQuestionIndex}
 index={activeQuestionIndex}
 onSelectAnswer={handleSelectAnswer}
 onSkipAnswer={handleSkipAnswer}
 />
</div>
}
export default Quiz;
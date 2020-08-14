import React  , { useEffect, useState } from 'react';
import QuestionCardss from './quizUi'
import { getData } from './../services/data_service'
import { QuestionTypes } from './../types/service_type';
var q = 0
const QuizCard:  React.FC<any> = ({
    affan  ,
    affan1
    })=> {
        let [quiz, setQuiz] = useState<QuestionTypes[]>([{answer : "loading" , question:"loading" , option:["loading" , "loading","loading"]}])
        let [count, setCount] = useState(0)
        let [count3, setCount3] = useState(1)
      

     
       
      
       const fetchdata = async ( ) =>{
        
           const d: QuestionTypes[] = await getData( affan  , affan1)
          
       
           if(q === 0)
           {
            setQuiz(d)
            q++; 
           }
           if(affan > 0){
             localStorage.setItem("affan" , affan);
             localStorage.setItem("affan1", affan1)
           }
         
         
         }
         //onchange
         

        useEffect(() => {
         console.log("affan")

        
            fetchdata()
          } )
        

      
        
        
        
        const handlesubmit = () => {
            setCount(count + 1)
           
          }
          
          const handlesubmit1 = () => {
            // 
            setCount3(count3 + 1)
          }
          if(affan === 0)
          {
           affan= localStorage.getItem("affan")

          }

          
         // const w:QuestionTypes[] = [{answer : "loading" , question:"loading" , option:["loading" , "loading","loading"]}]
          console.log(quiz.length, "Lenghthhhh")
          if(!quiz.length)
           return<h1>your Quiz will be starting </h1>
    return (
      <div className="App-header1" style={{background:"linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)"}} >
         <div className="App-header1">
            {
           
            console.log(affan , "reder")}
           {
            //  setQuiz(w)
           }
            <QuestionCardss
        options={quiz[count].option}
        question={quiz[count].question}
        answer={quiz[count].answer}
        handle={handlesubmit}
        handle1={handlesubmit1}
        count={quiz.length}
        count1={count}
        count2={count-1}
        count3={count3}
        
      />
        </div>
      </div>
       
    )
}
export default QuizCard
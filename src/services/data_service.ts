import {Quiz , QuestionTypes} from './../types/service_type'
 
const shuffleArray = (array: any[])=>
   [...array].sort( 
       () => Math.random() - 0.5  )

export const   getData = async ( b : number , a:string ): Promise<QuestionTypes[]> => 
{
   const res =await fetch (`https://opentdb.com/api.php?amount=${b}&difficulty=${a}`)  
   let  {results} =  await res.json()
  //  console.log(results , res , "data") 
  //return results;

  var quiz = results.map((questionobj : Quiz , index : number) =>{
    //   var abc= shuffleArray(questionobj.incorrect_answers.concat(questionobj.correct_answer))
    
      return  {
          
          answer : questionobj.correct_answer,
  question: questionobj.question,
  option: shuffleArray(questionobj.incorrect_answers.concat(questionobj.correct_answer))
      } 
  })
  return quiz
}
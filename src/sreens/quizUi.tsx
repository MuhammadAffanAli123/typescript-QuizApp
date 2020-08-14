import React  , { useState} from 'react';
import './../App.css';
import swal from 'sweetalert';
import { Link } from 'react-router-dom';
const QuestionCardss:  React.FC<any> = ({
  options,
  question,
  question1,
  answer,
  handle,
  handle1,
  count,
  count1,
  count3
}) => { 
  
  let [score , setScore] = useState(0)
  let [score1 , setScore1] = useState(0)
  // let [check , setCheck] = useState(false)
  let [check1 , setCheck1] = useState(false)
  let [check2 , setCheck2] = useState(true)

//   useEffect(()=>{
// setScore1(score1)
//   },[])


 const checkscor =()=>{
  setScore1(score1)
  //  alert(score1)
  //  swal("Here's a message!")
  if(score1<50)
  {
    swal({
      title: "FAILED!!",
      text: ` Your Score is *  ${score1} * you will not be able to Given Final Exam `,
      icon: "warning",
      // buttons: true,
      dangerMode: true,
    })
  }
  else{
    swal({
      title: "Congrulations!!",
      text: ` Your Score is  *  ${score1} * you will  be able to Given Final Exam `,
      icon: "success",
      // buttons: true,
      dangerMode: true,
      
    })
  }
 

  }

  const handlesubmit =()=>{
    if(count - 1 > (count1 +1))
    {
    //  setCheck(false)
      setCheck1(false)
      setCheck2(true)
         handle()
         handle1()

        //  alert("ok")
    }
    else{
     // setCheck(true)
      setCheck1(false)
       setCheck2(true)
       handle1()
      // alert("not ok")
    }


  }
   const checkNumber = async (ea : string)=>{
    if(count1 < count3){
      if(answer === ea)
      {
       //  alert("ok")
       var ch=score;
       await setScore(score+1 )
       if(score === (ch+1)){
        var a=(score/count) * 100
        await  setScore1(a)
        if(count1 < 4){
         // await   handle()
        }
        
       }
       setCheck1(true)
       setCheck2(false)
     
 
      }
      else{
       //  alert("not ok")
       setScore1((score/count) * 100)
       setCheck1(true)
       setCheck2(false)
       if(count1 < (count3-1)){
        // await   handle()
       }
 
      }
      
    }
    else{
      // alert(score1)
    }
   
   }
  
        
   if(count1 < count3){    
         
          return (
            <div style={{marginLeft:"5%"}} >
          <h1   className=" animate__animated  animate__backInLeft " style={{fontFamily:"revert"}}>  Question  is {count3 } / {count }</h1>
              {/* <h1>{ question1}</h1> */}
                <h4>
                  {question}
                </h4>
                <h3>
                  {options.map((item : string , index: number)=>{
                    return (
                      <div key={index} style={{display:"block" , margin:"5%" ,  }}  className="card animate__animated  animate__backInDown">
                        {/* {answer} */}
                       
                       
                       
                    <button  className="btn btn-primary btn-lg   " style={{color:"red" , width:"100%" , background: " linear-gradient(to right, #cc66ff 0%, #ff99cc 100%)" }} onClick={ ()=>{checkNumber(item)}}  disabled={check1}> {item}</button>
                      
                       
                      
                    

                    </div>
        
                   
                    )
                     
                   
                  })}
                 
                </h3>
                <div className="buttons">
              { (count3 !== count) && <button   style={{marginLeft:"70%" ,  background: "linear-gradient(to right, #cc66ff 0%, #ff3399 100%)"}}  className="btn btn-primary btn-lg buttons" onClick={ handlesubmit}  disabled={check2} >submit</button> }  
              {count3 === count && <button style={{marginLeft:"70%" ,  background: "linear-gradient(to right, #cc66ff 0%, #ff3399 100%)"}}   className="btn btn-primary btn-lg buttons" onClick={checkscor} disabled={check2} > <Link to="/">check </Link></button> }
                {/* <input type="button"  value="submit"  onClick={handle}/> */}
                </div>
            </div>
          );}
          else{
          return<h3>your score is {score1}</h3>
          }
        
}

export default  QuestionCardss
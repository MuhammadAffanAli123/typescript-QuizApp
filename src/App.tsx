import React  , {  useState } from 'react';
import './App.css';
import Forms from './sreens/forms'
import QuizCard from './sreens/quizcards'
import Score from './sreens/score'
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";

function App() {
  // let [quiz, setQuiz] = useState([])
  //let [count, setCount] = useState(0)
// let [count3, setCount3] = useState(1)
  let [level , setLevel]=useState<string>("easy")
  let [val, setVal] = useState<number>(1);
  let [values1,setValues1]=useState(0)
 // let [val1, setVal1] = useState <boolean>(false);

  const onchange  =  async (data : number , data1:string) => {

    await setValues1(data)
    await setLevel(data1)
    //await  setVal1(true)
    console.log("Form222>", data , values1);
   await  setVal(data);
   

}

  return (
    <Router>
    <div>
      <Switch>
        <Route path="/about">
          <Score />
        </Route>
        <Route path="/users">
          <QuizCard affan={val} affan1={level} />
        </Route>
        <Route path="/">
          <Forms  data={val}  onchange={(e : number  , e1:string) => { onchange(e , e1) }} />
        </Route>
      </Switch>
    </div>
  </Router>
  );
}

export default App;

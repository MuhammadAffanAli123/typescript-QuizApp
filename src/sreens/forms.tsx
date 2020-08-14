import React , {useState , useEffect } from 'react'
import './../App.css'
import Modal from 'react-modal';
import {
   // BrowserRouter as Router,
    // Switch,
    // Route,
    Link
  } from "react-router-dom";
import swal from 'sweetalert';

const  Forms :  React.FC<any> = ({
    onchange
    })=> {
        let [state1, setstate1] = useState<number>(1)
        let [state2, setstate2] = useState<string>("easy")
        let [check , setCheck]=useState(false)
        //var subtitle:string;
    const customStyles = {
        content : {
          top                   : '50%',
          left                  : '50%',
          right                 : 'auto',
          bottom                : 'auto',
          marginRight           : '-50%',
          transform             : 'translate(-50%, -50%)',
          background            :"linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)",
          width                  : "50%"
        },
       
      
      };
      const [modalIsOpen,setIsOpen] = React.useState(false);
      function openModal() {
        setIsOpen(true);
      }
    
      useEffect(()=>{Modal.setAppElement('body');},[])
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      
      }
     
      function closeModal(){

        setIsOpen(false);
      }
      const handleChange = (event : any) => {
        setstate1(event.target.value);
      }
      const handleChange1 = (event : any) => {
        setstate2(event.target.value);
      }
     
    return (
        <div className=" App-header" style={{textAlign:"center" , justifyContent:"center" ,  background:"linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)"}}>
         
          <div className="animate__animated  animate__backInDown ">
          {/* <button onClick={openModal}>Open Modal</button> */}
          <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
         
        >
         
         {!check  && <form  style={{background:"linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)" , justifyContent:"center" , alignItems:"center"}}>
              <label>Number Of Question </label>
            <br/>
            <input type="number" value={state1}  id="name"  max={50} min={1} onChange= {handleChange}
           style={{height:"40%" , width:"100%"}}
           />
            <br/>
            <br/>
            <label> Level Of Question </label>
            
            {/* <input   placeholder="Level"  id="level"  onChange= {handleChange1} /> */}
            <br/>
            <select className="form-control" id="fruit" value={state2} onChange={handleChange1}>
            <option>easy</option>
            <option>medium</option>
            <option>hard</option>
          </select>
          <br/>
            <label style={{marginLeft:20}}>easy , medium, hard</label>
           
            <br/>
           <button  onClick={closeModal} className="btn-primary" style={{marginLeft:5 , backgroundColor:"#33ccff"  , width:"40%"}}>Cancel</button>
           
         
         
               <Link to="/">     <button onClick={()=>{
                 if(state1 < 51 && state1 > 0) 
                 {
                  onchange(state1, state2)
                  setCheck(true)
               
                 
                 }
                 else{
                  setCheck(false)
                  swal({
                    title: "WRONG !!",
                    text: ` your data is wrong :  Number of Question is under between 0 to 50 `,
                    icon: "info",
                    // buttons: true,
                    dangerMode: true,
                    
                  })
                  // swal("your data is wrong :  Number of Question is under between 0 to 50 ")
                  setstate1(1)
                  setstate2("easy")
                 }
                
            } } className="btn-primary" style={{marginLeft:5 , backgroundColor:"#33ccff" , width:"40%" }}> submit </button></Link>

            <br/>
            <br/>

            
          
          </form>}
          {check  &&  <form style={{background:"linear-gradient(to top left, #33ccff 0%, #ff99cc 100%)" , justifyContent:"center" , alignItems:"center"}}>
             
            <br/>
          <h3> YOUR QUESTIOS IS  {state1} <br/> 
          Your Level is {state2}
          </h3>
           <div style={{
             justifyContent:"center",
             alignItems:"center"
           }}>
           <button  onClick={closeModal}   className="btn-primary btn-large"  style={{marginLeft:5 , backgroundColor:"#33ccff" , width:"40%" }}> Cancel </button>
         
         <button className="btn-primary btn-large" style={{marginLeft:5 , backgroundColor:"#33ccff" , width:"40%" }} > <Link to="/users"> Next  </Link></button>
              
           </div>
         
          
          </form>}
        </Modal>
          <h1  className="hidden-sm-down" style={{fontSize:75}}> Your Quiz Prepration</h1>
          <h4 style={{color:"red"}}>we are prepare Quiz for your Prepration</h4>
          <br/>
          <button onClick={openModal}  className="btn-primary"  style={{ backgroundColor:"#33ccff" , border:" 2px solidpink"}}>  Start Quiz </button>
          </div>
           
        </div>
    )
}
export default  Forms
import { useState } from 'react'
import './App.css'

function App() {
  const [weight,setWeight]=useState();
  const [height,setHeight]=useState();
  const [message,setMessage]=useState("");
  const [bmi,setBMI]=useState("");

  let calcBMI=(e)=>{
    e.preventDefault();
    if(weight===0 || height===0){
      alert("Please a enter valid weigth and height")
    }
    else{
      let bmi=(weight/(height*height)*703)
      setBMI(bmi.toFixed(1));
      if(bmi < 25){
        setMessage("you are under weight");
      }else if(bmi>=25 && bmi <30){
        setMessage("you are a healthy person");
      }else{
        setMessage("you are overweigth");
      }
    }
  }
  let reload=()=>{
    window.location.reload();
  }
  return (
    <div className='App'>
       <h1>Push code to github</h1>
      <div className='container'>
          <h2>BMI Calculator</h2>
          <form onSubmit={calcBMI}>
            <div>
              <label>Weights(lbs)</label>
              <input type="text" placeholder='Enter weight value' value={weight} 
              onChange={(e)=>setWeight(e.target.value)}/>
            </div>
            <div>
              <label>Heights</label>
              <input type="text" placeholder='Enter Height value' value={height}
              onChange={(e)=>setHeight(e.target.value)} />
            </div>
            <div>
              <button className='btn' type='submit'>Submit</button>
              <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
            </div>
            <div className='center'>
              <h3>Your BMI is : {bmi}</h3>
              <p>{message}</p>
            </div>
          </form>
      </div>
    </div>
  )
}

export default App

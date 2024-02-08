import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from "react"
import "./index.css"
import Button from './Buttons';
import Header from './stages/Header';
import Main from './stages/Main';
import Footer from './stages/Footer';
import Buttons from './Buttons';
function App() {
  
  // const [advice, setAdvice] = useState("")
  // const [count, setCount] = useState(0)
  // async function getAdvice(){
  //   const res = await fetch("https://api.adviceslip.com/advice");
  //   const data = await res.json();
  //   console.log("data", data);
  //   setAdvice(data.slip.advice)
  //   setCount(()=> count + 1)
  // }
  // useEffect(function(){
  //   getAdvice()
  // }, []);
  // return (
  //   <div>
  //   <h1>{advice}</h1>
  //   <button onClick={getAdvice}>Get Advice</button>
  //   <Message count= {count}/>
  //   </div>
  // );
  const [level, setLevel] = useState(1);
  const [bgColor, setBgColor] = useState(false)
  
  return(
    // <div className='btnPar'>
    // <Button bgColor="blue" text="white" name="Ahmed"/>
    // <Button bgColor="red" text="white"name="Zakir"/>
    // <Button bgColor="orange" name="Daniyal"/>
    // <Button bgColor="yellow" name="Umair"/>
    // <Button bgColor="green" text="white" name="Faiz"/>
    // </div>
    <div className="Btn-parent" style={{backgroundColor: bgColor ? "black" : "white"}}>
      <Buttons setBgColor={setBgColor} bgColor={bgColor}/>
      <Header level={level}/>
      <Main level={level}/>
      <Footer setLevel={setLevel} level={level}/>
    </div>
  )

}

export default App;

// function Message(props){
//   console.log(props);
//   return (
//     <p>
//       You have read{props.count} pieces of advice 
//     </p>
//   )
// }

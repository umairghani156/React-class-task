import "./index.css"
export default function Buttons({setBgColor}){
   function dark(){
     setBgColor(true)
   }
    function light(){
    setBgColor(false)
    }

    return (
        <div>
            <button onClick={dark}>Dark</button>
            <button onClick={light}>light</button>
        </div>
        
    )
}
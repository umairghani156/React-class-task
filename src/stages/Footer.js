export default function Footer({setLevel, level}){
     
    function foo1(){
        setLevel((level)=> level + 1)
        setLevel((level)=> level + 1)

        if(level == 3){
            setLevel(1)
        }
    }
    function foo2(){
        setLevel((level)=> level - 1)
        setLevel((level)=> level - 1)
        if(level === 1){
            setLevel(3)
        }
    }
    return(
        <div style={{display:"flex", justifyContent:"space-around"}}>
            <button onClick={foo2} style={{padding:"10px", backgroundColor: "blue",color:"white", border: "none", borderRadius:"10px"}}>Previous</button>
            <button onClick={foo1} style={{padding:"10px", backgroundColor: "blue",color:"white", border: "none", borderRadius:"10px"}}>Next</button>
        </div>
    )
}
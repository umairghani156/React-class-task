import "../index.css"
export default function Header({level}){
    let count = [1, 2, 3]
    
    return(
        <div style={{display:"flex", justifyContent:"space-around"}}>
          {
            count.map(num=>(
                <p style={{backgroundColor: num <=level? "blue" : "white",color: num <= level ?  "white": "black",border:"1px solid grey",width: "60px",display:"flex",borderRadius:"50%", alignItems:"center",justifyContent:"center", height:"60px"}}>{num}</p>
            ))
          }
        </div>
    )
}
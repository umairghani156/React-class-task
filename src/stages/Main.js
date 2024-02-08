export default function Main({level}){

    const differentText = [
        "Learn Javascript",
        "Learn React Js",
        "Learn React native"
    ]
    return (
        <div style={{textAlign:"center"}}>
            <p>Step 1: {differentText[level -1] }</p>
        </div>
    )
}
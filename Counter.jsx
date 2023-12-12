import { useEffect,useState } from "react"
const Counter = ()=>{
    const [counter,setCounter] = useState(0);
    const [myTitle,setMyTitle] = useState("")

    useEffect(()=>{
        console.log(counter)
    },[counter])

    useEffect(()=>{

        console.log(myTitle)
        document.title = myTitle
    },[myTitle])
    const addOne = ()=>{
        setCounter(counter + 1)
    }
    const changeTitle = (e) =>{
        setMyTitle(e.target.value)
    }
    return (
        <div>
            <input type="text" value={myTitle} onChange={changeTitle} />

            <h1 style={{color:"white"}}>the count is : {counter}</h1>
            <button onClick={addOne}>increment</button>
        </div>
    )
}
export default Counter
import React,{ useState,useEffect } from "react"
import checkAns  from "./checkAns"
import App from "./App"

function App2(props){
    let main=["heell"]
    let answer=[]
    let keyanswers=[]
    const [data,setData]= useState({})
    //console.log(props.item)
    if(typeof(props.item)==="object"){
        main=props.item
    }
    else{main="f"}
    if(typeof(props.item.answers)==="object"){
        answer=props.item.answers
    }
    else{answer="ff"}
    useEffect(()=>{
        setData(main)
    },[main.id])
    const [options,setOptions]=useState({
        answer_a_correct: "false",
        answer_b_correct: "false",
        answer_c_correct: "false",
        answer_d_correct: "false",
        answer_e_correct: "false",
        answer_f_correct: "false",
        id:1,
        value:"f",
    })
    //console.log(options)
    const [count,setCount]= useState("hi")
    const [score,setSore]= useState("hi")
    const option=(event)=>setOptions((prevState)=>{
        return{
            ...prevState,
            [event.target.name]:String(event.target.checked),
            id:event.target.id,
        }
        
    })
    let useropts=[]
    let selected_ans={}
    let true_ans={}
    const handleClick=(event)=>{
        console.log(props.item.id)
        if(event.target.id===String(props.item.id)){
            selected_ans=options.value
            delete options.id
            delete options.value
            useropts=options
            //console.log(options)
            //console.log(props.item.correct_answers)
            dictEquality(options,props.item.correct_answers)
            delete props.item.id
            setColor({color:"black"})
        }
    else{console.log("f")}}
    const changeHandler=(event)=>setOptions((prevState)=>{
        console.log(props.item.correct_answers)
        return{
            ...prevState,
            [event.target.name]: String(event.target.checked),
            id:event.target.id,
            value:event.target.value
        }
        
    })
    let ata=0
    const newarr=[]
    let rightans=""
    let userans=""
    let rightopt=""
    if(props.item.correct_answers){if (useropts){
        rightans=getKeyByValue(props.item.correct_answers,"true")
        userans=getKeyByValue(useropts,"true")
    }}
    let correct_ans=[]
    function dictEquality(obj1,obj2){
        const obj1keys=Object.keys(obj1)
        const obj2keys=Object.keys(obj2)
        //console.log(obj2keys)
        for(let objkeys of obj2keys){
            //console.log(objkeys)
            //console.log(obj1[objkeys])
            //console.log(obj2[objkeys])
            if(obj1[objkeys]===obj2[objkeys]){
                console.log("Awesome")
                ata=ata+1
                }
            else{
                newarr.push(objkeys)
            }
        }
        if(ata===6){
            console.log("op")
            setCount("You have entered the right answer.")
        }else{
            console.log("Not op")
            rightans=getKeyByValue(props.item.correct_answers,"true")
            userans=getKeyByValue(useropts,"true")
            delete newarr[newarr.indexOf(rightans)]
            rightopt="answer_"+rightans[7]
            true_ans="answer-"+"c"
            console.log(rightopt)
            if(props.item.answers){
            correct_ans=props.item.answers[rightopt]}
            setCount('Right answer is :')
            setCount(prevCount=>prevCount+":"+correct_ans)
            setSore("You have marked:")
            setSore(prevsore=> prevsore+":"+selected_ans)
        }
    }
    //console.log(options)
    //console.log(props.item.correct_answers)
    const [color,setColor]= useState({color:"darkgrey"})
    let styless={
        padding:"10px",
        display:"block",
        marginLeft:"500px",
        marginRight:"500px",
        fontFamily:"cursive",
        fontSize:"20px",
        color:"black",
        borderRadius:"30px",
        borderColor:"black",
        backgroundColor:"lightgrey",
    }
    let dis={
        display:"ruby-base-container",
        fontFamily:"cursive",
        color:"green",
        fontSize:"20px",
        textAlign:"center",
    }
    let disp={
        display:"ruby-base-container",
        fontFamily:"cursive",
        color:"red",
        fontSize:"20px",
        textAlign:"center",
    }
    let button={
        color:"black",
        textAlign:"center",
        fontSize:"20px",
        marginLeft:"200px",
        display:"flex",
        justifyContent:"center",
        borderRadius:"5px",
        backgroundColor:"darkgrey"
    }
    function getKeyByValue(object, value) {
        return Object.keys(object).find(key => object[key] === value);
      }
    return(
        <div>
            <div className="container" style={styless}>
                <br/>
            <strong><p style={color}>Q:{props.item.question}</p></strong>
            {props.item.id?
            Object.values(answer).map(opts=> opts? <div><input 
            type="checkbox"
            id={props.item.id}
            onChange={changeHandler}
            name={getKeyByValue(answer,opts)+"_correct"}
            value={opts}
            />{opts} </div> : null):null}
            {props.item.id?
            <input
            class="btn btn-primary"
            style={button} 
            type="submit"
            onClick={handleClick}
            id={props.item.id} />:null}
            </div>
            <p style={{borderRadius:"30px",
        backgroundColor:"lightgrey",
        marginLeft:"500px",
        marginRight:"500px",}} ><h6 style={dis}>{count==="hi"?(null):count}</h6>
            <h6 style={disp}>{score==="hi"?(null):score}</h6></p>
        </div>   
    )
}

export default App2
import React from "react"
import App from "./App"
import App2 from "./App2"
import checkAns from "./checkAns"




class Hello extends React.Component{
    constructor(){
        super()
        this.state={
            isLoading:false,
            name:"Tans",
            maindata:["f"],
        }
    }
    componentDidMount(){
        this.setState({isLoading:true})
            fetch("https://quizapi.io/api/v1/questions?apiKey=rlm8Wtj7AYiz4r4sBq3XESdnmFnhiOZORgyvbIct&category=sql&difficulty=Easy&limit=10")
                .then(response=> response.json())
                .then(data=>{
                    //console.log(data.map(item=>{return{item}}))
                    this.setState(
                        {isLoading:true,
                        maindata:data
                        })
            })
    }
    
    render(){
        //console.log(this.state.maindata)
        //const maindata=this.state.maindata.map((item)=><App item={item} />)
        const alsoData=this.state.maindata.map((item)=><App2 item={item} key={item.id} />)
        return(
            <div className="container" >
                {alsoData}
            </div>
        )
    }
}

export default Hello
import React from "react";

class Profile extends React.Component{
    constructor(props){
        super(props);
        // Create State
        this.state ={
           userInfo:{
            name:"Dummy Name",
            location:"Dummy Location",
           },
        };
        console.log("child-Constructor")
    }
    async componentDidMount(){
        //API Calls
        const data = fetch("");
        const json = await data.json();
        console.log("componentDidMount")
    }
    render(){
        const { count } = this.state;
        console.log("render" + this.props.name);
        return 
        (
            <div>
                <h1> Profile class Component</h1>
                <img src={this.state.userInfo.avatar_url}/>
                <h2>Name:{this.state.userInfo.name}</h2>
                <h2>Location:{this.state.userInfo.location}</h2>
                <h2>count:{count}</h2>
                <button 
                onClick={() =>{
                    // WE DO NOT MUTATE STATE DIRECTLY
                    // NEVER DO this.state = something
                    this.setState({
                        count: 1,
                        count2: 2,
                    });
                }}
                >SetCount</button>
            </div>
        );
        
    };
};
//2.36.35

export default Profile;
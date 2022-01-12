import React, { Component } from "react";
import axios from 'axios';

class TrendSearch extends Component{
    
    state ={
        input:"",
        gifs: [{}],
    
    }
    handleOnChange=(event)=>{
        this.setState({input: event.target.value});
    };

    handleSearch=()=>{
        this.connectToApi(this.state.input);
    };

    connectToApi=(inp)=>{
            axios.get("http://api.giphy.com/v1/gifs/trending?api_key=6Z2L7AtMebBCoZm21F8XSLoSCzw3g0v0").then( async (response)=>{

            const jsonData = await response.data.data;
            this.state.gifs = jsonData;
            console.log(this.state.gifs);
            //this.setState({gifs: [...this.state.gifs, jsonData]})
            for(let i=0;i<jsonData.length;i++){
                console.log(this.state.gifs[i].url);
            }
        }).catch(err=>{alert(err)})
    
    };

    displayGif(giffy){
        return(
            <div>
                <img key = {giffy.id} className="img" src ={giffy.url} alt ="giphy"></img>
            </div>
        )
    }
    
    render() {
        return(
            <div>
                <h3>hello from trendsearch</h3>
                <button onClick={this.handleSearch} >Search</button>
            </div>
        );
    }
}
export default TrendSearch;

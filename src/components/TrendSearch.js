import React, { Component } from "react";
import axios from 'axios';

class TrendSearch extends Component{
    
    state ={
        gifs: [],
    }

    connectToApi=()=>{
            axios.get("http://api.giphy.com/v1/gifs/trending?api_key=6Z2L7AtMebBCoZm21F8XSLoSCzw3g0v0").then( async (response)=>{
            const jsonData = await response.data.data;
            this.setState({gifs:jsonData});
            console.log(this.state.gifs);
        }).catch(err=>{alert(err)})
    };
    
    render() {
        return(
            <div>
                <h2>hello from trendsearch</h2>
                <button onClick={this.connectToApi} >Search</button><br/>
                {
                    this.state.gifs.map(x=>{
                        return <img style={{ width: "23%", padding: 10 }} key={x.key} src={x.images.original.url} />
                    })
                }
            </div>
        );
    }
}
export default TrendSearch;

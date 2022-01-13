import React, { Component } from "react";
import axios from 'axios';

class RegSearch extends Component{
    
    state ={
        input:"",
        gifs: [],
    
    }
    handleOnChange=(event)=>{
        this.setState({input: event.target.value});
    };

    handleSearch=()=>{
        this.connectToApi(this.state.input);
    };

    connectToApi=(inp)=>{
            axios.get("http://api.giphy.com/v1/gifs/search?q="+inp+"&api_key=6Z2L7AtMebBCoZm21F8XSLoSCzw3g0v0").then( async (response)=>{
            const jsonData = await response.data.data;
            this.setState({gifs:jsonData});
        }).catch(err=>{alert(err)})
    
    };
    
    render() {
        return(
            <div>
                <h2>hello from regsearch</h2>
                <input id ="text_input" type="text" placeholder="regs" onChange={e=>this.handleOnChange(e)} value={this.state.input} />
                <button onClick={this.handleSearch}>search</button><br/>
                {
                    this.state.gifs.map(x=>{
                        return <img style={{ width: "20%", height: "400", padding: 10 }} key={x.key} src={x.images.original.url} />
                    })
                }
            </div>
        );
    }
}
export default RegSearch;
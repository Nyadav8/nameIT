import React from "react";
import  ReactDOM from "react-dom";
import Header from './Header/Header';
import "./App.css";
import Searchbox from "./SearchBox/Searchbox";
import Resultcontainer from "./Resultcontainer/Resultcontainer";
//this.setState
const name=require('@rstacruz/startup-name-generator');
class App extends React.Component{
    state={
        headerText:'Name IT!',
        headerExpande: true,
        names:[],
    }
    handleInputChange=(inputext)=>{
        this.setState({names: inputext ? name(inputext): []});
        this.setState({headerExpande:inputext.length>0 ? false:true});
    }; 
    render() {
return(
    <div>
        <Header
        headerExpande={this.state.headerExpande}
        headTitle={this.state.headerText}/>
        <Searchbox onInputChange={this.handleInputChange}/>
        <Resultcontainer result={this.state.names}/>
    </div>
);
    }
}
export default App;
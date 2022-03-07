import './App.css';
import React from 'react'


class App extends React.Component
{

  constructor(){
    super();
      console.log("constructor")
      this.state = {
      
        fullName : "Rahma metichi" ,bio : "IT Developer" ,profession  : "Student " ,check : false}
  }

  componentDidMount(){
    var intervalId = setInterval(this.timer, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({intervalId: intervalId});
        console.log("componentDidMount")
  }
 
  
  

   handleClick = (e) => {   
      this.setState({check : !this.state.check})
      console.log(this.state.check)
 }

    render () {
  console.log("render")
  return (
    <div className="App">
   <button onClick={this.handleClick} > Click To show </button>
   {this.state.check ? <div><h1>{this.state.fullName}</h1><h1>{this.state.bio}</h1> <h1>{this.state.profession}</h1> </div>: null}
   <section>
       {this.state.currentCount}
      </section>
    </div> 
  );
}
timer =() =>{
  // setState method is used to update the state
  this.setState({ currentCount: this.state.currentCount -1 });
} 

componentDidUpdate(prevProps,prevState){
  clearInterval(this.state.intervalId);
  console.log("componentDidUpdate",prevProps,prevState)
  
  
}


}


export default App;

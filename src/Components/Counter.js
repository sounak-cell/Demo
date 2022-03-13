import { click } from '@testing-library/user-event/dist/click';
import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

 class Counter extends Component {
     state = { 
         count : 0 ,
         age : 25,
        Array : ["ram","shayam","jadu"] ,
        objects : 
            [
                {
                   "id":28,
                   "Title":"Sweden"
                },
                {
                   "id":56,
                   "Title":"USA"
                },
                {
                   "id":89,
                   "Title":"England"
                }
             ]
            } ;
      constructor(){
          super();
         this.decrement = this.decrement.bind(this);
         console.log('constructor',this);
      };

      increment =()=> {
        let count = this.state.count;
         return count === 0 ? 'zero' : count;
     };

     click =()=>{
        
         this.setState( {count : this.state.count +1})
     };
  decrement =() => {
    this.setState( {count : this.state.count -1});
  
  };

//  setTimeout(demo);
// componentDidMount () {
//    setInterval(this.demoo,1000);

// }

 
 
//   stoptime =(id)=>{
//       clearInterval(id);
//   }


//   demoo = ()=> {
      
//        this.setState ({count : this.state.count +1});
//        document.getElementById("demo").innerHTML = this.state.count;
  
//    };


  





     render() { 
      
         return (
             <div>
                 <h1 id ="demo">HI</h1>
                 <h1>{this.state.count}</h1>
                 <Button variant='primary' className="me-2" onClick = {this.click}>Increment</Button>
                 <Button variant='primary' className="me-2"onClick = {this.decrement}>Decrement</Button>
                 <Button variant='primary' className="me-2"onClick={()=>{this.props.onDelete(this.props.id)}}>Delete</Button>
                 {/* <button onClick={()=>this.props.onDelete(this.props.id)}>Delete</button> */}
                  {/* <ul>{this.state.Array.map( Element=> <li key = {Element}>{Element}</li>)}</ul>
                 <table>
                     <tr>
                         <th>ID</th>
                         <th>Title</th>
                     </tr>
                     {this.state.objects.map(object => <tr key={object.id}><td>{object.id}</td> <td>{object.Title}</td></tr>)}
                 </table>  */}
                 

             </div>
         );
     }
 }
  
 export default Counter;
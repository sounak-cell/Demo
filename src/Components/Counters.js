import React, { Component } from 'react';
import Counter from './Counter';
 class Counters extends Component {
     state = { counters :[
         {id : 1 , title : 'Counter1' },
         {id : 2 , title : 'Counter2' },
         {id : 3 , title : 'Counter3' }
     ] } ;

     handledelete =(counterid) => {
         console.log (" i m in handle deleted" ,counterid);
         const counters = this.state.counters.filter( c => c.id!==counterid);
         this.setState ({counters :counters})
     }
     render() { 
         return (
             <div>
                {/* {this.state.counters.map(counter =>  <Counter key={counter.id} id={counter.id} onDelete = {this.handledelete}/>)} */}
                {this.state.counters.map(counter => <Counter key = {counter.id} id = {counter.id} onDelete ={this.handledelete}/> )}
             </div>
         );
     }
 }
  
 export default Counters ;
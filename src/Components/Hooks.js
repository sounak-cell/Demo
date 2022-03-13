import React,{useState}from 'react';

function Hook() {
   const [count,setCount] =useState (['Bananna']);
   

function pushfruit  () {
    let x =  document.getElementById('fruit').value ;
    setCount( [...count,x]);
    console.log(count);
 }

    return (<div>
        <p>Fruits :<ul>{count.map((x) =>(<li key = {x}>{x}</li>))}</ul></p>
        <input type='text' id='fruit' placeholder='Enter the fruitName' />
        <button onClick={pushfruit}>Push the Fruit</button>
            
    </div>  );
}

export default Hook;
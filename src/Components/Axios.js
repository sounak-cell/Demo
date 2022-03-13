import React, { useState ,useEffect} from 'react';
import axios from  'axios';
import {Card} from 'react-bootstrap';
import Users from './Users';

const url ="https://jsonplaceholder.typicode.com/posts";

const Axios = () => {

 
const [data,setData]= useState([]);

  const  getApi = async (url)=>{
  
  axios.get(url).then((res)=>{
    setData(res.data);
  });


};


useEffect(() => {
  getApi(url);
}, []);

 console.log(data);



  return (
    <div>
                    <h1>Axios</h1>
                    <div>
                    {/* <button onClick={()=>getApi(url)}>Get Api</button> */}
                    
                      {data.map((data)=>(<Users data={data}/>))}
                  
                  
                    </div>
                    
                    
                   
                   
                    </div>
  )
}

export default Axios
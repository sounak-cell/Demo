
 import  { useState } from 'react';
 

 
 function Folder (props) {
     
   let  data =props;
     const [expand,SetExpand]= useState(false);
     console.log(data);

  
     if(data.data.isFolder){
        return ( 
            <div>
                <span onClick={()=>{SetExpand(!expand)}}>
                {data.data.name}
                </span>
                <div style={{display : expand ? "block" : "none", paddingLeft:100}}>
                    {data.data.items.map((item)=>{return <span>{<Folder data ={item}/>} </span>;
                    })}
                </div>
                
                
               
            </div>
         );
     }
     else {

         return <span>{data.data.name}{<br/>}</span>
             
         
     }
     
 }
 
 export default Folder;
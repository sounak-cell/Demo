 const Data = {
    name : "root",
    isFolder :  true,
    items:[{
        name : "public",
        isFolder :  true,
        items :  [
                    {
                        name : "index.html",
                        isFolder :  false,
                    },
                    {
                         name : "robots.txt",
                        isFolder :  false,
                    }
                ]
            },

            {
                name : "src",
                isFolder :  true,
                items :  [{
                            name : "Components",
                            isFolder :  true,
                            items :[
                                        {
                                        name : "Axios.js",
                                        isFolder :  false,
                                        },
                                        {
                
                                        name : "Data.js",
                                         isFolder :  false,
                   
                                        }

                                    ]
                            },
                            {
                            name : "App.css",
                            isFolder :  false,
                             },
                             {
                                name : "App.js",
                                isFolder :  false,
                             },
                             {
                                
                                name : "Index.js",
                                isFolder :  false,
                                 
                             },
                             {
                                name : "package.json",
                                isFolder :  false,
                             }

                        ]
                    }
    
        
     ]
 }

 export default Data;
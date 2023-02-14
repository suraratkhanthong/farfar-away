 
 
  const dataContents = [
  {
    id:1,
    url:"./images/img_7.jpg",
    title:"Test1",
    status: 0
  },
    {
    id:2,
    url:"./images/img_6.jpg",
    title:"Test2",   
    status: 0
  },
    {
    id:3,
    url:"./images/img_6.jpg",
    title:"Test3ds",   
    status: 0
  }
  ]
  
//import { useState, useEffect } from "react";
  //let dataContents = []
 const api = "./data-app/Data.json";
  //const api = "http://cookie.jsontest.com/";
  
 //Fetch()
 
   /*useEffect(() => {
     let dataContents = [];
       fetch(api).then((resp) => {
        
      return resp.json()
    }).then((data) => {
     
      //return {data};
      dataContents.push(...data)
  alert(JSON.stringify(data))
    }).catch((err) => {
      alert("ERR : "+err)
      console.log('ERR : ' +err)
  })
  return dataContents;
}, []);*/
  
  
    export default dataContents;
  
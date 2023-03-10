import React, {useState, useEffect} from "react";
import './App.css';

import ContentApp from './comp/ContentApp';
import HeaderApp from './comp/HeaderApp';
//import dataContents from './data-app/DataContent';

import ImgPost from './comp/ImgPost';


function App() {
  //let [datac, setDatac] = useState([]);
  let [dataContents, setDataContents] = useState([]);

  async function fetchApi(){
   const res = await fetch('https://app-api-eight.vercel.app/posts');
   res.json()
   .then(res => setDataContents(res))
    .catch((err)=>{console.log("ERR : "+err)});
  }
  useEffect(()=>{
    fetchApi()
  },[])
  
  
  let [selectImgOpen, setSelectImgOpen]= useState(null);
  function ClickOpenImg(imgItem){
   setSelectImgOpen(imgItem)
  }
  function ClickCloseImg(){
    setSelectImgOpen(null)
   }
  
  
   
   let dataElements=null
   dataElements = dataContents.map((dataContent, index) =>{
    return ( <ContentApp key={index} 
    dataContent={dataContent}
    onClickOpen={ClickOpenImg}
      />);
  })
   
   let imgPost = null;
    if(!!selectImgOpen){
      imgPost = <ImgPost 
      imgItem={selectImgOpen}
      clickCloseImg={ClickCloseImg}
      />;
    }
   
  return (
    <div className='app'>
    <HeaderApp />
    <div className="show-img">
    {dataElements}
     </div>
     {imgPost}
    </div>
  );
}
export default App;

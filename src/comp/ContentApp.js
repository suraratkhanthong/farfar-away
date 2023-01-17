 import './ContentApp.css';    
function ContentApp(props){
  const {dataContent, onClickOpen} = props;
   
  return(
    <div className="img-item">
      <img src={dataContent.url} 
      onClick={()=>{onClickOpen(dataContent)}}
     />
      <p>{dataContent.title}</p>
    </div>
    );
}
export default ContentApp;
import'./ImgPost.css';
function ImgPost(prop){
  const {imgItem, clickCloseImg} = prop;
  return(
    <div className="img-post">
     <div className="img-post-bg" onClick={clickCloseImg}/>
      <div className="img-post-content">
       <img src={imgItem.url} />
       <h4>{imgItem.title}</h4>
       </div>
    </div>
    )
}
export default ImgPost;
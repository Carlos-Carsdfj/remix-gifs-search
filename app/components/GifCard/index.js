function GifCard(props) {
  return (<div className="Gif h-max rounded ">  
    <img  className="w-full rounded "
        alt='gifs result'
        {...props}
    />
    <div className="flex items-center  py-1 px-1 gap-2">
    <img className="mb-3 rounded-full w-12 h-12 shadow-lg" 
      src={props.useravatar} 
      alt={props.username}
    />
    <div className="">
    <h2 className="font-bold " >  
    Title : {props.alt}</h2>
    <h3 className="font-semibold" >Autor : {props.username}</h3>
    </div>
    </div>
  </div>)
}

export default GifCard
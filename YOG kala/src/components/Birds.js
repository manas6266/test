import React,{useState,useEffect} from 'react';
import classes from './all.css';
const Birds=()=>{
	  const[pictures,setpictures]=useState([]);
      useEffect(()=>{
     fetch('https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=c57031030da981b5740761ca9baa67b4&tags=bird&per_page=10&page=1&format=json&nojsoncallback=1')
    .then(function(response){
      return response.json();
    })
    .then(function(j){

      let picArray = j.photos.photo.map((pic) => {
        
        var srcPath = 'https://farm'+pic.farm+'.staticflickr.com/'+pic.server+'/'+pic.id+'_'+pic.secret+'.jpg';
        return(
          <div className='bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
          <img alt="dogs" src={srcPath}></img>
          </div>
        )
      })
      setpictures(picArray);
    }.bind(this))
     },[]);
    
  	return(
  		<div className={classes.gridc}>
        {pictures}
        </div>
  		)
  
}
	
export default Birds;


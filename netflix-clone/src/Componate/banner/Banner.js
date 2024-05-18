import React, {useEffect,useState}from 'react'
import axios from '../../utilits/Axios';
import Requests from '../../utilits/Requests';
import './banner.css';
const Banner=()=>{

const  [movie,setmovie]=useState({});
useEffect(() => {
    (async()=>{
    try{
        const Request= await axios.get(Requests.fetchNetflixOrignals)
        console.log(Request)
       setmovie(Request.data.results[Math.floor(Math.random() * Request.data.results.length)]);

    } catch(error){
        console.log("error",error);
    }


    })()
},[]);

function truncate(str,n){
    return str?.length>n?str.substr(0,n-1)+'...':str;
}
return(
<div className='banner' style={{
backgroundSize:"cover",
backgroundImage:`url('https://image.tmdb.org/t/p/original${movie?.backdrop_path}')`,
backgroundPosition:"center",
backgroundRepeat:"no-repeat"



}}>
<div className='banner_contents'>
    <div className='banner-con'>
<h1 className='banner_title'>
    {movie?.title || movie?.name || movie?.original_name}
</h1>
<div className='banner-buttons'>
    <button className='button_play'>Play</button>
    <button className='button'>Mylist</button>
    
</div>
</div>
<h1 className='banner_description'>
    {truncate(movie?.overview, 150)}
</h1>
</div>
<div className='banner-fadebutton'/>



</div>



)






}
export default  Banner;
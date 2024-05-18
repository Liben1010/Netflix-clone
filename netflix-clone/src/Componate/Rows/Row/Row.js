
import React, {useEffect,useState}from 'react'
import axios from '../../../utilits/Axios';
import"./Row.css"
import movieTrailer from 'movie-trailer';

// import { YouTube } from '@mui/icons-material';
// import movieTrailer from 'movie-trailer';
import YouTube from 'react-youtube';
const Row=({title,fetchUrl,islargeRow})=>{

const  [movies,setMovie]=useState([]);
const [trailerUrl,setTrailerUrl]=useState("");
const base_url="https://image.tmdb.org/t/p/original";
useEffect(() => {
    (async()=>{
    try{
        console.log(fetchUrl) 
        const Request = await axios.get(fetchUrl);
        console.log(Request)
       setMovie(Request.data.results);

    } catch(error){
        console.log("error",error);
    }


    })()
},[fetchUrl]);
const handleClick=(movie)=>{
    if (trailerUrl){
        setTrailerUrl('')
    }
    else{


        movieTrailer(movie?.title||movie?.name||movie?.original_name)
        .then((url)=>{
            console.log(url)
            const urlParams = new URLSearchParams(new URL(url).search)
            console.log(urlParams)
            console.log(urlParams.get('v'))
            setTrailerUrl(urlParams.get('v'));




        })
    }
}
const opts={
height:"400",
width:"1200vh",
playersVars:{autoplay:1,},

}
return(
<div className='row'>

<h1 >
    {title}
</h1>
<div className='row_posters'>
    {movies?.map((movie,index)=>(
     <img
        onClick={()=>handleClick(movie)}
    key={index} src={`${base_url}${islargeRow?movie.poster_path:movie.backdrop_path}`}
    alt={movie.name} className={`row_poster ${islargeRow && " row_posterLarger"}`}


/>


    ))}


</div>
<div style={{padding:'40px'}} className=''>{trailerUrl && <YouTube videoID={trailerUrl} opts={opts}/>}</div>

</div>



)






}

export default Row;
// import React, {useEffect,useState}from 'react'
// import axios from '../../../utilits/Axios';
// import Requests from '../../../utilits/Requests';
// import '../../banner/banner.css';
// const Row=({title,fetchUrl,islargeRow})=>{

// const  [movie,setmovie]=useState({});
// useEffect(() => {
//     (async()=>{
//     try{
//         const Request= await axios.get(Requests.fetchNetflixOrignals)
//         console.log(Request)
//        setmovie(Request.data.results[Math.floor(Math.random() * Request.data.results.length)]);

//     } catch(error){
//         console.log("error",error);
//     }


//     })()
// },[]);
// const base_url="https://image.tmdb.org/t/p/original";
// function truncate(str,n){
//     return str?.length>n?str.substr(0,n-1)+'...':str;
// }
// return(
//     <div className='row' >
//     {movie.movie?.map((movie,index)=>{
//         <div className='banner' key={index} style={{
//             backgroundSize:"cover",
//             backgroundImage:`{url('https://image.tmdb.org/t/p/original${islargeRow?movie.poster_path:movie.backdrop_path}')}`,
            
            
            
            
//             backgroundPosition:"center",
//             backgroundRepeat:"no-repeat"
            
            
            
//             }}/>
//         //         <imag 
//         //         // onClick={()=>handleClick(movie)}
//         //     key={index} src={`${base_url}${islargeRow?movie.poster_path:movie.backdrop_path}`}
//         //     alt={movie.name} className={`row_poster ${islargeRow && " row_posterLarger"}`}
//         })}





// </div>



// )






// }

// export default  Row;

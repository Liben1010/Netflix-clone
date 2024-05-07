const API_KEY= process.env.REACT_APP_API_KEY; 
const requests={
fetchTrending:`/trending/all/week?api_key=${API_KEY}&language=en-US`,
fetchNetflixOrignals:`/discover/tv?api_key=${API_KEY}&with_networks=213`,
ftchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
fetchActionMovies: `/discover/movie?api_key=${API_KEY}&With_generes=28`,
fetchComedyMovies:`/discover/movie?api_key=${API_KEY}&With_generes=35`,
fetchHorrorMovies:`/discover/movie?api_key=${API_KEY}&With_generes=27`,
fetchRomanceMovies:`/discover/movie?api_key=${API_KEY}&With_generes=10749`,
fetchDocumentaries:`/discover/movie?api_key=${API_KEY}&With_generes=99`,
fetchTvShow:`/tv/popular?api_key=${API_KEY}&language=en-US&page=1`





};
export default requests;
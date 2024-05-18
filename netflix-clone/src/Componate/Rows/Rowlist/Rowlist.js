import React from "react";
import Row from "../Row/Row";
import requests from "../../../utilits/Requests";
import'./rowlist.css';
function Rowlist() {
  return (
    <>
      <Row
        title="NETFLEX ORIGINALS"
        fetchUrl={requests.fetchNetflixOrignals}
        islargeRow={true}
      />
      <Row title="Trending NOW" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRatedMovies}/>
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horrer Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Tv Shows" fetchUrl={requests.fetchTvShow} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </>
  );
}

export default Rowlist;

import { Link } from "react-router-dom";
import './styles.scss';
import { useState, useEffect } from 'react';


export default function Movies() {

    const [movies, setMovies] = useState([]);
    const apiKey = 'e7b3c462a64fd24f8b4991140fe9fb31';
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        //consumir api

        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
            .then(response => response.json())
            .then(data => setMovies(data.results))
    }, [])

    return (
        <div className="Container">
            <h1>Movies</h1>
            <ul>
                {movies.map(movie => {
                    return (
                        <li key={movie.id}>
                            <Link to={`/movie-details/${movie.id}`}><img src={`${image_path}${movie.poster_path}`} alt={movie.title} /></Link>
                            <span>{movie.title}</span>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}
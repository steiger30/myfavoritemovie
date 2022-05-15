import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from 'react';
import './styles.scss';



function MovieDetails() {
    const { id } = useParams();

    const [movie, setMovie] = useState({});
    const apiKey = 'e7b3c462a64fd24f8b4991140fe9fb31';
    const image_path = 'https://image.tmdb.org/t/p/w500';

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`)
            .then(response => response.json())
            .then(data => {
                const movie = {
                    id,
                    title: data.title,
                    overview: data.overview,
                    image: `${image_path}${data.poster_path}`,
                    releaseDate: data.release_date,
                    rating: data.vote_average
                }
                setMovie(movie);
            })
    }, [id])

    return (
        <div className="Container">
            <div className="movie">
                <div className="image">
                    <img src={movie.image} alt={movie.overview} />
                    <span>Rating: {movie.rating}</span>
                </div>
                <div className="details">
                    <h1>{movie.title}</h1>
                    <span>Sinopse: {movie.overview}</span>
                    <span className="release-date">Release date: {movie.releaseDate}</span>
                    <Link to='/movies'>
                        <button>Voltar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default MovieDetails;
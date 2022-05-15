import { Link } from "react-router-dom";
import './styles.scss';
import { useState, useEffect } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../../auth/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";
import NavBar from "../../components/Navigation/NavBar"


export default function Movies() {

    const [user, loading, error] = useAuthState(auth);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const fetchUserName = async () => {
        try {
            const q = query(collection(db, "users"), where("uid", "==", user?.uid));
            const doc = await getDocs(q);
            const data = doc.docs[0].data();

            setName(data.name);
        } catch (err) {
            console.error(err);
            alert("An error occured while fetching user data");
        }
    };

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/");

        fetchUserName();
    }, [user, loading]);

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
        <div>
            <NavBar />
            <div className="dashboard">
                <div className="dashboardcontainer">
                    Logged in as
                    <div>{name}</div>
                    <div>{user?.email}</div>
                    <button className="dashboardbtn" onClick={logout}>
                        Logout
                    </button>
                </div>
            </div>
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
        </div>
    );


}

/*

export default function Movies() {
  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState("");
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();

      setName(data.name);
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");

    fetchUserName();
  }, [user, loading]);

  return (
    <>
    <NavBar />
    <div className="dashboard">
      <div className="dashboardcontainer">
        Logged in as
        <div>{name}</div>
        <div>{user?.email}</div>
        <button className="dashboardbtn" onClick={logout}>
          Logout
        </button>
      </div>
    </div>
    </>
  );
}

*/
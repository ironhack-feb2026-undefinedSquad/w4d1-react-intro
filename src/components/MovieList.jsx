import moviesArr from "../data/movies.json"


function MovieList() {
    return (
        <>
            <h2>List of movies:</h2>

            {moviesArr.map((movieObj, i, arr) => {
                return (
                    <div key={movieObj.id}>
                        <h3>{movieObj.title}</h3>
                        <p>{movieObj.year}</p>
                    </div>
                )
            })}
        </>
    )
}

export default MovieList
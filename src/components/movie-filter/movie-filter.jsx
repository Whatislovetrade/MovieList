import './movie-filter.css'

const MovieFilter = () => {
    return (
        <div className="movie-filter btn-group">
            <button className="movie-filter-btn all btn btn-secondary active">Все</button>
            <button className="movie-filter-btn comedy btn btn-outline-secondary">Комедия</button>
            <button className="movie-filter-btn horror btn btn-outline-secondary">Ужасы</button>
        </div>
    )
}

export default MovieFilter
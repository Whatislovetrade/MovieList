import './movie-filter.css'

const MovieFilter = () => {
    return (
        <div className="movie-filter">
            <button className="movie-filter-btn all">Все</button>
            <button className="movie-filter-btn comedy">Комедия</button>
            <button className="movie-filter-btn horror">Ужасы</button>
        </div>
    )
}

export default MovieFilter
import './app-header.css'
import MovieFilter from '../movie-filter/movie-filter'

const AppHeader = () => {
    return (
        <div className="app-header">
            <h1>MovieList</h1>
            <MovieFilter />
        </div>
    )
}

export default AppHeader
import './app-header.css'
import MovieFilter from '../movie-filter/movie-filter'

const AppHeader = () => {
    return (
        <div className="app-header">
            <h1 className='app-header-title'>MovieList</h1>
            <MovieFilter />
        </div>
    )
}

export default AppHeader
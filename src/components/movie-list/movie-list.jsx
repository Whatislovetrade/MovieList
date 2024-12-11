import { Component } from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import './movie-list.css'

export default class MovieList extends Component {
    render() {
        const { movies, onDeleted } = this.props
        const elements = movies.map((movie, id) => {
            return <MovieListItem onDeleted={() => onDeleted(movie.id) } key={movie.id} {...movie} />
        })
        return (
            <ul className="movie-list list-group">
                {elements}
            </ul>
        )
    }
}
import { Component } from 'react';
import MovieListItem from '../movie-list-item/movie-list-item';
import './movie-list.css'

export default class MovieList extends Component {
    render() {
        return (
        <div className="movie-list">
            <MovieListItem />
        </div>
        )
    }
}
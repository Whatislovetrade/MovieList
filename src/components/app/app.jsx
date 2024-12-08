import { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import MovieList from "../movie-list/movie-list";
import AddMovieBtn from "../add-movie-btn";
import './app.css'


export default class App extends Component {

    state = {
        movies: [
            { id: 1, title: 'Kingsman: секретная служба', genre: 'Комедия', year: 2017, poster: false},
            { id: 2, title: 'Форрест Гамп', genre: 'Комедия', year: 1999, poster: false},
            { id: 3, title: 'Ходячие мертвецы', genre: 'Ужасы', year: 2011, poster: false}
        ]
    }

    render() {
        return (
            <div className="wrapper">
                <div className="movie-list-app">
                    <AppHeader />
                    <SearchPanel />
                    <MovieList movies={this.state.movies} />
                    <AddMovieBtn />
                </div>
            </div>
        )
    }
}
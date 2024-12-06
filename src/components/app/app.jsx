import { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import MovieList from "../movie-list/movie-list";
import './app.css'


export default class App extends Component {

    state = {
        movies: [
            { id: 1, title: 'Kingsman: секретная служба', genre: 'Комедия', year: 2017, watched: true, poster: false}
        ]
    }

    render() {
        return (
            <div className="wrapper">
                <div className="movie-list-app">
                    <AppHeader />
                    <SearchPanel />
                    <MovieList />
                </div>
            </div>
        )
    }
}
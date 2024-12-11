import { Component } from "react";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import MovieList from "../movie-list/movie-list";
import AddMovieBtn from "../add-movie-btn";
import './app.css'


export default class App extends Component {

    id = 100

    state = {
        movies: [
            { id: 1, title: 'Kingsman: секретная служба', genre: 'Комедия', year: 2017, poster: false},
            { id: 2, title: 'Форрест Гамп', genre: 'Комедия', year: 1999, poster: false},
            { id: 3, title: 'Ходячие мертвецы', genre: 'Ужасы', year: 2011, poster: false}
        ]
    }

    onDeleted = (id) => {
        this.setState(({ movies }) => {
            const idx = movies.findIndex((el) => el.id === id)
            const newArr = [
                ...movies.slice(0, idx),
                ...movies.slice(idx + 1)
            ]

            return {
                movies:newArr
            }
        })
    }

    addItem = (text) => {
        const newItem = {
            id: this.id++,
            title: 'Агенты А.Н.К.Л',
            genre: 'Триллер',
            year: 2017
        }
        this.setState(({ movies }) => {
            const newArr = [
                ...movies, newItem
            ]

            return {
                movies: newArr
            }
        })
    }

    render() {
        return (
            <div className="wrapper">
                <div className="movie-list-app">
                    <AppHeader />
                    <SearchPanel />
                    <MovieList movies={this.state.movies} onDeleted={this.onDeleted}  />
                    <AddMovieBtn onClick ={this.addItem} />
                </div>
            </div>
        )
    }
}
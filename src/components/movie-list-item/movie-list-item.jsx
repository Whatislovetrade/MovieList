import { Component } from 'react';
import './movie-list-item.css';

export default class MovieListItem extends Component {

    state = {
        watched: false,
        important: false
    }

    onWatched = () => {
        this.setState(({ watched }) => {
            return {
                watched: !watched
            }
        })
    }

    onMarkImportant = () => {
        this.setState(({ important }) => {
            return {
                important: !important
            }
        })
    }

    render() {
        const { title, genre, year, onDeleted } = this.props
        const { watched, important } = this.state

        let className = ' movie-list-film'

        if (watched) {
            className+= ' done'
        }

        if (important) {
            className+= ' important'
        }


        return (
            <li className="item-list list-group-item d-flex justify-content-between align-items-center">
                <span className={className} onClick={this.onWatched}>
                    <strong>{title}</strong> <br />
                    <small>{genre}, {year}</small>
                </span>
                <div>
                    <button onClick={this.onMarkImportant} className="btn btn-outline-success me-2 btn-sm">
                        <i className="bi bi-star"></i> {/* Иконка "Звезда" */}
                    </button>
                    <button onClick={onDeleted} className="btn btn-outline-danger btn-sm">
                        <i className="bi bi-trash"></i> {/* Иконка "Мусорная корзина" */}
                    </button>
                </div>
            </li>
        )
    }
}